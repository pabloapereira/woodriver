/*let email = document.getElementById('ilogin')
let senha = document.getElementById('isenha')

//inplemnetar uma validaão de input
function validaCadastro(){
    if(email < 5){
        alert('digite um email valio')
    }else{
        alert('gygy')
    }
}*/

let trocarInput = document.querySelector('input')
    function trocar() {
    trocarInput.addEventListener('keydown', function(event) {
        if(event.keyCode === 13) {
            console.log('presionou a tecla enter')
        }
    })//tenter fazer
}

const button = document.getElementsByName('button')[0];

button.addEventListener('focus', mudarCor);
button.addEventListener('blur', desfocar)

function mudarCor() {
    this.style.background = 'green'
    this.style.border = '2px solid green'
}

function desfocar() {
    this.style.background = '#7CE14C';
}

