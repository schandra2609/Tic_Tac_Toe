let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#new");
let turnX = true;
let winMsgCont = document.querySelector(".msg");
let winner = document.querySelector("#win");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.onclick = () => {
        box.innerText = (turnX) ? "X" : "O";
        turnX = !turnX;
        box.disabled = true; 
        checkWinner();
    }
});

newGame.onclick = () => {
    console.log("Button clicked");
    turnX = true;
    winMsgCont.classList.add("hide");
    enableBoxes();
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (top) => {
    winner.innerText = "Congratulations! Winner is " + top;
    disableBoxes();
}

const checkWinner = () => {
    for(pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                winMsgCont.classList.remove("hide");
            }
        }
    }
};