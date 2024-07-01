import getCartProductFromLS from "./getCartProducts";
import updateCartValue from "./updateCartValue";
import showToast from "./showToast";

function removeFromCart(id){
   let cartProducts = getCartProductFromLS();
   console.log("i m still running master");
   cartProducts = cartProducts.filter((curr) => curr.id !==id);

   localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));
    let removeDiv= document.getElementById(`card${id}`);
   if(removeDiv){
    removeDiv.remove();
    }
   showToast("delete",id);
   updateCartValue(cartProducts);  

}

export default removeFromCart;