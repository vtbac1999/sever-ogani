const express = require('express')
const router = express.Router()
const paypalController = require('../controllers/paypalController')
router.use('/', paypalController.show)
module.exports = router