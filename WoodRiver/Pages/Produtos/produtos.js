'use strict';


import trocandoCorPre from '../Util/trocar-cor.js';

const trocarPreco = new trocandoCorPre.TrocarPreco();

/*const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
//const mongoose = require('mongoose');*/

/*const PORTA = 8081;
app.listen(PORTA, () => {
  console.log('Servidor rodando');
});*/

let precos;

addEventListener('load', function() {
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

let myInterval = setInterval(function promocao() { //tentar arrumar isso
    alert('Aproveite nossa promoção');
    precos = document.getElementsByTagName('p');
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = '800,00';
    }
}, 5000);

setTimeout(() => {
    alert('A promoção acabou');
    precos = $('p');
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = '999,00';
    }
    clearInterval(myInterval);
    
}, 15000);

  fetch('http://localhost:3000/madeiras')

  .then((response) => response.json())
  .then((data) => escolher(data));

  function escolher(madeiras) {
    const htmlMadeiras = madeiras.map(
      (madeira) => `
        <input type=radio name="madeira">${madeira.name}
      `
    );
    document.getElementById('ja').innerHTML = htmlMadeiras;
  }

/*$('#escolha').click(() => {
    const divMontarMesa = document.createElement('div');
    divMontarMesa.id = 'montarMesa';
    const fieldsetElement = document.createElement('fieldset');

    const h2Resina = document.createElement('h2');
    h2Resina.textContent = 'Resina';

    const inputAzul = document.createElement('input');
    inputAzul.type = 'radio';
    inputAzul.name = 'cor';
    inputAzul.value = 'azulPerolado';
    inputAzul.id = 'azul';

    const labelAzul = document.createElement('label');
    labelAzul.textContent = 'azul Perolado';
    labelAzul.htmlFor = 'azul';

    const inputVerde = document.createElement('input');
    inputVerde.type = 'radio';
    inputVerde.name = 'cor';
    inputVerde.value = 'verde';
    inputVerde.id = 'verde';

    const labelVerde = document.createElement('label');
    labelVerde.textContent = 'Verde';
    labelVerde.htmlFor = 'verde';

    const inputBranco = document.createElement('input');
    inputBranco.type = 'radio';
    inputBranco.name = 'cor';
    inputBranco.value = 'branca';
    inputBranco.id = 'branca';

    const labelBranco = document.createElement('label');
    labelBranco.textContent = 'Branco Perola';
    labelBranco.htmlFor = 'branco';
    
    const inputPreto = document.createElement('input');
    inputPreto.type = 'radio';
    inputPreto.name = 'cor';
    inputPreto.value = 'preto';
    inputPreto.id = 'preto';

    const labelPreto = document.createElement('label');
    labelPreto.textContent = 'Preta';
    labelPreto.htmlFor = 'preta';

    const  h2Madeira = document.createElement('h2');
    h2Madeira.textContent = 'Madeira';

    const inputImbuia = document.createElement('input');
    inputImbuia.type = 'radio';
    inputImbuia.name = 'madeira';
    inputImbuia.value = 'imbuia';
    inputImbuia.id = 'imbuia';

    const labelImbuia = document.createElement('label');
    labelImbuia.textContent = 'Imbuia';
    labelImbuia.htmlFor = 'imbuia';

    const inputCarvalho = document.createElement('input');
    inputCarvalho.type = 'radio';
    inputCarvalho.name = 'madeira';
    inputCarvalho.value = 'carvalho';
    inputCarvalho.id = 'carvalho';

    const labelCarvalho = document.createElement('label');
    labelCarvalho.textContent = 'Carvalho';
    labelCarvalho.htmlFor = 'carvalho';

    const inputPinus = document.createElement('input');
    inputPinus.type = 'radio';
    inputPinus.name = 'madeira';
    inputPinus.value = 'pinus';
    inputPinus.id = 'pinus';

    const labelPinus = document.createElement('label');
    labelPinus.textContent = 'Pinus';
    labelPinus.htmlFor = 'pinus';

    const inputIpe = document.createElement('input');
    inputIpe.type = 'radio';
    inputIpe.name = 'madeira';
    inputIpe.value = 'ipe';
    inputIpe.id = 'ipe';

    const labelIpe = document.createElement('label');
    labelIpe.textContent = 'Ipê Roxo';
    labelIpe.htmlFor = 'ipe';
    
    const button = document.createElement('button');
    button.id = 'finilize';
    button.textContent = 'finalizar'; 

    fieldsetElement.appendChild(h2Resina);
    fieldsetElement.appendChild(inputAzul);
    fieldsetElement.appendChild(labelAzul);
    fieldsetElement.appendChild(inputVerde);
    fieldsetElement.appendChild(labelVerde);
    fieldsetElement.appendChild(inputBranco);
    fieldsetElement.appendChild(labelBranco);
    fieldsetElement.appendChild(inputPreto);
    fieldsetElement.appendChild(labelPreto);
    fieldsetElement.appendChild(h2Madeira);
    fieldsetElement.appendChild(inputCarvalho);
    fieldsetElement.appendChild(labelCarvalho);
    fieldsetElement.appendChild(inputImbuia);
    fieldsetElement.appendChild(labelImbuia);
    fieldsetElement.appendChild(inputIpe);
    fieldsetElement.appendChild(labelIpe);
    fieldsetElement.appendChild(inputPinus);
    fieldsetElement.appendChild(labelPinus);
    fieldsetElement.appendChild(button);
    divMontarMesa.appendChild(fieldsetElement);

    const mainElement = document.getElementById('ja');
    mainElement.appendChild(divMontarMesa);

    botaoFinalize = $('finalize');

    $('#montarMesa').addClass('montarMesa');
    $('#montarMesa button').addClass('botamEnviar');
    $('#montarMesa').children().addClass('css').css({
      color: 'black'
    });

    button.addEventListener('click', () => {
    const selectedOptions = {};
    
    const resinaInputs = document.querySelectorAll('input[name="cor"]');
    resinaInputs.forEach(input => {
      if (input.checked) {
        selectedOptions.resina = input.value;
      }
    });

    
    const madeiraInputs = document.querySelectorAll('input[name="madeira"]');
    madeiraInputs.forEach(input => {
      if (input.checked) {
        selectedOptions.madeira = input.value;
      }
    });

    jsonData = JSON.stringify(selectedOptions);
    console.log(jsonData);

    //botaoFinalizar();
  });
});


/*let botaoFinalize;

function botaoFinalizar() {
  botaoFinalize.addEventListener('click', ()=> {
    console.log('teste');
  });
}

botaoFinalizar();*/