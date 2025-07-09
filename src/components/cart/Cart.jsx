import React from 'react'
import "./cart.css"
import { totalPrice } from "../../units/totalPrice"
import Button from '../button/Button'
const Cart = props => {

  const {cartItems,onCheckout } = props;

  return (
      <div className='cart__container'>
          <p>
        Umumiy narx: {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency:"USD"
        })}
          </p>

          <Button onClick={onCheckout} title={`${cartItems.length===0 ? "Buyurtma berish":"To'lov"}`} disable={cartItems.length===0 ? true :false} type={"checkout"} />
    </div>
  )
}

export default Cart
