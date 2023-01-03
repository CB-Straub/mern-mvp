import * as actionTypes from '../constants/productConstants'

import axios from 'axios'
//for the home screen to display all products
export const getProducts = () => async ( dispatch ) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST})

        const { data } = await axios.get('/api/products')

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
        })
        
    }
}
//making a request to the productRoutes in the backend to get a specific product by its id 
export const getProductDetails = ( id ) => async ( dispatch ) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message
        })
        
    }
}

//removes state if we switch screens
export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET,
    })
}