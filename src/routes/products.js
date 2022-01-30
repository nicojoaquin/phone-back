const {Router} = require('express');
const { 
  createProduct,
  readProducts,
  readProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/products');

const router = Router();

//POST
router.post('/', createProduct);

//Get
router.get('/', readProducts);

//Get
router.get('/:id', readProductById);

//PUT
router.put('/:id', updateProduct);

//DELETE
router.delete('/:id', deleteProduct);

module.exports = router;