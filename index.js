// index.js
const http = require('http')
const port = process.env.PORT || 3000
http
  .createServer((req, res) => {
    res.end(
      'Hello Docker & GitHub Actions!\n Current time: ' +
        new Date().toISOString()
    )
  })
  .listen(port, () => {
    console.log(`App running on port ${port}`)
  })
