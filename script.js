// validate form
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
          return
        }
        event.preventDefault()
        event.stopPropagation()
        printCustomer()
      }, false)
      form.classList.add('was-validated')
    })
    document.querySelector('#fill-button').addEventListener('click', fillForm)
    document.querySelector('#clear-button').addEventListener('click', clearForm)
  })()

function printCustomer() {
    const comments = document.querySelector('#comments').value
    const customer = {
        name: document.querySelector('#company_name').value,
        nip: document.querySelector('#company_nip').value,
        city: document.querySelector('#company_address_city').value,
        street: document.querySelector('#company_address_street').value,
        number: +document.querySelector('#company_address_number').value,
        comments: comments.trim() === "" ? undefined : comments,
        sector: document.querySelector('#sector').value,
        active: document.querySelector('#active').checked,
    }
    console.log(customer)
}
function fillForm() {
  document.querySelector('#company_name').value = 'Invest Bank'
  document.querySelector('#company_nip').value = '1234567'
  document.querySelector('#company_address_city').value = 'Kraków'
  document.querySelector('#company_address_street').value = 'Prosta'
  document.querySelector('#company_address_number').value =12
  document.querySelector('#sector').value = 'finanse'
  document.querySelector('#active').checked = true
}

function clearForm() {
  document.querySelector('#company_name').value = ''
  document.querySelector('#company_nip').value = ''
  document.querySelector('#company_address_city').value = ''
  document.querySelector('#company_address_street').value = ''
  document.querySelector('#company_address_number').value = null
  document.querySelector('#sector').value = ''
  document.querySelector('#active').checked = false
}
