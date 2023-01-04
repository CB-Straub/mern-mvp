import { createStore, combineReducers , applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// composeWithDevTools = enhancer for the store and reducers


//reducers
import { cartReducer } from './reducers /cartReducers'
import { getProductsReducer, getProductDetailsReducer  } from './reducers /productReducers'

const reducer = combineReducers({
    cart: cartReducer,   //cartReducer is added to the value of cart and is now in the store as state
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
})
//creating array of all middleware, 
// in this app we have one (thunk) which helps maake async requests in our actions
const middleware = [thunk] 

//initial value for cart items to persist in local storage
const cartLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []

const INITIAL_STATE = {
    cart: {
        cartItems : cartLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store