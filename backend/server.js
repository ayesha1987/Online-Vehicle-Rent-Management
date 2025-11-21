const express = require('express');
const cors=require('cors')
require('dotenv').config()

const app =express()
app.use(cors())
app.use(express.json());

const PORT=process.env.PORT||8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// database connection
const db_connection=require("./config/database")
db_connection()


// const bodyParser=require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))











const user_router=require("./routers/user_router")
const product_router=require("./routers/product_router")
const cart_router=require("./routers/cart_router")

app.use("/api/v1",user_router)
app.use("/api/v1",product_router)
app.use("/api/v1",cart_router)




