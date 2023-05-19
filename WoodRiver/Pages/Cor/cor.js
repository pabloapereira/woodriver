'use strict';
const p = document.getElementsByTagName('p');
/*lint relatou a forma de usar o use strict, uso do
 cnste que teve que er especificado uma versão mais recente, relatou tambem que meu comentario 
 estava
 muito grande*/

(function(){
    alert('Essas são umas das nossas principais cores');
})();

function corPreco() {
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'red';
  }
}corPreco();