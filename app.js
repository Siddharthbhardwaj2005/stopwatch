var x = y = z = 0
var st = false
var start 
function start_timer(){
x = y = z = 0
st = false
    myInterval = setInterval(myTimer, 10)
    start = document.getElementById('btn1')
    start.disabled=true
}
function myTimer(){
    x = x+1
    if(x===100)
    {
        y = y+1
        x = 0
    if(y===60){
        z = z+1
        y = 0
        if(z===60){
            x = y = z = 0
        }
    }
    } document.getElementById('result').innerHTML = 
    `<h1>`+String(z).padStart(2, '0')+':'+String(y).padStart(2, '0')+  `<\h1>`
}
function pr_timer(){
st = !st
if(st===true)
{
    //Stop timer
    clearInterval(myInterval)
}
else{
    myInterval = setInterval(myTimer, 10)
}
}
function clear_timer(){
    clearInterval(myInterval)
    x=y=z=0
    document.getElementById('result').innerHTML = `<h1>`+String(z).padStart(2, '0')+':'+String(y).padStart(2, '0')+  `<\h1>`
start.disabled = false
}
 
