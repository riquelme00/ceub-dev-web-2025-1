<template>
  <transition name="fade">
    <div v-show="visivel" :class="['mensagem', tipo]">
      {{ texto }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MensagemComponent',
  props: {
    tipo: {  // "success" → "sucesso", "alert" → "alerta"
      type: String,
      required: true,
      validator: value => ['sucesso', 'alerta'].includes(value)
    },
    texto: {  // mantém em português
      type: String,
      required: true
    },
    visivel: {  // mantém em português
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.mensagem {
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.sucesso {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alerta {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>