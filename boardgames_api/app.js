const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const boardgameRoutes = require('./routes/boardgames')

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    res.sendFile('index.html')
    
})

app.use('/api/boardgames', boardgameRoutes)

app.listen(port, function(){
    console.log('App is listening on ' + port)
})