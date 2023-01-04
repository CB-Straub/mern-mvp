import React from 'react'
import { Link } from 'react-router-dom'

//actions
import {addToCart, removeFromCart } from '../redux/actions/cartActions' 

//redux
import { useSelector, useDispatch } from 'react-redux'
 //css styles
import './CartScreen.css'

//components:
import CartItem from '../components/CartItem'

const CartScreen = () => {
  const dispatch = useDispatch()
  const cart = useSelector( (state) => state.cart )

  const { cartItems } = cart

  const qtyChangeHandler = ( id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = ( id ) => {
    dispatch(removeFromCart(id))
  }
// cart count will update if number of items is changed by user
  const getCartCount = () => {
    return cartItems.reduce(( qty, item ) => Number(item.qty) + qty, 0)
  }

  //calculate subtotal price
  const cartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
  }
 
  return (
    <>
    <div className='cartscreen'>
        
        <div className='cartscreen__left'>
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div>
              Your cart is currently empty 
              <Link className='return_to_shop' to='/'> Return to Shop </Link>
            </div>
          ) : (
            cartItems.map((item) => (
            <CartItem
            key={item.product}  
            item={item}
            qtyChangeHandler={ qtyChangeHandler }
            removeHandler={ removeHandler }/>
            ))
          )}
        
        </div>
        <div className='cartscreen__right'>
          <div className='cartscreen_info'>
            <p>Subtotal ({getCartCount()})  items  </p>
            
            <p>${cartSubtotal().toFixed(2)}</p>
          </div>
          <div>
            <button className='checkoutBtn'>Pay/Checkout</button>
            </div>
        </div>
       </div>
     </>   
  
  )
}

export default CartScreen