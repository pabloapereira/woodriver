const button = document.getElementsByName('button')[0];
const fundo = document.getElementById('login')

function mudarFundo() {
    fundo.addEventListener('keyCode', function(event) {
        if(event.keyCode === 13) {
            fundo.style.background = 'red';
        }
    })
}

/*function mudarFundo() {
    const cor = document.getElementById('cor');
    const fundo = ['antiquewhite', '#871d1d', 'white'];
  
    cor.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        fundo.forEach(function(element) {
          cor.style.background = element;
        });
      }
    });
  }*/

 /* const element = document.getElementById('myElement');

element.addEventListener('keydown', function(event) {
  console.log(event.keyCode);
});*/
  

button.addEventListener('focus', mudarCor);
button.addEventListener('blur', desfocar);

function mudarCor() {
    this.style.background = 'green';
    this.style.border = '2px solid green';
}

function desfocar() {
    this.style.background = '#7CE14C';
}

