const express = require('express')
const { getAlldata } = require('../controller/data')

const router = express.Router()
router.get('/data', getAlldata)



module.exports = router

