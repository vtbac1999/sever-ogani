const express = require('express')
const router = express.Router()
const showcartController = require('../controllers/showcartController')
router.post('/showcart', showcartController.show)
module.exports = router