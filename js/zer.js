const cards = document.querySelectorAll('.card')
const cards_info = document.querySelectorAll('.card .info')

// Esto hara que aparezca el texto cuando el elemento este dentro de la pantalla 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
}, {
    threshold: 0.4
})

cards_info.forEach(info => {
    observer.observe(info)
})


// Logica de los filtros
document.querySelectorAll('#filtro button').forEach(filtro => {
    filtro.addEventListener('click', function(event){
        reset_filtro()

        const clase = event.target.innerText.toLowerCase()
        console.log(clase)

        if(clase !== "guztiak"){
            document.querySelectorAll('.container .card').forEach(card => {
                // Si el card no contiene la clase seleccionada, lo elimina del DOM
                if(!card.classList.contains(clase)){
                    card.remove()
                }
            })
            // Si se selecciona la opcion guztiak, se
        }else{
            reset_filtro()
        }
    })
})

// Deja las cartas en su estado original
function reset_filtro(){
    // Borra las cartas que estan actualmente visibles
    document.querySelectorAll('.container .card').forEach(card => {
        card.remove()
    })

    // Reinserta todas las cartas
    cards.forEach(card => {
        document.querySelector('.container').appendChild(card)
    })
}