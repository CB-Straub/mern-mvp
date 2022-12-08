import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = ({show , click }) => {

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
          Cart<span className='sidedrawer__cartbadge'>0</span>
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