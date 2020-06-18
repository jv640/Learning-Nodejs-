const fs = require('fs');
const path = require('path');

// created folder using mkdir it take 3 arguement 1st path then 2nd options and 3rd call back function
// fs.mkdir(path.join(__dirname, 'testy'), {}, err => {
//     if(err) throw err;
//     console.log('File created....');
// });

// writing content to a file 
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hey there! I am learning nodejs', err => {
    if(err) throw err;
    console.log('written to file....');
});

// this writeFile only overwrite the content in file to append you have to 
fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' Great to know i am just appending here', err => {
    if(err) throw err;
    console.log('appended to file....');
});

// to read from the file 

// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// to rename

fs.rename(
    path.join(__dirname, 'test', 'hello.txt'),
    path.join(__dirname, 'test', 'helloWorld.txt'),
    err => {
    if(err) throw err;
    console.log('file renamed....');
});