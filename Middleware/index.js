const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();

route.use(reqFilter);


// //middleware
// const reqFilter = (req, res, next) =>{
//     if(!req.query.age){
//         res.send('Please provide age.');
//     }else if(req.query.age < 18){
//         res.send('You cannot access this websites.');
//     }
//      else{
//         next();
//     }
// }

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


route.get('/contact' , (req, res)=>{
    res.send("Welcome to contact page.");
});

app.use('/', route);

app.listen(5000);