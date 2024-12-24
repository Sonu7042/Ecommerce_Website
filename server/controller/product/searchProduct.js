const productModel = require("../../model/productModel");

const searchProduct = async (req, res) => {
  try {
    // console.log("working")
    const query = req.query.q;
    // console.log(query)
    const regex = new RegExp(query, "i", "g");

    const products = await productModel.find({
      $or: [
        {
            productName: regex,
        },

        {
            category: regex,
        },
      ],
    });


    res.status(200).json({
        message : "Search Product list",
        error : false,
        success : true,
        data  : products 
    })


  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = searchProduct;
