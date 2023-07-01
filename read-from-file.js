var fs=require('fs')
fs.readFile('text','utf-8',(err,data)=>{
    if(err)
        throw err;
    else
        console.log(data);
})
let s=0;
for(let i=0;i<=10000;i++)
{
    s=s+i;
    console.log(s);
}