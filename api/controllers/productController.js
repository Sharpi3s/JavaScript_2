const router = require('express').Router();

const productModel = require('../models/products/productModel');

router.get('/', productModel.getProduct);
router.get('/:id', productModel.getOneProduct);

router.post('/', productModel.saveProduct);

router.patch('/:id', productModel.updateProduct);

router.delete('/:id', productModel.deleteProduct);

module.exports = router;

// const router = require('express').Router();
// const productModel = require('../models/products/productModel');
// const auth = require('../authentication/auth');

// router.get('/', productModel.getProducts);
// router.get('/:id', productModel.getProduct);

// router.post('/new', auth.verifyToken, productModel.createProduct);

// router.patch('/:id', auth.verifyToken, productModel.updateProduct);

// router.delete('/:id', auth.verifyToken, productModel.deleteProduct);

// module.exports = router;