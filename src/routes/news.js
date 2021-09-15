const express = require('express')
const router = express.Router()

const newsController = require('../app/Controllers/NewsController')

router.get('/hello', newsController.show)
router.get('/', newsController.index)



module.exports = router