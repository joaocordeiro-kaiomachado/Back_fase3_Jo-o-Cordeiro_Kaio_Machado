const express= require(' express');
const app = express();

app.listen(3000,()=>{
    console.log('Servidor no ar')
})
const funcoes = require('./functions')
app.get('add/:a:b',(req,res)=>{
    const a  = parseInt(req.params.b);
    const resultado = funcoes.add(a,b);
    res.send( 'À soma e $ {a} e ${b} é  igual a ${resultado}');
});
