const router = require('express').Router()
const routeEvents = require('./events.routes')

router
  .use('/events', routeEvents)

module.exports = router