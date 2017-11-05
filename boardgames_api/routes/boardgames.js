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

router.get('/:gameId', function(req, res){
    db.Boardgame.findById(req.params.gameId)
    .then(function(game){
        res.json(game)
    })
    .catch(function(err){
        console.log(err)
    })
})

router.put('/:gameId', function(req, res){
    db.Boardgame.findOneAndUpdate({_id: req.params.gameId}, req.body, {new: true})
    .then(function(game){
        res.json(game)
    })
    .catch(function(err){
        console.log(err)
    })
})

router.delete('/:gameId', function(req, res){
    db.Boardgame.remove({_id: req.params.gameId})
    .then(function(game){
        res.send('Deleted!')
    })
    .catch(function(err){
        res.send(err)
    })
})

module.exports = router