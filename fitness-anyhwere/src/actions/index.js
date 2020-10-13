import axios from 'axios'
import axiosWithAuth from '../utilis/axiosWithAuth'
import { reducer } from '../reducer/reducer'


export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";




export const signup = (user) => {
    return dispatch => {
    console.log(user)
    dispatch({type: REGISTER_START})
    axios.post('https://fitness-anywhere-jazmine.herokuapp.com/api/auth/register',{"username" : user.username,
    "password" : user.password,
    "name" : user.name,
    "email" : user.email,
    "authCode" : user.authCode})
    .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data})
    })
    .catch( err => {
        dispatch({type: REGISTER_FAILURE, payload: err.message})
    })}
}