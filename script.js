let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle("active");

}

window.onscroll = () =>{
    navbar.classList.remove("active");
}

document.querySelector("input[type='Number']").forEach(inputNumber =>{
    inputNumbe.oniput = () =>{
        if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    };

});