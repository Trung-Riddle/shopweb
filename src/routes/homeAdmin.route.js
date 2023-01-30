import express from 'express';
import homeAminController from '../controllers/admin/HomeController';
const router = express.Router();

router.get('/admin/home', homeAminController.index)

module.exports = router