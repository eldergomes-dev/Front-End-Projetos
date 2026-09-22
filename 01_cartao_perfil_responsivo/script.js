// ==========================================================================
// PROJETO 01: CARTÃO DE PERFIL RESPONSIVO
// Funcionalidade: Alternância de Tema (Dark/Light) com persistência em LocalStorage
// ==========================================================================

// 1. Seleção dos elementos do DOM
const themeToggleButton = document.getElementById('theme-toggle');

// 2. Busca a preferência de tema salva no navegador (se existir)
const savedTheme = localStorage.getItem('theme');

// 3. Aplica o tema salvo no carregamento inicial da página
if(savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Atualiza o ícone do botão com base no tema ativo
    if (savedTheme === 'light') {
        themeToggleButton.textContent = '☀️';
    }
    else {
        themeToggleButton.textContent = '🌙';
    }
}

// 4. Evento de clique para alternar o tema
themeToggleButton.addEventListener('click', () => {
    // Verifica qual tema está ativo no momento
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
        // Se estiver no Light, altera para Dark
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '🌙';
    }
    else {
        // Se estiver no Dark (padrão), altera para Light
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '☀️';
    }
});