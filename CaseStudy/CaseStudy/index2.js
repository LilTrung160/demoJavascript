//làm từ bảng to nhất (15x15)
let rows = 15;
let cols = 15;
const cells = 40;

let canvas = document.getElementById('caroCanvas');
let ctx = canvas.getContext('2d');

let board = [];
let currentPlayer = 1;//người chơi hiện tại là player1 = 1

function initializeBoard() {
    board = []; //tạo bảng rỗng
    for (let i = 0; i < rows; i++){
        const row = [];
        for (let j = 0; j < cols; j++){
            row.push(0);
        }
        board.push(row);
    }
}

function resizeCanvas() {
    canvas.width = cols * cells;
    canvas.height = rows * cells;
}

function drawBoard(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            ctx.beginPath();
            ctx.rect(j * cells, i * cells, cells, cells);
            ctx.stroke();
            if (board[i][j] === 1){
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(j * cells + cells / 2, i * cells + cells / 2, cells / 2 - 2, 0, Math.PI*2);
                ctx.fill();
            }else if (board[i][j] === 2){
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.arc(j * cells + cells / 2, i * cells + cells / 2, cells / 2 - 2, 0, Math.PI*2);
                ctx.fill();
            }
        }
    }
}

function handleClick(event){
    const x = Math.floor(event.offsetX / cells);
    const y = Math.floor(event.offsetY / cells);
    if (board[y][x] === 0){
        board[y][x] = currentPlayer;
        if (checkWin(x, y, currentPlayer)){
            alert(`Player ${currentPlayer} is WIN!`);
            resetBoard();
        }else if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 1 ? 2 : 1;
        }
        drawBoard();
    }
}

function checkWin(x, y, player){
    let winCondition = (rows === 3 && cols === 3) ? 3 : 5;
    //check hang` ngang
    let count = 1;
    for (let i = x - 1; i >= 0 && board[y][i] === player; i--) count++;
    for (let i = x + 1; i < cols && board[y][i] === player; i++) count++;
    if (count >= winCondition) return true;

    //check hang` doc
    count = 1;
    for (let i = y - 1; i >= 0 && board[x][i] === player; i--) count++;
    for (let i = y + 1; i < rows && board[x][i] === player; i++) count++;
    if (count >= winCondition) return true;

    //check duong` cheo' tu` tren phai xuong duoi trai
    count = 1;
    for (let i = x + 1, j = y - 1; i < cols && j >= 0 && board[j][i] === player; i++, j--) count++;
    for (let i = x - 1, j = y + 1; i >= 0 && j < rows && board[j][i] === player; i--, j++) count++;
    if (count >= winCondition) return true;

    //tren trai xuong duoi phai
    count = 1;
    for (let i = x - 1, j = y - 1; i < cols && j >= 0 && board[j][i] === player; i--, j--) count++;
    for (let i = x + 1, j = y + 1; i >= 0 && j < rows && board[j][i] === player; i++, j++) count++;
    if (count >= winCondition) return true;

    return false;
}

function checkDraw() {
    return board.every(row => row.every(cell => cell !== 0));
}

function resetBoard(){
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            board[i][j] = 0;
        }
        currentPlayer = 1;
        drawBoard();
    }
}

function changeBoardSize(size) {
    rows = size;
    cols = size;
    initializeBoard();
    resizeCanvas();
    drawBoard();
}

canvas.addEventListener('click', handleClick);
//gắn sự kiện click vào canvas, khi click sẽ gọi ra hàm handleClick
initializeBoard();
resizeCanvas();
drawBoard();
