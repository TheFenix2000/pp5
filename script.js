"use strict";
let customers = [];

const listView = document.querySelector("#list-view");
const forms = document.querySelectorAll(".needs-validation");
const comments = document.querySelector("#comments").value;
const customerList = document.querySelector("#customer-list");
const form = document.querySelector("#main-form");

(
  // validate form
  () => {
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          setCustomer();
        },
        false
      );
      form.classList.add("was-validated");
    });

    // button listeners
    document.querySelector("#fill-button").addEventListener("click", fillForm);
    document
      .querySelector("#clear-button")
      .addEventListener("click", clearForm);
    document
      .querySelector("#add-customer-btn")
      .addEventListener("click", function(){toggleView('form')});
  }
)();

function setCustomer() {
  const customer = {
    id: customers.length++,
    name: document.querySelector("#company_name").value,
    nip: document.querySelector("#company_nip").value,
    city: document.querySelector("#company_address_city").value,
    street: document.querySelector("#company_address_street").value,
    number: +document.querySelector("#company_address_number").value,
    comments: comments.trim() === "" ? undefined : comments,
    sector: document.querySelector("#sector").value,
    active: document.querySelector("#active").checked,
  };
  customers = [...customers, customer].filter(Boolean);
  renderCustomers();
  toggleView('list');
}

function fillForm() {
  document.querySelector("#company_name").value = "Invest Bank";
  document.querySelector("#company_nip").value = "1234567";
  document.querySelector("#company_address_city").value = "Kraków";
  document.querySelector("#company_address_street").value = "Prosta";
  document.querySelector("#company_address_number").value = 12;
  document.querySelector("#sector").value = "finanse";
  document.querySelector("#active").checked = true;
}

function clearForm() {
  document.querySelector("#company_name").value = "";
  document.querySelector("#company_nip").value = "";
  document.querySelector("#company_address_city").value = "";
  document.querySelector("#company_address_street").value = "";
  document.querySelector("#company_address_number").value = null;
  document.querySelector("#sector").value = "";
  document.querySelector("#active").checked = false;
}

function customElement(customer) {
  return `
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${customer.name}</h5>
      <small>${customer.nip}</small>
    </div>
    <p class="mb-1">${customer.comments}</small>
  `
}

function renderCustomers() {
  customerList.innerHTML = '';
  for (const customer of customers) {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    listItem.innerHTML = customElement(customer);
    customerList.appendChild(listItem)
  }
}

function toggleView(view) {
  if (view === 'list') {
    listView.style.display = 'block';
    form.style.display = 'none';
  } else {
    listView.style.display = 'none';
    form.style.display = 'block';
  }
}
