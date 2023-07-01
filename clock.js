function getTime()
{
    console.clear();
    let c=new Date();
    let ans=c.getHours() +":" +c.getMinutes() +":" +c.getSeconds();
    console.log(ans);
}
function printTime()
{
    getTime();
}
setInterval(printTime,1000);