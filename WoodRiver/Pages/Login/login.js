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

$('button').on('focus', mudarCor);
button.addEventListener('blur', desfocar);
/*function clicar(event) {
  console.log(event.target);
}*/

function validarCampo() {
  const email = document.getElementById('ilogin').value;
  const senha = document.getElementById('isenha').value;
  let erroSenha = document.getElementById('errorSenha');

  if(email !== localStorage.getItem('email')) {
    return false;
  }
  
  if(senha !== localStorage.getItem('senha')) {
    erroSenha.innerHTML = 'senha incorreta ou não cadastrada';
    return false;
  }

  return true;
}

function enviarUser() {
  const email = document.getElementById('ilogin').value;
  const senha = document.getElementById('isenha').value;
  if (email === '') {
    return false;
  }else {
    localStorage.setItem('email', email);
  }
  
  if (senha === '') {
    return false;
  } else {
    localStorage.setItem('senha', senha);
  }

  return true;
}

const meuFormulario = document.getElementById('formulario');
const email = meuFormulario.elements[0];

email.addEventListener('invalid', function(event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Email invalido, web2@gmail.com.br é um exemplo');
  } else {
    email.setCustomValidity('');
  }
});

function caixaSugestao() {
  const op = document.querySelector('input[name="sexo"]:checked').id;
  const sim = document.getElementById('yes');
  const sugestao = document.getElementById('#sugestao');

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

const sim = document.getElementById('formulario.yes');
