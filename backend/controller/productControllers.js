//this is where we do all the fetching of data, etc
//need to import controllers inside the routes...productRoutes.js

const Product = require('../models/Product')    //we need access to our mongoose model

const getAllProducts = async ( req, res ) => {
    try {
        const products = await Product.find({}) //uses the model to access the db
        res.json(products) //response from the db is all of the products in the db
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error(500)'})
    }
}

const getProductById = async ( req, res ) => {
    try {
        const product = await Product.findById(req.params.id) //uses the model to access the db to find one product by its id 
        res.json(product) //response from the db is one of the products in the db. 
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'Server Error(500)'})
    }
}


module.exports = {
    getAllProducts,
    getProductById
}