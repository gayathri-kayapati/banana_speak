var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "I am Gayathri";

function clickEventHandler() {
  outputDiv.innerText = "asasdsasdsa" + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);
