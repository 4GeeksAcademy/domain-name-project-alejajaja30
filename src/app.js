import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'ours', 'my'];
let adj = ['greatest', 'big', 'almighty', 'biggest', 'powerful'];
let noun = ['dj', 'alestyx', 'programmer', 'music', 'codefontain'];
let extensions = ['.com', '.es', '.dnb', '.co']

function getRandomIndex (length) {
  return Math.floor(Math.random()* (length - 1))
}

function getRandomElements (anyArray) {
  let random = getRandomIndex (anyArray.length);
  return anyArray[random]
}
window.onload = function() {
 const randomDomain = document.getElementById('myDomain')
 randomDomain.innerHTML = getRandomElements(pronoun)+ getRandomElements(adj) + getRandomElements(noun) + getRandomElements(extensions)

};
