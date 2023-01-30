import firestore from "../../config/firebase";

class HomeController {
    async index (req, res, next) {
        try {
            const productsRef = firestore.collection('products').limit(4).orderBy('create_at');
            const products = await productsRef.get();
            const productsData = products.docs.map((product) => ({idPro : product.id, ...product.data()}));
            res.render('app/home', {productsData});
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
   
    
        // res.render('app/home')
    slug (req, res, next) {
        res.send('more page')
    }
}
export default new HomeController()