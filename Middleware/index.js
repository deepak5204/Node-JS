const express = require('express');
const app = express();

//middle ware
const reqFilter = (req, res, next) =>{
    if(!req.query.age){
        res.send("Please provide age");
    } else {
        next();
    }
}

app.use(reqFilter);


app.get("/", (req, res)=>{
    res.send("Welcome in Home page");
});

app.get("/about", (req, res)=>{
    res.send("Welcome in About page");
});


app.listen(4000, (err)=>{
    console.log(err);
});