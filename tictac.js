var turn = 1;

function playerAction(element) {
    console.log(element);
    if (turn == 1) {
        element.innerHtml = "X";
        document.getElementById('messagesection').innerHtml = "Player 2 turn";
        turn = 2;
    } else if (turn == 2) {
        element.innerHtml = "O";
        document.getElementById('messagesection').innerHtml = "Player 1 turn";
        turn = 1;
    }
}