import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

//actions
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
//css styles
import './ProductScreen.css'


const ProductScreen = ( {match, history} ) => {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.getProductDetails)

  const { product ,loading, error } = productDetails

  useEffect(() => {
    if(product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id))
    }
  }, [dispatch, match, product])

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty ))
    history.push(`/cart`)
  }

  return (

    // hardcoded values need to be rendered dynamically - redux...completed on 01.02.23 by straub
    <div className='productscreen'>
      {loading ? (
          <h2>Loading...</h2>
      ): error ? (
        <h2> { error }</h2>
      ): (
        <>
         <div className='productscreen__left'>
          <div className='image__left'>
          <img src={product.imageUrl} alt={ product.name }/>
          </div>
          
        <div className='info__left'>
          <p className='name__left'> {product.name} </p>
          <p className='price__left'> ${product.price} </p>
          <p className='description__left'> {product.description} </p>

        </div>

    </div>

    <div className='productscreen__right'>
      <div className='info__right'>
        <p>
          Price: <span>${product.price}</span>
        </p>
        <p>
          Status: <span>{product.countInStock > 0 ? "In Stock": "Out of Stock"} </span>
        </p>
        <p>
          QTY
          <select value={qty} onChange={(e) => setQty(e.target.value)}>
           {[...Array(product.countInStock).keys()].map((x) => (
             <option key={x+1} value={x+1}>{x+1}</option>
           ))}
          </select>
        </p>
        <p>
          <button onClick={addToCartHandler} type='button' className='button__right'>Add to Cart</button>
        </p>

       </div>






      </div>
    </>
    )}
    </div>
  )
}   
   
 
        
       
  

       
  


export default ProductScreen