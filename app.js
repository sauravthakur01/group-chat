const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const login = require('./routes/login');
const home = require('./routes/home');

app.use(bodyParser.urlencoded({extended:false}));

app.use(login);
app.use(home)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(4000);