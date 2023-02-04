const express = require('express');
const app = express();

//middleware
const reqFilter = (req, res, next) =>{
    if(!req.query.age){
        res.send('Please provide age.');
    }else if(req.query.age < 18){
        res.send('You cannot access this websites.');
    }
     else{
        next();
    }
}

// app.use(reqFilter); //--> application level middleware

app.get('/',(req, res)=>{
    res.send("Welcome to home page");
});

app.get('/users',(req, res)=>{
    res.send("Welcome to users page");
});

//Route level middleware (middleware in a single routes)
app.get('/about' , reqFilter ,(req, res)=>{
    res.send("Welcome to about page");
});

app.listen(5000);