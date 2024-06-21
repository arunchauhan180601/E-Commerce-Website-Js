export function homeQuantityToggle(event, id, stock) {
  const currentCardElement = document.querySelector(`#card${id}`);

  // console.log(currentCardElement);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  console.log(productQuantity);

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "cartIncrementbox") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrementbox") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  productQuantity.innerHTML = quantity;
  productQuantity.setAttribute("data-quantity", quantity);
  return quantity;
}
