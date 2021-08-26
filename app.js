
// EL PROBLEMA ES CON EL CALLSTACK (O PILA DE EJECUCIÓN) YA QUE LOS VALORES DE LAS VARIABLES SE ACTUALIZAN
// LUEGO DE LA ASIGNACIÓN DE LAS FUNCIONES.

var boleta = document.getElementById("pers_bill");
var propina = document.getElementById("pers_tip");
var custom = document.getElementById("custom");

var final = []
var cuenta = []


// con esta función tomo el id del botón al pasar el mouse por encima del botón

function perc_id(id){
let perc;
    switch (id) {
        case 'b1':
          perc = 0.05;
          break;
        case 'b2':
          perc = 0.1;
          break;
        case 'b3':
            perc = 0.15;
            break;
        case 'b4':
            perc = 0.25;
            break;
        case 'b5':
            perc = 0.5;
            break;
    }

    final = [perc, id]
    cuenta = [document.getElementById("bill").value, document.getElementById("pers").value]
    console.log(perc)
} 
       


// Esta función debería ejecutar la operación, pero lo hace al hacer clic dos veces; esto ocurre porque en el primer clic la función toma el 
// valor del id y en el segundo clic hace el cálculo. Hay que buscar la manera de que haga el trabajo en un solo clic.

// Cambié el tipo de evento de onlcick a onmuouseover, porque sino había que hacer doble clic.
function calculo(){
        console.log(cuenta)
    // let bill = document.getElementById("bill").value;
    // let pers = document.getElementById("pers").value;
    //  El eventListener se pone dentro de la función, porque sino se ejecuta al cargar la página 
    //  con valores vacíos y da como resultado NaN.  
        let tip =  parseFloat(((cuenta[0]*final[0])/cuenta[1]).toFixed(2)) 
        let factura = parseFloat((cuenta[0]/cuenta[1]).toFixed(2)) + tip;
        propina.innerHTML = tip;
        boleta.innerHTML=  factura;
}


function calcustom(){
    
    let perc = (document.getElementById("custom").value)*0.01;
    
    final = [perc]
    cuenta = [document.getElementById("bill").value, document.getElementById("pers").value]
    let tip =  parseFloat(((cuenta[0]*final[0])/cuenta[1]).toFixed(2)); 
    let factura = parseFloat((cuenta[0]/cuenta[1]).toFixed(2)) + tip;
    
    propina.innerHTML = tip;
    boleta.innerHTML=  factura;
}




