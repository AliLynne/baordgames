const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/boardgames-api');

mongoose.Promise = Promise;

module.exports.Todo = require("./boardgame");
