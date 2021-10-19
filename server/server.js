const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv/config");

//Middlewares
app.use(express.json());
app.use(cors());

//Main route
app.get("/", (req, res) => {
  res.send("Homepage");
});

//Importing routes
const productRoute = require("./routes/product");
app.use("/product", productRoute);

const userRoute = require("./routes/user");
app.use("/user", userRoute);

//connection to DB
mongoose.connect(
  process.env.DB_connection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log("Database error or database connection error " + error);
    } else {
      console.log("Database state is " + mongoose.connection.readyState);
      console.log("DB connected");
    }
  }
);

app.listen(3000);
