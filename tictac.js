document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".game"),addEventListener("click", handleClick);
    let currentState = "O";
    let clickedcell =["","","","","","","","",""];
    let winningCombinations =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    function handleClick(e){
        let targetCell=e.target;
        
        if (currentState==="O"){
            currentState ="X";

        }else{ currentState ="O";
        }
        if (targetCell.innerHTML == ""){
           targetCell.innerHTML = currentState;
        }

        let clickedcellIndex =targetCell.getAttribute("data-index");
        clickedcell[clickedcellIndex] =currentState;

        findResult();
        console.log(clickedcell);
    }
    function findResult(){
        let howManyCellClicked = countHowManyCellClicked();

        if (howManyCellClicked > 4){
            findWinner();
        }
    }
    function countHowManyCellClicked(){
        //let arr = ["X","","","","","","","O",""]

        let filteredClickedCells = clickedCell.filter((element) =>{

            return element !='';
        });
        //console.log(filteredClickedCells.length);
        return filteredClickedCells.length;
    }
    function findWinner(){
        for (i =0; i < winningCombinations.length -1; i++){
            let element = winningCombinations[i];

            let a =clickedCell[element[0]];
            let b = clickedCell[element[1]];
            let c = clickedCell[element[2]];

            if (a ===b && b ===c){
                winnerIs =a;
                break
            }
        }
        alert(winnerIs)
        if (winnerIs !=''){
            isGameOver = true;
            alert(winnerIs + "has won the game");
        }
    }
   
});