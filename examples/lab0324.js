/**
 * Created by hendrix on 3/24/15.
 */
function process() {
    var total = add();
    changeColor(total);
}
function add() {

    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var total = document.getElementById('total');
    var result = parseInt(num1.value) + parseInt(num2.value);
    total.innerHTML = result;
    return result;
}

function changeColor(total) {
    var box = document.getElementById('box');
    if(total > 0) {
        box.style.backgroundColor = "green";
    } else {
        box.style.backgroundColor = "red";
    }
}

