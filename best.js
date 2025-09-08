// alert('HELLO WORLD TESTING JAVASCRIPT')
// window.onload=function(){
             document.getElementById('myh2').innerHTML = 'javasript is awesome';
            //  this is for linking ur javascript in the head section


// }
// and this for linking your javascript at the button


document.getElementById('myh2').innerHTML = 'javasript is awesome';
// var divSelect=document.getElementById('___click___'); 
var h2=document.getElementById('myh2');
function mycode(){
    h2.innerHTML='update using onclick event ';
}
function mouseEnter(){
    h2.innerHTML='yes mouse enter html div '


} 
function mouseLeave(){
    h2.innerHTML='yes this is mouse leave '


}
// keydown
// keyup   
// input
// focus
// blur
// function down(event, v){
//      console.log(event);
//     let txtarea = document.getElementById('txt')
//     h2.innerHTML='';
//      h2.innerHTML=event.target.value
//     h2.innerHTML=txtarea.value;
//     h2.innerHTML=v.value;

// }
// document.getElementsByTagName();
// document.querySelector('#man');
// document.querySelectorAll('man')
 document.getElementById('man').innerHTML='hello';
// innerhtml is a javascript property
// method() has a paratenses
// property has no paratenses
// to update what is inside an element and to get an element you will use innerhtml
window.alert(document.getElementById('man').innerHTML);
document.getElementsByClassName('best')[1].innerHTML="computer";
document.getElementsByName('')
document.querySelector('[uyo="xyx"]').innerHTML='hey';
document.getElementsByClassName('best')[1].innerHTML="computer";
document.getElementsByClassName('best')[2].innerHTML="welcome";
document.getElementsByClassName('best')[3].innerHTML="woman";
document.getElementsByClassName('best')[4].innerHTML="child";
let rtnData = document.querySelector('.mybest')
// variable in js
// var
// let
// const
var x=10;
let y=23;
    alert(y);
// variable is used to store data 
    // const variable is used to create variable that cannot change the value
 let m=50;
    m=45;
   alert(m); 
//    data type represent the data you are working with

// methods
// strings is any thing text in javascript
// javascript has data type function to nothe data type you are working with
var string='javascript';
// rtnData.innerHTML=typeof string;

// numbers
var num='10';
let num1=10.1;
let num2=10;
// rtnData .innerHTML=typeof num;

// boolean
// const bool=true
// constbool2=true
let gender='male'

let chkgender =gender=='male'? 'He\'s a Boy ':'she\'s a girl '
// rtnData .innerHTML=typeof chkgender;
// console is used to 
// console.error('manful is not defined')
// object you can store more thn one value
let obj={
    name:'manful computer',
    location:'376 nwaniba road',
    owner: function(){
        return [this.name+'   ' +this. location];
    }
};
alert(obj.owner())
let prmt = prompt('what is your name');
// rtnData.innerHTML=`welcome ${prmt} to our website!`


if( prmt!=='' && prmt !==null){
    rtnData.innerHTML=`welcome ${prmt} to our website`;
}
// array is a special type of object in javascript 
// let arr=[{
//     key1:'manful',
//     key2:'computer'

// },true,false,
// 4000,'hello world'
// ];

    

  


// rtnData.innerHTML=arr[3]
let arr2=['hello','worid','manful','computer'];
// rtnData.innerHTML=arr2[1];
arr2[4] = 'javascript';
// console.log(arr2)
// arr2.pop(); to remove the last value in array
rtnData.innerHTML=arr2
// operator
// assignment operator
// =x=
// +=x+yx=x+y
// **=
// %=
// comparison
// == return true if x is not eqaul

// === return true of both data type and value 
// =! return true if x not equals to y

// !==return true if x not equal to y in data type and value
// <
// >
// <= return true if x is less than or equal to y
// >=return true if x is greater or equals to y
// <=
// ? tenary operator is a short of if statement
// null colecing operator
// ??
let tx=10;
let tk='10';
rtnData.innerHTML=tk===tx;


// let yy=10
// var clicking =document. querySelector('.mouse')
// function increment(){
    // rtnData.innerHTML +=yy;
    // yy*=yy;
    // yy++;
    // clicking.innerHTML=yy;
