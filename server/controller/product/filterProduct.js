const productModel = require('../../model/productModel');

const filterProductController = async (req, res) => {
    try {

        const categoryList = req.body.category;

        // console.log("Request Body:", categoryList);
       
        if (!Array.isArray(categoryList) || categoryList.length === 0) {
            return res.status(400).json({
                success: false,
                error: true,
                message: 'Category list must be a non-empty array.',
            });
        }
        

        const products = await productModel.find({ category: { "$in": categoryList } });

        
        return res.status(200).json({
            success: true,
            error: false,
            message: 'Products found successfully.',
            data: products,
        });
    } catch (err) {
        console.error("Error in filterProductController:", err);

        return res.status(500).json({
            success: false,
            error: true,
            message: err.message || 'An unknown error occurred.',
        });
    }
};

module.exports = filterProductController;
