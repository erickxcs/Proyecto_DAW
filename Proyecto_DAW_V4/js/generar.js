/*Agregamos a nuestro boton un evento utilizando el addEventListener*//*Agregamos a nuestro boton un evento utilizando el addEventListener*//*Agregamos a nuestro boton un evento utilizando el addEventListener*/
/*Agregamos a nuestro boton un evento utilizando el addEventListener*//*Agregamos a nuestro boton un evento utilizando el addEventListener*//*Agregamos a nuestro boton un evento utilizando el addEventListener*/
/*Agregamos a nuestro boton un evento utilizando el addEventListener*//*Agregamos a nuestro boton un evento utilizando el addEventListener*//*Agregamos a nuestro boton un evento utilizando el addEventListener*/

function init(){
 var boton = document.getElementById("btnSend");
 if(boton.addEventListener){
 boton.addEventListener("click", function(){
 create_table(document.frmtable);
 }, false);
 }
 else if(boton.attachEvent){
 boton.attachEvent("onclick", function(){
 create_table(this.form);
 });
 }
}


/*Para crear una nueva tabla - solo recargamos la pagina para que se cree la tabla por defecto*//*Para crear una nueva tabla - solo recargamos la pagina para que se cree la tabla por defecto*/
/*Para crear una nueva tabla - solo recargamos la pagina para que se cree la tabla por defecto*//*Para crear una nueva tabla - solo recargamos la pagina para que se cree la tabla por defecto*/
/*Para crear una nueva tabla - solo recargamos la pagina para que se cree la tabla por defecto*//*Para crear una nueva tabla - solo recargamos la pagina para que se cree la tabla por defecto*/

function crearTabla(){/*Codigo Temporal*//*Codigo Temporal*/
	location.reload(); /*Codigo Temporal*//*Codigo Temporal*/
}/*Codigo Temporal*//*Codigo Temporal*//*Codigo Temporal*/


/*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*//*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*//*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*/
/*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*//*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*//*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*/
/*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*//*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*//*Funcion limpiar - Remueve el nodo hijo de un elemento por medio de su Id*/

function limpiar() {
	location.reload();   
}

/*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*/
/*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*/
/*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*//*Funcion para cerrar pop up - Crear tabla*/

var clic = 1;
function abrirPopupCrearTabla(){ 
   if(clic==1){
   document.getElementById("tab-content1").style.display = "block";
   clic = clic + 1;
   } else{
       document.getElementById("tab-content1").style.display = "none";      
    clic = 1;
   }   
}


/*Funcion para cerrar pop up - recuperar codigo*//*Funcion para cerrar pop up - recuperar codigo*//*Funcion para cerrar pop up - recuperar codigo*/
/*Funcion para cerrar pop up - recuperar codigo*//*Funcion para cerrar pop up - recuperar codigo*//*Funcion para cerrar pop up - recuperar codigo*/
/*Funcion para cerrar pop up - recuperar codigo*//*Funcion para cerrar pop up - recuperar codigo*//*Funcion para cerrar pop up - recuperar codigo*/

var clic2 = 1;
function abrirPopupGuardarCodigo(){ 
   if(clic2==1){
   document.getElementById("tab-content2").style.display = "block";
   clic2 = clic2 + 1;
   } else{
       document.getElementById("tab-content2").style.display = "none";      
    clic2 = 1;
   }   
}



/*Se crean las variables a utilizar para la cracion de celdas*//*Se crean las variables a utilizar para la cracion de celdas*//*Se crean las variables a utilizar para la cracion de celdas*/
/*Se crean las variables a utilizar para la cracion de celdas*//*Se crean las variables a utilizar para la cracion de celdas*//*Se crean las variables a utilizar para la cracion de celdas*/

		var nrows,ncols;
		var rows,cols;

/*Al cargar la pagina se obtendran valores actuales del formulario y se retortara el resultado de algunas funciones al ser ejecutadas*//*Al cargar la pagina se obtendran valores actuales del formulario y se retortara el resultado de algunas funciones al ser ejecutadas*/
/*Al cargar la pagina se obtendran valores actuales del formulario y se retortara el resultado de algunas funciones al ser ejecutadas*//*Al cargar la pagina se obtendran valores actuales del formulario y se retortara el resultado de algunas funciones al ser ejecutadas*/
/*Al cargar la pagina se obtendran valores actuales del formulario y se retortara el resultado de algunas funciones al ser ejecutadas*//*Al cargar la pagina se obtendran valores actuales del formulario y se retortara el resultado de algunas funciones al ser ejecutadas*/


		window.onload = function()
		{	
			tbl				= document.getElementById("demo");
			nrows			= document.gen.nrows;
			ncols			= document.gen.ncols;
			rows			= parseInt(nrows.value);
			cols			= parseInt(ncols.value);

			nrows.onchange = function() {
											actualizarFilas();
										}
			ncols.onchange = function() {
											actualizarColumnas();
										}

			tbl.onclick = function() {
										generarHtml();
									 }
			tbl.onblur  = function() {
										generarHtml();
									}

			generarHtml();

		}




