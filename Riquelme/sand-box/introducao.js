// cometar use //

var ola = "ola mundo! JS";
console.log(ola);

function log(valor){
    console.log(valor);
}

// Tipos de variáveis 

    var valor = 10;
    log(typeof valor);

    var palavra 
    log (typeof "palavra");

    var isOK = true;
    log(typeof isOK);

    var meuObj = {}; //obejto
    var meuArray = {}; // array
    var nulo = null; // null
    var variavelFlamengo; // Underfined

    // escopo de variavel 

    function compararEscopo (){
        if (true){
            var varDentro = "var dentro do bloco";
            var letDentro = "Let dentro do bloco";
            const constDentro = "Const dentro do bloco";

            log(varDentro); //Funciona 
            log(letDentro); //Funciona //
            //log constDentro = "Const dentro do bloco"; //

        
            log(varDentro);//Funciona
            log(letDentro);//Funciona
            log(constDentro);// Funciona
        }
        log(palavra); // funciona (global)
        log(varDentro); // funciona escopo
       // log(letDentro); // erro acesso somente no bloco
        //log(constDentro); //erro acesso somente no bloco
        }
        compararEscopo();
        //operaçoes simples

        const n1 = 1
        const n2 = 5
        const valorNumericoStr = "5"

        log(n1 +n2);//6
        log(n1 - n2);//4
        log(n1 / n2);//0.2
        log(n1 * n2);//5


        log(n1 == n2); //FALSE
        log(n2 == valorNumericoStr);//FALSE
        log(n2 === valorNumericoStr);//FALSE


        log (((n2 > n1 ) || (n2 > n1 && (1 > 2)))); //falso 

        // manipulacao de arrays

        let frutas = ["maça","Banana", "Laranja"];
        log(frutas.length);//3
        log(frutas[1]);//Banana

        // adicionando novo item 
        frutas.push("manga");
        log(frutas);

        //Remover o ultimo elemento

        frutas.pop();
        
        log(frutas);
        //estruturas condicionais

        const idade = 18;
        if(idade >=18){
            log("sou adulto")
        }else if (idade >= 2){
            log("sou crianca")
        }else{
            log("sou bebe")
        }

        const instituicao = "CEM10";

        switch(instituicao){
            case "CEM10" : log("ESCOLA");
            break;
            case "CIL" : log("eSCOLA DE LINGUAS")
            break;
            case "CEUB" : log("FACULDADE")
            break;
            default :
            log("nao e instituicao");
        }

        // estrutura de repeticao 

        for(let loop = 0; loop < 5; loop++){
            log(`Meu valor no loop: $(lopp)`));
        }
            let valorWhile = 0 ;
            while (valorWhile <5){
            log:(`Meu valor no loop": $(valorWhite)`)
            valorWhile
            }