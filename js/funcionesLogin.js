function Login()
{
	var dni = $("#dni").val();

	var funcionAjax = $.ajax({	
		url:"php/login.php", type:"post",
		data:{
		dni:dni}

	});

	funcionAjax.done(function(retorno){			
		if(retorno)
		alert("Bienvenido");
		else
			alert("No ingreso");

	});


}

function LogOut()
{

	var funcionAjax = $.ajax({	
		url:"php/logout.php", type:"post",
		
	});

	funcionAjax.done(function(retorno){	
	

	});

}