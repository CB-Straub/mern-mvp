// http requests to the backend to get the product details and add them to the cart

import *  as actionTypes from '../constants/cartConstant'

import axios from 'axios'
//function takes the product id and the qty of that id (dispatch and getState from thunk)
export const addToCart = ( id, qty ) =>  async ( dispatch, getState ) => {
    const { data }  = await axios.get(`/api/products/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data.id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    //save cart to local storage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => ( dispatch, getState ) => {
    dispatch({
        type:actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    //update local storage to remove the item
    localStorage.localStorage.setItem( 'cart' , JSON.stringify(getState().cart.cartItems))
}


