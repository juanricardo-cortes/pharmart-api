const admin = require('firebase-admin');
const serviceAccount = require('../../config/firebase.config.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://pharmart-2b7bf.appspot.com'
});

module.exports = {
  storage: admin.storage().bucket()
};