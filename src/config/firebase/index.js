const admin = require('firebase-admin');
const serviceAccount = require('../../../key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://my-data-9cb5f.firebaseio.com'
});
const firestore = admin.firestore();

module.exports = firestore

