
const submitFunction = (event) => {

    if (!validarFormulario()) {

        event.preventDefault();

    }else{

        event.preventDefault();

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction);// escucha el envio del formulario

function validarFormulario() {

    //Esta funcion valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {

        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));// error + id con la primera en mayuscula
        
        if (campo.value.length == '') {

           mostrarError(errorCampo, '!Este campo es requerido!'); 
           validacionCorrecta = false;

        }else if(campo.value.length > 0 && campo.value.length < 3){

            mostrarError(errorCampo, '!Este campo debe tener al menos tres caracteres!'); 
           validacionCorrecta = false;

        }else{
            ocultarError(errorCampo);
        }
    })

    //Esto valida el email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { //este regex valida que el formato del mail sea valido
        
        ocultarError(errorEmail);

    }else{
        mostrarError(errorEmail), 'Ingrese un correo electronico valido!';
    }

    //Esto valida la edad
    const edad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');

    if (edad.value < 18) {

        mostrarError(errorEdad, 'La edad debe ser mayor a 18!');
        validacionCorrecta = false;

    }else{
        ocultarError(errorEdad);
    }

    //Esto valida la actividad
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');

    if (actividad.value == '') {
        
        mostrarError(errorActividad, 'Porfavor, seleccione una actividad!');
        validacionCorrecta = false;

    }else{
        ocultarError(errorActividad);
    }

    //Esto valida el nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio');
    const errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if (nivelEstudio.value == '') {
        
        mostrarError(errorNivelEstudio, 'Porfavor, seleccione un nivel de estudio!');
        validacionCorrecta = false;

    }else{
        ocultarError(errorNivelEstudio);
    }

    //Esto valida los terminos y condiciones
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoterminos = document.getElementById('errorAceptoterminos');

    if (!aceptoTerminos.checked) {

        mostrarError(errorAceptoterminos, 'Debes aceptar los terminos y condiciones!');
        validacionCorrecta = false;

    }else{
        ocultarError(errorAceptoterminos);
    }

    return validacionCorrecta //Esto determina si el formulario es valido

}

const mostrarError = (elemento, mensaje) => {

    elemento.textContent = mensaje;
    elemento.style.display = "block";

}

const ocultarError = (elemento) => {

    elemento.textContent = '';
    elemento.style.display = "none";

}
