const Router = require('express')
const router = new Router()
const storagesController = require('../controllers/storages.controller')

router.post('/newstorage', storagesController.createStorage)
router.get('/storages', storagesController.getStorages)
router.get('/storages', storagesController.getProductsOnStprage)
router.put('/storage/:id', storagesController.updateStorage)

module.exports = router