const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
require('dotenv').config()
const Favorite = require('./models/Favorite')
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const PORT = process.env.PORT
const cors = require('cors')

const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

app.use(
    express.urlencoded({
        extended:true,
    }),
)


app.use(express.json())

const favoriteRoutes = require('./routes/favoriteRoutes')
app.use('/', cors(), favoriteRoutes)

app.get('/', cors(), (req, res) => {
    res.json({ message: 'Olá' })
})

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.cibjkve.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao DB')
    app.listen(PORT)
})
.catch((error) => {
    console.log(error)
})

