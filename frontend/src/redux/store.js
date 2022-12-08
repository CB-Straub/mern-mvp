import { createStore, combineReducers , applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// composeWithDevTools = enhancer for the store and reducers


//reduceers
import { cartReducer } from './reducers /cartReducers'
import { getProductsReducer, getProductDetailsReducer  } from './reducers /productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
})
//creating array of all middleware, 
// in this app we have one (thunk) which helps maake async requests in our actions
const middleware = [thunk] 

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store