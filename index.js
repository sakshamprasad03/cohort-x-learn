//This is my first JavaScript code!
//console.log('RADHE RADHE')

const fs = require("fs");;

const contents = fs.readFileSync("./a.txt","utf-8")

console.log(contents);