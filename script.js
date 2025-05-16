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
const accordionBtns = document.querySelectorAll('.accordion-item button');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const expanded = this.getAttribute('aria-expanded') === 'true' || false;

        this.setAttribute('aria-expanded', !expanded);
        content.style.display = expanded ? 'none' : 'block';
        this.querySelector('i').classList.toggle('fa-chevron-down');
        this.querySelector('i').classList.toggle('fa-chevron-up');
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

// Mapa Interativo (Simulação - Necessitaria de uma biblioteca de mapas como Leaflet)
const mapaDiv = document.getElementById('mapa');
if (mapaDiv) {
    mapaDiv.innerHTML = '<p>Mapa interativo será implementado aqui (requer biblioteca de mapas como Leaflet.js).</p>';
    // No projeto real, você integraria uma biblioteca de mapas aqui
    // e adicionaria marcadores representando pontos de conexão campo-cidade.
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