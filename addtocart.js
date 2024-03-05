const qty = document.querySelector(".quantity");

function showQty() {
  let carts = JSON.parse(localStorage.getItem("carts"));
  if (carts !== null) {
    qty.innerText = carts.length;
  }
}

showQty();

function goToAddToCart() {
  window.location.href = "http://127.0.0.1:5500/addtocart.html";
}
