const express = require("express");
const connectDB = require("./db/index");
require("dotenv").config();
const router = require("./routes/index");
const cors= require("cors");
let bodyParser = require('body-parser')

connectDB();
const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))



app.use("/", router);

app.listen(9000, () => console.log("server is listening.."));
