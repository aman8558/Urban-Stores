

function updateCartValue(arrLocalStorageProduct){
    let items=document.querySelector("#cartValue");
    items.innerHTML=`<i class="fa-solid fa-cart-shopping"></i> ${arrLocalStorageProduct.length}`
}

export default updateCartValue;

