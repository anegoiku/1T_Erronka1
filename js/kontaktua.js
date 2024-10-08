/*Egiaztatzen du galdetegian parametroak badaude eta confirm bat irtetzen da bidaltzeko edo ez*/
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    const form = document.querySelector("form");
    if (form.checkValidity()) {
        const erantzuna = confirm("¿Ziur zaude mezu hori bidali nahi duzula?");
        
        if (erantzuna) {
            alert("Ondo bidali da kontaktu galdetegia!");
            form.submit(); 
        } else {
            alert("Ez duzu galdetegia bidali!");
        }
    } else {
        alert("Mesedez, bete galdetegiko parametro guztiak bidali ahal izateko!");
    }
});

//Ezabatu botoia zakatzerakoan confirm batekin galdetzen du ea ezabatu nahi den
document.getElementById("reset").addEventListener("click", function(event) {
    const erantzuna = confirm("Ezabatu nahi al duzu formularioa?");
    if (!erantzuna) {
        event.preventDefault(); 
    }
});
