const os = require('os')

console.log(os.userInfo())

console.log(os.platform())

console.log(os.uptime())

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})