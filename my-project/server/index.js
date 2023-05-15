const express = require('express')
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/products.routes')
const storageRouter = require('./routes/storages.routes')
const PORT = process.env.PORT || 8081

const app = express()

app.use(express.json())
app.use('/api', [
    userRouter, 
    productRouter, 
    storageRouter
])

app.listen(PORT, () => console.log(`server started on post ${PORT}`))