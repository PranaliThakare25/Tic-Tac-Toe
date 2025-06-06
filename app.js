let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let count=0
let turnO=true// playerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box) => 
{
    box.addEventListener("click", () => 
    {
        console.log("box was clicked")
        if(turnO){//playerO
            box.innerText="O"
            turnO = false
        } else {//playerX
            box.innerText="X"
            turnO=true
        }
        box.style.pointerEvents= "none"
        count++;
        if(!checkWinner() && count===9)
        {
            showError();
            
        }
    })
})
//ResetGame
const resetGame = () =>
{
    turnO = true
    count=0
    enableBoxes()
    msgContainer.classList.add("hide")
}
// ---Disable Boxes
const disableBoxes = () =>
{
    boxes.forEach((box) => {
        box.style.pointerEvents="none"
    })
}
//---Enable Boxes
const enableBoxes = () =>
{
    boxes.forEach((box) => {
        box.style.pointerEvents="auto"
        box.innerText=""
    })
}
//--- To show Winner----
const showWinner=(winner) => 
{
    msg.innerText = `Cogratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}
//---To show Error---
const showError=() =>
{
    msg.innerText= `It's Draw! Try Again`
    msgContainer.classList.remove("hide")
   
}
//----To check Winner----
const checkWinner= () =>
{
    for (let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
     
    if(pos1Val != "" && pos2Val != "" && pos3Val != "")
      {
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner",pos1Val)
            showWinner(pos1Val);
            return true
        }
       }
       

    }
    return false
}
resetBtn.addEventListener("click",resetGame)