import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import ChangePasswordReducer from './ChangePasswordReducer'

const reducer = combineReducers ({
    login:  LoginReducer,
    ChngPaswrd : ChangePasswordReducer,
})

export default reducer