<template>
    <div>
        <footer id="footer">
            <p>Construido por Riquelme Braga &copy; 2025</p>
        </footer>
    </div>
</template>

<script>
    export default{
        name:"FooterComponent"
    }
</script>

<style scoped>

#footer{
    height: 80px;
    background: #333;
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: oblique;
}

#footer p{
    font-size: 20px;
    
}

</style>