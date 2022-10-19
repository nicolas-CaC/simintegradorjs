function borrar(e) {
    e.preventDefault()
    formulario.valor1.value = ''
    formulario.valor2.value = ''
    formulario.opciones.value = ''

    for (let item of cuadros) {
        item.classList.replace('border-success', 'border-muted')
        item.ariaChecked = false
    }
}

function checkError() {

    let informacion = false

    const valor3 =
        formulario.opciones.value === '1' && 'Estudiante' ||
        formulario.opciones.value === '2' && 'Trainee' ||
        formulario.opciones.value === '3' && 'Junior'

    formulario.valor1.value === ''
        ? formulario.valor1.classList.add('border-danger')
        : formulario.valor1.classList.remove('border-danger')

    formulario.valor2.value === ''
        ? formulario.valor2.classList.add('border-danger')
        : formulario.valor2.classList.remove('border-danger')

    !valor3
        ? formulario.opciones.classList.add('border-danger')
        : formulario.opciones.classList.remove('border-danger')


    if (valor3 && formulario.valor1.value && formulario.valor2.value) {
        informacion = {
            nombre: formulario.valor1.value,
            password: formulario.valor2.value,
            opcion: valor3
        }
    }
    return informacion
}

function exito() {
    location.href = 'exito.html'
}


function enviar(e) {
    e.preventDefault()
    const completeForm = checkError()
    completeForm && sessionStorage.setItem('formulario', JSON.stringify(completeForm))
    completeForm && exito()
}




boton1.onclick = (e) => { borrar(e) }
boton2.onclick = (e) => { enviar(e) }