const apiData = require('../schema/aws')
const axios = require('axios');

let thirdPartyUrl = `https://s3.amazonaws.com/roxiler.com/product_transaction.json`


exports.postAlldata = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = response.data;
        // res.json(data);
        {
            data.map(async (item) => {

                const fetchdata = new apiData(item);
                await fetchdata.save();
                res.send("data added successfully");
            })
        }
    }

    catch (error) {
        // Handle errors
        res.status(500).json({ error: `${error}An error occurred while fetching data` });
    }

};
exports.getAlldata = async (req, res) => {
    try {
        const users = await apiData.find({});
        return res.status(200).send({
            userCount: data.length,
            success: true,
            message: "all data",
            users,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Get all data",
            error,
        })
    }
};