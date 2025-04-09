const meuAppVue = {

    data() {
        return {
            nome: "Riquelme",
            idade: 23,
            inputText: "inputText",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");