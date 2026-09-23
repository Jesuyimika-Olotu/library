require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/bookRoute");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

connectDB();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", router);

app.use(errorMiddleware);

app.listen(PORT, console.log("Listening at port:", PORT));
