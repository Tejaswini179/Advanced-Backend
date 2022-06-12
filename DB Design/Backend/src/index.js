const express = require("express");
const app = express();
const connect = require("./config/db");
const UserController = require('./controllers/User.controller')
const ProductController = require('./controllers/Product.controller')
const CategoryController = require('./controllers/Category.controller')
const BrandController = require('./controllers/Category.controller')
const ReviewController = require('./controllers/Review.controller')

app.use(express.json());


app.use('/users',UserController)
app.use('/product', ProductController)
app.use('/category', CategoryController)
app.use('/brand', BrandController)
app.use('/review', ReviewController)



app.listen(5000, async () => {
  try {
    await connect();
    console.log("connected to the port 5000!!!!!!!");
  } catch (error) {
    console.log("error", error);
  }
});