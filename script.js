let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector ("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let msg2= document.querySelector("#msg2");

let turnO = true;
let count = 0;

const winPatterns = [
     [0,1,2],
     [0,3,6],
     [0,4,8],
     [1,4,7],
     [2,5,8],
     [2,4,6],
     [3,4,5],
     [6,7,8],
];



const resetGame = () => {
    turnO= true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}


 boxes.forEach((box) =>{
    box.addEventListener("click" ,  () =>{
        count++;
        console.log("box was clicked");
       if (turnO) {
        box.dataset.player ="cat";
        box.innerHTML = `<img src="https://i.pinimg.com/736x/3f/86/bf/3f86bfb876c140b090276659e07a3431.jpg"></img>`;
        turnO = false;
       } else {
        box.dataset.player ="dog";
        box.innerHTML = `<img src = "https://i.pinimg.com/1200x/5b/40/bd/5b40bdbe8b8fe41e40eed4cb428c3f80.jpg"></img>`;
        turnO = true;
       }
      box.disabled = true;

      checkWinner ();
    }
);
}

);

const disableBoxes = () => {
    for( let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
        delete box.dataset.player;
        
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showDraw = () => {
    msg.innerText = `ooopss, it's Draw.. `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for( let pattern of winPatterns) {

            let pos1Val = boxes[pattern[0]].dataset.player;
            let pos2Val = boxes[pattern[1]].dataset.player;
            let pos3Val = boxes[pattern[2]].dataset.player;

            if(pos1Val && pos2Val  && pos3Val){
                if(pos1Val ===pos2Val && pos2Val === pos3Val){
                    console.log("Winner", pos1Val);
                    showWinner(pos1Val);
                    return;
                }
                
            }
        }

        if(count ===9){
                showDraw();
            }
            
    
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",  resetGame);
