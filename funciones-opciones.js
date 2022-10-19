function seleccionHecha() {
    select.value === '1' && cuadroClick(cuadro1)
    select.value === '2' && cuadroClick(cuadro2)
    select.value === '3' && cuadroClick(cuadro3)
}

select.addEventListener('change', seleccionHecha)