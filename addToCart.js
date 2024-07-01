import getCartProductFromLS from "./getCartProducts";
import updateCartValue from "./updateCartValue";
import showToast from "./showToast";


getCartProductFromLS()

function addToCart(event,id,stock){

  let arrLocalStorageProduct = getCartProductFromLS();

   const currCard=document.querySelector(`#card${id}`);
  // console.log(currCard);
  let quantity=currCard.querySelector(".productQuantity").innerText;
  let price=currCard.querySelector(".productPrice").innerText;
  // console.log(quantity,price);


  price=Number(price.replace("₹",""));
  quantity=Number(quantity);
  price=price*quantity;
  let existingProd=arrLocalStorageProduct.find(
   (currProd)=> currProd.id===id
  );
  console.log(existingProd);
  if(existingProd && quantity>1){
     quantity=existingProd.quantity+quantity;
     price=existingProd.price+price;


     let updatedCart={id,quantity,price};
     console.log("earlier cart :"+updatedCart)

      updatedCart=arrLocalStorageProduct.map((currProd) =>{
      return currProd.id===id?updatedCart: currProd;
     })
     console.log(updatedCart);
     localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
    
     showToast("add", id);
  }
  if(existingProd){
    return false;
  }
  arrLocalStorageProduct.push({id,quantity,price});
  localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);

  showToast("add", id);

 
 
}

export default addToCart;


