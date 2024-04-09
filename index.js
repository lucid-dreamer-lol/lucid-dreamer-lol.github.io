function check(){

    p=parseInt(document.getElementById("present").value);
    t=parseInt(document.getElementById("total").value);
    n=75
    
c=parseInt((p/t)*100)
x=(n*t-100*p)/(100-n)
console.log("current attendance:"+c)
console.log("classes needed for 75%:"+x)
at="percent : classes"
for (i=c+2;i<100;i++){
    x=(i*t-100*p)/(100-i)
    console.log(x)
    at=at+"<br>"+i.toString()+"% : "+Math.ceil(x).toString()
    
    
}
document.getElementById("atten").innerHTML=at
at="classes : percent"
for (i=c-1;i>0;i--){
    y=((p*100)/(i-1))-t
    console.log(y)
    at=at+"<br>"+Math.ceil(y).toString()+" : "+i.toString()+"%"
    
    
}
document.getElementById("bunk").innerHTML=at
}