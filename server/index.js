const express = require('express')
const app = express()
const { root } = require('./api')

app.use(express.json({ limit: '5mb' }))
app.get('/', root)

module.exports = ({ port, cb }) => {
  return app.listen(port, cb)
}
