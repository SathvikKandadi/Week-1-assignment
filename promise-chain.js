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
    let s=new Date().getTime();
    let promise1=waitOneSecond();
    promise1.then(waitTwoSecond).then(waitThreeSecond).then(()=>{
        let e=new Date().getTime();
        console.log((e-s)/1000 +'s');
    });
    
}
calculateTime();