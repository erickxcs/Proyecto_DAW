var sugerencias=[];

cargarDatos();


function mostrar(){
            var destino= document.getElementById('tbDatos');
            destino.innerHTML="";
            
            for(x=0;x<sugerencias.length;x++){
            aux=sugerencias[x];
             tr= document.createElement('tr');
            td=document.createElement('td');
            td.innerHTML=aux.nomb;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.ape;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.pais;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.corre;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=aux.suge;
            tr.appendChild(td);         
            tr.appendChild(td);
            destino.appendChild(tr);
            }
            
        }

function cargarDatos(){
    datos=localStorage.getItem('sugerencias');
        if(datos!=null){
            sugerencias=JSON.parse(datos);
            mostrar();
         }
}
