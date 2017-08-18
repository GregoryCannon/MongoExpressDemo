var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path')
var apiRoutes = require('./api_routes');
var clientRoutes = require('./client_routes');
var webpackConfig = require('../webpack.config');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

// MongoDB setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/boilerDb', { useMongoClient: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function (callback) {
  console.log("Database connected");
});

// Useful plugins
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes and files
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, '../client/assets')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "../client"))
app.use('/api', apiRoutes);
app.use('*', clientRoutes);

// Run on port 3000
const port = process.env.PORT || 3000;
app.listen(port);
console.log('App running on port ' + port);
