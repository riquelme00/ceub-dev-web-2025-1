<template>

    <div>
        <h1>Menu</h1>
        <div id="scroll-horizontal">
            <div id="card-content" v-for="burguer in listaMenuHamburgues" :key="burguer.id">
                <div id="card-linha">
                    <div class="foto-hambuguer">
                        <img :src="burguer.foto" :alt="burguer.nome">
                        <img src="https://img.freepik.com/fotos-premium/delicioso-hamburguer-fresco-isolado-no-fundo-branco_93675-104922.jpg" alt="imagem do hambuguer da nossa loja">
                        <div class="card-coluna">
                            <p id="nome-content">{{ burguer.nome }}</p>
                            <p id="preco-content">R$ {{ burguer.valor }},00</p>
                            <p id="descricao-content">{{ burguer.descricao }}</p>
                            <button @click="selecionarBurguer(burguer)">selecionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"MenuView",
        data() {
            return {
                listaMenuHamburgues:[]
            };
        },
        methods: {
            async consultarMenu(){
                const response = await fetch("http://localhost:3000/menu");
                const dados = await response.json();
                this.listaMenuHamburgues = dados.burgues;
                console.log(this.listaMenuHamburgues);
            },
            selecionarBurguer(burguerSelecionado) {
                const param = JSON.stringify(burguerSelecionado);
                const burguerJson = encodeURIComponent(param);
                // pegar o router e dar um push na nova tela.
                this.$router.push({path: '/config-pedido', query: {burguer : burguerJson}});

            }
        },
    mounted() {
        this.consultarMenu();
    }
}
</script>

<style scoped>

    #card-content { 
        display: inline-block;
        width: 280px;
        min-height: 500px;
        margin: 20px;
        border: 1px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px #444;
        position: relative;

    }

     #scroll-horizontal{
        flex: 1;
        overflow: auto;
        white-space: nowrap;
        width: 700px;
        margin: 0 auto;
        box-shadow: inset -10 0px 15px -20px gray;
     }
     .foto-hambuguer{
        flex-shrink: 0;
     }
     .foto-hambuguer img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 10px 0 0;
     }

     #nome-content{
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        width: 100%;
        margin: 12px;
     }
     #preco-content{
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        width: 100%;
        color: darkcyan;
     }
     #descricao-content{
        font-size: 16px;
        text-align: left;
        color: gray;
        margin: 16px;
        white-space: pre-line;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /*-webkit-line-clamp: 6; numero de linha para cortar */
        -webkit-box-orient: vertical;
     }

     .card-coluna p {
        margin: 0;
     }

     .card-coluna button {
        margin-top: auto;
        padding: 10px;
        background-color: rgb(171, 194, 125);
        color: darkblue;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        font-size:14px;
        width: 100%;
        transition: 0.5;
        cursor: pointer;
     }
     
     .card-coluna button:hover {
        background-color: transparent;
        color: orangered;
        border: solid 1px darkgray;
        border-radius: 5px;
        font-size:14px;
        
     }
     .card-linha{
        display: flex;
        flex-direction: row;
        height: 100%;
     }
     .card-coluna{
        flex-grow: 1;
        padding: 15px;
        height: 100%;
     }
</style>

    