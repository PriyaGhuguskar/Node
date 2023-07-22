const apiData = require('../schema/aws')
const axios = require('axios');

let thirdPartyUrl = `https://s3.amazonaws.com/roxiler.com/product_transaction.json`


exports.postAlldata = async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = response.data;
        // res.json(data);
        {
            for (let i = 0; i < data.length; i++) {
                // data.map(async (item) => {

                let fetchdata = new apiData(data[i]);
                await fetchdata.save();

                // })
            }
        }
    }

    catch (error) {
        // Handle errors
        res.status(500).json({ error: `${error}An error occurred while fetching data` });
    }

};
exports.getAlldata = async (req, res) => {
    try {
        const datas = await apiData.find({});
        return res.status(200).send({
            userCount: datas.length,
            success: true,
            message: "all data",
            datas,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Get All datas",
            error,
        })
    }
};