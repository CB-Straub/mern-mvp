require('dotenv').config() //needed to access environment variables in .env file
const mongoose = require('mongoose') //gives access to mongoose.connect, etc etc


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            // useNewUrlParser, useUnifiedTopology 
//             Migrating to Mongoose 6: No More Deprecation Warning Options
// useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. 
// Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. 
// Please remove these options from your code.
        console.log('MongoDB connection Successful')
    }catch (error) { 
        console.error('MongoDB connection FAILED')
        process.exit(1)

    }
}

module.exports = connectDB












