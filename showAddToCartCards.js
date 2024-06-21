import products from "./api/products.json";
import { fetchQuantityFromCartLs } from "./fetchQuantityFromCartLs";
import { getCardProductFromLs } from "./getCardProductFromLs";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCardProductFromLs();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    const localstorageActualData = fetchQuantityFromCartLs(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".categoryAddToCart").innerText = category;
    productClone.querySelector(".productNameAddToCart").innerText = name;
    productClone.querySelector(".productImageAddToCart").src = image;
    // productClone.querySelector(".productPrice").innerText = price;

    productClone.querySelector(".productQuantityAddToCart").innerText =
      localstorageActualData.quantity;

    productClone.querySelector(
      ".productPrice"
    ).innerText = `₹${localstorageActualData.price}`;

    productClone
      .querySelector(".stockElementAddToCart")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", function () {
        removeProductFromCart(id);
      });

    cartElement.append(productClone);
  });
};

// showing the cartProducts

showCartProduct();

updateCartProductTotal();
