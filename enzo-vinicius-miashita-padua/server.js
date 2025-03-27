const express = require('express');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.post('/teste', (req, res) => {
    try {
        const {valor} = req.body;
        console.log(valor);
        res.status(200).json('Dados Recebido com sucesso!');
    }catch(err) {
        res.status(400).json("Falha ao receber o valor, ERRO: " + err);
    }
});


app.listen(port, () => {
    console.log('Servidor rodando em: http://localhost:' + port);
});