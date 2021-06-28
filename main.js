const btn = document.getElementById("btn");
const container = document.getElementById("container");

function setLoader() {
    container.innerHTML = `Loading...`;
}

function hideLoader() {
    container.innerHTML = ``;
}

async function getResponse() {
    const start = await fetch("https://jsonplaceholder.typicode.com/users");
    const content = await start.json();

    for (key in content) {
        container.innerHTML += `Name: ${content[key].name}, Email: ${content[key].email}, Website: ${content[key].website}<br>`
    }
}

btn.addEventListener("click", () => {
    setLoader()
    getResponse()
    if(start => start.json()) {
        hideLoader()
    }
})

