let invoiceDate = document.getElementById("invoice-date");
let invoiceBody = document.getElementById("invoice-body");
let subTotal = document.getElementById("subTotal");
let total = document.getElementById("total");
let tax = document.getElementById("tax");

function insertDataToInvoiceBody() {
  let items = JSON.parse(localStorage.getItem("carts"));
  invoiceBody.innerHTML = null;
  if (items) {
    items.forEach((item) => {
      invoiceBody.innerHTML += `
            <tr>
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td style="text-align: end">${item.price} MMK</td>
            </tr>
        `;
    });
    let taxNum = items.reduce((pv, cv) => pv + cv.price, 0) * 0.02;
    let totalNum = items.reduce((pv, cv) => pv + cv.price, 0);
    subTotal.innerText = totalNum + " MMK";
    tax.innerText = taxNum + " MMK";
    total.innerText = totalNum + taxNum + " MMK";

    let date = new Date();
    invoiceDate.innerText = `${date.getDate()} / ${
      date.getMonth() + 1
    } / ${date.getFullYear()}`;
  } else {
    window.location.href = "/";
  }
}

insertDataToInvoiceBody();
