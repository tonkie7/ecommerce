const express = require('express')
const router = express.Router()
const productModel = require('../models/productModel')

// CREATE
router.post('/', productModel.createNewProduct)

// READ
router.get('/', productModel.getAllProducts)

// READ 
router.get('/:id', productModel.getOneProduct)

// UPDATE
router.put('/:id', productModel.updateProduct)

// DELETE
router.delete('/:id', productModel.deleteProduct)

module.exports = router