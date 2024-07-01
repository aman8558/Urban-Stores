import getCartProductFromLS from "./getCartProducts";


function updateCartProductTotal(){
  let cart=getCartProductFromLS();
  let initialValue=0;
  let subTotal=cart.reduce((accum,currElement) =>{
    let productPrice=currElement.price || 0;
    return accum+productPrice
  }, initialValue);
  
  //let gst=(subTotal*9)/100
 // gst=gst.toFixed(1);
  let gst = 100;
  document.querySelector(".productSubTotal").innerText=subTotal;
  document.querySelector(".productTax").innerText= gst;
  document.querySelector(".productFinalTotal").innerText=`₹${subTotal+gst}`;

}

export default updateCartProductTotal;