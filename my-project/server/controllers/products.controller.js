const db = require('../db')

class ProductsController {
    async createProduct(req, res) {
        const {name, descrip, buy_price, price_for_sale, unit, id} = req.body
        const newProd = await db.query('SELECT * FROM products WHERE name_product = $1 AND descrip = $2', [name, descrip])
        if(newProd.rows.length) {
            res.json('Товар уже существует!')
        }
        else {
            const newProd = await db.query('INSERT INTO products (name_product, descrip, buy_price, price_for_sale, unit, business_owner_id) values ($1, $2, $3, $4, $5, $6) RETURNING *', [name, descrip, buy_price, price_for_sale, unit, id])
            res.json(newProd)
        }
    }
    async getProducts(req, res) {
        const products = await db.query('SELECT * FROM products')
        res.json(products.rows)
    }
}

module.exports = new ProductsController()