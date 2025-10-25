import PromptSync from "prompt-sync";

let prompt = PromptSync();


class Pessoa {
    //construtor constroi mais de um objeto, para por os valores de cada obj, colocamos via parametro
    // o termo "date identifica inumeras funções como data ou hora"
    
    constructor(nome, idade, dataNasc, senha) {
        this.nome = nome
        this.idade = idade
        this.dataNasc = new Date(dataNasc).toLocaleString("pt-BR")
        this.senha = senha

    }

    apresentar() {
        console.log(`Olá ,me chamo ${nome}, tenho${this.idade} anos`);
    }

    get senha() {
    return this.senha
    }

};

let nomePessoa = prompt("Digite o seu nome:");
let idadePessoa = parseInt("Digite sua idade:");
let dataNascPessoa = prompt("Digite sua data de nascimento no formato ano/mes/dia:");
let senhaPessoa = prompt("Digite sua senha:");

//criando o objeto
const novaPessoa = new Pessoa(
    nomePessoa,
    idadePessoa,
    dataNascPessoa,
    senhaPessoa
);
//Aciona a função do objeto ja criado
novaPessoa.apresentar();

//Exibe
console.log(novaPessoa);

