const pkg = require('./package.json')

require('./server')({
  port: process.env.PORT || 1337,
  cb: () => console.log(`${pkg.name}@${pkg.version} running on PORT: ${process.env.PORT || 1337}`)
})
