import axios from 'axios'
import axiosWithAuth from '../utilis/axiosWithAuth'
import { reducer } from '../reducer/reducer'


export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const POST_NEW_CLASS_START = 'POST_NEW_CLASS_START';
export const POST_NEW_CLASS_SUCCESS = 'POST_NEW_CLASS_SUCCESS';
export const POST_NEW_CLASS_FAILURE = 'POST_NEW_CLASS_FAILURE';
export const GET_ALL_CLASSES_START = 'GET_NEW_CLASSES_START';
export const GET_ALL_CLASSES_SUCCESS = 'GET_ALL_CLASSES_SUCCESS';
export const GET_ALL_CLASSES_FAILURE = 'GET_ALL_CLASSES_FAILURE';
export const SAVE_CLASS_TO_USER_START = 'SAVE_CLASS_TO_USER_START';
export const SAVE_CLASS_TO_USER_SUCCESS = 'SAVE_CLASS_TO_USER_SUCCESS';
export const SAVE_CLASS_TO_USER_FAILURE = 'SAVE_CLASS_TO_USER_FAILURE';





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

export const login = (user) => {
    return dispatch => {
    dispatch({type: LOGIN_START})
    axios.post('https://fitness-anywhere-jazmine.herokuapp.com/api/auth/login',{
    "username" : user.username,
    "password" : user.password,})
    .then(res => {
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
        localStorage.setItem('token', res.data.token);
    })
    .catch( err => {
        dispatch({type: LOGIN_FAILURE, payload: err.message})
    })}
  
} 


export const newClass = (classDetails, date ,time) => {
    return dispatch => {
        dispatch({type: POST_NEW_CLASS_START})
        axiosWithAuth()
        .post('https://fitness-anywhere-jazmine.herokuapp.com/api/classes',{
            "name": classDetails.name,
            "type": classDetails.type,
            "startTime": time,
            "classDate": date,
            "duration": classDetails.duration,
            "intensityLevel": classDetails.intensityLevel,
            "location": classDetails.location,
            "currentRegistered": classDetails.currentRegistered,
            "maxClassSize": classDetails.maxClassSize,
            "Instructor": classDetails.Instructor,
            "Gender": classDetails.Gender,
            "description": classDetails.Gender, 
            "cost": classDetails.cost , 
            "equipment": classDetails.equipment, 
            "arrivalTime": classDetails.arrivalTime

        })
        .then(res => {
            dispatch({type: POST_NEW_CLASS_SUCCESS, payload: res.data})
            localStorage.setItem('token', res.data.token);
        })
        .catch( err => {
            dispatch({type: POST_NEW_CLASS_FAILURE, payload: err.message})
        })}

    }

    export const getClass = (classDetails, date ,time) => {
        return dispatch => {
            dispatch({type: GET_ALL_CLASSES_START})
            axiosWithAuth()
            .get('https://fitness-anywhere-jazmine.herokuapp.com/api/classes')
            .then(res => {
                dispatch({type: GET_ALL_CLASSES_SUCCESS, payload: res.data.data})
            
            })
            .catch( err => {
                dispatch({type: GET_ALL_CLASSES_FAILURE, payload: err.message})
            })}
    
        }
    
        export const saveClass = (userId, classId) => {
            console.log(userId)
            console.log(classId)
            return dispatch => {
                dispatch({type: SAVE_CLASS_TO_USER_START})
                axiosWithAuth()
                .post(`https://fitness-anywhere-jazmine.herokuapp.com/api/classes/${userId}/save/${classId}`)
                .then(res => {
                    dispatch({type: SAVE_CLASS_TO_USER_SUCCESS, payload: res.data})
                
                })
                .catch( err => {
                    dispatch({type: SAVE_CLASS_TO_USER_FAILURE, payload: err.message})
                })}
        
            }
