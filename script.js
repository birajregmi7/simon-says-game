// let para = document.querySelector('.para')
// let level = 0;
// let gameSeq = []
// let userSeq = []
// let started = false;
// let btns = ['red', 'green', 'blue', 'yellow']
// let body = document.querySelector('body')

// document.addEventListener('keypress', function () {
//     if (started == false) {

//         // console.log('game started')
//         started = true;
//     }
//     levelUp();
// })

// function levelUp() {
//     userSeq = []
//     level++;
//     para.innerHTML = `Level ${level}`

//     let randIdx = Math.floor(Math.random() * 4)
//     let randColor = btns[randIdx]
//     let randbtn = document.querySelector(`.${randColor}`)
//     gameSeq.push(randColor)
//     console.log(gameSeq)
//     gameFlash(randbtn)
// }
// function gameFlash(btn) {
//     btn.classList.add('flash');
//     setTimeout(function () {
//         btn.classList.remove('flash')
//     }, 500)

// }
// function userFlash(btn) {
//     btn.classList.add('userflash');
//     setTimeout(function () {
//         btn.classList.remove('userflash')
//     }, 350)

// }

// function checkAns(idx) {
//     // console.log(`current level: ${level}`)

//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         para.innerHTML = `Game over ! Press any key to start. Your score <b>${level}</b>`
//         body.classList.add('bodycolor')
//         setTimeout(function () {
//             body.classList.remove('bodycolor')
//         }, 300)
        
//         reset();
//     }
// }
// let allBtns = document.querySelectorAll('.btn')
// for (btn of allBtns) {
//     btn.addEventListener('click', btnPress);
// }
// function btnPress() {
//     // console.log(this)
//     let btn = this;
//     userFlash(btn)

//     let userColor = btn.getAttribute('id')
//     //  console.log(userColor)
//     userSeq.push(userColor)
//     console.log(userSeq)
//     checkAns(userSeq.length - 1);

// }
// function reset(){
//     started = false;
//     gameSeq=[]
//     userSeq=[]
//     level = 0;
// }


 let para = document.querySelector('p')
 let gameSeq =[]
 let userSeq=[]
 let btns= ['red','green','blue','yellow']
 let level = 0;
 let start = false;
 let body = document.querySelector('body')
let audio = document.querySelector
('#clip1')
let audio2 = document.querySelector('#clip4')
let highscore = document.querySelector('.highscore')
let maxScore=0;
let startBtn = document.querySelector('.start-button')

 startBtn.addEventListener('click',function(){
    if(start==false){
        console.log('Game started')
        start = true;

    } 
    levelUp();
 })
 function levelUp(){
   userSeq=[];
    level++;
    para.innerText = `Level ${level}`
   if(maxScore<level){
      maxScore = level;
      highscore.innerText = `HighScore : ${maxScore}`
   }
    let randomIdx = Math.floor(Math.random()*4)
    let randomColor = btns[randomIdx]
    let randomBtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor)
    gameFlash(randomBtn)

 }
 function gameFlash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash')
    },400)
 }
 function userFlash(btn){
    btn.classList.add('userflash')
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250)
 }

 let allBtns = document.querySelectorAll('.btn')
 for(btn of allBtns){
   btn.addEventListener('click',btnPress)


 }
 function btnPress(){
   let btn = this;
   userFlash(btn)
   audio.play();
   let userColor = btn.getAttribute('id')
   userSeq.push(userColor)
   checkAns(userSeq.length-1);
 }
 function checkAns(idx){
   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length-1 === gameSeq.length-1){
         setTimeout(levelUp,1000)
      }

   }else{
      console.log('you lost')
      para.innerText = `you lost, press key and start`
      body.classList.add('bodycolor')
      setTimeout(function(){
         body.classList.remove('bodycolor')
      },300)
      audio2.play();
      reset();
   }
 }
 function reset (){
   level =0;
   start = false;
   gameSeq=[]
   userSeq =[]
 }


 