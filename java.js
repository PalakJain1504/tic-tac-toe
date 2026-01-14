const btn= document.querySelectorAll(".btn");
let reset= document.querySelector("#reset");
let display=document.querySelector("h3");
let turn0=true;

let winnigPattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]

btn.forEach((bt)=>{
    bt.addEventListener("click",()=>{
        console.log("clicked");
        if(turn0===true){
            bt.innerText="O";
            turn0=false;
        }else{
            bt.innerText="X";
            turn0=true;
        }
                   
            bt.disabled=true;

        checkWinner();
    })
})

reset.addEventListener("click",resetGame)

function resetGame(){
     btn.forEach((bt)=>{
        bt.innerText="";
        bt.disabled=false;
        turn0=true;
        display.style.display='none';
    })
}

function allFilled(){
    return [...btn].every(b=>b.innerText!=="");
}
const checkWinner= ()=>{
    let winnerFound= false;
    for(let pattern of winnigPattern){
        let value1=btn[pattern[0]].innerText
        let value2=btn[pattern[1]].innerText
        let value3=btn[pattern[2]].innerText

        if(value1 !== "" && value1 === value2 && value2 === value3){
            display.innerText=`${value1} Wins!!`
            for(let bt of btn){

bt.disabled=true;
            }
            
            display.style.display='block';
            winnerFound=true;
            break;
        }
        
    }

    if(!winnerFound&&allFilled()){
        display.innerText = "It's a Draw!";
        display.style.display = 'block';

    }
}