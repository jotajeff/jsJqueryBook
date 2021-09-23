
/*
var height = 10;
var width = 5;
*/

function calculateArea(width, height){
    var area = width * height;
    return area;
}

//calculateArea(10,5);

var msg = " Total : ";

var elMessage = document.getElementById('message');
elMessage.textContent = msg + calculateArea(10,8) ;
elMessage.classList.add('myBackground');