import React, { useEffect, useState } from "react";
import Orderss from "../../components/Orderss";
import { useStateValue } from "../../contexts/StateProvider";
import { db } from "../../firebase/firebase";
import { StyledOnOrders } from "./styles";

const OnOrders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [onOrders, setOnOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOnOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOnOrders([]);
    }
  }, [user]);

  return (
    <StyledOnOrders>
      <h1 className="mx-auto">Your On-Orders</h1>
      <div className="orders_order">
        {onOrders?.map((order) => (
          <Orderss order={order} />
        ))}
      </div>
    </StyledOnOrders>
  );
};

export default OnOrders;
