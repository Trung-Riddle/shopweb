import express from 'express';
import AdminManageController from '../controllers/admin/AdminManageController';
import upload from '../config/multer';
const router = express.Router();

router.post('/admin/store/add/handle',upload.fields(
    [
        { 
            name: "image",
            maxCount: 1
        },
        { 
            name: "multiple_images",
            maxCount: 6
        },
    ]
) , AdminManageController.handleAdd)
router.get('/admin/store/add', AdminManageController.addProduct)

router.get('/admin/store', AdminManageController.store)


module.exports = router