require('dotenv').config()

const express = require('express')

const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
connectDB()

const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
app.use(express.json()) 
//express.json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.
// This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option.


//routes
app.use('/api/products', productRoutes) //accessing localhost:5000/products 