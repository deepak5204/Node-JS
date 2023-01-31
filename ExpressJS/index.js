const express = require('express');
const path = require('path');

const app = express();
//Load html files
// console.log(__dirname);
const publicPath = path.join(__dirname,'public'); // path folder help to acces directory path
// console.log(publicPath);
// app.use(express.static(publicPath));  //express.static() is used for load static page

// Remove Extension from URL 
app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

//link nopage found file 
app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/nopage.html`);
});


// app.get('', (req, res)=>{
//     console.log("data sent by browser >>>> "+ req.query.name);  //data come through query params0
//     res.send(`
//         <h1>Welcome in home page.</h1>
//         <a href="/about">Go to about page</a>
//     `)
// });

// app.get('/about',(req, res)=>{
//     //render html data
//     res.send(`
//         <h1>Hello this is about page.</h1>
//         <input type="text" placeholder="User Name">    
//         <button>Click me</button>
//         <br>
//         <a href="/">Go to home page</a>
//     `)
// });


// app.get('/help',(req,res)=>{
//     // return json data
//     res.send({
//         message: "Hello this is help page.",
//         name: 'deepak',
//         email: 'abc@123.com'
//     })
// });


app.listen(5000);