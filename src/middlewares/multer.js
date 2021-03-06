var multer = require('multer')
const path = require('path')
const { responseHelper } = require('../helpers')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const fileName = `${Math.random().toString(32).substring(2)}${path.extname(file.originalname)}`
    cb(null, fileName)
  }
})

const filter = (req, file, cb) => {
  if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
    cb(null, false)
    return req.uploadErrorMessage = 'Only jpg, png, jpeg allowed'
  } else {
    cb(null, true)
  }
}

const obj = multer({
  fileFilter: filter,
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})

const upload = multer(obj).single('picture')

const uploadFile = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      if (error.code === 'LIMIT_FILE_SIZE') return responseHelper(res, 400, null, 'Max file size 5MB', true)
      return responseHelper(res, 400, null, error, true)
    } else {
      next()
    }
  })
}

module.exports = uploadFile