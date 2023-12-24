let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let date = document.querySelector(".date");
let url = document.querySelector(".url");
let card = document.querySelector(".card");
let hex = document.querySelector(".hex");
let form = document.querySelectorAll("form");


form.forEach(item => {
    item.addEventListener("submit",(e) => {
        e.preventDefault();
    })
})

let inputList = [email, phone, date, url, card, hex, form]
document.querySelector("body")?.addEventListener("click", ()=> {
    inputList.forEach(item => {
        if (item.value == "") {
            item.parentElement.nextElementSibling.innerHTML = ".";
        }
    })
})

const validate = (exp, field) => {
    let valid = exp.test(field.value);
    let messageElement = field?.parentElement?.nextElementSibling;
    messageElement.innerHTML = "."
    if (field.value == ""){
        messageElement.innerHTML = "."
    }else{
        let expression;
        if (field === email) expression = "Email"
        if (field === phone) expression = "Phone Number"
        if (field === date) expression = "Date"
        if (field === url) expression = "URL"
        if (field === card) expression = "Credit Card Number"
        if (field === hex) expression = "Colour Code"
        if (valid) {
            setTimeout(() => {
                messageElement.innerHTML = "Valid "+expression
                messageElement.style.color = "rgb(0, 100, 0)"
            }, 30);
        }else{
            setTimeout(() => {
                messageElement.innerHTML = expression+ " Is Invalid!"
                messageElement.style.color = "red"
            }, 30);
        }
    }
}

email?.nextElementSibling.addEventListener("click", () => {
    validate(/^([a-zA-z0-9]\.?)+[^\.]@([a-zA-z0-9]\.?)+[^\.]/, email)
})


phone?.nextElementSibling.addEventListener("click", () => {
    validate(/^\+?8?8?01\d{9}$/, phone)
})


date?.nextElementSibling.addEventListener("click", () => {
    validate(/^(?:19|20)\d\d-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-9]|3[01])|(?:0[13-9]|1[0-2])-(?:0[1-9]|1\d|2[0-9]|30)|(?:0[13578]|1[02])-31)$/, date)
})


url?.nextElementSibling.addEventListener("click", () => {
    validate(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, url)
})


card?.nextElementSibling.addEventListener("click", () => {
    validate(/^\d{4}-\d{4}-\d{4}-\d{4}$/, card)
})


hex?.nextElementSibling.addEventListener("click", () => {
    validate(/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/, hex)
})


