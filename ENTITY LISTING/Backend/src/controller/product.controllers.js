const express = require("express");

const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {

  try {

      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 5;
      // const sort = ((a,b)=>a.price - b-price)

      //If page = 1 then data should be 1 to 5

      const skip = (page - 1) * pagesize;
      

      if(req.query.sort){
        const filter = req.query.filter;
        const sort = req.query.sort;
        const a = {[sort]: -1};
        const f = {price:{$all:}}
        const products = await Product.find().skip(skip).limit(pagesize).lean().exec();
      }

    const products = await Product.find().skip(skip).limit(pagesize).lean().exec();

    const totalPage = Math.ceil(( await Product.find().countDocuments())/pagesize);
    return res.status(200).send({products,totalPage});
  } 

  catch (error) {
    return res.status(500).send({ message: error.message });
  }

});

module.exports = router;
