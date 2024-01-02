const express = require("express");
const app = express();
const cors=require("cors")
require("./config/database").connect();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.API_PORT;





const authRouter = require("./routes/userAuth");

const authproduct = require("./routes/productAuth");

const orderAuth = require("./routes/orderAuth");

const cartAuth=require("./routes/cartAuth")

const blogAuth=require("./routes/blogAuth")

const catogaryAuth=require("./routes/catogaryAuth")


const newuserauth=require("./routes/user")


app.use(cors() );

app.use("/api/user", authRouter);
app.use("/api/newuser", newuserauth);
app.use("/api/product", authproduct);

app.use("/api/order", orderAuth);
app.use("/api/cart", cartAuth);
app.use("/api/blog", blogAuth);
app.use("/api/catogary", catogaryAuth);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, console.log(`project running at ${PORT} port `));
