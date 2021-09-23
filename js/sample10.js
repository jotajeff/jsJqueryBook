// II Create the array
var colors = ['white',
            'black' ,
            'pink',
            'grey',
            'orange',
            'custom'];

colors[3] = 'blue' ; 

var el = document .getElementById('colors') ;

el .textContent = colors[3];

totalColors = colors.length;
var el = document.getElementById('numColors');
el.textContent = totalColors;

console.log("color added : ",colors[3] );

document.getElementById("paragraph").textContent = "Hello, World";


var number = 12;
var street= 'Ivy Road';
var address = number + street ;

var localEntrega = document.getElementById('localEntrega');
localEntrega.textContent = address;