/*Actualiza la tabla - insertando filas por medio de nodos*//*Actualiza la tabla - insertando filas por medio de nodos*//*Actualiza la tabla - insertando filas por medio de nodos*/
/*Actualiza la tabla - insertando filas por medio de nodos*//*Actualiza la tabla - insertando filas por medio de nodos*//*Actualiza la tabla - insertando filas por medio de nodos*/
/*Actualiza la tabla - insertando filas por medio de nodos*//*Actualiza la tabla - insertando filas por medio de nodos*//*Actualiza la tabla - insertando filas por medio de nodos*/


function actualizarFilas()
		{
			drows = parseInt(nrows.value)-rows;
			if( drows==0 ) return;
			if( drows>0 )
			{
				for(k=0; k<drows; k++)
				{
					row = tbl.insertRow(-1);
					for(i=0; i<cols; i++)
					{
						cell = row.insertCell(i);
						cell.innerHTML = "&nbsp";
					}
				}
			}
			else
			{
				n=-drows;
				for(k=0; k<n; k++)
					tbl.deleteRow(rows-k);
			}
			rows = parseInt(nrows.value);
			generarHtml();
			
		}





/*Actualiza la tabla - insertando columnas por medio de nodos*//*Actualiza la tabla - insertando columnas por medio de nodos*//*Actualiza la tabla - insertando columnas por medio de nodos*/
/*Actualiza la tabla - insertando columnas por medio de nodos*//*Actualiza la tabla - insertando columnas por medio de nodos*//*Actualiza la tabla - insertando columnas por medio de nodos*/
/*Actualiza la tabla - insertando columnas por medio de nodos*//*Actualiza la tabla - insertando columnas por medio de nodos*//*Actualiza la tabla - insertando columnas por medio de nodos*/


function actualizarColumnas()
		{
			dcols = parseInt(ncols.value)-cols;
			if( dcols==0 ) return;
			if( dcols>0 )
			{
				for(i=0; i<=rows; i++)
				{
					row = tbl.rows[i];
					for(k=0; k<dcols; k++)
					{
						if( i==0 )
						{
							cell = document.createElement('th');
							row = tbl.tHead.children[0];
							row.appendChild(cell);
							n = cols+k+1;
							cell.innerHTML = "Header "+n;
						}
						else
						{
							cell = row.insertCell(-1);
							cell.innerHTML = "&nbsp";
						}
					}
				}
			}
			else
			{
				n=-dcols;
				for(i=0; i<=rows; i++)
				{
					row = tbl.rows[i];
					for(k=0; k<n; k++)
						row.deleteCell(cols-k-1);
				}
			}
			cols = parseInt(ncols.value);
			generarHtml();
		}


/*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*/
/*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*/
/*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*//*Reglas de estilo para la tabla*/


/*AUN NO FUNCIONA*//*AUN NO FUNCIONA*/
function actualizarEstilo()/*AUN NO FUNCIONA*/
/*AUN NO FUNCIONA*//*AUN NO FUNCIONA*/
		{
			
			textalign = document.gen.textalign.value;
			
			var vTemp;
			var vTemp_tbl = "";
			var vTemp_cap = "";
			var vTemp_th = "";
			var vTemp_td = "";

			if( textalign )
			{
				vTemp_td+="\n\t\ttext-align:"+textalign+";";
				tbl.style.textAlign = textalign;
			}
			else
				tbl.style.textAlign = "";
		}




/*Generar codigo html para el usuario - Metodo de concatenacion y reemplazo de valores con el metodo innerHTML*//*Generar codigo html para el usuario - Metodo de concatenacion y reemplazo de valores con el metodo innerHTML*/
/*Generar codigo html para el usuario - Metodo de concatenacion y reemplazo de valores con el metodo innerHTML*//*Generar codigo html para el usuario - Metodo de concatenacion y reemplazo de valores con el metodo innerHTML*/
/*Generar codigo html para el usuario - Metodo de concatenacion y reemplazo de valores con el metodo innerHTML*//*Generar codigo html para el usuario - Metodo de concatenacion y reemplazo de valores con el metodo innerHTML*/


