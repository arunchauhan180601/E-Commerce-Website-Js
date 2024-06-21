import { getCardProductFromLs } from "./getCardProductFromLs";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCardProductFromLs();

  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseInt(curElem.price) || 0;

    return accum + productPrice;
  }, 0);

  productSubTotal.innerText = `₹${totalProductPrice}`;
  productFinalTotal.innerText = `₹${totalProductPrice + 50}`;
};
