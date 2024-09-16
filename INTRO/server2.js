//import path in server ,js

const path =require('path')

console.log(path.dirname(__filename)); //same as server1 dirname ex: console.log(__dirname); [ O/P: D:\ANNAMALAI\NODE-JS-DAVE\INTRO ]
console.log(path.basename(__filename)); //specificall return current file ex:server2.js [ O/P : server2.js ]
console.log(path.extname(__filename)); // return extension only ex:js  [ O/P : .js  ]
console.log(path.parse(__filename)); // return object with [ o/p : {
    /*root: 'D:\\',
    dir: 'D:\\ANNAMALAI\\NODE-JS-DAVE\\INTRO',
    base: 'server2.js',
    ext: '.js',
    name: 'server2' 
    }]*/

