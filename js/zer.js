const cards_info = document.querySelectorAll('.info')
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
    threshold: 0.2
})

cards_info.forEach(info => {
    observer.observe(info)
})