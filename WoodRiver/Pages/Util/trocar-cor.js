class TrocarPreco {
    constructor() {
        this.precos = document.querySelectorAll('p');
    }

    trocaDeCor() {
        function mouseSobre(event) {
          event.target.style.color = 'green'
        }
      
        function mouseFora(event) {
          event.target.style.color = 'blue'
        }
      
        this.precos.forEach(function(p) {
          p.addEventListener('mouseover', mouseSobre)
          p.addEventListener('mouseout', mouseFora)//descobrir como passar a cor rgb
        })
      
        return [mouseSobre, mouseFora]
      }

      testing() {
        console.log("Testado!");
      }
}

const trocandoCorPre = {
    TrocarPreco,
};

export default trocandoCorPre;