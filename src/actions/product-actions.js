export const PRODUCT_REDUCER  = 'products: updateProduct';
const CHOOSE_COLOR = 'CHOOSE_COLOR';
const CHANGE_UI = 'CHANGE_UI';

const chooseColor = (color) => ({
    type: CHOOSE_COLOR,
    payload: {
      color,
    },
  });
  
  const changeUI = (color) => ({
    type: CHANGE_UI,
    payload: {
      color,
    },
  });

export function updateProduct(newStateOne){
    return {
        type: PRODUCT_REDUCER, 
        payload: {
            product: newStateOne
        }
    }
}