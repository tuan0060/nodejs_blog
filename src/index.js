// import { handlebars } from 'express-handlebars';
const path = require('path');
const express = require('express');
const { engine } = require("express-handlebars");
const morgan = require('morgan');

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// Template Engine
app.engine('hbs', engine(
  {
    extname: '.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));


// HTTP logger
app.use(morgan('combined'))


app.get('/tuannq', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})