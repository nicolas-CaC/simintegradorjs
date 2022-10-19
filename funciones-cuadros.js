function cuadroOver(cuadro) {
    cuadro.classList.replace('border-muted', 'border-primary')
}
function cuadroLeave(cuadro) {
    cuadro.classList.replace('border-primary', 'border-muted')
}
function cuadroClick(cuadro) {
    cuadro.ariaChecked = true
    cuadro.classList.replace('border-primary', 'border-success')
    cuadro.classList.replace('border-muted', 'border-success')

    select.value =
        cuadro.id === 'cuadro1' && '1' ||
        cuadro.id === 'cuadro2' && '2' ||
        cuadro.id === 'cuadro3' && '3'

    for (let item of cuadros) {
        if (item.id !== cuadro.id) {
            item.classList.replace('border-success', 'border-muted')
            item.ariaChecked = false
        }
    }
}

function asignarEventos(cuadro) {
    cuadro.addEventListener('mouseover', () => cuadroOver(cuadro))
    cuadro.addEventListener('mouseleave', () => cuadroLeave(cuadro))
    cuadro.addEventListener('click', () => cuadroClick(cuadro))
}

asignarEventos(cuadro1)
asignarEventos(cuadro2)
asignarEventos(cuadro3)
