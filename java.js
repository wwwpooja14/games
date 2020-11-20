document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".grid").addEventListener("click", handleClick)
    let currentState = "O"
    let clickedCells = ['', '', '', '', '','','','','']
    let winnerIs = ''
    let isGameOver = false
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]

    function handleClick(e) {

        let targetCell = e.target
        let targetIndex = e.target.getAttribute("data-index")
             

        setCurrentState()
      

        function setCurrentState() {
            currentState = currentState === "X" ? "O" : "X";
            clickedCells[targetIndex] = currentState
            targetCell.innerHTML = currentState
            findResult()
          
        }
        
       
       
        function findResult () {

            let howManyCellClicked = countHowManyCellClicked()
            console.log(howManyCellClicked)
            if(howManyCellClicked > 4) {
                findWinningCombination()
            }



        }

        function findWinningCombination() {
            console.log("findWinningCombination triggered")

            for (i = 0; i < 7; i++) {
                element = winningCombinations[i]
                let a = clickedCells[element[0]]
                let b = clickedCells[element[1]]
                let c = clickedCells[element[2]]

                if(a === '' || b === '' || c === '') {
                    continue
                }

                if(a === b && b === c) {
                    winnerIs = a
                    break
                }
            }

            alert(winnerIs)
            if (winnerIs != '') {
                isGameOver = true
                alert(winnerIs+ " has won the game")
            }
          
        }
 
        function countHowManyCellClicked() {
            let filteredClickedCells = clickedCells.filter((element) => {
                return element != ''
            })

            return filteredClickedCells.length;
        }
       

        function writeOnClick() {
             targetCell.innerHtml = currentState

        }



    }


  


  
})