const express = require('express');
const path = require('path');
const server = express();
server.use(express.static(path.join(__dirname)));

server.use((req, res, next) => {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});
server.listen(3000, () => {
    console.log('servidor roda em http://localhost:3000');
});

server.get('/', (req, res) => {
    res.sendFile('./Views/home.html', { root: __dirname });
});

server.get('/home', (req, res) => {
    res.sendFile('./Views/home.html', { root: __dirname });
});

server.get('/aluno1', (req, res) => {
    res.sendFile('./Views/aluno1.html', { root: __dirname });
});

server.get('/aluno2', (req, res) => {
    res.sendFile('./Views/aluno2.html', { root: __dirname });
});

server.use((req, res) => {
    res.status(404).sendFile('Views/erro.html', { root: __dirname });
});