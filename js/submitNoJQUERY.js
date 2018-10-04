function calcularSubtotalComida(){
	var leche=document.getElementById('txtLeche').value;
	var valLeche=document.getElementById('valLeche').value;
	var pan=document.getElementById('txtPan').value;
	var valPan=document.getElementById('valPan').value;
	var huevos=document.getElementById('txtHuevos').value;
	var valHuevos=document.getElementById('valHuevos').value;
	var subtotalComida=(leche*valLeche)+(pan*valPan)+(huevos*valHuevos);
	return subtotalComida;
}
function calcularSubtotalAseo(){
	var jabon=document.getElementById('txtJabon').value;
	var valJabon=document.getElementById('valJabon').value;
	var shampoo=document.getElementById('txtShampoo').value;
	var valShampoo=document.getElementById('valShampoo').value;
	var crema=document.getElementById('txtCrema').value;
	var valCrema=document.getElementById('valCrema').value;
	var subtotalAseo=(jabon*valJabon)+(shampoo*valShampoo)+(crema*valCrema);
	return subtotalAseo;
}
function calcularIvaComida(subtotalComida){
	var valIVA=(document.getElementById('txtIVAComida').value)/100;
	return ivaComida=subtotalComida*valIVA;
}
function calcularIvaAseo(subtotalAseo){
	var valIVA=(document.getElementById('txtIVAAseo').value)/100;
	return ivaAseo=subtotalAseo*valIVA;
}
function calcularFactura(){
	console.log('Generando factura');
	//CÁLCULO DE COMIDA
	var subtotalComida=calcularSubtotalComida();	
	document.getElementById('txtSubtotalComida').value=subtotalComida;
	//CÁLCULO DE ASEO
	var subtotalAseo=calcularSubtotalAseo();
	document.getElementById('txtSubtotalAseo').value=subtotalAseo;
	//CÁLCULO IVA COMIDA
	var ivaComida=calcularIvaComida(subtotalComida);
	document.getElementById('txtIVAComida').value=ivaComida;
	//CÁLCULO IVA ASEO
	var ivaAseo=calcularIvaAseo(subtotalAseo);
	document.getElementById('txtIVAAseo').value=ivaAseo;
	//CÁLCULO SUBTOTAL FACTURA
	var subtotal=subtotalComida+subtotalAseo;
	document.getElementById('txtSubtotalFactura').value=subtotal;
	//CÁLCULO IVA FACTURA
	var iva=ivaComida+ivaAseo;
	document.getElementById('txtIVAFactura').value=iva;
	//CÁLCULO TOTAL FACTURA
	var total=subtotal+iva;
	document.getElementById('txtTotalFactura').value=total;
}