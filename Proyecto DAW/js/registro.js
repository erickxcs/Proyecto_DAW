document.write("<script type='text/javascript' src='js/sessvars.js'></script>");


var usuarios=[];

function registrar(){

	cargar();

	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var usuario = document.getElementById('usuario').value;
	var correo = document.getElementById('correo').value;
	var contraseña = document.getElementById('contraseña').value;
	var confirmar = document.getElementById('confirmar').value;

	if(contraseña==confirmar){

	var usuario=new Usuario(nombre, apellido,usuario,correo,contraseña,contraseña);
	usuarios.push(usuario);
	guardar();

	document.getElementById("modal2").style.display="none";

	alertify.alert("Bienvenido:"  +nombre+" "+apellido);
	setTimeout("window.location='index.html';", 1000);

	}


	else{
		alert("las contraseña no coinciden");
	}
}

	function Usuario(n,a,u,c,co,con){
		this.nombre=n;
		this.apellido=a;
		this.usuario=u;
		this.correo=c;
		this.contraseña=co;
		this.confirmar=con;


	}

	function guardar(){
		var datos=JSON.stringify(usuarios);
		localStorage.setItem("usuarios",datos);
	}

function login(){
	var user = document.getElementById('user').value;
	var pass = document.getElementById('password').value;

	cargar();

			for(x=0;x<usuarios.length;x++){
				if(user==usuarios[x].usuario && pass==usuarios[x].contraseña){
					localStorage.setItem("logueado","entro");

					if (user=="admin" && pass=="admin123456") {
						alertify.alert('Bienvenido ' +user);
						setTimeout ("window.location='Usuarios.html';", 1000); //tiempo expresado en milisegundos
					
					}

					else{

					alertify.alert("Bienvenido "+user);
					document.getElementById("modal1").style.display="none";
					localStorage.setItem("usuario",usuarios[x].usuario);
					localStorage.setItem("nombre",usuarios[x].nombre);
					setTimeout ("window.location='Reservar.html';", 1000); //tiempo expresado en milisegundos
					//window.location="Reservar.html";
 					}

					return;
				}	
			}

			alertify.alert("Usuario no valido")
			localStorage.setItem("usuario"," ");
			localStorage.setItem("nombre"," ");
 			
}

function cargar(){

	var datos = localStorage.getItem('usuarios');
	if(datos){
	usuarios=JSON.parse(datos);
	}
	
	

}

function Salir(){
	

	localStorage.setItem("logueado","");
	alertify.alert('Gracias por preferirnos!');
	setTimeout ("window.location='index.html';", 1000);
	


}

function VerificarRegistro(){
	var logueado = localStorage.getItem('logueado');

        if(logueado == ""){

          alertify.alert("Por favor inicie sesión para poder reservar en línea");
          window.location="#modal1";

        
        }else{

          window.location="Reservar.html";
        }
}

