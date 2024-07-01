import addToCart from "./addToCart";
import homeQuantityToggle from "./homeQuantityToggle";

const productContainer=document.querySelector('#productContainer')
const productTemplate =document.querySelector('#productTemplate')



function showProductContainer(products){
   if(!products){
     return false;
   }

   products.forEach((currElement) => {
      const {id,category,name,brand,image,description,price,stock}=currElement;
      
      const productClone=document.importNode(productTemplate.content,true);

      productClone.querySelector(".productName").textContent =brand+" "+name;
      productClone.querySelector(".category").textContent=category;
      productClone.querySelector(".productDescription").textContent=description;
      productClone.querySelector(".productPrice").textContent=`₹${price}`;
      productClone.querySelector(".productActualPrice").textContent=`₹${(7/4)*price}`;
      productClone.querySelector(".productStock").textContent=stock;

      productClone.querySelector(".productImage").src = image;
      productClone.querySelector(".productImage").alt = name;

      productClone.querySelector("#cardValue").setAttribute(`id`,`card${id}`);
      productClone.querySelector(".stockElement").addEventListener("click",(event) =>{
        homeQuantityToggle(event,id,stock);
      })
      productClone.querySelector(".add-to-cart-button").addEventListener('click', (event) => {
         addToCart(event,id,stock);
      })
      
      
      productContainer.append(productClone);

   });
   
}
export default showProductContainer;
