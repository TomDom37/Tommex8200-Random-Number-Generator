
var button = document.getElementById("button");
button.onclick = function(){
    document.getElementById("header1").innerText = (Math.floor((Math.random() * document.getElementById("Eventinput").value) + 1));
    
    
};