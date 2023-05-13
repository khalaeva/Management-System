const db = require('../db')

class UserController {
    async createUser(req, res) {
        const {name, last_name, email} = req.body
        const newPerson = await db.query('INSERT INTO business_owners (first_name, last_name, email) values ($1, $2, $3) RETURNING *', [name, last_name, email])
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM business_owners')
        res.json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM business_owners WHERE business_owner_id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const {id, name, last_name} = req.body
        const user = await db.query(
            'UPDATE business_owners SET first_name = $1, last_name = $2 WHERE business_owner_id = $3', 
            [name, last_name, id]
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