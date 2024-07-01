

function homeQuantityToggle(event,id,stock){
  const currCard= document.querySelector(`#card${id}`);
  //console.log(currCard);
  const productQuantity= currCard.querySelector('.productQuantity');
  let quantity= parseInt(productQuantity.getAttribute("data-quantity"))|| 1;
  
  if(event.target.className==="cartDecrement"){
    if(quantity>1){
        quantity=quantity-1;
    }
  }
  if(event.target.className=="cartIncrement"){
    if(quantity<stock){
        quantity=quantity+1;

    }
    else if(quantity===stock){
           quantity=stock;
    }
  }

  productQuantity.innerText=quantity;
  productQuantity.setAttribute("data-quantity",quantity);
  
  return quantity;

}
export default homeQuantityToggle;