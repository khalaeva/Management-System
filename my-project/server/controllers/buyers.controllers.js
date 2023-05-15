const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {name, last_name, phone, email} = req.body
        const candidate = await db.query('SELECT * FROM business_owners WHERE first_name = $1 AND last_name = $2 and email = $3', 
            [name, last_name, email])
        if(candidate.rows.length) {
            res.json('Пользователь уже существует!')
        }
        else {
            const newPerson = await db.query('INSERT INTO business_owners (first_name, last_name, phone, email) values ($1, $2, $3, $4) RETURNING *', [name, last_name, phone, email])
            res.json(newPerson)
        }
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM business_owners WHERE business_owner_id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const {id, name, last_name, phone} = req.body
        const user = await db.query(
            'UPDATE business_owners SET first_name = $1, last_name = $2, phone = $3 WHERE business_owner_id = $4', 
            [name, last_name, phone, id]
        )
        res.json(user)
    }   
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM business_owners WHERE business_owner_id = ${id}`)
        res.json(user.rows)
    }
}

module.exports = new UserController()