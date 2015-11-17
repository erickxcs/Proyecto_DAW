var reservar=[];

cargarDatos();


function mostrar(){
            var destino= document.getElementById('tbDatos');
            destino.innerHTML="";
            
            for(x=0;x<reservar.length;x++){
            aux=reservar[x];
             tr= document.createElement('tr');
            td=document.createElement('td');
            td.innerHTML=aux.fecha;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.resultado;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.hora;
            tr.appendChild(td);
            tr.appendChild(td);
            destino.appendChild(tr);
            }
            
        }

function cargarDatos(){
    datos=localStorage.getItem('reservar');
        if(datos!=null){
            reservar=JSON.parse(datos);
            mostrar();
         }
}