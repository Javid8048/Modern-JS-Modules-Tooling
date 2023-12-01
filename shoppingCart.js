console.log("Exporting file");

export const value = 10;
const cartList = [];
export const addToCart = function(item, quantity) {
    cartList.push([item, quantity]);
    console.log(`${quantity} ${item} had added to list`);
}