//HomeComponent.vue -------------------------------

<template>
    <div>
        <footer id="footer">
            <p>Bem Vindo: {{ nome }} Olá mundo do <b>Vue com CLI</b> </p>
        </footer>
    </div>
</template>

<script>
  export default {
    name : "HomeComponent",
    data() {
        return {
            nome : "Riquelme"
        }
    }
  }
</script>
