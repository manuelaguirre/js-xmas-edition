function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
}

function pruebaValidarCiudad() {
    console.assert(
        validarCiudad("") === "Por favor seleccione la ciudad", 
        "validarCiudad no validó que la ciudad no sea vacía",
        );
}

















probarValidarNombre();
pruebaValidarCiudad();
