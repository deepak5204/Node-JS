const express = require('express');
const app = express();
app.get('', (req, res)=>{
    console.log("data sent by browser >>>> "+ req.query.name);  //data come through query params0
    res.send('Hello, Welcome '+req.query.name)
});

app.get('/about',(req, res)=>{
    res.send("<h1>Hello this is about page.</h1>")
});


app.get('/help',(req,res)=>{
    res.send("Hello this is help page.")
});


app.listen(5000);