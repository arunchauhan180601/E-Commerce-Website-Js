import { getCardProductFromLs } from "./getCardProductFromLs";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity = currentCardElement.querySelector(
    ".productQuantityAddToCart"
  );

  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;

  let localStoragePrice = 0;

  //  Get the data from LocalStorage
  let localCartProducts = getCardProductFromLs();

  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrementbox") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrementbox") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  // finally we will update the price in localstorage

  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, quantity, price: localStoragePrice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });

  localStorage.setItem("cartProductLs", JSON.stringify(updatedCart));

  // on screen change
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

  updateCartProductTotal();
};
