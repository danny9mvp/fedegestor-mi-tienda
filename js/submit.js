function calcularSubtotalComida(){
	var leche=$('#txtLeche').val();
	var valLeche=$('#valLeche').val();
	var pan=$('#txtPan').val();
	var valPan=$('#valPan').val();
	var huevos=$('#txtHuevos').val();
	var valHuevos=$("#valHuevos").val();
	var subtotalComida=(leche*valLeche)+(pan*valPan)+(huevos*valHuevos);
	return subtotalComida;
}
function calcularSubtotalAseo(){
	var jabon=$('#txtJabon').val();
	var valJabon=$('#valJabon').val();
	var shampoo=$('#txtShampoo').val();
	var valShampoo=$('#valShampoo').val();
	var crema=$('#txtCrema').val();
	var valCrema=$('#valCrema').val();
	var subtotalAseo=(jabon*valJabon)+(shampoo*valShampoo)+(crema*valCrema);
	return subtotalAseo;
}
function calcularIvaComida(subtotalComida){
	var valIVA=($('#txtIVAComida').val())/100;
	return ivaComida=subtotalComida*valIVA;
}
function calcularIvaAseo(subtotalAseo){
	var valIVA=($('#txtIVAAseo').val())/100;
	return ivaAseo=subtotalAseo*valIVA;
}
$(document).ready(function(event){
	$(':input[type=number]').keypress(function(event){
		if(event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)){
			alert('Sólo se permiten números.');
			return false;
		}
	});
});
$("form").submit(function(event){
	console.log('Generando factura');
	//CÁLCULO DE COMIDA
	var subtotalComida=calcularSubtotalComida();	
	$('#txtSubtotalComida').val(subtotalComida);
	//CÁLCULO DE ASEO
	var subtotalAseo=calcularSubtotalAseo();
	$('#txtSubtotalAseo').val(subtotalAseo);
	//CÁLCULO IVA COMIDA
	var ivaComida=calcularIvaComida(subtotalComida);
	$('#txtIVAComida').val(ivaComida);
	//CÁLCULO IVA ASEO
	var ivaAseo=calcularIvaAseo(subtotalAseo);
	$('#txtIVAAseo').val(ivaAseo);
	//CÁLCULO SUBTOTAL FACTURA
	var subtotal=subtotalComida+subtotalAseo;
	$('#txtSubtotalFactura').val(subtotal);
	//CÁLCULO IVA FACTURA
	var iva=ivaComida+ivaAseo;
	$('#txtIVAFactura').val(iva);
	//CÁLCULO TOTAL FACTURA
	var total=subtotal+iva;
	$('#txtTotalFactura').val(total);
	/*
	var pan=$('#txtPan').val();
	var huevos=$('#txtHuevos').val();	
	var subtotalComida=leche+pan+huevos;
	$('#txtSubtotalComida').val(subtotalComida);
	var ivaComida=document.getElementById('txtIVAComida').value;

	var jabon=document.getElementById('txtCrema').value;
	var shampoo=document.getElementById('txtShampoo').value;
	var crema=document.getElementById('txtCrema').value;
	var subtotalAseo=document.getElementById('txtSubtotalAseo').value;
	var ivaAseo=document.getElementById('txtIVAAseo').value;

	var subtotalFactura=document.getElementById('txtSubtotalFactura').value;
	var ivaFactura=document.getElementById('txtIVAFactura').value;
	var totalFactura=document.getElementById('txtTotalFactura').value;
	*/
	event.preventDefault();
});