// }
// control flow if statement
// it is used to set condition that your
// let xtc = 10;
// if (xtc > 10){
    // rtnData.innerHTML='yes'
    
// }
// else{
    // rtnData.innerHTML='is less than 10 or equals to'
// }
var ttx=true;
if(ttx){
    rtnData.innerHTML='manful';

}else if(ttx!== 'true'){
    rtnData .innerHTML='computer';

}else if(!ttx){
    rtnData.innerHTML='nwaniba';
} 

let xtx = (10*2 ) / 2 >50 ? 'yesss':'noooooo';
rtnData.innerHTML=xtx;


function calculate10percent(number,percent){
    return (percent / 100)*number;

}
    console.log(calculate10percent(10,1000))
function calaulatep(){

    let inp1= document.getElementById('inp1')
    let inp2= document.getElementById('inp2')

    rtnData.innerHTML=calculate10percent(inp1.value,inp2.value);
} 
let imagearray=[
    "C:/Users/hello/Downloads/IMG_20250604_092005_289.jpg",
    "C:/Users/hello/Download/IMG_20250604_092005_289.jpg",
    "C:/Users/hello/Documents/IMG_20250807_163458_646.jpg",
    "C:/Users/hello/Download/",
    "C:/Users/hello/Download/",


];
let prev=document.querySelector('.prev-btn') ;
let next=document.querySelector('.next-btn');
let carouse=document.querySelector('.mypics');
let starter = 0


next.addEventListener('click',function(){
    if (starter >=imagearray.length){
         starter=0;
    }
    carouse.src= imagearray[starter];
    // carouse.src=C:/Users/hello/Documents/IMG_20250807_163458_646.jpg/$ imagearray[starter];
    starter++;

})

prev.addEventListener('click',function(){
    carouse.src=imagearray[starter];
    starter--;
    
})
// swtch statement
let Name='akpan';
switch(Name){
    case 'akpan':
    rtnData.innerHTML='akpan is a boy';
    break;




    case 'ada':
    rtnData.innerHTML='ada is a girl';
    break;
    default:
    rtnData.innerHTML='i dont know if the person is a boy or a girl';




}
var country="Nigeria";
switch(country){
    case 'Nigeria':
        rtnData.innerHTML='is ada from nigeria';
        break;



        case 'nigeria':
        rtnData.innerHTML='is ada from canada';
        break;



        default:
        rtnData.innerHTML='is ada from ghana';






}


// var click =document. querySelector('.top')







let inc=7;
function my_num(){
if (inc >100){
    inc=100;
    return


}
    rtnData.innerHTML=inc;
    inc+=7;    
}
function myincrement(){
    let inpt= document.querySelector('.inpu')
    

    
    if (parseInt(inpt.value)  > 0){
    rtnData.innerHTML=inpt.value + 'is positive';



    }else if(parseInt(inpt.value)<0){
        rtnData.innerHTML=inpt.value='negative'  ;

    } 
    else{
        rtnData.innerHTML='null'
    }   
}

let=0
for (; y<10; y++){
    console.log(y)
}
let mybtn=document.querySelectorAll('.mybutton');
for(let x= 0; x<mybtn.length;x++){
    mybtn[x].addEventListener('click', function(){
        alert('hello')
        mybtn[x].innerHTML= 'welcome'  +   (x+1);
        // mybtn [x].setAttribute('manful ', 'mybtn'+(x) );this is to generate class for html
        
    }
)
}






//   let buttons = document.querySelectorAll(".buts").innerHTML;
//   let inputs = document.querySelectorAll(".inputs").value;

//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//       var attrValue = buttons[i].getAttribute("manful"); // get button's manful value


//       // find matching input by manful value
//       for (let j = 0; j < inputs.length; j++) {
        
//         if (inputs[j].getAttribute("manful") === attrValue) {
//           inputs[j].value = attrValue;
          
//         }
//         }
//       }
//     )};
  
// trying to
// let myinput=document.querySelectorAll('._input_');
// for(let i=0;i<_input_.length;);
// myinput.addEventListener('_input_', function(){
 

// })

