const Router = require('express')
const router = new Router()
const noticeRouter = require('./noticeRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/notice', noticeRouter)

module.exports = router;