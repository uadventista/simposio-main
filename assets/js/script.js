function mostrar(e) {
    if (e.classList.contains("fa-moon-o")) {
        e.classList.remove("fa-moon-o");
        e.classList.add("fa-sun-o");
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(10, 10, 10)';
        document.querySelector('#userName').style.color = '#fff';

        let links = document.querySelectorAll('.link');
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(100%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(100%)';
        }

    } else {
        e.classList.remove("fa-sun-o");
        e.classList.add("fa-moon-o");
        e.style.color = "#585858";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';

        let links = document.querySelectorAll('.link');
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }
}

function abrirPreguntasPonentes(event) {
    event.preventDefault();

    var submenu = document.getElementById("submenu-preguntas");

    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block";
    } else {
        submenu.style.display = "none";
    }
}
