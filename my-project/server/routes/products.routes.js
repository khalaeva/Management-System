const Router = require('express')
const router = new Router()
const productsController = require('../controllers/products.controller')

router.post('/newproduct', productsController.createProduct)
router.get('/products', productsController.getProducts)

module.exports = router