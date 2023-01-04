import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'

//redux for cart count state updating
import { useSelector } from 'react-redux'

const SideDrawer = ({show , click }) => {
//cart count state update
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

    const sideDrawerClass = ["sidedrawer"]

    // pushes a new style of "show" onto the sideDrawer array
    if(show) {
        sideDrawerClass.push('show')
    }
  return  <div className={sideDrawerClass.join(' ')}> 
    <ul className='sidedrawer__links' onClick={ click }>
      <li >
        <Link to='/cart'>
        <i className='fa-sharp fa-solid fa-cart-shopping' ></i> 
       
      <span>
          Cart<span className='sidedrawer__cartbadge'>{getCartCount()}</span>
      </span>

        </Link>
      </li>

      <li>
        <Link to='/'>Shop</Link>
      </li>

    </ul>
  
  
  </div>
  
}

export default SideDrawer