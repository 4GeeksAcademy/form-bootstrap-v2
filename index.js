console.log("holaaaaa")
console.log(" ")

// flag cartel de tarjeta de credito
let flag = true

// vuelve los campos blancos a los input cuando click
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
  input.addEventListener('click', () => {
    input.style.backgroundColor = 'white'
  })
})

// vuelve los campos blancos a text area cuando click
const textAreas = document.querySelectorAll('textarea')
textAreas.forEach(textarea =>{
    textarea.addEventListener('click',() =>{
        textarea.style.backgroundColor = 'white'
    })
})

let selects = document.querySelectorAll("select")
selects.forEach(select =>{
    select.addEventListener('click',() =>{
        select.style.backgroundColor = 'white'
    })
})


function formValidation(event) {
    event.preventDefault() // evita que se recargue la pantalla
    // le sacamos la opcion:required a los impunt, sino salta cartel y no pinta de rojo
    let cardNumber = document.getElementById("card-number").value
    let cvcNumber = document.getElementById("cvc-number").value
    let amountNumber = document.getElementById("amount-number").value
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let cityName = document.getElementById("city-name").value
    let selectState = document.querySelector(".form-select").value
    let postalCodeNumber = document.getElementById("postal-code-number").value
    let messageText = document.getElementById("message-text").value

    let creditCardcheck1 = document.querySelectorAll(".form-check-input")[0].checked
    let creditCardcheck2 = document.querySelectorAll(".form-check-input")[1].checked
    let creditCardcheck3 = document.querySelectorAll(".form-check-input")[2].checked
    let creditCardcheck4 = document.querySelectorAll(".form-check-input")[3].checked

    let grupoRadio = document.querySelector("input[name='inlineRadioOptions']:checked")

    // console.log(creditCardcheck1)
    // console.log(creditCardcheck2)
    // console.log(creditCardcheck3)
    // console.log(creditCardcheck4)

    // alerta
    let alert = document.getElementById('alert');

    if (cardNumber === "" || cardNumber === "XXXX-XXXX-XXXX-XXXX") {
        document.getElementById("card-number").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (cvcNumber === "" || cvcNumber === "0000") {
        document.getElementById("cvc-number").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (amountNumber === "") {
        document.getElementById("amount-number").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (firstName === "") {
        document.getElementById("first-name").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (lastName === "") {
        document.getElementById("last-name").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (cityName === "") {
        document.getElementById("city-name").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (selectState === "Pick a state") {
        document.getElementById("select-one-state").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (postalCodeNumber === "") {
        document.getElementById("postal-code-number").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    if (messageText === "") {
        document.getElementById("message-text").style.backgroundColor = "red"
        alert.style.visibility = 'visible'
    }

    // if (creditCardcheck1 == false) {
    //     alert("Seleccione una tarjeta de credito.")
    //     console.log("no ando")
    // }

    //name="inlineRadioOptions"
    

    if (!grupoRadio && flag) {
        console.log("hola bebe")
        document.getElementById("check-list").innerHTML+= "<p m-0 p-0 >Selecciona una tarjeta de Crédito.</p>";
        flag = false
    }


    if (cardNumber !== '' && cvcNumber !== '' && amountNumber !== '' && firstName !== '' && lastName !== '' &&  cityName !== 'Pick a state' && postalCodeNumber !== '' && messageText !== '') 
    {
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');
        alert.innerText = 'Form submitted successfully!'; 
        alert.style.visibility = 'visible';
    }


    // console.log(cardNumber)
    // console.log(cvcNumber)
    // console.log(amountNumber)
    // console.log(firstName)
    // console.log(lastName)
    // console.log(cityName)
    // console.log(selectState)
    // console.log(postalCodeNumber)
    // console.log(creditCardcheck1)
    // console.log(creditCardcheck2)
    // console.log(creditCardcheck3)
    // console.log(creditCardcheck4)
    // console.log(messageText)

}

/*
let cardNumber = document.getElementById("card-number")
let cvcNumber = document.getElementById("cvc-number")
let amountNumber = document.getElementById("amount-number")

console.log(cardNumber.value)
console.log(cvcNumber.value)
console.log(amountNumber.value)
*/

//let check = document.querySelectorAll(".form-check-input")[0].checked
//console.log(check)

//const select = document.querySelector('.form-select');
//const value = select.value;
//console.log(value)

