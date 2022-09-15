var btn = document.querySelector("#toggle");
var circle=document.querySelector("#circle");

var flag=0;

circle.addEventListener("click",function(){
    if(flag===0){
       document.documentElement.style.setProperty("--pri","white");
       document.documentElement.style.setProperty("--sec","black");
       circle.style.transform = `translate(100%)`;
       flag=1;
    }
    else{
        document.documentElement.style.setProperty("--pri","black");
       document.documentElement.style.setProperty("--sec","white");
       circle.style.transform = `translate(0%)`;
       flag=0;
    }
});