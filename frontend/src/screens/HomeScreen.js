import React from 'react'
import Product from '../components/Product'
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
        <h2 className='homescreen__title'> New Gear/Kit</h2>
        {/* div below is where a products will show */}
        <div className='homescreen__products'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          

        </div>
    </div>

  )
}

export default HomeScreen