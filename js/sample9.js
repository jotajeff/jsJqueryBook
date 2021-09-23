var colors = new Array('white ',
                        'black',
                        'custom');

var el = document.getElementById('colors');
el.innerHTML = colors[1];

totalColors = colors.length ;

//var numColors = document.getElementById('numColors');
//numColors.innerHTML(numColors);

var el = document.getElementById('numColors');
el.textContent = totalColors;