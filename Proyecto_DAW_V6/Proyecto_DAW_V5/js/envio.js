function iniciar(){

    if(btnRegistrar.addEventListener){
        btnRegistrar.addEventListener('click', Registrar(), false);
    }
    else{
        btnRegistrar.attachEvent('click', Registrar());
    }
}

function Registrar(){


        alert("Registro Exitoso");
    }
   
window.onload=function(){
document.getElementById("btnRegistrar").addEventListener("click",iniciar,false)
    
}