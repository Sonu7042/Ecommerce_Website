const addToCartModel = require("../../model/cartProduct");

const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;

    const currentUser = req.userId;

    const isProductAvailable = await addToCartModel.findOne({ productId });

    if (isProductAvailable) {
      return res.json({
        message: "Product already exist",
        success: false,
        error: true,
      });
    }

    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };

    const addProduct = await addToCartModel.create(payload);

    return res.status(200).json({
      message: "product Added in Cart",
      success: true,
      error: false,
      data: addProduct,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCartController;
