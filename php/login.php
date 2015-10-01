<?php 
session_start();
$_SESSION['registrado'] =  $_POST['dni'];
setcookie("registro", $_POST['dni'],  time()+36000 , '/');
echo true;	

?>