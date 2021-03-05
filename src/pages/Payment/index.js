import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import OrderProduct from "../../components/OrderProduct";
import { useStateValue } from "../../contexts/StateProvider";
import { StyledPayment } from "./styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../contexts/reducer";
import axios from "../../axios";
import firebase, { db } from "../../firebase/firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/on-orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <StyledPayment className="payment">
      <div className="payment__container">
        <h1>
          Checkout ( <Link to="/orders">{basket?.length} items</Link> )
        </h1>
        {/* ADRESS */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Atatürk Mahallesi</p>
            <p>Ankara, Türkiye</p>
          </div>
        </div>
        {/* REVIEW ITEMS */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map((item, index) => (
              <OrderProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                backdrop_path={item.backdrop_path}
              />
            ))}
          </div>
        </div>
        {/* PAYMENT METHOD */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Oerder Total: {value || 0} TL</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandsSeparator={true}
                  prefix={""}
                />
                <button
                  className="btn btn-warning"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </StyledPayment>
  );
};

export default Payment;
