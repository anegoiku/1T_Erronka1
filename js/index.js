function funcion(i){
    switch (i){
        case 1:
            window.open("https://www.tripadvisor.es/Attraction_Review-g295394-d318365-Reviews-Black_Church_Biserica_Neagra-Brasov_Brasov_County_Central_Romania_Transylvania.html", "_blank", "width=900, height=700, top=50px, left=50px");
            break;
        case 2:
            window.open("https://www.tripadvisor.es/Tourism-g295394-Brasov_Brasov_County_Central_Romania_Transylvania-Vacations.html", "_blank", "width=900, height=700, top=50px, left=50px");
            break;
        case 3:
            window.open("https://www.tripadvisor.es/Tourism-g26228115-Mosna_Sibiu_County_Central_Romania_Transylvania-Vacations.html", "_blank", "width=900, height=700, top=50px, left=50px");
            break;
        case 4:
            window.open("https://www.tripadvisor.es/Tourism-g295393-Sibiu_Sibiu_County_Central_Romania_Transylvania-Vacations.html", "_blank", "width=900, height=700, top=50px, left=50px");
            break;
        default:
    }

   }

// Codigo alternativo

// const links = [
//     "https://www.tripadvisor.es/Attraction_Review-g295394-d318365-Reviews-Black_Church_Biserica_Neagra-Brasov_Brasov_County_Central_Romania_Transylvania.html",
//     "https://www.tripadvisor.es/Tourism-g295394-Brasov_Brasov_County_Central_Romania_Transylvania-Vacations.html",
//     "https://www.tripadvisor.es/Tourism-g26228115-Mosna_Sibiu_County_Central_Romania_Transylvania-Vacations.html",
//     "https://www.tripadvisor.es/Tourism-g295393-Sibiu_Sibiu_County_Central_Romania_Transylvania-Vacations.html"
// ]

// const options = "width=900, height=700, top=50px, left=50px"

// for(let i = 0; i < document.querySelectorAll('.cardArgazkia').length; i++){
//     document.querySelectorAll('.cardArgazkia')[i].addEventListener('click', () => {
//         window.open(links[i], '_blank', options)
//     })
// }