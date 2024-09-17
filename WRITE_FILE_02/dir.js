const fs = require('fs')

fs.mkdir('./new',(err)=>{
    if(err) throw err;
    console.log('directory created');

}); // these above code created folder ex new folder was created


if (!fs.existsSync('./new1')){ //if new1 folder does not exist it will check and create
    fs.mkdir('./new1',(err)=>{
    if(err) throw err;
    console.log('directory created');

}); 
}


if(fs.existsSync('./new1')){ //check if alraedy exists it remove using rmdir
fs.rmdir('./new1',(err)=>{
    if(err) throw err;
    console.log('directory deleted');

}); 
}
