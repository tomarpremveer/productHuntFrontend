import { INSERT_PRODUCT, DELETE_PRODUCT } from "../types";

export const insertProduct = function (product) {
  return {
    type: INSERT_PRODUCT,
    payload: product,
  };
};
export const deleteProduct = function (productID) {
  return {
    type: DELETE_PRODUCT,
    payload: productID,
  };
};
