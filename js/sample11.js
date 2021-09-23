///  Create variables for the welcome message
var greeting = 'Hello ! ';
var name = ' Jota da Silva';
var message= ', please check your order: ' ;

/// II Concatenate the three variables above to creat e t he welcome message
var welcome = greeting +  name + message;
console.log(welcome);


/// Create variables to hold details about the sign
var sign = "Montague House";
console.log(sign);
var tiles = sign.length;
console.log(tiles);
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

/// II Get the element that has an id of greeti ng
var el = document.getElementById('greeting');

/* II Replace the content of that element with the
personal ized welcome message */
el.textContent = welcome;
el.classList.add('classTitle');

var elH1 = document.getElementsByTagName('h1');
//elH1.textContent = "Mundo das Placas";
//elH1.classList.add('classH1');

/*
var x = document.getElementById("myDIV");
x.getElementsByTagName("P")[1].style.backgroundColor = "red";
*/
elH1.getElementsByTagName("h1").classList.add("classH1");
console.log(elH1);


// Get the el ement that has an id of userSign then update its contents

var elSign = document.getElementById('userSign');
console.log(elSign);
//elSign.textContent = sign;
elSign.innerHTML =sign;



/// Get the element that has an id of ti l es then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles ;

/// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal' );
elSubTotal.textContent = ' $' + subTotal;

/// Get the element that has an id of shipping then update its contents
var elSubTotal = document .getElementById('shipping') ;
elSubTotal.textContent = '$' +shipping;


///  Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById( 'grandTotal') ;
elGrandTotal.textContent = '$ ' + grandTotal;