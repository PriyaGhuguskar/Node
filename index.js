const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./configdb/db')
const axios = require('axios');

dotenv.config()

connectDB();

const dataRoutes = require('./routes/fetchdata')


const app = express()


app.use(cors())
app.use(express.json())

app.use('/', dataRoutes)


let thirdPartyUrl = `https://s3.amazonaws.com/roxiler.com/product_transaction.json`

// app.get('/', async (req, res) => {
//     try {
//         const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
//         const data = response.data;
//         res.json(data);
//     } catch (error) {
//         // Handle errors
//         res.status(500).json({ error: `${error}An error occurred while fetching data` });
//     }
// });


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})