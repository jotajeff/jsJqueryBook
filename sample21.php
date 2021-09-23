<!DOCTYPE html>
<html lang=”pt-br”>
<head>
<title>Basic Function</title>

<meta charset="utf-8">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

<style>
    .progress {
    position: relative;
	height: 25px;
}
.progress > .progress-type {
	position: absolute;
	left: 0px;
	font-weight: 800;
	padding: 3px 30px 2px 10px;
	color: rgb(255, 255, 255);
	background-color: rgba(25, 25, 25, 0.2);
}
.progress > .progress-completed {
	position: absolute;
	right: 0px;
	font-weight: 800;
	padding: 3px 10px 2px;
}
</style>

</head>
<body>

<div class="container">
    
<h1 id="hotelName" class="text-warning text-uppercase">  Nome do Hotel </h1>

<P>Total de Quartos  : <span id ="roomsHotel" class="text-info"></span></P>

<P>Quartos disponíveis : <span id ="rooms" class="text-danger"></span></P>

<span id="lotation"></span>%
<div class="progress">
  <div class="progress-bar" role="progressbar" style='width: ' aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<script src="js/sample21.js"></script>

</div>
</body>
</html>