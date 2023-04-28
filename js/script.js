let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");

}

window.onscroll = () =>{
    navbar.classList.remove("active");
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => { inputNumber.oniput = () =>{
        if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };

});


// Регистрация

const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registreLink = document.querySelector('.register-link');

registreLink.addEventListener('click', () => {
    logregBox.classList.add('active');
    console.log("1");
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
    console.log("2");

});