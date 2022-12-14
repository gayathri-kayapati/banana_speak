var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "I am Gayathri";
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function clickEventHandler() {
  outputDiv.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);
