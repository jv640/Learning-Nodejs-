const os = require('os')

console.log(os.platform())  // telling about platform

console.log(os.arch())      // architecture of system

console.log(os.cpus())      // give object with information of all cpu

console.log(os.freemem())
console.log(os.totalmem())

console.log(os.homedir()) // gives us the home directory
console.log(os.uptime())    // up time of cpu in seconds