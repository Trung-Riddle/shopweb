import homeRouter from './home.route';
import productRouter from './product.route'
import accountRouter from './account.route'
import adminHomeRouter from './homeAdmin.route'
import adminManageRouter from './AdminManage.route'

function route(app) {
    app.use('/product', productRouter)
    app.use('/', accountRouter)
    app.use('/', adminManageRouter)
    app.use('/', adminHomeRouter)
    app.use('/', homeRouter)
}

module.exports = route
