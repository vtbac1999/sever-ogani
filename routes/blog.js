const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
router.use('/', blogController.show)
module.exports = router