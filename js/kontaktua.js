//Bidali botoia(submit)
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

//Ezabatu botoia(reset)
document.getElementById("reset").addEventListener("click", function(event) {
    const erantzuna = confirm("Ezabatu nahi al duzu formularioa?");
    if (!erantzuna) {
        event.preventDefault(); // Honek ezabatzea ekiditen du erantzuna ezezkoa bada
    }
});
