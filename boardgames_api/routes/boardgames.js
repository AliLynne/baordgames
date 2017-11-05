const express = require('express')
const router = express.Router()
const db = require('../models')



router.get('/', function(req, res){
    db.Boardgame.find()
    .then(function(games){
        res.json(games)
    })
    .catch(function(err){
        console.log(err)
    })
})

router.post('/', function(req, res){
    db.Boardgame.create(req.body)
    .then(function(newGame){
        res.status(201).json(newGame)
    })
    .catch(function(err){
        console.log(err)
    })
    
})

module.exports = router