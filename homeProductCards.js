import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((curProd) => {
    const {
      id,
      name,
      category,
      brand,
      price,
      stock,
      decription,
      image,
      actualPrice,
    } = curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").innerText = name;
    productClone.querySelector(".productDescription").innerText = decription;
    productClone.querySelector(".category").innerText = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").innerText = stock;
    productClone.querySelector(".productPrice").innerText = `₹${price}`;
    productClone.querySelector(
      ".productActualPrice"
    ).innerText = `₹${actualPrice}`;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", function (event) {
        homeQuantityToggle(event, id, stock);
      });

    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    productContainer.append(productClone);
  });
};
