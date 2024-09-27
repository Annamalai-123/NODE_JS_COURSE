const fs = require('fs')

//rs readable string read the existing file example para.txt
const rs = fs.createReadStream('./files/newReply.txt',{encoding:'utf8'});

// ws writable string example all existing contents were writed in new file file 
// const WS = fs.createWriteStream('./files/new_para.txt');

const WS = fs.createWriteStream('./files/new_newReply.txt') //if we write new file define existing in rs readstream

rs.on('data',(dataChunk)=>{  // read and write of existing file to new file 
    WS.write(dataChunk)  //we can give pipe as well
})

//either this or above can give both are doing same 
rs.pipe(WS)