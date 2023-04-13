class Cliente{
    constructor(nome) {
        this.nome = nome;
    }

    capitalizar() {
        let nomeCap = this.nome.charAt(0).toUpperCase() + this.nome.slice(1);
        return nomeCap;
    }
}

const nome = window.prompt('Qual seu nome')
const Cliente1 = new Cliente(nome);