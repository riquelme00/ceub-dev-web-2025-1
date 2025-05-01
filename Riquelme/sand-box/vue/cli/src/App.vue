//App.vue ------------------------------------------

<template>
  <div>
    <h1>VUE</h1>
    <br>
    <home-component/>
    <br>
    <usuario-component/>
    <br>
    <imagem-component 
    @visibilidade-img="alertaRonaldo"
    nomeBotao="Aparece ronaldo" 
    urlImagem="https://www.ogol.com.br/img/jogadores/new/10/22/1022_ronaldo_20241012221007.jpg"/>
  
    <imagem-component 
    @visibilidade-img="alertaImperador"
    nomeBotao="Aparece imperador" 
    :urlImagem="urlBanner"/>
    <br>
    <estilo-component/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import ImagemComponent from './components/ImagemComponent.vue';
import UsuarioComponent from './components/UsuarioComponent.vue';
import EstiloComponent from './components/EstiloComponent.vue';
export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent,
    ImagemComponent,
    EstiloComponent
  },
  data() {
    return {
      urlBanner: "https://s2-ge.glbimg.com/ftF2ZMqh63UdInfwBSTqbMh47WY=/0x0:3888x2592/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/X/z/g7nR3dSHSIpPMngmGSAw/img1863297.172301.jpg"
    }
  },
  methods:{
    alertaRonaldo(isVisivel){
      if(isVisivel){
      alert("Ronaldo visivel")
    }
  },
    alertaImperador(isVisivel){
      if(isVisivel){
        alert("Imperador visivel")
      }
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  unmounted() {
    console.log("unmounted");
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

