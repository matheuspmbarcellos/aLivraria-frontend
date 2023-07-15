// Mapeamento de rotas
const routes = {
    '': './assets/pages/lista-livros.html',
    '/Buscar': './assets/pages/lista-livros.html',
    '/Cadastrar': './assets/pages/cadastro-livro.html',
    '/Detalhes': './assets/pages/detalhes.html'
};

// Função para carregar o conteúdo da rota solicitada
function loadContent(route) {
    const contentDiv = document.getElementById('content');
    const filename = routes[route];
    
    if (filename) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', filename, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                contentDiv.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    } else {
        contentDiv.innerHTML = 'Página não encontrada';
    }
}

// Função para verificar a rota atual e carregar o conteúdo correspondente
function handleRoute() {
    const route = window.location.hash.slice(1);
    loadContent(route);
}

// Evento para lidar com alterações de rota
window.addEventListener('hashchange', handleRoute);

// Carrega a rota inicial
handleRoute();
