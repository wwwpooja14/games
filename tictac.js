document.addEventListener("DOMContentLoder", () => {
    document.querySelector("gameboard").addEventListener("click", handleClick);
    let currentState = "o";

    function handleClick(e) {
        let targetCell = e.target;

        if (currentState === "O") {
            currentState = "X";

        } else {
            currentState = "O";
        }
        if (targetCell.innerHTML == "") {
            targetCell.innerHTML = currentState;
        }
    }
})