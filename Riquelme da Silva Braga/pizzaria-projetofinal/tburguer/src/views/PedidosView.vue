<template>
  <div class="pedidos-view">
    <!-- Cabeçalho -->
    <div class="cabecalho">
      <h1>Gerenciamento de Pedidos</h1>
      <div class="controles">
        <button 
          @click="recarregarPedidos" 
          class="botao-recarga"
          :disabled="carregando"
        >
          <span v-if="!carregando">↻ Atualizar</span>
          <span v-else>Carregando...</span>
        </button>
      </div>
    </div>

    <!-- Mensagens de feedback -->
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

    <!-- Componente de lista de pedidos -->
    <ListaPedidoComponent 
      :pedidos="pedidos" 
      :carregando="carregando"
      @atualizar-status="handleAtualizarStatus"
      @remover-pedido="handleRemoverPedido"
      @erro="handleErro"
    />

    <!-- Feedback de carregamento -->
    <div v-if="carregando" class="feedback-carregamento">
      <div class="spinner"></div>
      <p>Carregando pedidos...</p>
    </div>

    <!-- Feedback quando não há pedidos -->
    <div v-if="!carregando && pedidos.length === 0" class="sem-pedidos">
      <p>Nenhum pedido encontrado.</p>
      <button @click="recarregarPedidos" class="botao-recarga">
        Tentar novamente
      </button>
    </div>
  </div>
</template>

<script>
import ListaPedidoComponent from '@/components/ListaPedidoComponent.vue';
import Mensagem from '@/components/MensagemComponent.vue';

export default {
  name: "PedidosView",
  components: {
    ListaPedidoComponent,
    Mensagem
  },
  data() {
    return {
      pedidos: [],
      carregando: false,
      error: null,
      mensagemSucesso: '',
      mensagemErro: '',
      showSucesso: false,
      showAlerta: false
    };
  },
  created() {
    this.carregarPedidos();
  },
  methods: {
    async carregarPedidos() {
      this.carregando = true;
      this.error = null;
      
      try {
        const response = await fetch('http://localhost:3000/pedidos?_expand=hamburguer&_expand=ponto&_expand=status');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar pedidos');
        }
        
        this.pedidos = await response.json();
      } catch (err) {
        this.error = err.message;
        this.mostrarErro('Erro ao carregar pedidos: ' + err.message);
      } finally {
        this.carregando = false;
      }
    },
    
    async handleAtualizarStatus({ idPedido, statusId }) {
      try {
        const response = await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ statusId })
        });
        
        if (!response.ok) {
          throw new Error('Falha ao atualizar status');
        }
        
        // Atualiza localmente
        const pedidoIndex = this.pedidos.findIndex(p => p.id === idPedido);
        if (pedidoIndex !== -1) {
          this.pedidos[pedidoIndex].statusId = statusId;
        }
        
        this.mostrarSucesso('Status atualizado com sucesso!');
      } catch (err) {
        this.mostrarErro('Erro ao atualizar status: ' + err.message);
      }
    },
    
    async handleRemoverPedido(idPedido) {
      try {
        const response = await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) {
          throw new Error('Falha ao remover pedido');
        }
        
        // Remove localmente
        this.pedidos = this.pedidos.filter(p => p.id !== idPedido);
        
        this.mostrarSucesso('Pedido removido com sucesso!');
      } catch (err) {
        this.mostrarErro('Erro ao remover pedido: ' + err.message);
      }
    },
    
    handleErro(mensagem) {
      this.mostrarErro(mensagem);
    },
    
    recarregarPedidos() {
      this.carregarPedidos();
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
    }
  }
};
</script>

<style scoped>
.pedidos-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

h1 {
  color: #333;
  margin: 0;
}

.controles {
  display: flex;
  gap: 10px;
}

.botao-recarga {
  padding: 8px 15px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.botao-recarga:hover {
  background-color: #e0e0e0;
}

.botao-recarga:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.feedback-carregamento {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  gap: 15px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid darkgoldenrod;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.sem-pedidos {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

@media (max-width: 768px) {
  .cabecalho {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .controles {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>