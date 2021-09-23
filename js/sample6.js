var price = 5;
var quantity = 14;
var total = price * quantity;


//Write total into the element with i d of cost
var el = document.getElementById('custo');
el.textContent = 'R$ ' + total;
