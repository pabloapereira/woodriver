class Cliente{
    constructor(nome) {
        this.nome = prompt('qual seu nome?');
    }

    capitalizar() {
        let nomeCap = this.nome.charAt(0).toUpperCase() + this.nome.slice(1);
        return nomeCap;
    }

    confirmar() {
        confirm(`Seu nome é ${this.nomeCap}`)
    }
}