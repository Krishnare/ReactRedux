import { UPDATE_USER } from '../actions/user-actions';

let intialState ={
    product: []
}
export function userReducer(state={}, {type, payload}){
    switch(type){
        case UPDATE_USER:
            return payload.user;
        default:
            return state;
        
        case 'FETCH_USERS':
            return {
                ...state
            }
    }
}

export default userReducer;