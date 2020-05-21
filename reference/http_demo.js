const http = require('http');

http.createServer((req, res) => {
    // write response
    res.write('hello World');       // this is will send response to browser
    res.end();
}).listen(5000, () => console.log('Server is running'));    // to show on terminal and port is localhost:5000
