const router = require('express').Router()
const eventsController = require('../controllers/events.controller')
const uploadFile = require('../middlewares/multer')
const { EVENT_INSERT } = require('../middlewares/formValidation')

router
  .get('/', eventsController.getAll)
  .post('/', uploadFile, EVENT_INSERT, eventsController.addData)

module.exports = router