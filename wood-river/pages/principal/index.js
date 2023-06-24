'use strict';

const alo = function() {
    return 'Bem-vindo';
};

alert(alo());

var idade = prompt('qual sua idade');
var nome = prompt('qual seu nome');
confirm(`seu nome é ${nome} ?`);

document.cookie = 'nome=' + nome;

let validaIdade = function(idade){
  return idade < 18;
};

function validarIdade(idade, validaIdade) {
  if (validaIdade(idade)) {
    alert('Pesa autorização dos responsaveis antes de realizar uma compra');
  } else {
    alert('Boas compras');
  }
}

validarIdade(idade, validaIdade);

$('body #frase').click(getData);

const getFrase = document.getElementById('test');
async function getData() {
  try{
    const data = await fetch('https://api.chucknorris.io/jokes/random');
    const json = await data.json();
    getFrase.innerHTML = json.value;
    $('#test').addClass('fraseCss').css({
      background : 'rgb(139, 69, 19)'
    });
  }
  catch(erro){
    console.log(erro);
  }
}