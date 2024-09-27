// we can do all the tasks which are done in server3 
//by using async function ex:promises

const fsPromises= require('fs').promises;
const { promises } = require('dns');
// const { isUtf8 } = require('buffer');
const path = require('path')

const fileOps = async () =>{
    try{
        const data =await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'Utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'), '\n\n this us added text using async await append file.');
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseWrite_write.txt'));
    } catch(err){
        console.log(err);
        
    }
}
fileOps()