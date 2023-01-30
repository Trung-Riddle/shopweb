import firestore from "../../config/firebase";
import upload from '../../config/multer';

class AdminManageController {
    store(req, res) {
        res.render('admin/product/store')
    }
    addProduct(req, res) {
        res.render('admin/product/addproduct')
    }
    async handleAdd(req, res) {
        console.log(req.files);
        res.send("oke")
    }
}
export default new AdminManageController();