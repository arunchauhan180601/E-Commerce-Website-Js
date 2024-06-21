export function showToast(operation, id) {
  const toast = document.createElement("div");

  toast.setAttribute("class", "toast");

  // set the text content of the toast based on the operation

  if (operation === "add") {
    toast.textContent = `product with Id ${id} has been added.`;
  } else {
    toast.textContent = `product with Id ${id} has been deleted.`;
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
