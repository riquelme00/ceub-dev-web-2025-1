//Se precisar comentar use//

var ola = "Olá Mundo! JS";
console.log(ola);

function log(valor) {
    console.log(valor);
}

//Tipos de variáveis

var valor = 10;
log(typeof valor); //number

var palavra = "Amanda";
log(typeof palavra); //string

var isOK = true
log(typeof isOK); //boolean

var meuObj = {}; //Object
log(typeof meuObj);

var meuArray = []; //Array
log(typeof meuArray);

var nulo = null;
log(typeof nulo);

var variavelVasco; //Undefined
log(typeof variavelVasco);

//Escopo de variável

function compararEscopo() {
    if (true) {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro); //Funciona
        log(letDentro); //Funciona
        log(constDentro); //Funciona
    }

    log(palavra); //Funciona! (Global)
    log(varDentro); //Funciona! (Escopo)
    // log(letDentro); //Erro (Acesso somente no bloco)
    // log(constDentro); //Erro! (Mesma regra do let, só que mais restrito ainda, uma vez criado não pode ser modificado)
}
compararEscopo();

//Operações Simples
const n1 = 1;
const n2 = 5;
const valorNumericoString = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

log(n1 == n2); //false
log(n2 == valorNumericoString); //true
log(n2 === valorNumericoString); //false

log(((n2 > n1) || (n2 > n1)) && (1 > 2)); //false 

//Manipulação de arrays
let frutas = ["Maça", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas[1]); //Banana

//adicionando novo item
frutas.push("Manga");

log(frutas);

//Remover o último elemento

frutas.pop();

log(frutas);

//Estruturas condicionais
const idade = 18;
if (idade >= 18) {
    log("Sou adulto");
} else if (idade >= 2) {
    log("Sou uma criança");
} else {
    log("Sou um bebê");
}

const instituicao = "CEF12";

switch (instituicao) {
    case "CEF12": 
    log("ESCOLA");
    break;
    case "CIL": 
    log("ESCOLA DE LÍNGUAS");
    break;
    case "CEUB": 
    log("FACULDADE");
    break
    default: 
    log("Não é instituição");
}

//Estrutura de repetição
for(let loop = 0; loop < 5; loop++){
    log(`Meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while(valorWhile < 5){
    log(`Meu valor no loop: ${valorWhile}`);
    valorWhile++;
}


