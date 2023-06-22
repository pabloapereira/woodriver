'use strict';
const p = document.getElementsByTagName('p');

(function(){
    alertify.alert('Essas são umas das nossas principais cores');
})();

function corPreco() {
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'red';
  }
}corPreco();