const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactController')
router.use('/', contactController.show)
module.exports = router