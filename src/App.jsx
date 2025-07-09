import React, { useEffect, useState } from "react";
import { getData } from "./constants/db";
import Card from "./components/card/card";
import "./App.css";
import Cart from "./components/cart/Cart";
const courses = getData();
const telegram= window.Telegram.WebApp

export default function App() {



  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    telegram.ready();
  })

  const onAddItems = (item) => {
    const existItem = cartItems.find((c) => c.id === item.id);
  
    if (existItem) {
      const updatedItems = cartItems.map((c) =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      setCartItems(updatedItems);
    } else {
      const updatedItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedItems);
    }
  };
  

  const onRemoveItems = (item) => {
    const existItem = cartItems.find((c) => c.id === item.id);
    if (!existItem) return; 
  
    if (existItem.quantity === 1) {
      const newData = cartItems.filter((c) => c.id !== item.id);
      setCartItems(newData);
    } else {
      const newData = cartItems.map((c) =>
        c.id === item.id ? { ...c, quantity: c.quantity - 1 } : c
      );
      setCartItems(newData);
    }
  };
  

  const onCheckout = () => {
    telegram.MainButton.text = "Sotib Olish :)"
    telegram.MainButton.show();
  }

  return (
    <div>
      <h1 className="heading">Software Courses</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards_container">
        {courses.map((item) => (
          <Card
            key={item.id}
            course={item}
            onAddItems={onAddItems}
            onRemoveItems={onRemoveItems}
          />
        ))}
      </div>
    </div>
  );
}
