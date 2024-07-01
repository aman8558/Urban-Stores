import getCartProductFromLS from "./getCartProducts";

export const fetchQuantityFromCartLS= (id) => {

    console.log("i m working brother just for you");

    let cartProducts =getCartProductFromLS();
    let existingProd=cartProducts.find((curr) => curr.id===id);

    let quantity=0;
    let price=0;

    if(existingProd){
        quantity = existingProd.quantity;
        price = existingProd.price;
    }
    return { quantity , price };
}

