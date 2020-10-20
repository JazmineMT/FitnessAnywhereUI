import {REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_START,LOGIN_START,LOGIN_FAILURE,LOGIN_SUCCESS,POST_NEW_CLASS_FAILURE,POST_NEW_CLASS_SUCCESS,POST_NEW_CLASS_START,GET_ALL_CLASSES_START,GET_ALL_CLASSES_SUCCESS,GET_ALL_CLASSES_FAILURE, SAVE_CLASS_TO_USER_SUCCESS,SAVE_CLASS_TO_USER_START,SAVE_CLASS_TO_USER_FAILURE} from '../actions/index'

export const initialState = {
    isLoading: false,
    error: '',
    allUsers: [],
    allClasses: [],
    classSearch: [],
    body: [],
    user: []

}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case REGISTER_START:
            return{
                ...state,
                isLoading: true
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                user: action.payload
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_START:
            return{
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.payload
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                error: action.payload
            }
            case POST_NEW_CLASS_START:
                return{
                    ...state,
                    isLoading: true,
                   
                }
            case POST_NEW_CLASS_SUCCESS:
                return{
                    ...state,
                    body: action.payload
                }
            case POST_NEW_CLASS_FAILURE:
                return{
                    ...state,
                    error: action.payload
                }
           case GET_ALL_CLASSES_START:
                return{
                    ...state,
                    isLoading: true,
                
                }
            case GET_ALL_CLASSES_SUCCESS:
                return{
                    ...state,
                    allClasses: action.payload
                }
            case GET_ALL_CLASSES_FAILURE:
                return{
                    ...state,
                    error: action.payload
                }
            case SAVE_CLASS_TO_USER_START:
                return{
                    ...state,
                    isLoading: true,
                
                }
            case SAVE_CLASS_TO_USER_SUCCESS:
                return{
                    ...state,
                    body: action.payload
                }
            case SAVE_CLASS_TO_USER_FAILURE:
                return{
                    ...state,
                    error: action.payload
                }
        

        default:
            return state

    }
}