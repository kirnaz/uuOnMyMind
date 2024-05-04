const Router = require('express')
const noticeController = require('../controllers/noticeController')
const router = new Router()
const NoticeController = require('../controllers/noticeController')

router.post('/', noticeController.create)
router.get('/', noticeController.filter)
router.get('/:id', noticeController.getOne)

module.exports = router