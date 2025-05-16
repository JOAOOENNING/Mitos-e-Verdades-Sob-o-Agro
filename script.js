// script.js

// Rolagem suave para as seções
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interação do Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('.accordion-content');
    const icon = button.querySelector('i'); // Assumindo que o ícone está dentro do botão

    button.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;

        this.setAttribute('aria-expanded', !expanded);
        content.style.display = expanded ? 'none' : 'block';

        // Alterna as classes do ícone se o elemento <i> existir
        if (icon) {
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
    });
});

// Gráfico de Desmatamento (Chart.js)
const graficoDesmatamentoCtx = document.getElementById('graficoDesmatamento');
if (graficoDesmatamentoCtx) {
    new Chart(graficoDesmatamentoCtx, {
        type: 'bar',
        data: {
            labels: ['Agropecuária', 'Exploração Florestal', 'Mineração', 'Expansão Urbana', 'Outros'],
            datasets: [{
                label: 'Participação (%)',
                data: [45, 25, 15, 10, 5], // Dados fictícios - SUBSTITUA PELOS REAIS
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Porcentagem'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Participação Setorial no Desmatamento',
                    fontSize: 16
                }
            }
        }
    });
}

// Mapa Interativo (Leaflet.js)
const mapaDiv = document.getElementById('mapa');
if (mapaDiv) {
    const map = L.map('mapa').setView([-24.726, -53.053], 13); // Coordenadas de Toledo-PR e zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adicione marcadores para pontos de conexão campo-cidade em Toledo
    L.marker([-24.72, -53.06]).addTo(map) // Exemplo: Feira do Produtor de Toledo (coordenadas aproximadas)
        .bindPopup('Feira do Produtor de Toledo');

    L.marker([-24.73, -53.04]).addTo(map) // Exemplo: Mercado Municipal de Toledo (coordenadas aproximadas)
        .bindPopup('Mercado Municipal de Toledo');