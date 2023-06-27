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

function requisicaoCor(resinas) {
  let url = 'http://localhost:1010/resinas';
  
  $.get(url, function(data) {
    let resinas = data.resinas;
    let disponivelDiv = document.getElementById('disponivel');
    
    for (let i = 0; i < resinas.length; i++) {
      let corDiv = document.createElement('div');
      let corNome = document.createElement('p');
      
      corNome.textContent = resinas[i].cor;
      
      corDiv.appendChild(corNome);
      
      disponivelDiv.appendChild(corDiv);
    }
  });
}

$(document).ready(function() {
  requisicaoCor();
});