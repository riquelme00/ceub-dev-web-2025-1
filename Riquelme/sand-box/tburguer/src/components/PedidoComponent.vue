<template>
    <div>
        <form id="pedido-form">
            <div>
                <p id="nome-hamburguer-content">
                    NOME BURGUER
                </p>
                <img id="foto-contente" src=""/>
            </div>
            <div class="inputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input 
                    type="text" id="nome-cliente" 
                    name="nome-cliente" 
                    v-model="nomeCliente"
                    placeholder="Digite seu Nome">
            </div>
            <div class="inputs">
                <label for="ponto-carne">Ponto da carne</label>
                <select name="ponto-carne" id="ponto-carne" v-model="pontoCarneSelecionado">
                    <option value="" selected>Selecione seu ponto preferido</option>
                    <option value="1">Bem passado</option>
                    <option value="1">Mal passado</option>
                </select>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        name : "PedidoComponent"
    }
</script>


<style scoped>

</style>