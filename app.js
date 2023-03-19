// // intro

// const amount = 9

// if(amount < 10){
//     console.log("small number");
// }
// else{
//     console.log("large number");
// }

// console.log("First node app ever!!!!")

// //  global variables
// console.log(__dirname)
// setInterval(() => {
//     console.log('Hello world')
// }, 520)

// // Modules
// const names = require('./name-module')
// const sayHi = require('./test-modules')

// // require ~ it will execute all the code in the module imported
// require('./mind-grenade')
// // console.log(names)

// // sayHi('Mayd')
// // sayHi(names.john)
// // sayHi(names.peter)

// // OS module
// const os = require('os') // access all method
// // or
// const user = os.userInfo()
// console.log(user)
// console.log('the system uptime is', os.uptime(), 'seconds')

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS);

// // PATH module
// const path = require('path');
// console.log(path.sep)

// const filePath = path.join('./content', 'subfolder', 'test.txt')
// console.log(filePath)

// // base name = the really filename
// const base = path.basename(filePath)
// console.log(base)

// // like os.path.join in python 
// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute)

// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');
// console.log(first, second)

// writeFileSync('./content/result.txt', 'hello world, I am the result' + first + second, {flag: 'a'});

