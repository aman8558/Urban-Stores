import getCartProductFromLS from "./getCartProducts";


function cartQuantityChanges(event,id,stock,price){

    const currCard= document.querySelector(`#card${id}`);
    const productQuantity= currCard.querySelector(".productQuantity");
    const productPrice=currCard.querySelector(".productPrice");
    
    let quantity=1;
    let lSProdPrice=0;

    let localCartProduct= getCartProductFromLS();

    let existingProduct=localCartProduct.find((curr) => curr.id===id);
    
    if(existingProduct){
       quantity=existingProduct.quantity;
       lSProdPrice= existingProduct.price;
    }else{
        lSProdPrice=price;
        price=price;
    }

    if(event.target.className==="cartIncrement"){
        console.log("+ pressed by master");
      if(quantity<stock){
        quantity++;
      }else if(quantity===stock){
        quantity=stock;
        lSProdPrice=stock*price;
      } 
    }
    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity--;
        }
    }
    lSProdPrice=Number(price*quantity);
    
    productQuantity.innerText=quantity;
    productPrice.innerText=price;

    let updatedCart={id,quantity,price: lSProdPrice};

    updatedCart= localCartProduct.map((curr) => curr.id===id?updatedCart : curr )
    localStorage.setItem("cartProductLS",JSON.stringify(updatedCart));

    
}

export default cartQuantityChanges;