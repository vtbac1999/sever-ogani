const express = require('express')
const router = express.Router()
const shopdetailController = require('../controllers/shopdetailController')
router.use('/', shopdetailController.showshop)
module.exports = router