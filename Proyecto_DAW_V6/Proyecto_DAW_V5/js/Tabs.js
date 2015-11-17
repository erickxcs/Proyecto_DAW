$(function (activar_pestanya) {
   				var tabContainerssup = $('div.contenedor > div');
    
			    $('div.tab a').click(function () {
		        	tabContainerssup.hide().filter(this.hash).show();
        
		        	return false;
			    }).filter(':first').click();
			});