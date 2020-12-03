var btnClick=document.querySelector("#btn-click");
var txtArea=document.querySelector("#txt-area");
var transTxt=document.querySelector("#trans-txt");

 var serverURL ="https://api.funtranslations.com/translate/numbers.json"
function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickMe() {
    
    var textInput = txtArea.value; // taking input



    fetch(getTranslationURL(textInput))
       .then(response => response.json())
       .then(json =>  {
        var translatedText =json.contents.translated;
     transTxt.innerText =translatedText;})
   

}

btnClick.addEventListener("click", clickMe)