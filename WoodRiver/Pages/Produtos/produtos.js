'use strict';


import trocandoCorPre from '../Util/trocar-cor.js';

const trocarPreco = new trocandoCorPre.TrocarPreco();

let precos;

window.addEventListener('load', function() {
  trocarPreco.trocaDeCor();
});

const mudarPreco = (function() {
    let myInterval = setInterval(function promocao() {
        alert('Aproveite nossa promoção');
        precos = document.getElementsByTagName('p');
        for (let i = 0; i < precos.length; i++) {
            precos[i].innerHTML = '800,00';
        }
    }, 5000);
    
    setTimeout(() => {
        alert('A promoção acabou');
        precos = document.getElementsByTagName('p');
        for (let i = 0; i < precos.length; i++) {
            precos[i].innerHTML = '999,00';
        }
        clearInterval(myInterval);
        
    }, 15000);
});

let myInterval = setInterval(function promocao() {
    alert('Aproveite nossa promoção');
    precos = document.getElementsByTagName('p');
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = '800,00';
    }
}, 5000);

setTimeout(() => {
    alert('A promoção acabou');
    precos = document.getElementsByTagName('p');
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = '999,00';
    }
    clearInterval(myInterval);
    
}, 15000);