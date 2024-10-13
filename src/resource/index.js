const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars').engine;
const port = '3000';
const morgan = require('morgan');
const router = require('./routers')
const db = require('../resource/config/db')

//connect to db
db.connect()


// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars({
    extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set ('views', path.join(__dirname,'/views'))

app.use(express.static(path.join(__dirname, './src/public/css/app.css')))

// router
router(app)


// listen port 127.0.0.1 local host
app.listen(port, ()=> console.log(`example website listening on port http://localhost:${port}`));