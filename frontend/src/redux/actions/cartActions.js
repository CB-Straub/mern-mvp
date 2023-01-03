// http requests to the backend to get the product details and add them to the cart

import *  as actionTypes from '../constants/cartConstant'

import axios from 'axios'
//function takes the product id and the qty of that product id (dispatch and getState fucntion is from thunk)
export const addToCart = ( id, qty ) =>  async ( dispatch, getState ) => {
    const { data }  = await axios.get(`/api/products/${id}`)
                                                                //api/products = see productRoutes file in backend, routes folder.  
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        } // payload object {} is coming from the database 
    })

    //save cart to local storage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))  //cart value is accessed from the store and the cartReducer
}

export const removeFromCart = (id) => ( dispatch, getState ) => {
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    //update local storage to remove the item
    localStorage.setItem( 'cart' , JSON.stringify(getState().cart.cartItems))
}


