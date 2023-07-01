function wait(n)
{
    let pr=new Promise(function(resolve)
    {
        setTimeout(resolve,n*1000);
    })
    return pr;
}
wait(5).then(()=>{
    console.log("Promise Created");
});