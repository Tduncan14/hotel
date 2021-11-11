const hotel = require ('../models/hotel');

exports.create = async (req,res) => {


    // console.log('hotel create')

    console.log('req =>>>>>>>>>>>>>>>>>>>>>fields',req.fields)

    console.log('req files,',req.files)


    res.status(200).send('working')

}