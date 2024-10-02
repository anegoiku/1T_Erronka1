document.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo_wrap img')
    if(window.scrollY > 0){
        logo.classList.add('logo-sm')
    }else{
        logo.classList.remove('logo-sm')
    }
})

document.getElementById('hamburger_menu').addEventListener('click', () => {
    document.getElementById('hamburger_menu').classList.toggle('menu_open')
})

