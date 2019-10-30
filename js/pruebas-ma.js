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

    console.assert(validarNombre("Juan Pablo") === "", "validarNombre no validó un nombre válido")
}

function pruebaValidarCiudad() {
    console.assert(
        validarCiudad("") === "Por favor seleccione la ciudad",
        "validarCiudad no validó que la ciudad no sea vacía",
    );
    console.assert(
        validarCiudad("Salta") === "", "validarCiudad() no validó ciudad válida"
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111")
        === "La descripción del regalo debe contener a lo sumo 300 caracteres",
        "validarDescripcionRegalo validó descripción demasiado larga"
    );
    console.assert(validarDescripcionRegalo("") === "No hay descripción del regalo", "validarDescripcionRegalo() validó una descripción vacía"
    );
    console.assert(validarDescripcionRegalo("un autito Hot Wheels") === "", "validarDescripcionRegalo() no validó un regalo válido");
};

