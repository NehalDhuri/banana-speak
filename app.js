var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json";
// var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text) {
    return serverURL + "?text=" + text
}

function errorHandler(error){
    alert("something wrong with server try again after some time");
}

function clickEventHandler() {
    var inputText = txtInput.value; //taking input

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText = translatedTxt;
         })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);