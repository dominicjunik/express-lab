const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (req, res)=> {
    res.send('home')
})

app.get('/greetings', (req, res) => {
    res.send('Hello stranger!')
})

app.get('/greetings/:name', (req, res) => {
    let name = req.params.name
    res.send(`Hello ${name}!`)
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})