document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        const confirmSend = confirm("Ziur zaude formularioa bidali nahi duzula?");

        if (confirmSend) {

            alert("¡Ondo bidali da formularioa!");
        } else {
            event.preventDefault();
            alert("¡Ez duzu formularioa bidali!");
        }
    });
});
