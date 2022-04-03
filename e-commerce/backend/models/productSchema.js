// schema för att visa hur datan i collection ska se ut
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
   name: { type: String, required: true },
   desc: { type: String, required: true },
   shortdesc: { type: String, required: true },
   price: { type: Number, required: true },
   img: { type: String, required: true },

   // visar när den skapades
}, { timestamps: true })

// skapar en collection i mongodb med namnet product och skickar med productSchema
module.exports = mongoose.model('product', productSchema)