var fs=require('fs')
let ans="";
fs.readFile('text','utf-8',(err,data)=>{
    if(err)
        throw err;
    let arr=data.split(' ');
    console.log(arr);
  for(let i = 0;i<arr.length;i++){
    if(arr[i]!=''){
      ans = ans + arr[i] + ' ';
    }
  }
  console.log(ans);
  fs.writeFile('text',ans,(err)=>{
    if(err)
        throw err;
    else
    {
        console.log(ans);
        console.log("File Written sucessfully");
    }
        
})
})

