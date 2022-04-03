const { default: mongoose } = require('mongoose')
const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 8080
const MONGO_URI = process.env.MONGO_URI

app.listen(PORT, () => {
   console.log('Server: http://localhost:' + PORT)
})

mongoose.connect(MONGO_URI, () => {
   console.log('DB connected')
})