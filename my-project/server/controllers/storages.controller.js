const db = require('../db')

class StoragesController {
    async createStorage(req, res) {
        const {name, address, comment_store, index_store, id} = req.body
        const Store = await db.query('SELECT * FROM storages WHERE name_storage = $1 AND storages.business_owner_id = $2', [name, id])
        if(Store.rows.length) {
            res.json('Склад уже существует!')
        }
        else {
            const newStore = await db.query('INSERT INTO storages (name_storage, address, comment_store, index_store, business_owner_id) values ($1, $2, $3, $4, $5) RETURNING *', [name, address, comment_store, index_store, id])
            res.json(newStore)
        }
    }
    async getStorages(req, res) {
        const storages = await db.query('SELECT * FROM storages')
        res.json(storages.rows)
    }
    async getProductsOnStprage(req, res) {
        const id = req.params.id
        const products = await db.query('SELECT name_product, descrip, price_for_sale, unit FROM product_on_store JOIN products ON product_on_store.product_id = products.product_id WHERE storage_id = $1', [id])
        res.json(products.rows)
    }
    async updateStorage(req, res) {
        const {name, address, comment_store, index_store, id} = req.body
        const store = await db.query(
            'UPDATE storages SET name_storage = $1, address = $2, comment_store = $3, index_store = $4 WHERE storage_id = $5', 
            [name, address, comment_store, index_store, id]
        )
        res.json(store)
    }  
}

module.exports = new StoragesController()