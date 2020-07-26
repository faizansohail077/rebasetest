const express = require('express')
const app = express()
const { root, healthCheck } = require('./api')

app.use(express.json({ limit: '5mb' }))
app.get('/', root)
app.get('/health', healthCheck)

module.exports = ({ port, cb }) => {
  return app.listen(port, cb)
}
