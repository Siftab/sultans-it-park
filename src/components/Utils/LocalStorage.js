const checkCart=()=>{
    const cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(cart);
    }
    return [];
}
export {
    checkCart
}