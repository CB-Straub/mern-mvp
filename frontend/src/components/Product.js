import React from 'react'
import { Link } from 'react-router-dom'

import './Product.css'

const Product = () => {
  return (
      /* hard coded values for styling/testing */
    <div className='product '>
         <img src="https://images.unsplash.com/photo-1588605800921-78dc67c62685?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VyZmJvYXJkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='productNAme'/>

         <div className='product__info'>
             <p className='info__name'>Product 1</p>
             <p className='info__description'>
                 lorem ipsum dolor akjdfbjvb saijvb skjv ksfj ksFJBVFJSbvksJWBVFJKWV SKJ ;KWJBV;KWJBV.KWj v.k
             </p>

             <p className='info__price'>$499.99</p>
             <Link to={`/product/${1111}`} className='info__button'>View Product</Link>
         </div>
    </div> 
  )
}

export default Product