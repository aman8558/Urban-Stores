import updateCartValue from "./updateCartValue";

 

 function getCartProductFromLS(){
    let cartProducts=localStorage.getItem("cartProductLS");
    if(!cartProducts){
        return [];
    }
    cartProducts= JSON.parse(cartProducts);
    updateCartValue(cartProducts);
    return cartProducts;
 }
 

 export default getCartProductFromLS;