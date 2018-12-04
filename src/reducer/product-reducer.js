import PRODUCT_REDUCER from '../actions/product-actions';

export function productReducer(state='Hello', {type, payload}){
    switch(type){
        case PRODUCT_REDUCER:
        return payload.products;
        default:
            return state;
    }
}