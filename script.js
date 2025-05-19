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
                data: [45, 25, 15, 10, 5], // Dados fictícios - substitua pelos reais
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
    const mapa = L.map('mapa').setView([-24.89, -51.55], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    const pontos = [
        { nome: 'Toledo', coords: [-24.7169, -53.7419], info: 'Forte produção de suínos e milho.' },
        { nome: 'Castro', coords: [-24.7917, -50.0178], info: 'Importante bacia leiteira.' },
        { nome: 'Cascavel', coords: [-24.9556, -53.4583], info: 'Produção de grãos e agroindústria.' },
        { nome: 'Arapoti', coords: [-24.1597, -49.8292], info: 'Destaque na produção de mel.' },
        { nome: 'Guarapuava', coords: [-25.3700, -51.4900], info: 'Significativa produção de grãos.' },
        { nome: 'Londrina', coords: [-23.3056, -51.1522], info: 'Centro regional agrícola.' }
    ];

    pontos.forEach(ponto => {
        const marcador = L.marker(ponto.coords).addTo(mapa);
        marcador.bindPopup(`<b>${ponto.nome}</b><br>${ponto.info}`);
    });
}

// Envio de Formulário de Contato (Simulação)
const formContato = document.getElementById('formContato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

if (formContato) {
    formContato.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você poderia adicionar lógica para enviar os dados do formulário
        // para um servidor (isso está fora do escopo do HTML/CSS/JS estático).
        // Para simular, vamos apenas mostrar uma mensagem de sucesso.
        mensagemSucesso.classList.remove('oculto');
        formContato.reset();
        setTimeout(() => {
            mensagemSucesso.classList.add('oculto');
        }, 3000);
    });
}