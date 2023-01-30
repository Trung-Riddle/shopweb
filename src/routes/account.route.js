import express from 'express';
import accountController from '../controllers/app/AccountController';
const router = express.Router();

// router.get('/:slug', accountController.show);
router.get('/account/profile', accountController.index);
router.get('/account/login', accountController.login);
router.get('/account/register', accountController.register);

module.exports = router