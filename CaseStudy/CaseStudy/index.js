/*
- tao bang 3x3: board gom` 9 phan` tu tu` [0-8]
- tao bien tao nguoi choi:  bat dau tu X
- tao ham ve bang drawBoard
    + vong lap tao bang
- tao ham checkWin:
    + win => ktra vi tri thang => 3 o^ = nguoi` choi
    + dieu kien thang: 3 o hang ngang, doc, 2 duong cheo
    + hoa` => khi X/O khong con nuoc di trong board
- tao ham cac buoc di vao board
- tao ham resetGame => tao bang moi
*/
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function drawBoard(){
    let cells = document.getElementsByClassName('cell');
    for (i = 0; i < 9; i++){
        cells[i].innerText = board[i];
    }
}

function checkWin(player){
    let winPosition = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //ngang
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //doc
        [0, 4, 8], [2, 4, 6]             //2 cheo'
    ];
    for (const positions of winPosition) {
        let [a, b, c] = positions;
        if (board[a] === player && board[b] === player && board[c] === player){
            return true;
        }
    }
    return false;
}

function clickHandle(positions){
    if (board[positions] === ''){
        board[positions] = currentPlayer;
        drawBoard();
        if (checkWin(currentPlayer)){
            alert(`Player ${currentPlayer} is winner!!!`);
            resetGame();
            return;
        }
        if (board.indexOf('') === -1){
            alert('Draw. Game over!!!');
            resetGame();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }else{
        alert('This position has been selected. Please choose another location');
    }

}

function resetGame(){
    board = ['', '', '', '', '', '', '', '', ''];
    drawBoard();
}
/*
* const canvas = document.getElementById('caroCanvas');
const ctx = canvas.getContext('2d');

const rows = 15;
const cols = 15;
const cells = 40;

canvas.width = cols * cells;
canvas.height = rows * cells;

const board = [];
for (let i = 0; i < rows; i++) {
    const row = [];
    for (let i = 0; i < cols; i++) {
        row.push(0);
    }
    board.push(row);
}
let currentPlayer = 0;

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.beginPath();
            ctx.rect(j * cells, i * cells, cells, cells);
            ctx.stroke();
            if (board[i][j] === 1) {
                ctx.fillStyle = 'black';
                ctx.beginPath();
                ctx.arc(j * cells + cells / 2, i * cells + cells / 2, cells / 2 - 2, 0, Math.PI * 2);
                ctx.fill();
            } else if (board[i][j] === 2) {
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.arc(j * cells + cells / 2, i * cells + cells / 2, cells / 2 - 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
}

//xử lý nước đi của người chơi
function handleClick(event) {
    const x = Math.floor(event.offsetX / cells);
    const y = Math.floor(event.offsetY / cells);
    if (board[y][x] === 0) {
        board[y][x] = currentPlayer;
        if (checkWin(x, y, currentPlayer)) {
            alert(`Player ${currentPlayer} wins!`);
            resetBoard();
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 1 ? 2 : 1;
        }
        drawBoard();
    }
}

function checkWin(x, y, player) {
    let count = 1;
    for (let i = x - 1; i >= 0 && board[y][i] === player; i--) count++;
    for (let i = x + 1; i < cols && board[y][i] === player; i++) count++;
    if (count >= 5) return true;

    count = 1;
    for (let i = y - 1; i >= 0 && board[i][x] === player; i--) count++;
    for (let i = y + 1; i < rows && board[i][x] === player; i++) count++;
    if (count >= 5) return true;

    count = 1;
    for (let i = x - 1, j = y - 1; i >= 0 && j >= 0 && board[j][i] === player; i--, j--) count++;
    for (let i = x + 1, j = y + 1; i < cols && j < rows && board[j][i] === player; i++, j++) count++;
    if (count >= 5) return true;

    // Check diagonally (top-right to bottom-left)
    count = 1;
    for (let i = x + 1, j = y - 1; i < cols && j >= 0 && board[j][i] === player; i++, j--) count++;
    for (let i = x - 1, j = y + 1; i >= 0 && j < rows && board[j][i] === player; i--, j++) count++;
    if (count >= 5) return true;

    return false;
}

function checkDraw() {
    return board.every(row => row.every(cell => cell !== 0));
}

function resetBoard() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j] = 0;
        }
    }
    currentPlayer = 1;
    drawBoard();
}

canvas.addEventListener('click', handleClick);
drawBoard();

canvas.addEventListener('click', handleClick);
drawBoard();
/*
- Tạo ra cột, dòng, ô của bàn cờ => kích cỡ của ô canvas
    + width của canvas = cột * ô
    + height của canvas = dòng * ô
- Tạo ra biến khởi tạo người chơi hiện tại, bắt đầu bằng 1
- Tạo hàm vẽ bảng, tạo bảng
    + drawBoard: - vẽ lại bảng
                 -
- Tạo hàm ghi nhận click của ng` chơi
- Tạo hàm checkWin & checkDraw
    + Win: nếu 5 ô liên tiếp giống nhau theo hàng dọc, ngang, 2 chéo
    + Draw: nếu không còn ô nào để đánh
    => reset game => tạo hàm resetBoard: reset lại bảng trống
3. **Khởi tạo và vẽ bảng (`board` và `drawBoard`)**:
   - `const board = new Array(rows).fill().map(() => new Array(cols).fill(0));`: Tạo một mảng 2D (`board`) để lưu trạng thái của các ô trong bảng. Mỗi ô ban đầu có giá trị là 0, tượng trưng cho ô trống.
   - `function drawBoard() { ... }`: Hàm này được sử dụng để vẽ bảng và các ô trên canvas. Mỗi ô được vẽ là một hình chữ nhật, với màu và biểu tượng tương ứng với trạng thái của ô.

4. **Xử lý sự kiện click trên canvas (`handleClick`)**:
   - `canvas.addEventListener('click', handleClick);`: Đăng ký một sự kiện click trên canvas, khi người dùng click vào canvas, hàm `handleClick` sẽ được gọi để xử lý nước đi của người chơi.

5. **Kiểm tra chiến thắng và hòa (`checkWin`, `checkDraw`)**:
   - `function checkWin(x, y, player) { ... }`: Hàm này kiểm tra xem người chơi hiện tại đã chiến thắng hay chưa, bằng cách kiểm tra xem có 5 ô liên tiếp giống nhau theo hàng ngang, dọc hoặc chéo không.
   - `function checkDraw() { ... }`: Hàm này kiểm tra xem có hòa không, tức là không còn ô nào trống trong bảng.

6. **Reset bảng khi trò chơi kết thúc (`resetBoard`)**:
   - `function resetBoard() { ... }`: Hàm này được sử dụng để reset bảng khi trò chơi kết thúc, bằng cách đặt lại trạng thái của tất cả các ô về giá trị ban đầu và đổi người chơi hiện tại.

7. **Vẽ bảng khi tải trang (`drawBoard`)**:
   - `drawBoard();`: Gọi hàm `drawBoard()` khi trang web được tải để vẽ bảng cờ ban đầu trên canvas.

 */