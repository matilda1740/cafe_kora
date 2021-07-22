
const cart = [];

const favIcon = document.querySelector(".fa-heart");
const cartIcon = document.querySelector(".fa-cart-plus");

const addToCart = () => {

    
    console.log("Product Image: ", cartIcon.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src);

    console.log("Product Title: ", cartIcon.parentElement.parentElement.parentElement.children[0].textContent);

    console.log("Product Prcie: ", cartIcon.parentElement.parentElement.children[0].textContent);
}

cartIcon.addEventListener( 'click', addToCart );
