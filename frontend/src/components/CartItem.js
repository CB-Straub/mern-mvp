import React from 'react'
import { Link } from 'react-router-dom'

//styles
import './CartItem.css'



const CartItem = () => {
  return (
    <div className='cartitem'>
        <div className='cartitem__image'>
            <img src="https://images.unsplash.com/photo-1629481657693-90665fc83bad?ixlib=rb-4.0.3&
            ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cmZib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            alt='productNAme'/>
        </div>

        <Link to={`/product/${1111}`} className='cartitem__name'>
            <p>Product 1111</p>
        </Link>
            <p className='cartitem__price'>$499.99</p>
            <select className='cartitem__select'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>

            </select>

            <button className='cartitem__deleteBtn' title='Delete from Cart'>
                <i className='fas fa-trash'></i>
            </button>
     </div>

  )
}

export default CartItem