function generarHtml()
		{
			var vTemp = tbl.innerHTML;
			vTemp = vTemp.replace(/\t/g,"");
			vTemp = vTemp.replace(/<\u002Fth><\u002Ftr>/g,"</th>\n</tr>");
			vTemp = vTemp.replace(/<\u002Ftd><\u002Ftr>/g,"</td>\n</tr>");
			vTemp = vTemp.replace(/<\u002Fth><th>/g,"</th>\n<th>");
			vTemp = vTemp.replace(/<\u002Ftd><td>/g,"</td>\n<td>");
			vTemp = vTemp.replace(/<\u002Ftr><tr>/g,"</tr>\n<tr>");
			vTemp = vTemp.replace(/<\u002Ftr><\u002Ftbody>/g,"</tr>\n<tbody>");
			vTemp = vTemp.replace(/<tr><td>/g,"<tr>\n<td>");
			vTemp = vTemp.replace(/<caption>/g,"\t<caption>");
			vTemp = vTemp.replace(/<thead/g,"\t<thead");
			vTemp = vTemp.replace(/<\u002Fthead>/g,"\t</thead>");
			vTemp = vTemp.replace(/<tbody/g,"\t<tbody");
			vTemp = vTemp.replace(/<\u002Ftbody>/g,"\t</tbody>");
			vTemp = vTemp.replace(/<tr>/g,"\t<tr>");
			vTemp = vTemp.replace(/<\u002Ftr>/g,"\t</tr>");
			vTemp = vTemp.replace(/<th>/g,"\t\t<th>");
			vTemp = vTemp.replace(/<td>/g,"\t\t<td>");
			vTemp = vTemp.replace(/\n\n/g,"\n");
			vTemp = vTemp.replace(/\n\n/g,"\n");
			vTemp = "<table class=\u0022demo\u0022>"+vTemp+"</table>";

			/*Con el metodo "document.getElementById" mandamos a imprimir todas las concatenaciones de nuestra tabla HTML*/
			document.getElementById("codigo").value = vTemp;

		}


/*Guardamos el codigo HTML temporalmente con localStroage*//*Guardamos el codigo HTML temporalmente con localStroage*//*Guardamos el codigo HTML temporalmente con localStroage*/
/*Guardamos el codigo HTML temporalmente con localStroage*//*Guardamos el codigo HTML temporalmente con localStroage*//*Guardamos el codigo HTML temporalmente con localStroage*/
/*Guardamos el codigo HTML temporalmente con localStroage*//*Guardamos el codigo HTML temporalmente con localStroage*//*Guardamos el codigo HTML temporalmente con localStroage*/

function guardarCodigo(){

var Cod_HTML = document.getElementById("codigo").value;
localStorage.setItem("Codigo",Cod_HTML);

}

/*Retornamos el ultimo codigo guardado en nuestra localStorage*//*Retornamos el ultimo codigo guardado en nuestra localStorage*//*Retornamos el ultimo codigo guardado en nuestra localStorage*/
/*Retornamos el ultimo codigo guardado en nuestra localStorage*//*Retornamos el ultimo codigo guardado en nuestra localStorage*//*Retornamos el ultimo codigo guardado en nuestra localStorage*/
/*Retornamos el ultimo codigo guardado en nuestra localStorage*//*Retornamos el ultimo codigo guardado en nuestra localStorage*//*Retornamos el ultimo codigo guardado en nuestra localStorage*/

function verCodigo(){

var CodigoH = localStorage.getItem("Codigo");
document.getElementById("codigo").value = CodigoH;
document.getElementById('demo').innerHTML = CodigoH;

}

/*Eliminamos el registro para no llenar el localStorage*//*Eliminamos el registro para no llenar el localStorage*//*Eliminamos el registro para no llenar el localStorage*/
/*Eliminamos el registro para no llenar el localStorage*//*Eliminamos el registro para no llenar el localStorage*//*Eliminamos el registro para no llenar el localStorage*/
/*Eliminamos el registro para no llenar el localStorage*//*Eliminamos el registro para no llenar el localStorage*//*Eliminamos el registro para no llenar el localStorage*/

function eliminarCodigo(){

localStorage.removeItem("Codigo");

}


