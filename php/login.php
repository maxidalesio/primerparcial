<?php 
session_start();
$_SESSION['registrado'] =  $_POST['dni'];
echo true;	
?>