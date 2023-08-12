var time = 60;
var score=0;
var ran=0;
function timer(){
    let timer = setInterval(()=>{
        if(time>0){

            time--;
            document.querySelector("#timerbox").textContent=time
        }
        else{
            clearInterval(timer)
            document.querySelector("#pannelbtm").innerHTML= `<h1>GAME OVER</h1>`
        }
    },1000)
}

function hit(){
    ran = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent=ran;
}

function scorevalue(){
    score+=10;
    document.querySelector("#box").textContent=score
}

function createbubble(){
    let bubble= " "

for(i=1;i<130;i++){
  let ran =Math.floor(Math.random()*10)
  bubble +=`  <div class="bubble">${ran}</div>`
}

document.querySelector("#pannelbtm").innerHTML =bubble;
}

document.querySelector("#pannelbtm").addEventListener("click",function (key){
    let clickvalue = Number(key.target.textContent)
    if(clickvalue===ran){
        scorevalue();
        createbubble();
        hit();

    }
})

createbubble();
timer();
hit();
