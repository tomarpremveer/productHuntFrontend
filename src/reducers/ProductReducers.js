import { INSERT_PRODUCT, DELETE_PRODUCT } from "../types";
const INITIAL_STATE = {
  products: [],
};
function ProductReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INSERT_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case DELETE_PRODUCT:
      let updatedProducts = state.products.filter((product) => {
        return product.productID !== action.payload;
      });
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
}

export default ProductReducers;
