const nameInput = document.querySelector("#name");
const telInput = document.querySelector("#tel");
const btn = document.querySelector("#btn");
const data = document.querySelector("#data");

btn.addEventListener("click", () => {
    let name = nameInput.value;
    let tel = telInput.value;
    let nameTel = document.createElement("h3");
    nameTel.textContent = name + " - " + tel;
    data.appendChild(nameTel);
    nameInput.value = "";
    telInput.value = "";
});