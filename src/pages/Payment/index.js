import React from "react";
import { Link } from "react-router-dom";
import OrderProduct from "../../components/OrderProduct";
import { useStateValue } from "../../contexts/StateProvider";
import { StyledPayment } from "./styles";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
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
          <div className="payment__details"></div>
        </div>
      </div>
    </StyledPayment>
  );
};

export default Payment;
