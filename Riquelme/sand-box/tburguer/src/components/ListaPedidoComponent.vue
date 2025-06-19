<template>
    <div>

    </div>
</template>
<script>
    export default{
        name: "ListaPedidoComponent",
        data(){
            return{
                listaPedidosRealizados: [],
                listaStatusPedido: []
            }
        },
        methods: {
            async consultarPedidos() {
                const response = awai fetch("http://localhost:300/pedidos");
                this.listaPedidosRealizados = await response.json();
            },
            async consulta status(){
                const response = await fetch("http://localhost:300/status_pedido");
                this.listaStatusPedido = await response.json();
            },
            async deletarPedido(id) {
                const response = await fetch(`http://localhost:300/pedidos/${id}`,{
                    method: "DELETE"
                });
            },
            async atualizarStatusPedido(event, idStatusAtual){
                const idPedidoAtualizado = event.target.value;

                const atualizacaoJson = JSON.stringify({statusId : idPedidoAtualizado});
                await fetch(`http://localhost:300/pedidos/${id}`,{
                    method : "PATCH",
                    headers: {"Content-Type" : "aplication/json"},
                    body: atualizacaoJson
                })
            
            }
        }
    }
</script>