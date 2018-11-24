var text = "  ";

function gen() {

var noun = ["woman", "lion", "dog", "bird", "pig"];
var adjactive = ["fancy", "tiny", "big", "little", "funny"];
var num1 = Math.floor(Math.random() * 5);
var num2 = Math.floor(Math.random() * 5);
text = text+" What a "+adjactive[num1]+" "+noun[num2]+"! <br>";

document.getElementById("number").innerHTML = text;

}
