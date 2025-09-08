// alert('hello')
// let chartarea=document.querySelector('.chatgpt');
// let chatBtn=document.querySelector('.mybutton')
// let chatinput=document.querySelector('.myinput')

// chatBtn.addEventListener('click',displaychat)
// chatBtn.addEventListener('keyup'   , function(){
//     if(event.key==='enter')chatBtn.click();
// }
// );
// function displaychat(){
// let mychat=chatinput.value.trim();
// if(mychat==="")return;
// userchat=(mychat)
// robotChat(anything)
// chatinput .value="";

// }
// function userchat (msg){
//     let textcontainer=document.createElement('div');
//     textcontainer.className('.mybutton1');
//     textcontainer.innerHTML = `
//         <div class="mybutton1">
//             <button class="button1">
//                 <h5>${msg}</h5>
//                 <i class="fas fa-user"></i>
//             </button>
//         </div>
//     `;
// }
//     chatArea.appendChild(textcontainer)
//     function robotchat(msg){
//         let textcontainer=document.createElement('div');
//         textcontainer.className('.mybutton2')
//         textcontainer.innerHTML=` <div class="mybutton2">
//                 <button class="mybtn">
//                     <span class="robottext">
//                 <li class="fas fa-robot"></li>
//                 </span>
//                 <h5>${msg}</h5>
//                 </button>
//             </div>`;
//     }
//     chartarea.appendChild(textcontainer)


let hour =rntdate()[1]% 12;
alert(hour)
    hour =hour <10?'0'+hour :hour;
let minute=rntdate()[5];
    minute=minute < 10 ? '0'+minute : minute; 
let sec=rntdate()[6];
    sec=sec < 10 ? '0'+ sec : sec 
let ampm=rntdate()[1] >=12 ? 'pm':'Am';          

const response =[
    {
        key: 'date',
        replies: [
            `todats date is ${rntdate()[3]} ${rntdate()[7]} ${rntdate()[2]}`,
            `${rntdate()[3]} ${rntdate()[7]} ${rntdate()[2]}`,
            `ok,Today,is ${rntdate()[4]}`,
            `${rntdate()[7]} ${rntdate()[2]} `,
            `thank you for asking:${rntdate()[3]} ${rntdate()[7]} ${rntdate()[2]}`,
        ]

    },
    {
        key:'time',
        replies: [
          `the time is ${hour} ${minute} ${ampm}`,
        `${rntdate()[3]} ${rntdate()[7]} ${rntdate()[2]}`,
        `the current time when you make this request is ${hour}:${minute} ${sec}`,
        `its ${hour} : ${minute} ${sec}${ampm} `,
        ` ${hour} : ${minute} ${sec} ${ampm}`,
        ]
    },
    {
        key: 'name',
        replies:[
            'president tinubu'
        ]
    }
]

const notRecognize = [
    'i dont understand','pls ask again',
    'i dont have knowledge of that','ask again',
    'i have mot been updated'
]

function rntdate(){
    let dte =new Date();
    let mnt=dte.getMonth();
    let hr=dte.getHours();
    let yr=dte.getFullYear();
    let min=dte.getMinutes();
    let sec=dte.getSeconds();
    let tdy=dte.getDay();
    let date=dte.getDate()
    let monarr=['january',
        'febraury',
        'march',
        'April',
        'may',
        'june',
        'july',
        'August',
        'september',
        'october',
        'november',
        'december'
    ];

    return [mnt,hr,yr,date,tdy,min,sec,monarr[mnt]];




}


