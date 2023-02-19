const connectToMongo = require('./db')
const bodyParser = require('body-parser')
const express = require('express')
var cors = require('cors');
require("dotenv").config();
// const { createProxyMiddleware } = require('http-proxy-middleware');

connectToMongo();

const app = express()

app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
// app.use(
//     '/api',
//     createProxyMiddleware({
//         target: 'http://localhost:5000',
//         changeOrigin: true,
//     })
// );

// Available Routes
app.use('/api/trips', require('./routes/trips'))
app.use("/api/auth", require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})