import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our', 'ours', 'my'];
let adj = ['greatest', 'big', 'almighty', 'biggest', 'powerful'];
let noun = ['dj', 'alestyx', 'programmer', 'music', 'codefontain'];
let extensions = ['.com', '.es', '.dnb', '.co']


for (let a = 0; a < pronoun.length; a++) { 
 for (let b = 0; b < adj.length; b++) {
  for (let c = 0; c < noun.length; c++) {
    for (let d = 0; d < extensions.length; d++) {
      console.log(pronoun[a] + adj[b] + noun[c] + extensions[d]);
} 
}
}
}

