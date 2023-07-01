function waitOneSecond() {
    let p1=new Promise(function(resolve)
    {
        setTimeout(resolve,1000);
    })
    return p1;
}

function waitTwoSecond() {
    let p2=new Promise(function(resolve)
    {
        setTimeout(resolve,2000);
    })
    return p2;
}

function waitThreeSecond() {
    let p3=new Promise(function(resolve)
    {
        setTimeout(resolve,3000);
    })
    return p3;
}

function calculateTime() {
    let obj=new Date();
    let s=obj.getTime();
    let promise1=waitOneSecond();
    let promise2=waitTwoSecond();
    let promise3=waitThreeSecond();
    let flag=true;
    Promise.all([promise1,promise2,promise3]).then(()=>{
        let obj2=new Date();
        console.log((obj2.getTime()-s)/1000 +"s");
        
    })
    
}
calculateTime();