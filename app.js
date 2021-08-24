
var boleta = document.getElementById("pers_bill");
var propina = document.getElementById("pers_tip");
var custom = document.getElementById("custom");



   

// Esta función sirve para obtener el ID del contenedor.
function get_id(id){
    let boton = document.getElementById(id);
    boton.addEventListener("click", function() {
        let bill = document.getElementById("bill").value;
        let pers = document.getElementById("pers").value;
        let perc;

        
        // acá debería ir un switch para asignar a "perc" el valor que necesito
        // ESTO FUNCIONA MÁS O MENOS (hay que hacer doble clic y no sé por qué)
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

        console.log(id)
        propina.innerHTML = ((bill*perc)/pers).toFixed(2)
        boleta.innerHTML= (bill/pers).toFixed(2)
    });
}




