var fs=require('fs')
fs.writeFile('text','I am 20 years old',(err)=>{
    if(err)
        throw err;
    else
        console.log("Data Written to file");
})