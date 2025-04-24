async function buscarDados(params) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados recebido!"), 4000);
    })
}

async function executaBusca(params) {
    console.log("Buscando...");

    console.log(await buscarDados());
}

const meuMetodo = function exemploMetodo() {
    console.log("Executei metodo por constate");
}

executaBusca();

console.log(meuMetodo);

const objTeste = {
    oi() {
        console.log("oi");
    },
    xau() {
        console.log("XAU");
    }
}

objTeste.oi();
objTeste.xau();


document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.createElement("h2");
    titulo.innerText = 'Olá DOM';
    document.body.appendChild(titulo);
});

const img = document.querySelector("#img");
const bt = document.querySelector("#bt");

bt.addEventListener("click", () => {
    img.style.display = img.style.display === 'none' ? 'inline' : 'none';
});


img.addEventListener("mouseover", () => {
    img.src = 'https://blog-static.petlove.com.br/wp-content/uploads/2017/08/curiosidades-sobre-gatos-1-810x540.jpg';
});

img.addEventListener("mouseout", () => {
    img.src = 'https://uploads.metroimg.com/wp-content/uploads/2025/02/14182411/gato-com-cara-desconfiada.jpg';
});


const exibir = document.querySelector("#exibir");
exibir.addEventListener("click", () => {
    const valor = document.querySelector("#meuCombo").value;
    const h3 = document.createElement("h3");
    h3.innerHTML = valor;

    fetch('/teste', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            valor : valor
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    });

    document.body.appendChild(h3);
    setTimeout(() => {
        document.body.removeChild(h3);
    }, 1500); 
});


const checkboxs = document.querySelectorAll(".checkbox");
const exibir2 = document.querySelector("#exibir2");

exibir2.addEventListener("click", () => {
    let valores = [];
    checkboxs.forEach((element) => {
        if (element.checked) {
            valores.push(element.value);
        }
    });

    alert(`Selecionados: ${valores.length > 0 ? valores.join(", ") : 'Nenhum'}`);
});