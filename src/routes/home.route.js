
import express from 'express';
import homeController from '../controllers/app/HomeController';
const router = express.Router();

router.get('/:slug', homeController.slug)
router.get('/', homeController.index)


module.exports = router

