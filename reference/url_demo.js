const url = require('url');

const myUrl = new URL('http://mywebsite.com:5000/hello.html?id=100&status=active');

//get straight url or serialized url

console.log(myUrl.href);
// or 
console.log(myUrl.toString());

//Host or root name with port
console.log(myUrl.host);

//only hostname withou port
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

// search parameteres
console.log(myUrl.searchParams);
