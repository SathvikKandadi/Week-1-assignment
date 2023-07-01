let count=0;
function counter()
{
    count++;
    setTimeout(counter,1000);
    console.log(count);
}
counter(count);