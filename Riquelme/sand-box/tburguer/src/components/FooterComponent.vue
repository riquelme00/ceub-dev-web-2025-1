<template>
    <div>
        <footer id="footer">
            <p>Construido por D Vieira Blinder © 2025</p>
        </footer>

    </div>
</template>

<script>
    export default {
        name: "FooterComponent"
    }

</script>

<style scoped>

#footer {
    height: 80px;
    background: black;
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
}

#footer p {
    font-size: 14px;
}

</style>