const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const textoHexa = document.getElementById("textoHexa");
const cardColor = document.getElementById("cardColor");

// console.log(inputColor);
// console.log(btnVisualizar);
// console.log(textoHexa);
// console.log(cardColor);

btnVisualizar.addEventListener("click", () => {
   textoHexa.textContent = inputColor.value;
   cardColor.style.backgroundColor = inputColor.value})