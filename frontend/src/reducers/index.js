import { combineReducers } from 'redux'
import authReducers from './auth.reducers'
import productReducer from './product.reducer'

const rootReducer= combineReducers({
    auth:authReducers,
    product:productReducer

})
export default rootReducer