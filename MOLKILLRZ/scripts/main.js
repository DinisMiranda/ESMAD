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

        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.card');
            const backButton = document.getElementById('backButton');
            const cardsContainer = document.getElementById('cardsContainer');
            const subtitle = document.getElementById('subtitle');
            
            // Handle card clicks
            cards.forEach(card => {
                card.addEventListener('click', function(e) {
                    e.preventDefault();
                    const sectionId = this.getAttribute('data-section');
                    showSection(sectionId);
                });
            });
            
            // Handle back button
            backButton.addEventListener('click', function(e) {
                e.preventDefault();
                hideAllSections();
            });
            
            function showSection(sectionId) {
                // Hide all sections first
                document.querySelectorAll('.reference-section').forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show the selected section
                const section = document.getElementById(sectionId);
                if (section) {
                    section.classList.add('active');
                    document.body.classList.add('content-shown');
                    
                    // Update subtitle
                    const cardTitle = document.querySelector(`.card[data-section="${sectionId}"] h3`).textContent;
                    subtitle.innerHTML = `<p>${cardTitle}</p>`;
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                }
            }
            
            function hideAllSections() {
                document.querySelectorAll('.reference-section').forEach(section => {
                    section.classList.remove('active');
                });
                document.body.classList.remove('content-shown');
                subtitle.innerHTML = '<p>Selecione um tópico para estudar</p>';
            }
            
            // Handle hash URLs on page load
            if (window.location.hash) {
                const sectionId = window.location.hash.substring(1);
                showSection(sectionId);
            }
        });
