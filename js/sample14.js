var msg = 'Sign up to receive our newsletter for 10% off!';

function updateMessage() {
var elMSG = document.getElementById('message');
elMSG.textContent = msg;
elMSG.classList.add("myBackground");
}

updateMessage();

