const btn = document.getElementById("btn");
const container = document.getElementById("container");

function setLoader() {
    container.innerHTML = `Loading...`;
}

function hideLoader() {
    container.innerHTML = ``;
}

async function getResponse() {
    let start = await fetch("https://jsonplaceholder.typicode.com/users");
    let content = await start.json();

    for (key in content) {
        container.innerHTML += `Name: ${content[key].name}, Email: ${content[key].email}, Website: ${content[key].website}<br>`
    }
}

btn.addEventListener("click", () => {
    setLoader()
    if(start => start.json()) {
        hideLoader()
    }
    getResponse()
})

