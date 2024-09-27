document.addEventListener("DOMContentLoaded", function() {
    const enlaces = document.querySelectorAll('nav a');
    const todosh2 = document.querySelectorAll('h2');
    let h2content = [];

    for (let j = 0; j < todosh2.length; j++) {
        const texto = todosh2[j].textContent; 
        const letras = texto.split(''); 
        h2content.push(letras); 
        todosh2[j].textContent = ""; 
    }

    function escribirH2() {
        for (let u = 0; u < todosh2.length; u++) {
            let index = 0; 
            function escribirLetra() {
                if (index < h2content[u].length) { 
                    todosh2[u].textContent += h2content[u][index]; 
                    index++; 
                    setTimeout(escribirLetra, 200); 
                }
            }
            todosh2[u].textContent = ""; 
            escribirLetra(); 
        }
    }

    escribirH2();

    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function(e) {
            e.preventDefault();
            const Id = this.getAttribute('href').substring(1);
            const Section = document.getElementById(Id);
            Section.scrollIntoView({
                behavior: 'smooth'
            });
            escribirH2();
        });
    }
});
