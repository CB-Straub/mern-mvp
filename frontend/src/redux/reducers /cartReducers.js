
//get access to the action types created in the cart constants
import * as actionTypes from '../constants/cartConstant'

const CART_INITIAL_STATE = {
    cartItems: []
}

// set default state and check action types
export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload

        //check if product id is found in our items in our cart
        const existItem = state.cartItems.find((x) => x.product === item.product)

        //x = current item being mapped through

        // if we find the new existing item in the product array (from the action.payload item above) we add the new array (.map array method creates a new array) it to the old array = the cart
        if(existItem) {
            return {
                ...state,
                cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x)
            }
        } else {
            return {
                ...state,
                cartItems: [...state.cartItems, item ]
            }

        } 
        
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }
        
        
        default:
            return state
    } 

}