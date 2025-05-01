<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <h1 v-show="isBotafogoCampeao">Flamengo Campeão</h1>
        <br>
        <button @click="verificarCampeao()">É Campeão</button>

    </div>
</template>

<script>
    export default {
        name: "UsuarioComponent",
        data() {
            return {
                nome : "Riquelme",
                email : "riquelme@gmail.com",
                isBotafogoCampeao : true
            }
        },
        methods: {
            verificarCampeao(){
                this.isBotafogoCampeao = !this.isBotafogoCampeao;
            }
        }

    }

</script>