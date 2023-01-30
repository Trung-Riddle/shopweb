import firestore from "../../config/firebase";

class AccountController {
    index(req, res, next) {
        res.render('app/account/profile')
    }
    login(req, res, next) {
        res.render('app/account/login')
    }
    register(req, res, next) {
        res.render('app/account/register')
    }
}
export default new AccountController();