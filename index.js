// JavaScript Document


function banderauk(){

 
    $('#titulon').text("Conditions, Use and responsibilities.");
	  $('#texto_cond').text("They reserved the copyright of the entire contents of -------. All rights are owned by ----- or third parties. All elements in ------ are freely accessible for browsing purposes only. It enables playback of material or parts thereof, in written or electronic form arbitrary, only with a specific mention of ----------. Reproduction, transfer, amendment, linking or use of ----------- for public or commercial purposes without the written permission in advance from ---------.");
	  $('#botonuk').show();
	  $('#botones').hide();
	  $('#botonfr').hide();
	  $('#botonde').hide();
      
   
};
function banderaes(){

 
    $('#titulon').text("Condiciones, uso y responsabilidad");
	  $('#texto_cond').text("Están reservados los derechos de autor de todo el contenido del ------- . Todos los derechos son propiedad de ----- o de terceros. Todos los elementos en el ------ son libremente accesibles sólo para fines de navegación. Se permite la reproducción del material o parte de éste en forma escrita o electrónica arbitraria, sólo con la mención expresa de ----------. Se prohíbe la reproducción, transmisión, modificación, enlace o uso del ----------- para fines públicos o comerciales sin la autorización por escrito con antelación de ---------.");
	  $('#botones').show();
	  $('#botonuk').hide();
	  $('#botonfr').hide();
	  $('#botonde').hide();
      
   
};
function banderade(){

 
    $('#titulon').text("AGB, Einsatz und Verantwortung");
	  $('#texto_cond').text("Sie reserviert die Urheberrechte der gesamte Inhalt -------. Alle Rechte liegen bei ----- oder Dritten. Alle Elemente in ------ frei zugänglich sind nur für Browsingzwecke. Es ermöglicht die Wiedergabe von Material oder Teile davon, in schriftlicher oder elektronischer Form willkürlich, nur mit ausdrücklicher Erwähnung von ----------. Das Reproduzieren, Übermitteln, Modifizieren, Verknüpfen oder Benutzen ----------- für öffentliche oder kommerzielle Zwecke ist ohne vorherige schriftliche Erlaubnis von ---------.");
	  $('#botonde').show();
	  $('#botonuk').hide();
	  $('#botonfr').hide();
	  $('#botones').hide();
      
   
};
function banderafr(){

 
    $('#titulon').text("Conditions, à l'utilisation et à la responsabilité.");
	  $('#texto_cond').text("Ils se réservent le droit d'auteur de tout le contenu de -------. Tous les droits sont détenus par ----- ou de tiers. Tous les éléments ------ sont accessibles uniquement pour la navigation. Il permet la lecture des documents ou des parties de celui-ci, sous forme écrite ou électronique arbitraire, seulement avec la mention expresse de ----------. La reproduction, le transfert, modifier, réunir ou utiliser d'----------- à des fins publiques ou commerciales sans l'autorisation écrite préalable de ---------.");
	  $('#botonfr').show();
	  $('#botonuk').hide();
	  $('#botones').hide();
	  $('#botonde').hide();
      
   
};


$(document).ready(function(){
$('#botones').click(function() {

 window.open('html/espaniol.html','_self')			
      
    });
});
$(document).ready(function(){
$('#botonuk').click(function() {

 window.open('html/ingles.html','_self')			
      
    });
});
$(document).ready(function(){
$('#botonfr').click(function() {

 window.open('html/frances.html','_self')			
      
    });
});
$(document).ready(function(){
$('#botonde').click(function() {

 window.open('html/aleman.html','_self')			
      
    });
});
$(document).ready(function(){
$('#espaniola').click(function() {

 window.open('espaniol.html','_self')		
 
      
    });
});
$(document).ready(function(){
$('#inglesa').click(function() {

 window.open('ingles.html','_self')		
 	
      
    });
});
$(document).ready(function(){
$('#francesa').click(function() {

 window.open('frances.html','_self')		
 	
      
    });
});
$(document).ready(function(){
$('#alemana').click(function() {

 window.open('aleman.html','_self')		
 	
      
    });
});

//TRANSPORTE
$(document).ready(function(){
$('#plano').click(function() {

 window.open('planometro.html','_self')			
      
    });
});
$(document).ready(function(){
$('#vuelvedemetro').click(function() {

 window.open('espaniol.html#metro','_self')			
      
    });
});
$(document).ready(function(){
$('#planobus').click(function() {

 window.open('planobus.html','_self')			
      
    });
});
$(document).ready(function(){
$('#vuelvedebus').click(function() {

 window.open('espaniol.html#bus','_self')			
      
    });
});
// -------         Luis EVENTO POR MES    -----------

$(document).ready(function(){
$('#botonmes1').click(function() {
	document.getElementById('envento_info_mes').innerHTML="";			
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/enero.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});
$(document).ready(function(){
$('#botonmes2').click(function() {
	document.getElementById('envento_info_mes').innerHTML="";			
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/febrero.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes3').click(function() {
	document.getElementById('envento_info_mes').innerHTML="";
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/marzo.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	

function esp() {
	setTimeout('esp2()',60000);
}
function esp2() {
	window.alert("Versión de Prueba!!!");
	setTimeout('esp2()',180000);
}
$(document).ready(function(){
$('#botonmes4').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/abril.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes5').click(function() {
	document.getElementById('envento_info_mes').innerHTML="";
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/mayo.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes6').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/junio.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes7').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/julio.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes8').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/agosto.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes9').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/septiembre.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes10').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/octubre.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes11').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/noviembre.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});	
$(document).ready(function(){
$('#botonmes12').click(function() {
	document.getElementById('envento_info_mes').innerHTML="<img src='../images/Eventos/diciembre.gif' style='border-radius:20px; box-shadow: 3px 3px 5px #888;'/>";
	});
});
$(document).ready(function(){
$('#ref').click(function() {

 	document.getElementById('envento_info_mes').innerHTML="";			
      
    });
});
$(document).ready(function(){
$('#ref2').click(function() {

 	document.getElementById('envento_info_mes').innerHTML="";
      
    });
});
