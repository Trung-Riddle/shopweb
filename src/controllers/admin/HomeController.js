import firestore from "../../config/firebase";

class HomeController {
    index(req, res) {
        res.render('admin/home')
    }
}
export default new HomeController();