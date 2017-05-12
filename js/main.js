function mostrarData(){
		var nomb = document.getElementById("duenio").value;
		var apell = document.getElementById("apellido").value;
		var direcc = document.getElementById("apellido").value;
		var corr = document.getElementById("correo").value;
		var tele = document.getElementById("telefono").value;
		var seleccion = document.getElementById("selet").value;
		var ticket = document.getElementById("ticket");
		var mosClien = document.getElementById("clientes");


		if(nomb === "" || apell === "" || corr === "" || direcc === "" || tele === "" || seleccion === "" || ticket === ""){
			alert("Todos los campos son obligatorios")
			return;
		}


		mosClien.innerHTML = "<br><strong>Nombre: </strong>" + nomb + "<br><strong>Apellido: </strong>" + apell + "<br><strong>Dirección: </strong>" + direcc + "<br><strong>Correo: </strong>" + corr + "<br><strong>Teléfono: </strong>" + tele + "<br><strong>Té seleccionado: </strong>" + seleccion;

}

