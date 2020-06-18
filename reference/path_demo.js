const path = require('path')

console.log(__filename) // this will just print the whole path of file with file name

console.log(path.basename(__filename))  // this just gave the file name with extension

console.log(path.dirname(__filename))   // only directory of file

console.log(path.extname(__filename))   // gives the extension of current file

console.log(path.parse(__filename)) // give detail in object format

console.log(path.parse(__filename).base) // give detail in object format

console.log(path.join(__dirname, 'test', 'hello.txt'));     // by doing this we appended /test/hello.txt path in current dir

