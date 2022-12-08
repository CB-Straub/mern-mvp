import React from 'react'

import './CartScreen.css'

//components:
import CartItem from '../components/CartItem'

const CartScreen = () => {
  return (
    <div className='cartscreen'>
        
        <div className='cartscreen__left'>
          <h2>Shopping Cart</h2>

          <CartItem />
        </div>
        <div className='cartscreen__right'>
          <div className='cartscreen_info'>
            <p>Subtotal (0)  items  </p>
            <p>499.99</p>
          </div>
          <div>
            <button>Checkout</button>
            </div>
        </div>
       </div>
        
  
  )
}

export default CartScreen