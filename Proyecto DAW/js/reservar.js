var reservar = [];

function Reservar(){

	cargarReserva();

	var fecha = document.getElementById('fecha').value;

	var mesa = document.getElementsByName('boton');
	var resultado;

	for (var i=0; i<mesa.length; i++) {
		
		if (mesa[i].checked)
			resultado=mesa[i].value;
		
	};

	var hora = document.getElementById('opcion').value;

	var reserva = new Reserva(fecha,resultado,hora);
	for(x=0;x<reservar.length;x++){
		reserv=reservar[x];
		if((fecha==reserv.fecha)&&(resultado==reserv.resultado)&&(hora==reserv.hora)){
			alertify.alert("Lo sentimos, esta mesa ya tiene reservación");
			return;
		}

	}

	reservar.push(reserva);
	guardarReserva();

	alertify.alert("Reservacion exitosa");
	setTimeout ("window.location='index.html';", 1000);
}

function Reserva(f,r,h){
	this.fecha=f;
	this.resultado=r;
	this.hora=h;

}

function guardarReserva(){
	var datosReserva = JSON.stringify(reservar);
	localStorage.setItem("reservar",datosReserva);
}

function cargarReserva(){
	var datosReserva = localStorage.getItem('reservar');

	if (datosReserva){
		reservar = JSON.parse(datosReserva);
	}
}