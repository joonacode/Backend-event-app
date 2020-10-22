const Events = require('../models/events.model')
const { responseHelper, status, linksHelper } = require('../helpers')
let totalData
const eventsController = {

  getAll: async (req, res) => {
    const limit = Number(req.query.limit) || 2
    const page = req.query.page || 1
    const offset = (Number(page) === 0 ? 1 : page - 1) * limit
    const search = req.query.search || null
    const order = req.query.order
    const sorting = req.query.sorting || 'desc'

    try {

      if (search) {
        const response = await Events.getTotalSearch(search)
        totalData = response[0].totalFound
      } else {
        const response = await Events.getTotal(search)
        totalData = response[0].totalFound
      }

      const response = await Events.getAll(limit, offset, search, order, sorting)
      const resultEvents = response
      const count = resultEvents.length
      const total = totalData
      const links = linksHelper(limit, page, total, count)
      responseHelper(res, 200, response, response.length === 0 ? status.empty : status.found, false, links)
    }catch(err) {
      console.log(err)
    }
  },
  addData: async (req, res) => {

    const { title, location, participant, date, note, picture } = req.body

    if(!req.file) return responseHelper(res, 400, null, 'Picture required', true)
    console.log(req.file)
    if(req.uploadErrorMessage) return responseHelper(res, 400, null, req.uploadErrorMessage, true)
    console.log(date)
    const dataEvent = { 
      title, 
      location, 
      participant, 
      date, 
      note, 
      picture ,
      picture: `${process.env.BASE_URL}/${req.file.path}`
    }

    try {
      const response = await Events.insert(dataEvent)
      responseHelper(res, 200, response, status.insert)
    }catch(err) {
      console.log(err)
    }
  }



}

module.exports = eventsController