const planets = document.querySelectorAll('.planet');
const infoBoxLeft = document.querySelector('.info-box-left');
const infoBoxRight = document.querySelector('.info-box-right');

const planetNames = {
    planet1: 'Planeta 1',
    planet2: 'Planeta 2',
    planet3: 'Planeta 3',
    planet4: 'Planeta 4',
    planet5: 'Planeta 5',
    planet6: 'Planeta 6',
    planet7: 'Planeta 7'
};

planets.forEach(planet => {
    planet.addEventListener('mouseover', () => {
        const planetClass = planet.classList[1]; // Usa a classe do planeta para o nome
        const planetName = planetNames[planetClass] || planetClass; // Usa o nome mapeado ou a classe
        infoBoxLeft.textContent = `Você passou o mouse sobre ${planetName}`;

        // Exibe a caixa com transição suave
        infoBoxLeft.style.display = 'block';
        setTimeout(() => { infoBoxLeft.style.opacity = 1; }, 0); // Inicia a transição após exibir

        // Exibe a caixa com transição suave
        infoBoxRight.style.display = 'block';
        setTimeout(() => { infoBoxRight.style.opacity = 1; }, 0); // Inicia a transição após exibir
    });

    planet.addEventListener('mouseout', () => {
        infoBoxLeft.style.opacity = 0; // Inicia a transição de desaparecimento
        setTimeout(() => { infoBoxLeft.style.display = 'none'; }, 200); // Esconde após a transição

        infoBoxRight.style.opacity = 0; // Inicia a transição de desaparecimento
        setTimeout(() => { infoBoxRight.style.display = 'none'; }, 200); // Esconde após a transição
    });
});
