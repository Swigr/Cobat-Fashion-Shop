const iconList = document.getElementById("icon-list");
const menuList = document.getElementById("menu-list");
const btnResi = document.querySelector(".lacak"),
inputResi = document.querySelector("#resi"),
optianExpedisi = document.querySelector("#expedisi");


iconList.addEventListener("click", () => {
  menuList.classList.toggle("menu-nav");
})

inputResi.addEventListener("input", () => {
  if (inputResi.value.length > 5) {
    btnResi.disabled = false;
  } else {
    btnResi.disabled = true;
  }
});

fetch("courir.json")
  .then((response) => response.json())
  .then((json) => {
  json.forEach((e) => {
    optianExpedisi.innerHTML += `<option value="${e.code}">${e.description}</option>`;
  });
})