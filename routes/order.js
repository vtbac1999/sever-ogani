const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')
router.use('/', orderController.show)
module.exports = router