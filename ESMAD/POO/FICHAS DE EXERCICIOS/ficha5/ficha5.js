document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const gameForm = document.getElementById('gameForm');
    const gamesList = document.getElementById('gamesList');
    const filterGenre = document.getElementById('filterGenre');
    const filterPlatform = document.getElementById('filterPlatform');
    const cancelEditBtn = document.getElementById('cancelEdit');
    const editIndexInput = document.getElementById('editIndex');
    
    // Array para armazenar os jogos
    let games = [];
    
    // Carregar jogos do localStorage ao iniciar
    loadGames();
    
    // Atualizar opções de filtro de género
    updateGenreFilter();
    
    // Evento para submeter o formulário
    gameForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar formulário
        if (!validateForm()) {
            return;
        }
        
        // Obter valores do formulário
        const game = {
            name: document.getElementById('name').value,
            year: parseInt(document.getElementById('year').value),
            genre: document.getElementById('genre').value,
            platform: document.getElementById('platform').value,
            rating: parseInt(document.getElementById('rating').value)
        };
        
        const editIndex = parseInt(editIndexInput.value);
        
        if (editIndex >= 0) {
            // Editar jogo existente
            games[editIndex] = game;
            editIndexInput.value = '-1';
            cancelEditBtn.style.display = 'none';
        } else {
            // Adicionar novo jogo
            games.push(game);
        }
        
        // Atualizar a tabela e o localStorage
        updateGamesList();
        saveGames();
        updateGenreFilter();
        
        // Limpar formulário
        gameForm.reset();
    });
    
    // Evento para cancelar edição
    cancelEditBtn.addEventListener('click', function() {
        editIndexInput.value = '-1';
        cancelEditBtn.style.display = 'none';
        gameForm.reset();
    });
    
    // Eventos para filtros
    filterGenre.addEventListener('change', updateGamesList);
    filterPlatform.addEventListener('change', updateGamesList);
    
    // Função para validar o formulário
    function validateForm() {
        let isValid = true;
        const name = document.getElementById('name').value;
        const year = document.getElementById('year').value;
        const genre = document.getElementById('genre').value;
        const platform = document.getElementById('platform').value;
        const rating = document.getElementById('rating').value;
        
        // Limpar mensagens de erro
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
        
        // Validar nome
        if (!name.trim()) {
            document.getElementById('nameError').textContent = 'O nome do jogo é obrigatório';
            isValid = false;
        }
        
        // Validar ano
        if (!year) {
            document.getElementById('yearError').textContent = 'O ano de lançamento é obrigatório';
            isValid = false;
        } else if (isNaN(year) || year < 1950 || year > 2100) {
            document.getElementById('yearError').textContent = 'Ano inválido (deve ser entre 1950 e 2100)';
            isValid = false;
        }
        
        // Validar género
        if (!genre.trim()) {
            document.getElementById('genreError').textContent = 'O género é obrigatório';
            isValid = false;
        }
        
        // Validar plataforma
        if (!platform) {
            document.getElementById('platformError').textContent = 'A plataforma é obrigatória';
            isValid = false;
        }
        
        // Validar avaliação
        if (!rating) {
            document.getElementById('ratingError').textContent = 'A avaliação é obrigatória';
            isValid = false;
        } else if (isNaN(rating) || rating < 1 || rating > 10) {
            document.getElementById('ratingError').textContent = 'Avaliação inválida (deve ser entre 1 e 10)';
            isValid = false;
        }
        
        return isValid;
    }
    
    // Função para atualizar a lista de jogos na tabela
    function updateGamesList() {
        // Limpar tabela
        gamesList.innerHTML = '';
        
        // Obter valores dos filtros
        const genreFilter = filterGenre.value;
        const platformFilter = filterPlatform.value;
        
        // Filtrar jogos
        const filteredGames = games.filter(game => {
            return (!genreFilter || game.genre === genreFilter) && 
                   (!platformFilter || game.platform === platformFilter);
        });
        
        // Adicionar jogos à tabela
        filteredGames.forEach((game, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${game.name}</td>
                <td>${game.year}</td>
                <td>${game.genre}</td>
                <td class="actions">
                    <button onclick="showGameDetails(${index})">Ver detalhes</button>
                    <button onclick="editGame(${index})">Editar</button>
                    <button onclick="deleteGame(${index})">Remover</button>
                </td>
            `;
            
            gamesList.appendChild(row);
        });
    }
    
    // Função para mostrar detalhes do jogo
    window.showGameDetails = function(index) {
        const game = games[index];
        alert(`Detalhes do Jogo:\n\nNome: ${game.name}\nAno: ${game.year}\nGénero: ${game.genre}\nPlataforma: ${game.platform}\nAvaliação: ${game.rating}/10`);
    };
    
    // Função para editar jogo
    window.editGame = function(index) {
        const game = games[index];
        
        // Preencher formulário com os dados do jogo
        document.getElementById('name').value = game.name;
        document.getElementById('year').value = game.year;
        document.getElementById('genre').value = game.genre;
        document.getElementById('platform').value = game.platform;
        document.getElementById('rating').value = game.rating;
        
        // Definir índice de edição
        editIndexInput.value = index;
        cancelEditBtn.style.display = 'inline-block';
    };
    
    // Função para remover jogo
    window.deleteGame = function(index) {
        if (confirm('Tem certeza que deseja remover este jogo?')) {
            games.splice(index, 1);
            updateGamesList();
            saveGames();
            updateGenreFilter();
            
            // Se estava editando o jogo removido, cancelar edição
            if (parseInt(editIndexInput.value) === index) {
                editIndexInput.value = '-1';
                cancelEditBtn.style.display = 'none';
                gameForm.reset();
            }
        }
    };
    
    // Função para atualizar as opções de filtro de género
    function updateGenreFilter() {
        // Obter géneros únicos
        const genres = [...new Set(games.map(game => game.genre))];
        
        // Salvar valor selecionado atual
        const selectedGenre = filterGenre.value;
        
        // Limpar e adicionar opções padrão
        filterGenre.innerHTML = '<option value="">Todos os géneros</option>';
        
        // Adicionar géneros
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            filterGenre.appendChild(option);
        });
        
        // Restaurar seleção anterior, se ainda existir
        if (genres.includes(selectedGenre)) {
            filterGenre.value = selectedGenre;
        }
    }
    
    // Função para salvar jogos no localStorage
    function saveGames() {
        localStorage.setItem('games', JSON.stringify(games));
    }
    
    // Função para carregar jogos do localStorage
    function loadGames() {
        const savedGames = localStorage.getItem('games');
        if (savedGames) {
            games = JSON.parse(savedGames);
            updateGamesList();
        }
    }
});