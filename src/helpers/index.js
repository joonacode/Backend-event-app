require('dotenv').config()

module.exports = {
  responseHelper: (res, status, results, message, error, links) => {
    const resJson = {}
    if (links) {
      resJson.total = links.total
      resJson.per_page = links.per_page
      resJson.count = links.count
      resJson.current_page = links.current_page
      resJson.total_pages = links.total_pages
      resJson._links = links._links
    }
    resJson.success = !error
    resJson.status_code = status
    if (error) {
      resJson.error = error || null
    }
    if (message) {
      resJson.message = message
    }
    resJson.data = results

    return res.status(status).json(resJson)
  },
  status: {
    found: 'Data found',
    empty: 'Data empty',
    insert: 'Data successfully added',
    update: 'Data successfully updated',
    delete: 'Data successfully deleted'
  },
  linksHelper: (limit, start, total, count) => {
    const last = Math.ceil(total / limit)
    const numStart = Number(start) === 0 ? 1 : Number(start)
    const result = {
      per_page: limit,
      count: count,
      total: total,
      current_page: numStart,
      total_pages: last,
      _links: {
        self: numStart,
        next: count < limit || numStart === last ? null : numStart + 1,
        prev: numStart === 0 || numStart === 1 ? null : numStart - 1,
        first: numStart === 1 ? null : 1,
        last: numStart === last ? null : last
      }
    }
    return result
  },
  errors: {
    notFound: {
      code: 'ERR_NOT_FOUND',
      statusCode: 404,
      sqlMessage: 'Data Not Found'
    },
    checkStatusCode: (errorCode) => {
      const errorCodes = Number(errorCode)
      if (errorCodes === 1048 || errorCodes === 1366) {
        return 400
      } else if (errorCodes === 1146 || errorCodes === 1054 || errorCodes === 1051) {
        return 500
      } else {
        return 400
      }
    }
  }
}