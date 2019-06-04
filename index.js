var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var wishRouter = require('./app/wish/routes');

var app = express();

mongoose.connect(
  `mongodb+srv://wisher:${process.env.MONGO_ATLAS_PASSWORD}@bucketlist-snzni.mongodb.net/bucketlist?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/wishes', wishRouter);

module.exports = app;
