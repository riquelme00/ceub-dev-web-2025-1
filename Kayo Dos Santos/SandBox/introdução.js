// Se precisar comentar use //

var ola= "Olá, Mundo! JS";
console.log(ola);

function log(valor){
      console.log(valor);
}

//Tipos de variáveis

var valor = 10;
log(typeof valor); //number

var palavra = "Fernando";
log(typeof palavra); //String

var isOK = true;
log(typeof isOK); //Boolean

var meuObj = {}; //Object
var meuArray = []; //Array 
var nulo = null; // Null
var variavelFlamengo; //Underfined

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

    log(palavra); //Funciona (Global)
    log(varDentro); //Funciona (Escopo)
    log(letDentro); //Erro! (Acesso somente no bloco)
    log(constDentro); //Erro! (Acesso somente no bloco)
}
function compararEscopo() {
  let letDentro = "Valor local";
  console.log(letDentro);
}


//Operações Simples
const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

log(n1 == n2); // false
log(n2 == valorNumericoStr); // true
log(n2 === valorNumericoStr); // true

log((n2 > n1) || (n2 > n1)) && (1 > 2); //false
//manipulação de arrays
let frutas = ["Maçã","Banana","Laranja"];
log(frutas,length);//3
log(frutas[1]);//banana

//adcionando novo item
frutas.push("Manga");

log(frutas);

//Remover o último elemento

frutas.pop();

log(frutas);

//estruturas condicionais
const idade = 18;
if(idade >= 18){
	log("sou adulto");
}else if(idade >=2){
	log("Sou uma criança")
}else{
	log("Sou um bebê")
}


const instituição = "CEM10";

switch(instituição){
	case "CEM10" : 
	log("ESCOLA");
	case "CIL": 
	log("ESCOLA DE LINGUAS");
	case "CEUB" :
    log ("FACULDADE");
	break;
	default : 
	log("Não é instituição")
}

//Estruturas de repetição
for(let loop = 0; loop < 5; loop ++){
	log(`Meu valor no loop: ${loop}`)
}



let valorWhile = 0;
while(valorWhile < 5){
	log(`Meu valor no loop: ${valorWhile}`);
	valorWhile++;
}
//Funções Assíncronas permitem executar operações
//sem bloquear a execução do código
async function buscarDados() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Dados Recebidos"), 4*1000);

      
    });
}

async function executarBusca() {
  log("Buscando...");

  let resultado = await buscarDados();

  log(resultado);
}

executarBusca();

const meuMetodo = function exemploMetodo(){
  log("Executei por metodo normal")
}

log(meuMetodo);

const objTeste = {
  oi(){
    log("OI")
  },
  xau(){
    log("XAU")
  },
};

objTeste.oi;
objTeste.xau;


//Manipulação de DOM

document.addEventListener("DOMContentLoaded", () => {
  let titulo = document.createElement("h2");
  titulo.innerText = "Ola DOM";
  document.body.appendChild(titulo);
});

function toggleImagem(){
  let img = document.getElementById("MinhaImagem")
  img.style.display = img.style.display ==="none"?"block" : "none"

}