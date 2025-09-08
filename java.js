
// first js project



// let chatArea=document.querySelector('.chat-gpt1')
// let chatBtn=document.querySelector('.mybuttom')
// let chatInput=document.querySelector('.myinput')
// // console.log(chatBtn)



// chatBtn.addEventListener('click',displaychat);
// chatInput.addEventListener('keyup',function(event){
//     if (event.key==="Enter")chatBtn.click();
// }
// )


// function displaychat (){
//     userchat('hello world')
// let mychat =chatInput.value;
// userchat(mychat);
// robotChat('pilccdcdccn')
// mychat.Value="";



// }

// function userchat(msg){
// let textcontainer=document.createElement('div')
//     textcontainer.className= 'mybutton1'
//     textcontainer.innerHtml=`
//         <div class="mybutton1">
//             <button class="button1">
//             <h5>${msg}</h5>
//             <i class="fas fa-user "></i>
//             </button>
//         </div>
//         `;
//     chatArea.appendChild(textcontainer);


    
// }
// function robotChat(msg){
//     let textcontainer=document.createElement('div')
//     textcontainer.className='button1';
//     textcontainer.innerHTML=`
//     <div>
//      <span class="robottext">
//                 <li class="fas fa-robot"></li>
//                 </span>
//                 ${msg}</div>



//     `;
//     chatArea.appendChild(textcontainer);

// }
let chatArea = document.querySelector('.chat-gpt1');
let chatBtn = document.querySelector('.mybuttom');
let chatInput = document.querySelector('.myinput');
chatBtn.addEventListener('click', displaychat);
chatInput.addEventListener('keyup', function(event) {
    if (event.key === "Enter") chatBtn.click();
});
function displaychat() {
    let mychat = chatInput.value.trim();
    mychat=mychat.toLowerCase();

    let RobotRESPONSE;
    let responseindex;

        RobotRESPONSE = notRecognize[Math.floor(Math.random() * notRecognize.length)];

    userchat(mychat);
    robotChat("");
    if(mychat.startsWith('calculate')){
        RobotRESPONSE=calculateExpression(mychat);
        // RobotRESPONSE=RobotRESPONSE.toFixed(2);
        // console.log(RobotRESPONSE)
        handleresponse(RobotRESPONSE.toString());
        return
    }

    for (object of response){
        if(mychat.includes(object.key)){
            responseindex=Math.floor(Math.random()*object.replies.length);
            RobotRESPONSE=object.replies[responseindex]

        }

    }
    handleresponse(RobotRESPONSE);

    chatInput.value = "";    

    // if(mychat.includes('date')||mychat.includes('today\s date'))
    // {
    //     txt= response[0];

    //     RobotRESPONSE = Object.values(txt);
    //     // console.log(RobotRESPONSE)
    //     respArr=Object.values(txt);

    //     RobotRESPONSE = respArr[Math.floor(Math.random() * respArr.length)];

    //     handleresponse(RobotRESPONSE);
    // }

    // else if(mychat.includes('time')||mychat.includes('what is time'))
    // {
    //     txt= response[1];

    //     RobotRESPONSE = Object.values(txt);
    //     // console.log(RobotRESPONSE)
    //     respArr=Object.values(txt);

    //     RobotRESPONSE = respArr[Math.floor(Math.random() * respArr.length)];

    //     handleresponse(RobotRESPONSE);

    // }
    // else{
    //     RobotRESPONSE = 'please say that again...';
    //     handleresponse(RobotRESPONSE);

    // }
    
        
    

}
// console.log(response)
function userchat(msg) {
    let textcontainer = document.createElement('div');
    textcontainer.className = 'mybutton1';
    textcontainer.innerHTML = `
        <div class="mybutton1">
            <button class="button1">
                <h5>${msg}</h5>
                <i class="fas fa-user"></i>
            </button>
        </div>
    `;
    
    chatArea.appendChild(textcontainer);
}
function robotChat(msg) {
    // Create a new container for the bot message
    let textcontainer = document.createElement('div');
    textcontainer.className = 'mybutton2';

    // Add inner HTML for the robot chat bubble
    textcontainer.innerHTML = `
        <div class="mybutton2">
            <button class="mybtn">
                <!-- Robot icon -->
                <span class="robottext">
                    <i class="fas fa-robot"></i>
                    <span class="_thinking_">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </span>

                <!-- Typing dots animation (thinking effect) -->
                
                <!-- Bot message -->
                <h5 class="__robo__">${msg}</h5>
            </button>
        </div>
        <span class="rntresponse">${msg}</span>
    `;

    // Append to the chat area
    chatArea.appendChild(textcontainer);
}
function handleresponse(msg) {
    let rnt2 =document.querySelectorAll('.mybtn');
    let txtstart=0;
    let lst =rnt2[rnt2.length-1]
    let last=lst.querySelector('.__robo__');
    let thinking = lst.querySelector('._thinking_');

    //console.log(thinking);
   // console.log(msg);

    let timer=setInterval(function(){
        if(txtstart>=msg.length){
            clearInterval(timer);
            timer=0;
            thinking.remove();

        
        }
        scrollchat();



        last.innerHTML+=msg.charAt(txtstart);
        txtstart++;

    },200)
}
function scrollchat(){
    // if (chatArea.innerHeight)
    // alert(chatArea.clientHeight)
    chatArea.scrollTop = chatArea.clientHeight + 100;
    chatArea.addEventListener('scroll',function(){
        
    })

}

function calculateExpression(expression){
    try{
    let saveToUse =expression.replace(/[^0-9+\-*/().\s]/g, "");//this is for removing anything thst is not contain in the regular expression ans replace it with empty string this is called pattern matching
    let result=Function(`"use strict";return (${saveToUse})`)();

    // return eval(saveToUse);
    if(isNaN(result)|| result===Infinity || result ===-Infinity){
        return `sorry , i can not calculate${expression},pls check your input`


    }
        return result;
        











    }catch(error){
        return`sorry check your input and try again later`
    }
}
// console.log(calculateExpression('100 /15 '))

document.addEventListener('keydown',function(event){
    // console.log(event)
    let scroll=20;
    if(event.key==="ArrowUp"){
        chatArea.scrollTop-=scroll;
        
    }
    else if(event.key==="ArrowDown"){
        chatArea.scrollTop+=scroll;
    }

})
    

