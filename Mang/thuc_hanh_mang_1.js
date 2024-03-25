let x = 0;
let array = Array();
function add_array() {
    array[x] = document.getElementById('textValue').value;
    alert("Element " + array[x] + " add to index " + x);
    x++;
    document.getElementById('textValue').value = "";
}
function display_array(){
    let e = "<hr>";
    for (let i = 0; i < array.length; i++){
        e += "Element " + i + " = " + array[i] + "<br>";
    }
    document.getElementById('result').innerHTML = e;
}