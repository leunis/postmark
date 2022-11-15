const path = require('path')
const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(helmet())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res, next) => {
    res.send("Postmark tester app")
})

app.post('/webhook', (req, res, next) => {
    res.json(req.body)
    // res.send("Postmark tester app")
})

app.listen(3000)