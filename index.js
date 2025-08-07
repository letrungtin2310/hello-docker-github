// index.js
const http = require('http')
const port = process.env.PORT || 3000
http
  .createServer((req, res) => {
    res.end('Hello Docker & GitHub Actions!')
  })
  .listen(port, () => {
    console.log(`App running on port ${port}`)
  })
