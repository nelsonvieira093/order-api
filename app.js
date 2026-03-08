const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/", orderRoutes);

app.listen(3000, () => {
 console.log("API rodando na porta 3000");
});