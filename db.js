const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://TravelBook:Shubham@9765@cluster0.rlwtaah.mongodb.net/test"
// Mongo@9765

const connectToMongo = () => {
    mongoose.connect(process.env.MONGOOSE_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log("Connected to mongo successfully")
    })

    mongoose.connection.on('error', (err) => {
        console.log("this is error", err)
    })
}

module.exports = connectToMongo;