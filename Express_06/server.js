const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("servidor em execução");
});

// ROTAS

app.get('/', (req, res) => {
    res.send("Olá mundo cruel do CESF");
});

// rota com parâmetro
app.get('/ola/:nome/:empresa', (req, res) => {
    res.send('Olá ' + req.params.nome + ' da ' + req.params.empresa);
});
 app.get('/soma/:a/:b',(req,res)=>{
    res.send('resultado:'+req.params.a+req.params.b)
 });