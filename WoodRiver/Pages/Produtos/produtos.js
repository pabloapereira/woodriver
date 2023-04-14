import trocandoCorPre from "../Util/trocar-cor.js"

const trocarPreco = new trocandoCorPre.TrocarPreco();

let precos

window.addEventListener('load', function() {
  trocarPreco.trocaDeCor();
});

let myInterval = setInterval(function promocao() {
    alert('Aproveite nossa promoção')
    precos = document.getElementsByTagName('p')
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = "800,00"
    }
}, 5000)//repetir apenas uma vez

setTimeout(() => {
    alert('A promoção acabou')
    precos = document.getElementsByTagName('p')
    for (let i = 0; i < precos.length; i++) {
        precos[i].innerHTML = "999,00"
    }
    clearInterval(myInterval)
    
}, 15000)

/*function trocaDeCor() {
    const precos = document.querySelectorAll('p')
  
    function mouseSobre(event) {
      event.target.style.color = 'green'
    }
  
    function mouseFora(event) {
      event.target.style.color = 'blue'
    }
  
    precos.forEach(function(p) {
      p.addEventListener('mouseover', mouseSobre)
      p.addEventListener('mouseout', mouseFora)//descobrir como passar a cor rgb
    })
  
    return [mouseSobre, mouseFora]
  }
  
  const minhaFuncao = trocaDeCor()*/
  
