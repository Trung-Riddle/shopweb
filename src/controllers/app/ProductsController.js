import firestore from "../../config/firebase";

class ProductsController {
    async show(req, res, next) {
        try {
            const productRef = firestore.collection('products').doc(req.params.id)
            const productSnapshot = await productRef.get();
            if (!productSnapshot.exists) {
                return res.status(404).send("Product not found");
            }
            const productDetail = productSnapshot.data();
            
            res.render('app/product/detail', {productDetail})
        } catch (err) {
            res.send(err.message)
        }
    }
    index(req, res, next) {
        res.render('app/product/shop')
    }
}

export default new ProductsController()