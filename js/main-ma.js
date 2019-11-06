
const $form = document.querySelector("#carta-a-santa")


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "El nombre debe tener al menos 1 caracter";
    }
    if (nombre.length > 50) {
        return "El nombre debe tener a lo sumo 50 caracteres";

    }
    if (!/^[a-z ]+$/i.test(nombre)) {
        return "El nombre solo debe contener letras"
    }

    return "";
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Por favor seleccione la ciudad"
    }

    return ""

}

function validarDescripcionRegalo(descripcionRegalo) {

    if (descripcionRegalo.length === 0) {
        return "No hay descripción del regalo"
    }
    if (descripcionRegalo.length >= 100) {
        return "La descripción del regalo debe contener a lo sumo 100 caracteres"
    }
    if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo)) {
        return "La descripción del regalo solo puede contener números y letras"
    }
    return ""
}

function validarFormulario(event) {

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo

    }
    manejarErrores(errores);

    event.preventDefault();

}

function manejarErrores(errores) {

    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");

    keys.forEach(function(key){
        const error = errores[key];
        
        if(error && ($form[key].className != "error")){
            $form[key].className = "error";

            const $error = document.createElement("li");
            $error.id = `error-${key}`
            $error.innerText = error
            $errores.appendChild($error);

        }else if(!error) {
            const errorABorrar = document.querySelector(`#error-${key}`);
            if(errorABorrar){
                errorABorrar.remove()
            }
            $form[key].className = "";
            
        }
    })

    
   /* errorNombre = errores.nombre;
    errorCiudad = errores.ciudad;
    errorDescripcionRegalo = errores.descripcionRegalo

    if (errorNombre) {
        $form.nombre.className = "error"
    } else {

        $form.nombre.className = ""
    }



    if (errorCiudad) {
        $form.ciudad.className = "error"
    } else {
        $form.ciudad.className = ""
    }



    if (errorDescripcionRegalo) {
        $form["descripcion-regalo"].className = "error"
    } else {
        $form["descripcion-regalo"].className = ""

    }
*/

}

const botonFormulario = document.querySelector("#enviar-carta");
$form.onsubmit = validarFormulario

