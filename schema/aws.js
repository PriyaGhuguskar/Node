const mongoose = require('mongoose')

const fetchSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    sold: {
        type: Boolean,
        required: true
    },
    dateOfSale: {
        type: String,
        required: true
    },
})

const apiData = mongoose.model('data', fetchSchema);

module.exports = apiData;