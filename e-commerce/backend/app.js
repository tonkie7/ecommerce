const express = require('express');
const app = express()
const cors = require('cors')
const productController = require('./controllers/productController')

app.use(cors())
app.use(express.json())
app.use('/api/webshop/', productController)


module.exports = app

