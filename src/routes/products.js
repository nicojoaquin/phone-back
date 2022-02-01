const {Router} = require('express');
const { 
  createProduct,
  readProducts,
  readProductById,
  readProductsByCat,
  updateProduct,
  deleteProduct
} = require('../controllers/products');

const router = Router();

//POST
router.post('/', createProduct);

//GET
router.get('/', readProducts);

//GET
router.get('/product/:id', readProductById);

//GET
router.get('/:cat', readProductsByCat);

//PUT
router.put('/:id', updateProduct);

//DELETE
router.delete('/:id', deleteProduct);

module.exports = router;