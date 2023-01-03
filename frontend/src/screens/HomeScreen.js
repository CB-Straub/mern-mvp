import React, { useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'


//actions 
import { getProducts as listProducts } from '../redux/actions/productActions'
//components
import Product from '../components/Product'

//css styles
import './HomeScreen.css'

const HomeScreen = () => {

    const  dispatch = useDispatch()

    //get the prducts data from the state in the store
    const getProducts = useSelector( state => state.getProducts)
    const { products , loading, error } = getProducts

    useEffect (() => {
      dispatch(listProducts())
    },[dispatch])


  return (
    <div className='homescreen'>
        <h2 className='homescreen__title'> New Gear/Kit</h2>
        {/* div below is where a products will show */}
        <div className='homescreen__products'>
          {loading ? (
            <h2>Loading...</h2>
          ): error ? (
            <h2>{ error }</h2>
          ): products.map((product) => <Product  
                  productId={product._id} 
                  key={product._id}
                  name={product.name}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  price={product.price}    />)}

        </div>
    </div>

  )
}

export default HomeScreen