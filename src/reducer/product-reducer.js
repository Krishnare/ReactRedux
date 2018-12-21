import { PRODUCT_REDUCER } from '../actions/product-actions';

export function productReducer (state=[], {type, payload}){
    switch(type){
        case PRODUCT_REDUCER:
        return payload.product;
        default:
            return state;
    }
};