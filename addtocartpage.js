const tBody = document.getElementById("tbody");
const totalPrice = document.getElementById("total-price");

function insertDataToTable() {
  // get carts
  const carts = JSON.parse(localStorage.getItem("carts"));
  console.log(carts, "carts");
  tBody.innerHTML = null;
  if (carts) {
    carts?.forEach((cart) => {
      tBody.innerHTML += `
        <tr style="border-bottom: 1px solid black">
                <td>
                  <img src="./img/newproduct/${cart.image}" alt="" class="cart-img" />
                </td>
                <td style="width: 400px">${cart.name}</td>
                <td>
                  <div class="qty-btns" style="width: fit-content">
                    <button onclick="decreaseQty(${cart.id})">-</button>
                    <button>${cart.quantity}</button>
                    <button onclick="increaseQty(${cart.id})">+</button>
                  </div>
                </td>
                <td class="textEnd">${cart.price} MMK</td>
                <td class="textEnd" style="width: 100px">
                <p style="cursor: pointer" onclick="removeItem(${cart.id})">X</p>
                </td>
              </tr>
        `;
    });
  }
  totalPrice.innerText = carts?.reduce((pv, cv) => pv + cv.price, 0) + " MMK";
}

insertDataToTable();

function decreaseQty(id) {
  // get carts
  const carts = JSON.parse(localStorage.getItem("carts"));
  let currentItem = products.find((cart) => cart.id === id);
  let currentItemFromCart = carts.find((cart) => cart.id === id);
  if (currentItemFromCart?.quantity > 1) {
    let newCarts = carts?.map((cart) =>
      cart.id === id
        ? {
            ...cart,
            price: cart.price - currentItem.price,
            quantity: cart.quantity - 1,
          }
        : cart
    );
    localStorage.setItem("carts", JSON.stringify([...newCarts]));
  }
  insertDataToTable();
}

function increaseQty(id) {
  // get carts
  const carts = JSON.parse(localStorage.getItem("carts"));
  let currentItem = products.find((cart) => cart.id === id);
  let newCarts = carts?.map((cart) =>
    cart.id === id
      ? {
          ...cart,
          price: cart.price + currentItem.price,
          quantity: cart.quantity + 1,
        }
      : cart
  );
  localStorage.setItem("carts", JSON.stringify([...newCarts]));
  insertDataToTable();
}

function removeItem(id) {
  // get carts
  const carts = JSON.parse(localStorage.getItem("carts"));
  let currentCarts = carts?.filter((cart) => cart.id !== id);
  localStorage.setItem("carts", JSON.stringify([...currentCarts]));
  showQty();
  insertDataToTable();
}
