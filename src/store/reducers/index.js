import { combineReducers } from "redux";
import countReducer from './countReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    countReducer,
    cartReducer
})