/*jslint esversion: 6 */
"use strict";

(function(){
    alert("Essas são umas das nossas principais cores");
})();

const p = document.getElementsByTagName("p");

function corPreco() {
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = "red";
  }
}corPreco();/*lint relatou a forma de usar o use strict, uso do
 cnste que teve que er especificado uma versão mais recente, relatou tambem que meu comentario estava
 muito grande*/

(function(){
    alert('Essas são umas das nossas principais cores');
})();

const p = document.getElementsByTagName('p');

function corPreco() {
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = "red";
  }
}corPreco();