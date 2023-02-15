const express = require('express')
const router = express.Router()
const registerController = require('../controllers/registerController')
router.use('/', registerController.register)
module.exports = router