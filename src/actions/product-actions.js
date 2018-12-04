export const PRODUCT_REDUCER = 'product: productReducer';

export default function updateProduct (newState){
    return {
        type: PRODUCT_REDUCER,
        payload: {
            product: newState
        }
    }
}