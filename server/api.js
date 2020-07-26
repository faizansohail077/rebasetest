const root = (req, res) => {
  res.send('Welcome to express')
}

const healthCheck = (req, res) => {
  const health = {
    uptime: process.uptime(),
    status: 'OK'
  }
  res.json(health)
}

module.exports = {
  root,
  healthCheck
}
