const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./configdb/db')

dotenv.config()

connectDB();

const dataRoutes = require('./routes/fetchdata')
const { postAlldata } = require('./controller/data')


const app = express()


app.use(cors())
app.use(express.json())

app.use('/', postAlldata)
app.use('/', dataRoutes)



let thirdPartyUrl = `https://s3.amazonaws.com/roxiler.com/product_transaction.json`



const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})