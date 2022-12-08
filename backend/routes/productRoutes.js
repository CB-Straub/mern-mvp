const express = require('express')
const router = express.Router()

const { getAllProducts, getProductById } = require('../controller/productControllers')


//@access - Public
//@route - GET /api/products
//@description - GET ALL products from DB
router.get('/', getAllProducts )

//@access - Public
//@route - GET /api/products/:id
//@description - GET ONE product by its unique ID from DB
router.get('/:id', getProductById)

module.exports = router