/*1 ci sual

var count=0;
var n=1656;
var sum=0;
var eded=n
while(n>=1){
    count++;
    n=(n-n%10)/10;
    
}
if(count==4){
while(eded>=1){
    var a=eded%10;
    a=Math.floor(a);
    eded=(eded-a)/10;
    sum=sum+a
}
    
}
    console.log(sum)
*/
/* 2 ci sual
var n=17;
if(n%2==0){
    console.log("cut")
}
else{
    console.log("tek")
}
*/
/* 3 cu sual
var n=18;
switch(n){
   
    case 1:
        console.log("yanvar");
        break;
         case 2:
        console.log("fevral");
        break;
         case 3:
        console.log("mart");
        break;
         case 4:
        console.log("aprel");
        break;
        case 5:
        console.log("may");
        break;
         case 6:
        console.log("iyun");
        break;
         case 7:
        console.log("iyul");
        break;
         case 8:
        console.log("avqust");
        break;
        case 9:
        console.log("sentyabr");
        break;
         case 10:
        console.log("oktyabr");
        break;
         case 11:
        console.log("noyabr");
        break;
         case 12:
        console.log("dekabr");
        break;
        default:
        console.log("1 ile 12 arasi deyil")
}
*/
/* 4 cu sual
var count=0;
var n=1678;
var eded=n
while(n>=1){
    count++;
    n=(n-n%10)/10;
    
}
if(count==3){
    var a=eded%10;
    a=Math.floor(a);
    eded=(eded-a)/10;
    var b=eded%10;
    b=Math.floor(b);
    eded=(eded-b)/10;
    var c=eded%10;
    c=Math.floor(c);
    eded=(eded-c)/10;
    if(a+c==b){
        console.log("hee");
    }
    else{
console.log("xeyr")}
}
else{
    console.log("3 reqemli deyil")
}


*/
/* 5 ci sual
var n=2222;
var cem=0;
var d=5;
var arr=[];
 var hasil=1;
while(n>1){
    var d=n%10;
    n=(n-n%10)/10;
    arr.push(d);
    cem=cem+d;
    hasil=hasil*d;

    
    }
for(var i=0;i<arr.length;i++){
    if(arr[i]==5){
    console.log(cem);}
    else{
        console.log(hasil)
    }
}
    
*/
/* 6 ci sual
var a=20;
var b=60;
var hasil=1;
var cem=0;
for(var i=a;i<=b;i++){
    if(i%2==0){
        
        cem=cem+i;
        
    }
    else if(i%2==1){
        hasil=hasil*i

    }
    }
 console.log(cem);
                console.log(hasil);

*/
/* 7 ci sual
var a=56;
for(var i=0;i<=1000;i++){
    if(i%a==0){
        
       console.log(i)
        
    }
}
*/
/* 8 ci sual
var n=151;
var c=" ";
var eded=n
var arr=[];
while(n>=1){
    var d=n%10;
    n=(n-n%10)/10;
    arr.push[d];
    for(i=arr.length;i>=0;i--){
        c=c+d
    }

    
}
var d= parseInt(c);
if(eded==d){
    console.log("polidnomdu")
}
else{
    console.log("polinom deyil")
}
*/
/* 9 cu sual
var a=100000;
var b=200000;
var d=300000;
var sum=(a*0.1+b*0.1+d*0.1)*0.1;
console.log(sum)
*/
/*
var count=0;
var n=306;
var eded=n
while(n>=1){
    count++;
    n=(n-n%10)/10;
    
}
if(count==3){
    var a=eded%10;
    a=Math.floor(a);
    eded=(eded-a)/10;
    var b=eded%10;
    b=Math.floor(b);
    eded=(eded-b)/10;
    var c=eded%10;
    c=Math.floor(c);
    eded=(eded-c)/10;
    var sum=a+b+c;
    var square=c*c;
    if(sum==square){
        console.log("hee "+ sum +"= "+square);
    }
    else{
console.log("xeyr")}
}
else{
    console.log("3 reqemli deyil")
}
*/