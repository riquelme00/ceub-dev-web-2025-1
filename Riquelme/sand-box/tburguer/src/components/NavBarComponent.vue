<template>
    <div>
        <nav id = "nav">
            <router-link to="/">


                <img src ="/logo_tburguer.png" id="logo"/>
            </router-link>
            <router-link to="/menu">Menu</router-link>
            <router-link to="/pedidos">Pedidos</router-link>
        </nav>
    </div>
    
</template>

<script>
    export default{
        name:"NavBarComponent"
    }
</script>

<style scoped>

    #nav {
        background-color: rgb(16, 47, 51);
        border-color: 3px solid darkgoldenrod;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav a {
        color: darkgoldenrod;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    #nav a:hover {
        color: white;
        font-size: 20px;

    }

    #logo{
        width: 100px;
        height: 100px;
    }

    #nav #logo{

        margin: auto;
        margin-left: 0;
    }

</style>