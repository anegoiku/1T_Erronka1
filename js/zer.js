const cards_info = document.querySelectorAll('.info')
// Esto hara que aparezca el texto cuando 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
}, {
    threshold: 0.5
})

cards_info.forEach(info => {
    observer.observe(info)
})