const express = require('express')
const router = express.Router()
const succesController = require('../controllers/succesController')
router.use('/', succesController.show)
module.exports = router