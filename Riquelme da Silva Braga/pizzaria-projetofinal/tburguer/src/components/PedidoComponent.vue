<template>
  <div>
    <!-- Componentes de mensagem -->
    <Mensagem 
      tipo="sucesso" 
      :texto="mensagemSucesso" 
      :visivel="showSucesso" 
    />
    <Mensagem 
      tipo="alerta" 
      :texto="mensagemErro" 
      :visivel="showAlerta" 
    />

    <form id="pedido-form" @submit.prevent="criarPedido">
      <div>
        <p id="nome-hamburguer-content">
          {{ burguer && burguer.nome ? burguer.nome : "-" }}
        </p>
        <img id="foto-content" :src="burguer && burguer.foto ? burguer.foto : ''" alt="Hambúrguer selecionado" />
      </div>
      <div class="inputs" id="form-pedido">
        <label for="nome_cliente">Nome</label>
        <input  
          type="text" 
          id="nome-cliente" 
          name="nome-cliente" 
          v-model="nomeCliente"
          placeholder="Digite seu Nome"
          required
        >
      </div>
      <div class="inputs">
        <label for="ponto-carne">Ponto da carne</label>
        <select 
          name="ponto-carne" 
          id="ponto-carne" 
          v-model="pontoCarneSelecionado"
          required
        >
          <option value="" disabled>Selecione o ponto</option>
          <option 
            v-for="pontoCarne in listaPontoCarne" 
            :key="pontoCarne.id" 
            :value="pontoCarne"
          >
            {{ pontoCarne.descricao }}
          </option>
        </select>
      </div>
      <div id="opcionais-titulo" class="inputs">
        <label id="opcionais-titulo" for="Opcionais">Selecione os opcionais</label>
        <label id="opcionais-subtitulo" for="Complemento">Adicione um complemento</label>

        <div class="checkbox-container" 
             v-for="complemento in listaComplementos"
             :key="complemento.id"
        >
          <input 
            type="checkbox" 
            :name="complemento.nome" 
            :value="complemento" 
            v-model="listaComplementosSelecionados"
          >
          <span>{{ complemento.nome }}</span>
        </div>

        <label for="Complemento">Adcione uma bebida</label>

         <div class="checkbox-container"
              v-for="bebida in listaBebidas" 
              :key="bebida.id"
         >
          <input 
            type="checkbox" 
            :name="bebida.nome" 
            :value="bebida" 
            v-model="listaBebidasSelecionadas"
          >
          <span>{{ bebida.nome }}</span>
        </div>
      </div>
      <div class="inputs">
        <input 
          type="submit" 
          class="submit-btn" 
          value="Confirmar Pedido"
        >
      </div>
    </form>
  </div>
</template>

<script>
import Mensagem from './MensagemComponent.vue';

export default {
  name: "PedidoComponent",
  components: { Mensagem },
  props: {
    burguer: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      nomeCliente: "",
      pontoCarneSelecionado: "",
      listaComplementosSelecionados: [],
      listaBebidasSelecionadas: [],
      listaPontoCarne: [],
      listaComplementos: [],
      listaBebidas: [],
      mensagemSucesso: '',
      mensagemErro: '',
      showSucesso: false,
      showAlerta: false
    };
  },
  methods: {
    async getTipoPontos() {
      try {
        const response = await fetch("http://localhost:3000/tipos_pontos");
        if (!response.ok) throw new Error('Erro na requisição');
        this.listaPontoCarne = await response.json();
      } catch (error) {
        this.mostrarErro('Erro ao carregar pontos da carne.');
        console.error(error);
      }
    },
    async getOpcionais() {
      try {
        const response = await fetch("http://localhost:3000/opcionais");
        if (!response.ok) throw new Error('Erro na requisição');
        const data = await response.json();
        this.listaComplementos = data.complemento;
        this.listaBebidas = data.bebidas;
      } catch (error) {
        this.mostrarErro('Erro ao carregar opcionais.');
        console.error(error);
      }
    },
    async criarPedido() {
      // Validação dos campos obrigatórios
      if (!this.nomeCliente.trim()) {
        this.mostrarErro('Por favor, informe seu nome.');
        return;
      }
      
      if (!this.pontoCarneSelecionado) {
        this.mostrarErro('Por favor, selecione o ponto da carne.');
        return;
      }

      const dadosPedido = {
        nome: this.nomeCliente.trim(),
        ponto: this.pontoCarneSelecionado,
        bebidas: [...this.listaBebidasSelecionadas],
        complemento: [...this.listaComplementosSelecionados],
        statusId: 5,
        hamburguer: this.burguer
      };

      try {
        const req = await fetch("http://localhost:3000/pedidos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dadosPedido)
        });

        if (!req.ok) throw new Error('Erro ao criar pedido');

        this.mostrarSucesso('Pedido criado com sucesso!');
        this.limparFormulario();

      } catch (error) {
        this.mostrarErro('Erro ao criar o pedido. Tente novamente.');
        console.error(error);
      }
    },
    mostrarSucesso(mensagem) {
      this.mensagemSucesso = mensagem;
      this.showSucesso = true;
      setTimeout(() => {
        this.showSucesso = false;
      }, 3000);
    },
    mostrarErro(mensagem) {
      this.mensagemErro = mensagem;
      this.showAlerta = true;
      setTimeout(() => {
        this.showAlerta = false;
      }, 3000);
    },
    limparFormulario() {
      this.nomeCliente = '';
      this.pontoCarneSelecionado = '';
      this.listaComplementosSelecionados = [];
      this.listaBebidasSelecionadas = [];
    }
  },
  mounted() {
    this.getTipoPontos();
    this.getOpcionais();
  }
};
</script>

<style scoped>
#foto-content {
  margin-bottom: 16px;
  border-radius: 16px;
  position: relative;
  z-index: -1;
  justify-content: center;
  width: 100%;
  height: 180px;
  object-fit: cover;
}

#nome-hamburguer-content {
  font-size: 43px;
  font-weight: bold;
  text-align: start;
  margin-bottom: -90px;
  margin-left: 40px;
  color: antiquewhite;
  padding: 16px;
}

#pedido-form {
  max-width: 750px;
  margin: 0 auto;
}

.inputs {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  font-weight: bold;
  margin-bottom: 16px;
  color: #222;
  padding: 5px 12px;
  flex-direction: start;
  display: flex;
  border-left: 4px solid darkgoldenrod;
}

input,
select {
  padding: 12px;
  width: 300px;
  border: solid #222 1px;
  border-radius: 8px;
  height: 20px;
  font-size: 12px;
}

select {
  height: 50px;
}

#opcionais-titulo {
  width: 100%;
}

#opcionais-subtitulo {
  display: flex;
  align-items: flex-start;
  align-content: center;
  width: 100%;
  margin-bottom: 12px;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
  height: 20px;
}

.submit-btn {
  background-color: #222;
  color: darkgoldenrod;
  font-weight: bold;
  border: solid 1px darkgoldenrod;
  border-radius: 8px;
  cursor: pointer;
  padding: 12px;
  margin: 0 auto;
  font-size: 16px;
  width: 100%;
  height: auto;
  transition: 0.5s;
}
.submit-btn:hover {
  background-color: darkgoldenrod;
  color: #222;
}
</style>