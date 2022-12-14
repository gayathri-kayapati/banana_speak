var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "I am Gayathri";
// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json";
function getTranslationUrl(text) {
  return serverUrl + "?" + "text= " + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server! try agin after some time.");
}

function clickEventHandler() {
  // outputDiv.innerText = txtInput.value;
  var inputTxt = txtInput.value;
  fetch(getTranslationUrl(inputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
