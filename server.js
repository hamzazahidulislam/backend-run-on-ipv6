/** @format */

const http = require('node:http')
const hostname = ['192.168.209.69', '127.0.0.1']
const port = 80
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
