import express from 'express';
import productsController from '../controllers/app/ProductsController';
const router = express.Router();

router.get('/:id', productsController.show);
router.get('/', productsController.index);

module.exports = router