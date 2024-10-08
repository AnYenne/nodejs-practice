const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars').engine;
const port = '3000';
const morgan = require('morgan');

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set ('views', path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname, './src/public/css/app.css')))

app.get('/', (req, res) => res.render('home'));
app.get('/news', (req, res) => res.render('news'));

// listen port 127.0.0.1 local host
app.listen(port, ()=> console.log(`example website listening on port http://localhost:${port}`));