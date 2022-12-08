import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = ({click}) => {
  return (
    <nav className='navbar'>
        {/* {logo} */}
        <div className='navbar__logo'>
            <h2>Gearlandia</h2>
        </div>

        {/* {Links} */}
        <ul className='navbar__links'>
            <li>
                <Link to = '/cart'  className='cart__link'>
                  <i className=" fa-solid fa-cart-shopping"></i>
                  

                  <span>
                    Cart     <span className='cartlogo__badge'>0</span>
                  </span>
                
                  
                                    
                </Link>
            </li>
            <li>
              <Link to='/shop'  className='shop__link'>
                  Shop
              </Link>
            </li>
        </ul>

        {/* {hamburger} */}
        <div className='hamburger__menu' onClick={click}>
          {/* onClick event triggers sideDrawer open and the backdrop open. */}
          <div></div>
          <div></div>
          <div></div>
        </div>

    </nav>
  )
}

export default Navbar