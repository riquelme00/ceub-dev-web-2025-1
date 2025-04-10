<template>
    <div>
        <footer id="footer">
            <p>Bem vindo: {{ nome }} Olá mundo Vue com CLI</p>
        </footer>
    </div>
</template>

<script>
    export default {
    name : "HomeComponent",
    data() {
        return{
            nome: "Riquelme"
    }

  } 

}
</script>