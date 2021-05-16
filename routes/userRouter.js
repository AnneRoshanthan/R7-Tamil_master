const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/author')
const authAdmin = require('../middleware/authAdmin')

router.post('/signup',userCtrl.signup)
router.post('/login',userCtrl.login)
router.get('/logout',userCtrl.logout)

router.get('/refresh_token',userCtrl.refreshToken)
router.get('/infor',auth,userCtrl.getUser)

router.patch('/addcart',auth,userCtrl.addCart)
router.get('/history',auth,userCtrl.history)
router.get('/alluser',auth,authAdmin,userCtrl.getallUser)
router.patch('/update',auth,userCtrl.addCart)
router.patch('/update_role/:id',auth,authAdmin,userCtrl.updateUserRole)
router.delete('/delete/:id',auth,authAdmin,userCtrl.deleteUser)





module.exports = router