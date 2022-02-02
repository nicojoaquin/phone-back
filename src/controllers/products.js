const Product = require("../models/product")

const createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    const newProduct = await product.save();
    
    res.json({
      ok: true,
      product: newProduct
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err
    });
  };

};

const readProducts = async (req, res) => {
  
  try {
    const products = await Product.find().sort({createdAt: -1});

    res.json({
      ok: true,
      products
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err
    });
  };

};

const readProductById = async (req, res) => {
  const {id} = req.params;
  
  try {
    const product = await Product.findById(id);

    res.json({
      ok: true,
      product
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err
    });
  };

};

const readProductsByCat = async (req, res) => {

  let marca = req.params.cat.toLowerCase();
  
  try {
    const products = await Product.find({marca}).sort({createdAt: -1});

    res.json({
      ok: true,
      products
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err
    });
  };

};

const updateProduct = async (req, res) => {
  const {id} = req.params;
  const updatedProduct = req.body;
  
  try {
    const product = await Product.findByIdAndUpdate(id, updatedProduct, {new: true});
    
    res.json({
      ok: true,
      product
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err
    });
  };
};

const deleteProduct = async (req, res) => {
  const {id} = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    res.json({
      ok: true,
      product: deletedProduct
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: err
    });
  };
};

module.exports = {
  createProduct,
  readProducts,
  readProductById,
  readProductsByCat,
  updateProduct,
  deleteProduct
};