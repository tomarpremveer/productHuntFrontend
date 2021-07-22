import {INSERT_PRODUCT, DELETE_PRODUCT} from "../types";
import {deleteProduct} from "./reducerUtils";
const INITIAL_STATE = {
    products: [],
};
// eslint-disable-next-line
function ProductReducers (state = INITIAL_STATE, action) {
    switch (action.type) {
    case INSERT_PRODUCT:
        return {...state, products: [...state.products, action.payload]};
    case DELETE_PRODUCT:
        // eslint-disable-next-line
        let productID = action.payload;
        // eslint-disable-next-line
        const updatedProducts = deleteProduct(state.products, productID);
        return {...state, products: updatedProducts};
    default:
        return state;
    }
}

export default ProductReducers;
