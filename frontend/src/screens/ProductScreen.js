import React from 'react'
import './ProductScreen.css'


const ProductScreen = () => {
  return (

    // hardcoded values need to be rendered dynamically - redux
    <div className='productscreen'>

        <div className='productscreen__left'>
          <div className='image__left'>
          <img src="https://images.unsplash.com/photo-1629481657693-90665fc83bad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cmZib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='productNAme'/>
          </div>
          
        <div className='info__left'>
          <p className='name__left'>Product 1</p>
          <p className='price__left'>$499.99</p>
          <p className='description__left'>Pass the scription on the left hand side</p>

        </div>

    </div>

    <div className='productscreen__right'>
      <div className='info__right'>
        <p>
          Price: <span>$499.99</span>
        </p>
        <p>
          Status: <span>In Stock</span>
        </p>
        <p>
          QTY
          <select>
            <option value='1'>uno</option>
            <option value='2'>dos</option>
            <option value='3'>tres</option>
            <option value='4'>4</option>
          </select>
        </p>
        <p>
          <button type='button' className='button__right'>Add to Cart</button>
        </p>

      </div>






    </div>
    </div>
  )
}

export default ProductScreen