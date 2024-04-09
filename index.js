function check(){

    p=parseInt(document.getElementById("present").value);
    t=parseInt(document.getElementById("total").value);
    n=75
    
c=Math.ceil((p/t)*100)
console.log("current attendance:"+c)
at="percent : classes"
for (i=c+1;i<100;i++){
    x=(i*t-100*p)/(100-i)
    console.log(x)
    at=at+"<br>"+i.toString()+"% : "+Math.ceil(x).toString()
    
    
}
document.getElementById("atten").innerHTML=at
at="classes : percent"
for (i=c-1;i>0;i--){
    y=(t-((p*100)/(i-1)))
    console.log(y)
    at=at+"<br>"+Math.abs(Math.ceil(y)).toString()+" : "+i.toString()+"%"
    
    
}
document.getElementById("bunk").innerHTML=at
document.getElementById("current").innerHTML=c+"%"

}