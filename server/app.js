const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoute = require('./routes/product');
require('dotenv/config');
app.use(express.json());
app.use('/post', postRoute);
app.get('/', (req, res) => {
    res.send("I am @ home");
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
    console.log("Connected to DB!!!")
);
app.listen(3001)