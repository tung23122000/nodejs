const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

//Http log
app.use(morgan("combined"));

//template engin
app.engine('handlebars',handlebars.engine );
app.set('view engine','handlebar');
app.set('views', path.join(__dirname,'resources/views'))

// console.log('PATH:',path.join(__dirname,"resources/views"));


app.get('/', (req, res) => {
  res.render('home');
});


app.listenport, () => {
  console.log(`Example app listening on port ${port}`);
};

