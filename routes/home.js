const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
router.use('/', homeController.show)
module.exports = router