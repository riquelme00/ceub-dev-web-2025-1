//se precisar comentar use //

var ola = "Olá Mundo! JS";

console.log(ola);
function log(valor){
    console.log(valor);
}

//tipos de variáveis 

var valor = 10;
log(typeof valor); // number

var palavra = "ícaro";
log(typeof palavra);

var isOK= true;
log(typeof isOK); //Boolean

var meuObj = {}; //Object
var meuArray = []; //Array
var nulo = null; //Null
var variavelFlamengo; //Undefined

//Escopo de variável
function compararEscopo(){
    if(true){
    var varDentro = "Var dentro do bloco";
    let letDentro = "Let dentro do bloco";
    const constDentro = "Const dentro do bloco";

    log(varDentro); // Funciona
    log(letDentro); // Funciona
    log(constDentro); //Funciona
    }
    log(palavra); //variável global
    log(varDentro); // Variável (ESCOPO dentro de um metodo e dentro de um bloco, IF)
    log(letDentro);  // 
    log(constDentro);
}

compararEscopo();

//Operações simples 
const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); // 5

//Comparações Lógicas
log(n1== n2);
log(n2==valorNumericoStr);
log(n2===valorNumericoStr);
log(((n2 > n1)|| (n2 < n1)) && (1 > 2)); //false
//manipulação de arrays
let frutas = ["Maça", "Banana","laranja"];
log(frutas.length); //3
log(frutas[1]); //Banana

//adcionando um item
frutas.push("Manga");

//remover o último elemento
frutas.pop()

log(frutas);

// Estruturas condicionais 
const idade = 18;
if(idade>= 18){
    log("sou adulto");
}else if(idade >= 2) {
    log("Sou um kid")
}else{
    log("Sou um bebe")
}

const intsituicao = "LDV";
switch (intsituicao){
    case "LDV":
        log("Escola");
        case "Thomas Jefferson":
            log("ESCOLA DE LINGUAS");
            case "Ceub":
                log("Faculdade");
                default
                log("Não e instituição");    
}
