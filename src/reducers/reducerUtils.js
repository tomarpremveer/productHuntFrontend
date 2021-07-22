export function deleteProduct (products, productID) {
    let updatedProducts = products.filter((product) => {
        return product.productID !== productID;
    });
    return updatedProducts;
}
