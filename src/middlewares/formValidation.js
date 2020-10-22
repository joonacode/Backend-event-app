const errorHandling = require('../helpers/errorHandling')
const { responseHelper } = require('../helpers')

const formValidation = {

  EVENT_INSERT: (req, res, next) => {
    const { title, location, participant, date, note } = req.body
    const dataForm = [
      {
        name: 'Title',
        value: title,
        type: 'string'
      },
      {
        name: 'Location',
        value: location,
        type: 'string'
      },
      {
        name: 'Participant',
        value: participant,
        type: 'string'
      },
      {
        name: 'Date',
        value: date,
        type: 'string'
      },
      {
        name: 'Note',
        value: note,
        type: 'string'
      }
    ]

    errorHandling(res, dataForm, () => {
      if(note.length < 50) {
        responseHelper(res, 400, null, 'Note min 50 character')
      }else{
        next()
      }
    })

  }

}

module.exports = formValidation