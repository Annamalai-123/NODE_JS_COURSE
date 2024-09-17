//import os in server,js

const os = require('os')


console.log(os.type()); //checks the os type  [ O/P: Windows_NT ] 
console.log(os.version()); //os version   [ O/P: Windows 10 Home Single Language ]
console.log(os.homedir()); // home directory  [ O/P: C:\Users\sunda ]

console.log(__dirname); //current directory name  [ O/P : D:\ANNAMALAI\NODE-JS-DAVE\INTRO ]
console.log(__filename); //current directory name with filename server.js  [ O/P: D:\ANNAMALAI\NODE-JS-DAVE\INTRO\server.js ]






