const userscore = document.getElementById("us")
const systemscore = document.getElementById("ss")
const btns = document.querySelectorAll(".option")
var score = 0
var wicket = 0
var overs = 0
var count = 0

const masc = document.getElementById("mainscore")
const mawi = document.getElementById("mainwick")
const balls = document.querySelectorAll(".ball")
const gameoverclose = document.getElementById("gamestart")
const gameoverdisplay = document.querySelector(".gameover")
const gameovercont = document.querySelectorAll(".con")


function gameover(){
    console.log("game over")
    document.getElementById("scoretotal").innerHTML = score
    gameoverdisplay.style.width = "40vw";
    gameoverclose.style.display = "block";
    setTimeout(()=>{
        gameovercont.forEach((v)=>{
            v.style.display = "block";
        })
    },500)
    reset()
}

function reset(){
    score = 0
    wicket = 0
    overs = 0
    count = 0
    masc.innerHTML = score
    mawi.innerHTML = 0
}

gameoverclose.addEventListener("click",()=>{
    gameoverdisplay.style.width = "0vw";
    setTimeout(()=>{
        gameovercont.forEach((v)=>{
            v.style.display = "none";
            
        gameoverclose.style.display = "none";
        })
    },800)
    
})

btns.forEach((val)=>{
    val.addEventListener("click",()=>{
        var useroption = val.getAttribute("id")
        userscore.innerHTML = useroption
        systemscore.innerHTML = Math.floor(Math.random()*7)
        var ov = document.getElementById("ov")
        var bal = document.getElementById("bal")
        count+=1
        // console.log(count)
        ov.innerHTML = parseInt(count/6)
        bal.innerHTML= count%6
        
        balls.forEach((ball)=>{
            
            if(Number(ball.getAttribute("id"))===count%6){
                
                ball.innerHTML = useroption
                if(userscore.innerHTML === systemscore.innerHTML){
                    const wi = document.querySelector(".al")
                    wi.style.display = "block"
                    setTimeout(()=>{
                        wi.style.display = "none"
                    },1500)
                    wicket+=1
                    mawi.innerHTML = wicket
                    ball.innerHTML="w"
                }
                else{
                    score+=Number(useroption)
                    masc.innerHTML = score
                }
            }
            if((count%6)===5){
                balls.forEach((bal)=>{
                    bal.innerHTML = "."
                })        
            }
            // ball.innerHTML = 
            // console.log(ball)
        })
        if(count === 12 || wicket===3){
            gameover()
            balls.forEach((bal)=>{
                bal.innerHTML = "."
            })     
            ov.innerHTML = 0
            bal.innerHTML= 0    
            
            userscore.innerHTML = "."
            systemscore.innerHTML = "."
        }
    })

})