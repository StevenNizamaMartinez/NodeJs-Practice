// http --> permite crear servidores

const http = require('http')

http.createServer( (req,res)=> {
    res.write('Hello World! desde NodeJs')
    res.end()
} ).listen(3000)

console.log('Server listening of port 3000')