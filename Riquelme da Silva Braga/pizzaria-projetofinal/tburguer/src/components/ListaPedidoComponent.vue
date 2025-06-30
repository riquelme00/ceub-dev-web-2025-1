<template>
  <div>
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

    <!-- Tabela de pedidos só aparece se houver pedidos -->
    <div v-if="listaPedidosRealizados.length" id="pedidos-tabela">
      <div id="pedidos-tabela-cabecalho">
        <div id="ordem-id">#ID</div>
        <div>Nome</div>
        <div>Hamburguer</div>
        <div>Ponto</div>
        <div>Opcionais</div>
        <div>Status</div>
        <div id="div-acoes">Ações</div>
      </div>

      <!-- Linhas de pedidos -->
      <div
        class="pedidos-tabela-linha"
        v-for="pedido in listaPedidosRealizados"
        :key="pedido.id"
      >
        <div id="ordem-numero">{{ pedido.id }}</div>
        <div>{{ pedido.nome }}</div>
        <div>{{ pedido.hamburguer?.nome || '-' }}</div>
        <div>{{ pedido.ponto?.descricao || '-' }}</div>
        <div>
          <ul v-if="pedido.complementos?.length">
            <li v-for="(complemento, idx) in pedido.complementos" :key="idx">
              {{ complemento.nome }}
            </li>
          </ul>
          <div v-if="pedido.complementos?.length && pedido.bebidas?.length" class="divisor"></div>
          <ul v-if="pedido.bebidas?.length">
            <li v-for="bebida in pedido.bebidas" :key="bebida.id">
              {{ bebida.nome }}
            </li>
          </ul>
          <span v-if="!pedido.complementos?.length && !pedido.bebidas?.length">-</span>
        </div>
        <div>
          <select
            class="status"
            @change="atualizarStatusPedido($event, pedido.id)"
            :value="pedido.statusId"
          >
            <option value="" disabled>Selecione</option>
            <option
              v-for="status in listaStatusPedido"
              :key="status.id"
              :value="status.id"
            >
              {{ status.descricao }}
            </option>
          </select>
        </div>
        <div id="div-acoes">
          <img
            src="/img/icone_lixeira.png"
            alt="Excluir"
            width="35px"
            height="35px"
            @click="confirmarExclusao(pedido.id)"
            class="icone-acao"
          />
        </div>
      </div>
    </div>

    <!-- Se não houver pedidos -->
    <div v-else class="sem-pedidos">
      <p>Nenhum pedido cadastrado no momento.</p>
    </div>
  </div>
</template>

<script>
import Mensagem from './MensagemComponent.vue';

export default {
  name: 'ListaPedidoComponent',
  components: { Mensagem },
  data() {
    return {
      listaPedidosRealizados: [],
      listaStatusPedido: [],
      mensagemSucesso: '',
      mensagemErro: '',
      showSucesso: false,
      showAlerta: false
    };
  },
  methods: {
    async consultarPedidos() {
      try {
        const resp = await fetch('http://localhost:3000/pedidos?_expand=hamburguer&_expand=ponto');
        if (!resp.ok) throw new Error('Falha ao carregar pedidos');
        this.listaPedidosRealizados = await resp.json();
      } catch (err) {
        this.mostrarErro('Erro ao consultar pedidos. Tente recarregar a página.');
        console.error(err);
      }
    },
    async consultaStatus() {
      try {
        const resp = await fetch('http://localhost:3000/status_pedido');
        if (!resp.ok) throw new Error('Falha ao carregar status');
        this.listaStatusPedido = await resp.json();
      } catch (err) {
        this.mostrarErro('Erro ao consultar tipos de status.');
        console.error(err);
      }
    },
    confirmarExclusao(id) {
      if (confirm('Tem certeza que deseja excluir este pedido?')) {
        this.deletarPedido(id);
      }
    },
    async deletarPedido(id) {
      try {
        const resp = await fetch(`http://localhost:3000/pedidos/${id}`, {
          method: 'DELETE'
        });
        if (!resp.ok) throw new Error('Falha ao deletar pedido');
        
        this.listaPedidosRealizados = this.listaPedidosRealizados.filter(
          p => p.id !== id
        );
        this.mostrarSucesso('Pedido removido com sucesso!');
      } catch (err) {
        this.mostrarErro('Erro ao remover pedido. Tente novamente.');
        console.error(err);
      }
    },
    async atualizarStatusPedido(event, idPedido) {
      const statusId = event.target.value;
      if (!statusId) return;

      try {
        const resp = await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ statusId })
        });
        if (!resp.ok) throw new Error('Falha ao atualizar status');
        
        const pedido = this.listaPedidosRealizados.find(p => p.id === idPedido);
        if (pedido) pedido.statusId = statusId;
        this.mostrarSucesso('Status atualizado com sucesso!');
      } catch (err) {
        this.mostrarErro('Erro ao atualizar status. Tente novamente.');
        console.error(err);
        
        // Recarrega os pedidos para garantir consistência
        this.consultarPedidos();
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
    }
  },
  mounted() {
    this.consultarPedidos();
    this.consultaStatus();
  }
};
</script>

<style scoped>
#pedidos-tabela {
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
}

#pedidos-tabela-cabecalho,
.pedidos-tabela-linha {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

#pedidos-tabela-cabecalho {
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #222;
  background-color: #f5f5f5;
}

#pedidos-tabela-cabecalho div,
.pedidos-tabela-linha div {
  width: 18%;
  padding: 8px;
  box-sizing: border-box;
}

.pedidos-tabela-linha {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;
}

.pedidos-tabela-linha:hover {
  background-color: #f9f9f9;
}

#ordem-id,
#ordem-numero,
#div-acoes {
  width: 5%;
  text-align: center;
}

select {
  padding: 8px;
  width: 100%;
  max-width: 150px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
}

select:focus {
  outline: none;
  border-color: darkgoldenrod;
}

.divisor {
  margin: 8px 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
}

.icone-acao {
  cursor: pointer;
  transition: transform 0.2s;
}

.icone-acao:hover {
  transform: scale(1.1);
}

.sem-pedidos {
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 18px;
}

ul {
  margin: 0;
  padding-left: 16px;
}

li {
  margin-bottom: 4px;
}

@media (max-width: 768px) {
  #pedidos-tabela-cabecalho div,
  .pedidos-tabela-linha div {
    width: 25%;
  }
  
  #pedidos-tabela-cabecalho div:nth-child(4),
  .pedidos-tabela-linha div:nth-child(4),
  #pedidos-tabela-cabecalho div:nth-child(5),
  .pedidos-tabela-linha div:nth-child(5) {
    display: none;
  }
}
</style>