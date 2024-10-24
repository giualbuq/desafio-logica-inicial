class Heroi{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar (){ 
        let ataque
        switch (this.tipo){
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque genérico';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

let mago = new Heroi('Doutor Estranho', 50, 'mago')
let guerreiro = new Heroi('Aragorn', 33, 'guerreiro')
let ninja = new Heroi('Sasuke', 17, 'ninja')

mago.atacar();        
guerreiro.atacar();   
ninja.atacar();  