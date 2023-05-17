"use strict";

const alo = function() {
  return "Bem-vindo";
};

alert(alo());

const idade = prompt("qual sua idade");
const nome = prompt("qual seu nome");
confirm("seu nome é ${nome} ?");

let validaIdade = function(idade){
  return idade < 18;
};

function validarIdade(idade, validaIdade) {
  if (validaIdade(idade)) {
    alert("Pesa autorização dos responsaveis antes de realizar uma compra");
  } else {
    alert("Boas compras");
  }
}

validarIdade(idade, validaIdade);