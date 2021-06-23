const input = document.getElementById("input");
const btn = document.getElementById("btn");
const UTC = document.getElementById("userTypeContainer");

let userType;

input.addEventListener("input", () => {
    userType = event.target.value;
    console.log(userType)
})

btn.addEventListener("click", () => {
    localStorage.setItem("test", userType)
    let result = localStorage.getItem("test")
    UTC.innerHTML = result;
})

let result = localStorage.getItem("test")
UTC.innerHTML = result;