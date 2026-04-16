const express =requre('express');
const app =express();
app.listen(3000,()=>{
    console.log("sevidor em ação");
})

app.get('/',(req,res)=>{

    res.send("Teste com parâmetros")

})

app.get('/produto/:num1/:num2',(req,res)=>{
    const pontoA =req.params.num1;
    const  pontoB=req.params.num2;
    const  produto =  num1*num2;
    res.send('A distancia entre ${num1} e $ {num2} é $ {produto}');
})