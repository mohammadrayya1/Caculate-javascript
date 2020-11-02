
/*
var addproductBtn=document.querySelector("#AddProduct");
var showProductDiv=document.querySelector("#ShowProduct");
var Product=document.querySelector("#Product");

var data=[
    {id:1,name:"Product 1"},
    {id:2,name:"Product 2"},
    {id:3,name:"Product 3"},
    {id:4,name:"Product 4"}];

console.log(data);

function drawui(element)
{

element.forEach(function(ele)
{

showProductDiv.innerHTML +=`
<div onclick=deletitem(${ele.id})>

${ele.name}
</div>`
;





});
    
}

window.onload=drawui(data);



document.addEventListener('click',addproduct);



function addproduct()
{

if(Product.value == "") alert("Please enter product");
else{
var lastdata=data.length ? data[data.length-1].id:1;

data.push({id:++lastdata,name:Product.value});
showProductDiv.innerHTML +=`
<div onclick=deletitem(${data[data.length-1 ].id})>

${data[data.length-1 ].name}
</div>`;
Product.value="";
console.log(data);
}
}


function deletitem(id)
{
console.log(id);

}








*/


/*
let pope;

document.querySelector(".open").addEventListener("click",openwindow);
document.querySelector(".closs").addEventListener("click",closswindow);

function openwindow()
{
 pope =window.open("https://www.kooora.com/?region=-1&area=0","","width=100,height=200");

}


function closswindow()
{
pope.close();

}






var x= setInterval(function(){
    

 console.log("Hello");
    
        },2000);

clearInterval(x);


*/
var x="efwefwefwe";
console.log(x.substr)


function gethistory()
{
return document.getElementById('history-value').innerHTML;

}
function printhisory(num)
{

document.getElementById("history-value").innerHTML=num;

}

function getoutput()
{

 return document.getElementById("history-output").innerHTML;

}

function printoutput(num)
{
    if(num=="")
    {
        document.getElementById("history-output").innerHTML=num;
    }
    else{
   document.getElementById("history-output").innerHTML=getformatnumber(num);
    }
}


function getformatnumber(num)
{
var n=Number(num);
var value=n.toLocaleString("en");
return value;

}



var clear=document.getElementById("history-output");
var c=document.getElementById("clear");

c.addEventListener("click",function()
    {

clear.innerHTML=" ";


    });


    function reversformatnumber(num)
    {

      return Number(num.replace(/,/g,""));        
    }

var operation=document.getElementsByClassName("operator");

for(var i=0;i<operation.length;i++)
{
operation[i].addEventListener("click",function()
{
if(this.id =='clear')
{printoutput("");
printhisory("");
}
else if(this.id =="backspace")
{
    var out1 =reversformatnumber(getoutput()).toString();
    out1=out1.substr(0,out1.length-1);
    printoutput(out1);

}

else
{
    var output=getoutput();
    var history=gethistory();
   
    if(output!="" || history!=""){
        output= output==""?output:reversformatnumber(output);
        history=history+output;
        if(this.id=="="){
            var result=eval(history);
            printoutput(result);
            printhisory("");

}

else{
    history=history+this.id;
    printhisory(history);
    printoutput("");
}

}}



});


}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
number[i].addEventListener("click",function()
{

    var output1 = reversformatnumber(getoutput());

    output1+=this.id;
     printoutput(output1);


});


}



/*var demo=document.getElementById("demo");
var t=demo.textContent;
console.log(t);


demo.innerHTML="Khara";

demo.style.fontSize="60px";
demo.style.backgroundColor="green";
demo.style.color="white";

*/
/*
var _p=document.getElementsByClassName("paragrapg");
console.log(_p[0].innerHTML);

_p[0].setAttribute("title","Mohammad");
console.log(_p[0].getAttributeNode);

_p[0].style.color="red";

var x=document.getElementsByTagName("p");
x[2].style.color="green";



var y=document.querySelector("#dd");

y.innerHTML="Hello Selector";


var yall=document.querySelectorAll("#dd");
console.log(yall[0].innerHTML);

var items=document.querySelectorAll("ul li");
console.log(items[0].innerHTML);


var _btn=document.querySelector("input[type=submit]");

_btn.value="code";


var cc=document.createElement("div");
cc.innerHTML="NEW div";
cc.id="divn";
cc.className="classdiv";

var inser=document.querySelector("#dd");
var _span=document.querySelector("#span");
inser.insertBefore(cc,_span);
console.log(cc);













*/


























/*console.dir(document);
console.log(document.title);

console.log(document.body);
console.log(document.head);
console.log(document.URL);
console.log(document.domain);


console.log(document.all);





console.log(document.doctype);




*/
/*

var reg=new XMLHttpRequest();


reg.onreadystatechange=function()
{

console.log(this.readyState);

};

reg.open("Get","https://jsonplaceholder.typicode.com/posts",true);
reg.send();





var se=document.querySelector("#sel");

se.addEventListener("change",changer);

function changer(e)
{

console.log(e.target.value);


}

*/
/*
var myre=new XMLHttpRequest();

myre.onreadystatechange=function(){

console.log(this.readyState);


if(this.readyState==4&& this.status==200)
{

console.log(JSON.parse(this.responseText));

}




};

myre.open("Get","https://jsonplaceholder.typicode.com/posts",true);
myre.send();

*/

/*

var myrequst=new XMLHttpRequest();

myrequst.onreadystatechange=function()
{

console.log(this.readyState);
if(this.readyState==4 && this.status==200){
console.log(JSON.parse(this.responseText));
};

};
myrequst.open("Get","https://jsonplaceholder.typicode.com/posts",true);
myrequst.send();







*/