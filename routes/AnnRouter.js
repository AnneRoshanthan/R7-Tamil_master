const router = require('express').Router()
const AnnCtrl = require('../controllers/Annctrl')




router.route('/ann')
.post(AnnCtrl.createAnn)
.get(AnnCtrl.findAnn)
.put(AnnCtrl.updateAnn)


// router.route('/category/:id')
// .delete(auth,authAdmin,categoryCtrl.deleteCategory)
// .put(auth,authAdmin,categoryCtrl.updateCategory)

module.exports = router