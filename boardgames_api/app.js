const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
    secret: 'e3_/$`j5!XcARNnTQ4K2*}|1Jfs)$s',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

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