const express = require('express');
const app = express();

// 1. Mova a base de dados para fora para que todas as rotas a enxerguem
const clientes = [
    { id: 1, nome: 'adamastor', fone: '111', email: 'ada@email' },
    { id: 2, nome: 'bernadete', fone: '222', email: 'berna@email' },
    { id: 3, nome: 'clementina', fone: '333', email: 'cleme@email' },
    { id: 4, nome: 'deusdeti', fone: '444', email: 'deu@email' },
    { id: 5, nome: 'adamastor', fone: '555', email: 'adama@email' },
    { id: 6, nome: 'itapior', fone: '666', email: 'itapior@email' },
];

// Rota inicial
app.get('/', (req, res) => {
    res.send("Seja Bem Vindo à nossa API de clientes");
});

// Rota para total de clientes
app.get('/total_clientes', (req, res) => {
    // Usando Template Literals (crases) para exibir o valor da variável
    res.send(`Total de clientes: ${clientes.length}`);
});

// Rota para apresentar dados de um cliente específico
app.get('/clientes/:id', (req, res) => {
    const idParam = parseInt(req.params.id);
    const cliente = clientes.find(c => c.id === idParam);

    // Verificação se o cliente existe (deve estar DENTRO da rota)
    if (!cliente) {
        return res.status(404).send("Cliente não encontrado!!!");
    }

    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.fone}, email: ${cliente.email}`);
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});