const Router = require('express')
const noticeController = require('../controllers/noticeController')
const router = new Router()
const NoticeController = require('../controllers/noticeController')

router.post('/', noticeController.create)
router.get('/', noticeController.getAll)
router.get('/:id', noticeController.getOne)
router.get('/filter', noticeController.filter)

module.exports = router