const tape = require('tape')
const port = require('get-port-sync')()
const request = require('supertest')

const server = require('../server')({ port })

tape('API endpoint tests', function (t) {
  tape('GET / endpoint should return message', async function (t) {
    const response = await request(server).get('/')
    t.equal(response.statusCode, 200, 'Status code should be 200')
    t.equal(response.text, 'Welcome to express')
  })

  tape('GET /health should return status OK', async function (t) {
    const { body } = await request(server).get('/health')
    t.equal(body.status, 'OK')
    t.equal(body.uptime > 0, true, 'uptime should be greater than 0s')
  })
  t.end()
})

tape.onFinish(() => {
  server.close()
})
