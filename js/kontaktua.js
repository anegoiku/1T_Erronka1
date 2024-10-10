//Bidali botoia(submit)
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    const form = document.querySelector("form");
    if (form.checkValidity()) {
        const erantzuna = confirm("Ziur zaude mezu hori bidali nahi duzula?");
        
        if (erantzuna) {
                let izena= document.getElementById('izena').value;
                let email= document.getElementById('email').value;

                let sexua = document.querySelector('input[name="sexua"]:checked').value;
                let ezagutza = Array.from(document.querySelectorAll('input[name="ezagutza"]:checked'))
                    .map(checkbox => checkbox.value);

                let mezua = document.getElementById('mezua').value;

                let datos = [
                    `Izena: ${izena}`,
                    `E-mail: ${email}`,
                    `Sexua: ${sexua}`,
                    `Ezagutza: ${ezagutza.join(', ')}`,
                    `Mezua: ${mezua}`
                ];
                alert("Formularioa ondo bidali da datu hauekin: \n"+datos.join('\n'));
          
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
