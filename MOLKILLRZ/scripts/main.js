document.addEventListener('DOMContentLoaded', function() {
    // Efeito ao clicar nos cartões
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Feedback visual ao clicar
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});