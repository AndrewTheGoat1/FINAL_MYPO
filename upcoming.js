let upcomingBox = document.getElementById("upcoming-box");
let detailBox = document.getElementById("upcoming-detail-box");
let detail = document.getElementById("upcoming-detail");

function initApp(categoryId = "") {
  let upcomingProducts = products.filter(
    (product) => product?.type == "upcoming"
  );

  upcomingProducts.forEach((value, key) => {
    console.log(value);
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="img/newproduct/${value.image}"/>
        <div class="title">${cutString(value.name, 15)}</div>
        <div class="price">${value.price.toLocaleString()} MMK</div>
        <button style="margin-bottom: 4px;"  onClick="showModal(${
          value.id
        })" > View </button> 
        <button onclick="addToCard(${value.id})">Add To Cart</button>`;
    upcomingBox.appendChild(newDiv);
  });
}
initApp();
// function addToCard(key) {
//   if (addProductLists[key] == null) {
//     addProductLists[key] = products[key];
//     addProductLists[key].quantity = 1;
//   }
//   reloadCard();
// }

function addToCard(productId) {
  let carts = JSON.parse(localStorage.getItem("carts"));
  let alreadyExist = carts?.find((cart) => cart?.id === productId);
  let product = products.find((product) => product.id === productId);
  if (alreadyExist == undefined) {
    let currentProduct = { ...product, quantity: 1 };
    if (carts !== null) {
      localStorage.setItem("carts", JSON.stringify([...carts, currentProduct]));
    } else {
      localStorage.setItem("carts", JSON.stringify([currentProduct]));
    }
    showQty();
  }
}

function cutString(text, total) {
  const textString = String(text);
  return textString.length > total
    ? textString.slice(0, total) + " ..."
    : textString;
}

function showModal(itemId) {
  let currentItem = products.find((product) => product.id === itemId);
  detailBox.innerHTML = `
  <button id="close-modal" class="close-modal" onclick="closeModal()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <img src="./img/newproduct/${currentItem.image}" alt="" />
        <div class="">
          <h3>${currentItem.name}</h3>
          <br>
          <select>
                    <option>Select Size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                <br>
                <br>
                <p>Please choose the color of item:</p>
                <input type="radio" id="html" name="fav_language" value="HTML">
                <label for="html">White</label>
                <input type="radio" id="css" name="fav_language" value="CSS">
                <label for="css">Black</label>
                <input type="radio" id="javascript" name="fav_language" value="JavaScript">
                <label for="javascript">Red</label>
                <input type="radio" id="html" name="fav_language" value="HTML">
                <label for="html">Blue</label>
                <input type="radio" id="css" name="fav_language" value="CSS">
                <label for="css">Green</label>
                <p><b><u>Detail of item</u></b></p>
          <p>
            ${currentItem.detail}
          </p>
          <h5>${currentItem.price} MMK</h5>
          <button class="modal-addbtn" onclick="addToCard(${itemId})">Add to cart</button>
        </div>
  `;
  detail.style.display = "grid";
  document.body.style.overflowY = "hidden";
}

function closeModal() {
  document.body.style.overflowY = "auto";
  detail.style.display = "none";
}
