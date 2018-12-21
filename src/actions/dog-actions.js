
import { ReduxThunk }  from 'redux-thunk'
export const REQUESTED_DOG = 'REQUESTED_DOG';
export const REQUESTED_DOG_SUCCEEDED = 'REQUESTED_DOG_SUCCEEDED';
export const REQUESTED_DOG_FAILED = 'REQUESTED_DOG_FAILED';

export const requestDog = () => {
    return { type: 'REQUESTED_DOG' }
  };
  
const requestDogSuccess = (data) => {
    return { type: 'REQUESTED_DOG_SUCCEEDED', data }
  };
  
const requestDogError = () => {
    return { type: 'REQUESTED_DOG_FAILED' }
  };

  export const fetchProducts = (dispatch) => {
    dispatch(requestDog());
    return fetch('https://api.myjson.com/bins/uyl3y')
      .then(res => res.json())
      .then(
        data => dispatch(requestDogSuccess(data)),
        err => dispatch(requestDogError())
      );
  };