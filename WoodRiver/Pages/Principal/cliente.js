class Cliente{
    constructor(nome) {
        this.nome = nome;
    }

    andar() { 
        console.log('estou andando')
    }
}

const nome = window.prompt('Qual seu nome')
const Cliente1 = new Cliente(nome);