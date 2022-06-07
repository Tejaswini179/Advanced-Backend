const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json())

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://Tejaswini:Tejaswini@cluster0.0kblt.mongodb.net/ONLINEDB?retryWrites=true&w=majority"
  );
};

//USER SCHEMA
//step 1: creating Schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
},{
    timestamps:true
});
//step 2: creating the User Model
const User = mongoose.model("user", userSchema);

//BRAND SCHEMA
//step 1: creating Schema
const brandSchema = new mongoose.Schema({
  title: { type: String, required: true },
  
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },

},
{
    timestamps:true
}
);
//step 2: creating Brand Model
const Brand = mongoose.model("brand", brandSchema);

//Product SCHEMA
//step 1: creating Schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img:{type:String,required:true},
  price:{type:Number,required:true},
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  }
},{
    timestamps:true
});
//step 2: creating Product Model
const Product = mongoose.model("product", productSchema);

//Categorty SCHEMA
//step 1: creating Schema
const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  //- [Ancestors]
  //- ParentID
});
//step 2: creating category Model
const Categorty = mongoose.model("category", categorySchema);

//REVIEW SCHEMA
//step 1: creating Schema
const reviewSchema = new mongoose.Schema({
  body: { type: String, required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
},{
    timestamps:true
});
//step 2: creating Review Model
const Review = mongoose.model("review", reviewSchema);

//ORDER SCHEMA
//step 1: creating Schema
const orderSchema = new mongoose.Schema({
//   title: { type: String, required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
},{
    timestamps:true
});
//step 2: creating Order Model
const Order = mongoose.model("order", orderSchema);

//CRUD OPERATIONS

//GET => getting data
//POST => adding data to the server
//PUT/patch => updating data in the server
//DELETE => deleting data from the server

//USERS CRUD
app.get("/users", async (req, res) => {
  try {

    const users = await User.find().lean().exec();
    return res.status(200).send({ users : users });

  } catch (error) {

    return res.status(400).send({message:error.message});

  }
});

app.post ("/users/create", async(req,res)=>{
    try {

     const user = await User.create(req.body);
     return res.status(201).send({user: user})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.get ("/users/:id", async(req,res)=>{
    try {

    console.log(req.params)
     const user = await User.findById(req.params.id)
     return res.status(200).send({user:user})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.patch ("/users/:id/edit", async(req,res)=>{
    try {

    const user = await User.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
     return res.status(200).send(user)
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})
app.delete("/users/:id/delete", async(req,res)=>{
    try {

        const user = await User.findByIdAndDelete(req.params.id)
         return res.status(200).send(user)
          } catch (error) {
        
           return res.status(400).send({message:error.message});
        
          }
})

app.get("/users/:id/addresses", async (req, res) => {
    try {
  
    //   const users = await User.findById().lean().exec();
    //   return res.status(200).send({ users : users });
  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });

  app.get("/users/:id/addresses/create", async (req, res) => {
    try {
  

  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });

  app.get("/users/:id/addresses/idx/edit", async (req, res) => {
    try {
  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });


  //BRAND CRUD
  app.get("/brands", async (req, res) => {
    try {
  
      const brands = await Brand.find().lean().exec();
      return res.status(200).send({ brands : brands });
  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });

  app.post ("/brands/create", async(req,res)=>{
    try {

     const brand = await Brand.create(req.body);
     return res.status(201).send({brand: brand})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.get ("/brands/:id", async(req,res)=>{
    try {

    console.log(req.params)
     const brand = await Brand.findById(req.params.id)
     return res.status(200).send({brand:brand})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.patch ("/brands/:id/edit", async(req,res)=>{
    try {

    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
     return res.status(200).send(brand)
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})


//PRODUCT CRUD
app.get("/products", async (req, res) => {
    try {
  
      const products = await Product.find().lean().exec();
      return res.status(200).send({ products : products });
  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });
app.post ("/products/create", async(req,res)=>{
    try {

     const product = await Product.create(req.body);
     return res.status(201).send({product: product})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.get ("/products/:id", async(req,res)=>{
    try {

    console.log(req.params)
     const product = await Product.findById(req.params.id)
     return res.status(200).send({product:product})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.patch ("/products/:id/edit", async(req,res)=>{
    try {

    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
     return res.status(200).send(product)
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.delete("/products/:id/delete", async(req,res)=>{
    try {

        const product = await Product.findByIdAndDelete(req.params.id)
         return res.status(200).send(product)
          } catch (error) {
        
           return res.status(400).send({message:error.message});
        
          }
})

//Categorty CRUD
app.get("/categories", async (req, res) => {
    try {
  
      const categories = await Categorty.find().lean().exec();
      return res.status(200).send({ categories : categories });
  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });

app.post ("/categories/create", async(req,res)=>{
    try {

     const categories = await Categorty.create(req.body);
     return res.status(201).send({categories: categories})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.get ("/categories/:id", async(req,res)=>{
    try {

    console.log(req.params)
     const categorty = await Categorty.findById(req.params.id)
     return res.status(200).send({categorty:categorty})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.patch ("/categories/:id/edit", async(req,res)=>{
    try {

    const categorty = await Categorty.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
     return res.status(200).send(categorty)
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})
app.delete("/categories/:id/delete", async(req,res)=>{
    try {

        const categorty = await Categorty.findByIdAndDelete(req.params.id)
         return res.status(200).send(categorty)
          } catch (error) {
        
           return res.status(400).send({message:error.message});
        
          }
})

//REVIEW CRUD

app.get("/reviews", async (req, res) => {
    try {
  
      const reviews = await Review.find().lean().exec();
      return res.status(200).send({ reviews : reviews });
  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });

app.post ("/reviews/create", async(req,res)=>{
    try {

     const reviews = await Review.create(req.body);
     return res.status(201).send({reviews: reviews})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.get ("/reviews/:id", async(req,res)=>{
    try {

    console.log(req.params)
     const review = await Review.findById(req.params.id)
     return res.status(200).send({review:review})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.patch ("/reviews/:id/edit", async(req,res)=>{
    try {

    const review = await Review.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
     return res.status(200).send(review)
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})
app.delete("/reviews/:id/delete", async(req,res)=>{
    try {

        const review = await Review.findByIdAndDelete(req.params.id)
         return res.status(200).send(review)
          } catch (error) {
        
           return res.status(400).send({message:error.message});
        
          }
})

//Orders CRUD
app.get("/orders", async (req, res) => {
    try {
  
      const orders = await Order.find().lean().exec();
      return res.status(200).send({ orders : orders });
  
    } catch (error) {
  
      return res.status(400).send({message:error.message});
  
    }
  });

app.post ("/orders/create", async(req,res)=>{
    try {

     const orders = await Order.create(req.body);
     return res.status(201).send({orders: orders})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.get ("/orders/:id", async(req,res)=>{
    try {

    console.log(req.params)
     const order = await Order.findById(req.params.id)
     return res.status(200).send({order:order})
    
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})

app.patch ("/orders/:id/edit", async(req,res)=>{
    try {

    const order = await Order.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
     return res.status(200).send(order)
      } catch (error) {
    
       return res.status(400).send({message:error.message});
    
      }
})
app.delete("/orders/:id/delete", async(req,res)=>{
    try {

        const order = await Order.findByIdAndDelete(req.params.id)
         return res.status(200).send(order)
          } catch (error) {
        
           return res.status(400).send({message:error.message});
        
          }
})


app.listen(5000, async () => {
  try {
    await connect();
    console.log("connected to the port 5000!!!!!!!");
  } catch (error) {
    console.log("error", error);
  }
});
