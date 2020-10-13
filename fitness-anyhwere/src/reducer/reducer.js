import {REGISTER_FAILURE,REGISTER_SUCCESS,REGISTER_START} from '../actions/index'

export const initialState = {
    isLoading: false,
    error: '',
    allUsers: [],
    allClasses: [],
    classSearch: [],
    body: [],

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
                body: action.payload
            }





        default:
            return state

    }
}