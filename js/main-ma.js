
function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "El nombre debe tener al menos 1 caracter";
    }
    if (nombre.length > 50) {
        return "El nombre debe tener a lo sumo 50 caracteres";

    }
    if(!/^[a-z ]+$/i.test(nombre)){
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
    if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo)){
        return "La descripción del regalo solo puede contener números y letras"
    }
    return ""
}

function validarFormulario(event){
    const $form = document.querySelector("#carta-a-santa")
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;


    
    validarNombre(nombre),
    validarCiudad(ciudad);
    validarDescripcionRegalo(descripcionRegalo);
}

const botonFormulario = document.querySelector("#enviar-carta");

botonFormulario.onclick = validarFormulario(nombre, ciudad, descripcionRegalo)

