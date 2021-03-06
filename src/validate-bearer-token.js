const { API_TOKEN } = require('./config')
const logger = require('./logger')

function validateBearerToken(req, res, next) {
  const authToken = req.get('Authorization')

  console.log(authToken)
  console.log("authToken spplitted is " + authToken.split(' ')[1])
  console.log("Original is " + API_TOKEN)
  if (!authToken || authToken.split(' ')[1] !== API_TOKEN) {
    logger.error(`Unauthorized request to path: ${req.path}`)
    return res.status(401).json({ error: 'Unauthorized request' })
  }

  next()
}

module.exports = validateBearerToken
