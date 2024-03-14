// một số cách lấy input đầu vào
// c1: sử dụng hàm promt
/*let a = +prompt("Nhap a: ");
let b = +prompt("Nhap b: ");
if (a === 0) {
    if (b === 0){
        alert("Vo so nghiem");
    } else{
        alert("Vo nghiem");
    }
} else{
    let x = -b/a;
    document.write("x = ", x);
}*/
function add1() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a + b;
    document.getElementById("result").innerHTML = "a + b = " + c;
}
function add2() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a - b;
    document.getElementById("result").innerHTML = "a - b = " + c;
}
function add3() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a * b;
    document.getElementById("result").innerHTML = "a * b = " + c;
}
function add4() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = a / b;
    document.getElementById("result").innerHTML = "a / b = " + c;
}