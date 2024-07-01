import products from './api/products.json';
import getCartProductFromLS from './getCartProducts';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import removeFromCart from './removeFromCart';
import cartQuantityChanges from './cartQuantityChanges';
import updateCartProductTotal from './updateCartProductTotal';

let cart=getCartProductFromLS();
console.log(cart);

let filteredProducts=products.filter((currProducts) =>{
    return cart.some((currElement) => currElement.id===currProducts.id )
})
console.log(filteredProducts);

const cartElement=document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCartTemplate");
const showCartProduct = () =>{
  

    filteredProducts.forEach((currProd)=>{
       const {category,image,name,id,stock,price} = currProd;
       let productClone= document.importNode(templateContainer.content,true);

        const lSActualData = fetchQuantityFromCartLS(id);
        
       productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);


       productClone.querySelector(".productImage").src=image;
       productClone.querySelector(".productImage").alt=name;
       productClone.querySelector(".category").textContent=category;
       productClone.querySelector(".productName").textContent=name;
       
      productClone.querySelector(".productQuantity").textContent=lSActualData.quantity;
      productClone.querySelector(".productPrice").textContent=lSActualData.price;
      productClone.querySelector(".remove-from-cart-button").addEventListener("click",() =>{
        removeFromCart(id)
        updateCartProductTotal();
      }) ;
      productClone.querySelector(".stockElement").addEventListener('click',(event) =>{
        cartQuantityChanges(event,id,stock,price)
        updateCartProductTotal();
      });
      


       cartElement.appendChild(productClone);

    })


}
showCartProduct();

updateCartProductTotal();