// string method
//.length. it is used to return the length of a given string
// STRING.INDEXOF return the index position of a given string;
// strng.lastindexof()return the last position of a string
// string.search() search a given string and return the position
// string.slice()slice method extract a section of text and returnthe extracted part as anew string .it takes two parametre start and end







// string method in javascript
// string length
// string.concat();
// string .includes();
// string.endswith();
// srting.startwith();
// string.indexof();
// string.lastindex();
// string.match();
// string.repeat();retrun repeated string
// string.replace;
// string.search;
// string.slice();
// string.split();it is used to convert string to array
// string.substring();
// string.tolowercase();
// string.touppercase();
// string.trim();
// string.trimstart();
// string.trimend();





// let strcount = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// rtnData .innerHTML ='count  return:'+strcount.length;
// let search ='welcome to manful computer';
// rtnData.innerHTML=search.indexOf('manful');
// let url="https//www.goodlifeuyompcs.com.ng/asset/img/logo.png";
// rtnData.innerHTML=url.lastIndexOf('/');
// rtnData.innerHTML=search.search('to');


// research on sql injection

// let myinp=document.querySelector('._selector_');
// myinpt.addEventListener('input', function(){
//     let currType=myinpt.value;
//     if(currType.search('manful') !== -1){
//         alert('not allowed')
//     } 
//  })



//  let rnt2 =document.querySelector('.rnt2')
//  let count='computer';
//  rnt2.innerHTML=count.length;



//  let in1=document.querySelector('.fn')
//  let in2=document.querySelector('.fi') 
//  document.querySelector('.submit')
//  let btn=addEventListener('click',function(){
//     if (in1.value.length<8){
//         rnt2.innerHTML='firstname is not valid';


//     }else if(in2.value .length<8){
//         rnt2.innerHTML='lastname is not valid'

//     }else{
//         rnt2.innerHTML='both are not valid'
//     }
        
//     }
 


    
//  )
//  let count2='computer';
//  let buy='manful';

//  rnt2.innerHTML=count.concat(buy)
//   let npc ='JAVASCRIPT IS EASY TO LEARN';
//   rnt2.innerHTML=npc.toLowerCase.includes('is');
//   rnt2.innerHTML=inc.startsWith('manful');
let rnt3=document.querySelector('#rtn1')


// console.log(rnt3)



let textarray=[
    'welcome to manful computer',
    'we do web development',
    'we code with html',
    'we code with css',
    'we code with javascript'

];
let textstart=0;//will be using this to print the text on each position
let ind=0;//will be using it to loop the array
setInterval(function(){

    if(textstart>=textarray[ind].length){//check if it has completed writing
        let mytext= document.querySelector('#rtn1');
        rnt3.innerHTML=mytext.innerHTML.slice(0,-1);
        if(mytext.innerHTML.length<=0){
            ind++;
            textstart=0;
        }
    }
    if(ind >= textarray.length){
        ind=0;
        textstart=0;
    }
    rnt3.innerHTML+=textarray[ind].charAt(textstart);//writing 
    textstart++; //increment the textstart by one each time the function is being call
},100)


let t='welcome to manful computer institute, manful is located in uyo, manful computer nwaniba,manful js class, yess manful'
console.log(t.match(/manful/g));//note the g is called regular expression






let rep='manful';
rnt2.innerHTML=rep.repeat(5);







// for(y=0;y<manful.length;y++){
// rnt2.innerHTML += rep;

//  }

// let url='http;//manful.com/class#javascript'
// let rap ='url';
// rnt2.innerHTML=url .replace('#','good');



// let toarr ='welcome to manful technology'
// console.log(toarr.split(' '))

// rnt2.innerHTML=(toarr.split(' '));
// let username ='best Emmanuel';
// let namearr=username.split(' ');
// let initial=namearr[0][0]+namearr[1][0];

// let lstindex=username.lastIndexOf(' ');
// let extract=username.slice(0,1)+username.substring(lstindex + 1)[0];
// rnt2.innerHTML=extract.toUpperCase();

// console.log(extract)
// let theary =username.split('');
// console .log(theary)

let username;

document.getElementById('mysubmit').onclick=function(){
    username=document.getElementById('mytext').value

    document.getElementById('myh1').textContent=`Hello${username}`


}































































