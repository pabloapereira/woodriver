const alo = function() {
    return 'Bem-vindo'
}

alert(alo())

var idade = prompt('qual sua idade')
var nome = prompt('qual seu nome')
confirm(`seu nome é ${nome()} ?`)

var validaIdade = function(idade){
  return idade < 18
}

function validarIdade(idade, validaIdade) {
  if (validaIdade(idade)) {
    alert("Pesa autorização dos responaseis antes de realizar uma compra")
  } else {
    alert("Boas compras")
  }
}

validarIdade(idade, validaIdade)