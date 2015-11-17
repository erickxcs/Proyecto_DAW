var usuarios=[];

cargarDatos();


function mostrar(){
            var destino= document.getElementById('tbDatos');
            destino.innerHTML="";
            
            for(x=0;x<usuarios.length;x++){
            aux=usuarios[x];
             tr= document.createElement('tr');
            td=document.createElement('td');
            td.innerHTML=aux.nombre;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.apellido;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.usuario;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.correo;
            tr.appendChild(td);         
            tr.appendChild(td);
            destino.appendChild(tr);
            }
            
        }

function cargarDatos(){
    datos=localStorage.getItem('usuarios');
        if(datos!=null){
            usuarios=JSON.parse(datos);
            mostrar();
         }
}
