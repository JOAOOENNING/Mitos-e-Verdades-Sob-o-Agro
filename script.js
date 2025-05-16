// Por enquanto, este arquivo pode estar vazio ou conter funcionalidades básicas de interação,
// como rolagem suave para as seções (se desejar implementar).

// Exemplo de rolagem suave (opcional):
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});