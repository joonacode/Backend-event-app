const queryHelper = require('../helpers/query')

const events = {

  getAll: (limit, offset, search, order, sorting) => {
    return queryHelper(`SELECT * FROM events ${search ? `WHERE title LIKE '%${search}%'` : ''} ORDER BY ${order || 'id'} ${sorting} LIMIT ${limit} OFFSET ${offset}`)
  },
  getTotal: () => {
    return queryHelper('SELECT COUNT(*) as totalFound FROM events')
  },
  getTotalSearch: (title) => {
    return queryHelper('SELECT COUNT(*) as totalFound FROM events WHERE title LIKE ?', [`%${title}%`])
  },
  getOne: (id) => {
    return queryHelper('SELECT * FROM evetns WHERE id = ?', id)
  },
  insert: (data) => {
    return queryHelper('INSERT INTO events SET ?', data)
  },
  update: (id, data) => {
    return queryHelper('UPDATE FROM events SET ? WHERE id = ?', [id, data])
  },
  delete: (id) => {
    return queryHelper('DELETE FROM events WHERE id = ?', id)
  }

}

module.exports = events