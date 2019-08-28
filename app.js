const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const apiRoutes = require("./api-routes")
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use('/api', apiRoutes)


module.exports = app;