const express = require('express')
const { getAlldata, postAlldata } = require('../controller/data')

const router = express.Router()
router.post('/', postAlldata)
router.get('/', getAlldata)



module.exports = router

