const fs = require('fs')
const path =require('path') //instead of hardcode reading a file use path


fs.readFile(path.join(__dirname,'files','para.txt'),(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
}) 


fs.readFile('./files/starter.txt','utf8' ,(err,data)=>
{
    if(err) throw err;
    console.log(data); // We can give instead 'utf' encoding give 'toSting' in this line
                       //ex: console.log(data.toString())  
}) 

// to exit uncaught errors
process.on('uncaughtException',err=>{    //process inbuild node function
    console.error(`there was uncaught err :${err}`);
    process.exit(1);
})


//write file
fs.writeFile(path.join(__dirname,'files','reply.txt'),'hi',(err)=>{
    if(err) throw err;
    console.log('writing in file');

    // rename a file
fs.rename(path.join(__dirname,'files','reply.txt'),(path.join(__dirname,'files','newReply.txt')),(err)=>{
    if(err) throw err;
    console.log('rename');
}) 
})   // writing ex new file was added in folder structureand give name to callback 'dont need encoding'
     // dont need data only error throw because dont read data

    
//Append

     fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\n hi',(err)=>{
        if(err) throw err;
        console.log('writing in a file appended');
    }) // add a any text or something into the existing file with append 


