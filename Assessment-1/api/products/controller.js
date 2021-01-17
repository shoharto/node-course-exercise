let products = [];

function getProducts() {
    return products;
}
function getProduct() {
    const found = products.filter(product => id === product.id);
    return found.length ? found[0] : {};
}
function createProduct(product) {
    products.push(product);
}
function deleteProduct(id) {
    products = products.filter(product => id !== product.id);
}

module.exports = {

    getProduct,
    getProducts,   
    createProduct,
    deleteProduct,
};
