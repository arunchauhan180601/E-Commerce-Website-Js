import { getCardProductFromLs } from "./getCardProductFromLs";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
  let localStoragedata = getCardProductFromLs();

  localStoragedata = localStoragedata.filter((curProd) => curProd.id !== id);

  localStorage.setItem("cartProductLs", JSON.stringify(localStoragedata));

  // to remove the div onClick
  let removeDiv = document.getElementById(`card${id}`);

  if (removeDiv) {
    removeDiv.remove();
    showToast("delete", id);
  }

  updateCartValue(localStoragedata);
};
