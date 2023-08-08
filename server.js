const express = require('express')

const app = express()

const PORT = 8080

const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let {total, tipPercentage} = req.params
    tip = total * (tipPercentage/100)
    totalTotal = Number(total) + Number(tip)
    res.send(`Hello on a $${total} bill with a ${tipPercentage}% tip you should tip $${tip} for a total of $${totalTotal}`)
})

app.get('/magic/:question', (req, res) => {
    
    let question = req.params.question
    let response = eightBall[Math.floor(Math.random()*eightBall.length)]
    res.send(`<h1>${question}?: ${response}</h1>`)
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})