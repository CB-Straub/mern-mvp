//seederScript provides access to the mongoDB database and populates the DB with our product model and data
//must create a script in package.json that imports this data also

require('dotenv').config()

const productData = require('./data/products')

const connectDB = require('./config/db')

const Product = require('./models/Product')

connectDB() //without this function call there will be an error because no connection to the DB 

const importData = async () => {
    try {
        await Product.deleteMany({})  //deletes anything in the db
        await Product.insertMany(productData) //inserts everything from our products data file 

        console.log('Data Import SUCCESSFUL')  //if data gets passed correctly we wi see this message
        process.exit()  //we ony want this to run the one time upon start,  so we exit out if it works
    } catch (error) {
        console.log('Data import ERROR!') //if error in data import we see this error msg
        process.exit(1) //the 1 designates an error happened
    }
} 

importData()

