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

/*function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  return request.responseText;
}

function main() {
  const data = fazGet('https://api.kanye.rest');
  let teste = JSON.parse(data);
  console.log(teste);
}

function fraseKanye(teste) {
  const linha = $('#test');
  linha.inertHTML = fazGet('https://api.kanye.rest');
}

main();*/

/*function getFrases() {
  return fetch('https://api.kanye.rest')
  .then((data) => data.json)
  .catch((err) => console.log(err + 'deu errado'));
}

async function escreverFrase() {
  const frase = await getFrases();

  console.log(`a frase é ${frase.data.quote}`);
}

escreverFrase();*/

$('body #frase').click(getData);



const getFrase = document.getElementById('test');
async function getData() {
  try{
    const data = await fetch('https://api.chucknorris.io/jokes/random');
    const json = await data.json();
    getFrase.innerHTML = json.value;
    $('test').add
  }
  catch(erro){
    console.log(erro);
  }
}