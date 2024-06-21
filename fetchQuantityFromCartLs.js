import { getCardProductFromLs } from "./getCardProductFromLs";

export const fetchQuantityFromCartLs = (id, price) => {
  let localStoragedata = getCardProductFromLs();

  let existingProduct = localStoragedata.find((curProd) => curProd.id === id);

  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price };
};
