const express = require('express')
const router = express.Router()
const shopgirdController = require('../controllers/shopgirdController')
router.use('/', shopgirdController.showshop)
module.exports = router