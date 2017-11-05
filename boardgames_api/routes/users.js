const express = require('express')
const router = express.Router()
const db = require('../models')
const User = 

router.use(function(req, res, next){
  res.locals.currentUser = req.user
  res.locals.errors = req.flash('errors')
  res.locals.infos = req.flash('info')
})

router.get('/', function(req, res, next){
  db.User.find()
  .sort({created: 'descending'})
  .exec(function(err, users){
    if(err){return next(err)}
    res.render('index', {users: users})
  })
})

module.exports = router