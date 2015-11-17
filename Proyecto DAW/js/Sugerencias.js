var Sugerencias=[];

function sugerencias(){

	cargarSugerencia();

	var nomb = document.getElementById('name').value;
	var ape = document.getElementById('ape').value;
	var pais = document.getElementById('pais').value;
	var corre = document.getElementById('mail').value;
	var suge = document.getElementById('sugerencia').value;


	var sugerencia = new Sugerencia(nomb, ape, pais, corre, suge);
	Sugerencias.push(sugerencia);

	guardarSugerencia();

	document.getElementById('modal3').style.display="none";

	alertify.alert("Gracias por tus Sugerencias");
	setTimeout("window.location='index.html';", 1000);

}

function Sugerencia(n,a,p,c,s){
	this.nomb=n;
	this.ape=a;
	this.pais=p;
	this.corre=c;
	this.suge=s;
}

function guardarSugerencia(){
	var datosSugerencias=JSON.stringify(Sugerencias);
	localStorage.setItem("sugerencias",datosSugerencias);
}

function cargarSugerencia(){

	var datosSugerencia = localStorage.getItem('sugerencias');
	if(datosSugerencia){
	sugerencias=JSON.parse(datosSugerencia);
	}
}