// pratar med db
const product = require('./productSchema')

// exporterar funktioner till productController
exports.createNewProduct = function(req, res) {

   product.create({
      name: req.body.name,
      desc: req.body.desc,
      shortdesc: req.body.shortdesc,
      price: req.body.price,
      img: req.body.img
   }, function(err, data) {
      if(err) {
         res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Something went wrong when creating a product'
         })
      }
      res.status(201).json(data)
   
   }) 

}

exports.getAllProducts = function(req, res) {

   product.find(function(err, data) {
      if(err) {
         return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Failed to fetch the products',
            err
         })
      }
      res.status(200).json(data)
      console.log(data)
   })

}

exports.getOneProduct = function(req, res) {

   product.findById(req.params.id, function(err, data) {
      if(err) {
         return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Failed to fetch product'
         })
      }

      res.status(200).json(data)

   })

}


exports.updateProduct = function(req, res) {

   // hitta id och update, skicka tillbaka hela body
   product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function(err, data) {
      if(err) {
         return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to update the product'
         })
      }

      res.status(200).json({
         message: 'Product updated',
         data

      })
   })
}

exports.deleteProduct = function(req, res) {
   product.findOneAndDelete({ _id: req.params.id }, function(err, data) {
      if(err) {
         return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to delete the product',
            err
         })
      }
      res.status(200).json({
         message: 'Product deleted',
         data
      })
   })
}