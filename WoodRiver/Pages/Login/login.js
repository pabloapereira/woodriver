'use strict';

const button = document.getElementsByName('button')[0];
const tittle = document.getElementById('titulo');
const fundoLogin = document.getElementById('login');
const corFundo = ['antiquewhite', '#871d1d', 'white'];
let indiceCor = 0;

(function(title) {
    document.addEventListener('keydown', function(event) {
        if(event.code === 'Enter') {
          title.style.color = 'red';
        }
    });
})(tittle);

corFundo.unshift('crimson', 'rosewood', 'purple');
corFundo.sort();

function mudarFundo() {
  fundoLogin.style.backgroundColor = corFundo[indiceCor];
  indiceCor = (indiceCor + 1) % corFundo.length;
}

setInterval(mudarFundo, 5000 );

function mudarCor() { //espeficar o elemento de estilu, airbnb
  button.style.background = 'red';
  button.style.border = '2px solid green';
}

function desfocar() {
  button.style.background = '#7CE14C';
}

button.addEventListener('focus', mudarCor);
button.addEventListener('blur', desfocar);
/*function clicar(event) {
  console.log(event.target);
}*/

function validarCampo() {
  const nome = document.getElementById('ilogin').value;
  const senha = document.getElementById('isenha').value;
  let erroSenha = document.getElementById('errorSenha');

  if(nome !== 'web2@gmail.com') {
    alert('Email invalido');
    return false;
  }
  
  if(senha !== '123456') {
    erroSenha.innerHTML = 'senha incorreta';
    return false;
  }

  return true;
}

const email = document.getElementById('ilogin');

email.addEventListener('invalid', function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Email invalido, web2@gmail.com.br é um exemplo');
  } else {
    email.setCustomValidity('');
  }
});

function CaixaSugestao() {
  const op = document.querySelector('input[name="sexo"]:checked').id;
  const sim = document.getElementById('yes');
  const sugestao = document.getElementById('sugestao');

  if(op === sim.id) {
    const inputText = document.createElement('input');
    inputText.type = 'text';
    sugestao.appendChild(inputText);

    const radios = document.querySelectorAll('input[name="sexo"]');
    radios.forEach(radio => {
      radio.remove('subimt');
    });
  } else {
    sugestao.innerHTML = '';
  }
}

const sim = document.getElementById('formulario.yes');//pedir pro professor
//utilizar aspas simples;
/*usar arrow functios, use String template, usar aspas simples, let ou const, ponto e virgula, 
identação, nome dos arquivos em minusculo e com "_" praseparar, uso do camelCase para variavel,
usar espaços em brancos para separar operador, usar ===
 */