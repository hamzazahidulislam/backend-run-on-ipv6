/** @format */

const http = require('node:http')
const hostname = [
  '192.168.0.103',
  '127.0.0.1',
  '[::1]',
  '[fe80::e0ed:619a:2d7a:c145%3]'
]
const port = 80
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})
server.listen(port, hostname, () => {
  hostname.forEach(element => console.log(`Server running at http://${element}:${port}/`));
  // console.log(`Server running at http://${hostname}:${port}/`)
})
