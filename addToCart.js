import { getCardProductFromLs } from "./getCardProductFromLs";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCardProductFromLs();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCardProductFromLs();

  const currentProdElem = document.querySelector(`#card${id}`);

  // console.log(currentProdElem);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;

  let price = currentProdElem.querySelector(".productPrice").innerText;

  // console.log(quantity, price);

  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (cutProd) => cutProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductLs", JSON.stringify(updatedCart));
  }

  if (existingProd) {
    alert("already existing hey");
    showToast("add", id);
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  let updateCart = { id, quantity, price };
  arrLocalStorageProduct.push(updateCart);

  localStorage.setItem("cartProductLs", JSON.stringify(arrLocalStorageProduct));

  updateCartValue(arrLocalStorageProduct);
};
