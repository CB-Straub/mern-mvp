require('dotenv').config()

const express = require('express')
const path = require('path')

const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
connectDB()

const app = express()
const PORT = process.env.PORT || 8000

//express.json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.
// This method returns the middleware that only parses JSON and only looks at the requests where the content-type header matches the type option.

app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', productRoutes) //accessing localhost:8000/products 


//deployment routes: express will serve the frontend build to the react act backend for production
app.use(express.static(path.join(__dirname, '..', "frontend", "build")))
//any other express routes must be above this one...or app will not pull from the api. must be right above the app.listen
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', "frontend", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`))



