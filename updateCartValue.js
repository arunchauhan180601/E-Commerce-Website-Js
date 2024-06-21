const cartvalue = document.querySelector("#cartanchor");

export const updateCartValue = (cartProducts) => {
  return (cartvalue.innerHTML = `<i class="fa-solid fa-cart-plus"> ${cartProducts.length} </i>`);
};
