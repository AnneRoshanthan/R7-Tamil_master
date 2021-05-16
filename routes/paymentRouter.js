const router = require('express').Router()
const paymentCtrl = require('../controllers/paymentCtrl')
const auth = require('../middleware/author')
const authAdmin = require('../middleware/authAdmin')
const { route } = require('./userRouter')

router.route('/payment')
.get(auth,authAdmin,paymentCtrl.getPayments)
.post(auth,paymentCtrl.createPayment)
.put(auth,paymentCtrl.updateStatus)

// router.route('/status').post(paymentCtrl.status)


module.exports = router