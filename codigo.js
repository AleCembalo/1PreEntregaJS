

let edad = '';
edad = parseInt(prompt('Introduce tu edad'));

    
if (edad<=17){
    alert('Eres menor de edad, no puedes ingresar');
    }else if (edad>=18){
        alert('Eres mayor, bienvenido al mercado de semillas');
    }else{
        alert('No ingresaste nada.');
    }


let totalCompra = 0; 

let variedad = prompt('Elige la variedad:\n1) Wedding Cake (pack x 3): $6500\n2) Gelato (pack x 3): $7500\n3) Sour Diesel (pack x 3): $6000\n4) OG Kush (pack x 3): $6500\n5) Jack Herer (pack x 3): $8000\n6) Northern Lights (pack x 3): $7000\n7) MAC (pack x 3): $7500\nIngresa t Para terminar');

while (variedad != 't'){

    switch (variedad){
        case '1':
            alert ('Wedding Cake (pack x 3), agregado al carrito');
            sumarTotalCompra(6500);
            break;    
        case '2':
            alert('Gelato (pack x 3), agregado al carrito');
            sumarTotalCompra(7500);
            break;
        case '3':
            alert('Sour Diesel (pack x 3), agregado al carrito');
            sumarTotalCompra(6000);
            break;
        case '4':
            alert('OG Kush (pack x 3), agregado al carrito');
            sumarTotalCompra(6500);
            break;
        case '5':
            alert('Jack Herer (pack x 3), agregado al carrito');
            sumarTotalCompra(8000);
            break;
        case '6':
            alert('Northern Lights (pack x 3), agregado al carrito');
            sumarTotalCompra(7000);
            break;
        case '7':
            alert('MAC (pack x 3), agregado al carrito');
            sumarTotalCompra(7500);
            break;
        default:
            alert('Codigo inexistente');
            break;    
    }
    variedad = prompt('Elige la variedad:\n1) Wedding Cake (pack x 3): $6500\n2) Gelato (pack x 3): $7500\n3) Sour Diesel (pack x 3): $6000\n4) OG Kush (pack x 3): $6500\n5) Jack Herer (pack x 3): $8000\n6) Northern Lights (pack x 3): $7000\n7) MAC (pack x 3): $7500\nIngresa t Para terminar');
}

function sumarTotalCompra(precioSema){
    totalCompra = totalCompra + precioSema;
    alert('Subtotal hasta el momento $'+totalCompra);
}

alert('Total de tu compra: $'+ totalCompra);

let medioDePago = prompt('Ingrese medio de pago (tarjeta - efectivo - transferencia)');


    switch(medioDePago){
        case 'transferencia':
            alert('Abonaras la cantiad de $' + totalCompra);
        case 'efectivo':
            descontarPagoEfectivo();
            break;
        case 'tarjeta':
            let cuotas = prompt('Ingrese N° de cuotas: 1-3-6');
            if (cuotas = '1'){
                alert('Abonaras 1 cuota de $' + totalCompra);
                break;
            }else if (cuotas = '3'){
                recargarEn3cuotas();
                break;
            }else if (cuotas = '6'){
                alert('Abonaras 6 cuotas de $'+'Recargo de 60%');
            }else{
                alert('Ingrese N° de cuotas: 1-3-6');
            }
        default:
            alert('Ingresa el medio de pago!');    
    }

function descontarPagoEfectivo(){
    totalCompra = totalCompra * 0.9;
    alert('Total con descuento por pago en efectivo: $' + totalCompra);
}

function recargarEn3cuotas(){
    totalCompra = (totalCompra + totalCompra * 0.3)/3;
    alert('abonaras 3 cuotas de $');
}