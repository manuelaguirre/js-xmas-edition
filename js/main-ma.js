const $form = document.querySelector("carta-a-santa")

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const descripcionRegalo = $form["descripcion-regalo"].value;



function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "El nombre debe tener al menos 1 caracter";
    }
    if (nombre.length > 50) {
        return "El nombre debe tener a lo sumo 50 caracteres";

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
    if (descripcionRegalo.length > 300) {
        return "La descripción del regalo debe contener a lo sumo 300 caracteres"
    }
    return ""
}

function validarFormulario(nombre, ciudad, descripcionRegalo){
    
    validarNombre(nombre),
    validarCiudad(ciudad);
    validarDescripcionRegalo(descripcionRegalo);
}

const

const botonFormulario = document.querySelector("#enviar-carta");

botonFormulario.onclick = validarFormulario()

