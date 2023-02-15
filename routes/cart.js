const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartController')
router.post('/cart', cartController.show)
module.exports = router