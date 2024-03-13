//bài 1
let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';

document.write("Bài 1: Khai báo các biến thuộc các kiểu khác nhau, gán giá trị cho chúng và in ra tài liệu HTML.");
document.write("<br>");
document.write("<br>");
document.write("i = " + i);
document.write("<br>");
document.write("f = " + f);
document.write("<br>");
document.write("b = " + b);
document.write("<br>");
document.write("s = " + s);
document.write("<br>");
document.write("<br>");

//bài 2
let width = 100;
let height = 50;
let area = width * height;

document.write("Bài 2: Viết một đoạn mã Javascript, khai báo biến width chứa giá trị độ rộng của hình chữ nhật, biến height chứa giá trị chiều cao của hình chữ nhật. In ra màn hình diện tích của hình chữ nhật đó.");
document.write("<br>");
document.write("<br>");
document.write("Hình chữ nhật này có diện tích = " + area + "m2");

//bài 3
let a = prompt("Nhập a: ");
let b = prompt("Nhập b: ");
if (a % b === 0) {
    alert(a + " là bội số của " + b);
} else {
    alert(a + " không phải là bội số của " + b);
}