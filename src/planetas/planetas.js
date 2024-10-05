const planets = document.querySelectorAll('.planet');
const infoBox = document.querySelector('.info-box');

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
        infoBox.textContent = `Você passou o mouse sobre ${planetName}`;

        // Exibe a caixa com transição suave
        infoBox.style.display = 'block';
        setTimeout(() => { infoBox.style.opacity = 1; }, 0); // Inicia a transição após exibir
    });

    planet.addEventListener('mouseout', () => {
        infoBox.style.opacity = 0; // Inicia a transição de desaparecimento
        setTimeout(() => { infoBox.style.display = 'none'; }, 200); // Esconde após a transição
    });
});
