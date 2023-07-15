// CÓDIGO PARA DETALHAMENTO
function fetchLivroDetails (livroId) {
    window.location.hash = "/Detalhes";
        
    let url = `http://localhost:8080/api/livros/detalhar/${livroId}`;
    fetch(url, {
        method: 'get'
    })
    .then(response => response.json())
    .then(data => {
            document.querySelector('#livro-id').innerText = `ID: ${data.id}`;
            document.querySelector('#livro-isbn').innerText = `ISBN: ${data.isbn}`;
            document.querySelector('#livro-titulo').innerText = `Título: ${data.titulo}`;
            document.querySelector('#livro-autoria').innerText = `Autoria: ${data.autoria}`;
            document.querySelector('#livro-editora').innerText = `Editora: ${data.editora}`;
            document.querySelector('#livro-categoria').innerText = `Categoria: ${data.categoria}`;
            document.querySelector('#livro-preco').innerText = `Preço: ${data.precoVenda.toFixed(2)}`;
            document.querySelector('#livro-quantidade').innerText = `Quantidade: ${data.quantidade}`;
    })
    .catch(error => console.error(error));

}      

// CÓDIGO PARA LISTAR LIVROS

const getlistLivros = async() => {
    let url = 'http://localhost:8080/api/livros/buscar';
    fetch(url, {
        method: 'get'
    }) 
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#livros-table tbody');
        data.forEach(livro => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${livro.id}</td>
                <td>${livro.titulo}</td>
                <td>${livro.autoria}</td>
                <td>${livro.categoria}</td>
                <td class="valor-monetario">${livro.precoVenda.toFixed(2)}</td>
                <td>${livro.quantidade}</td>
                <td><a onclick="fetchLivroDetails(${livro.id})"><img src="assets//img/bx-info-circle.svg" alt="Ícone de informação"></a></td>
            `;            
            tableBody.appendChild(row);
            console.log(row);
        }); 
    })        
    .catch(error => console.error(error));
};

if (window.location.hash === "" || window.location.hash === "/"){
        document.addEventListener('DOMContentLoaded', () => {getlistLivros()});
    } else;




//CÓDIGO PARA CADASTRAR LIVRO

function formCompleto() {
    document.getElementById("livroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página
    salvarLivro();
    });
}

function limparCamposInputTela() {
    document.getElementById("isbn").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("autoria").value = "";
    document.getElementById("editora").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precoVenda").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("capa").value = "";

} 

const salvarLivro = async() => {
    let url = 'http://localhost:8080/api/livros/cadastrar'

    fetch(url, {
        headers: {"Content-Type" : "application/json;"}, // informar para a API que o body é um json
        method: 'POST',
        body: JSON.stringify({
            "isbn": document.getElementById('isbn').value,
            "titulo": document.getElementById('titulo').value,
            "autoria": document.getElementById('autoria').value,
            "editora": document.getElementById('editora').value,
            "categoria": document.getElementById('categoria').value,
            "precoVenda": document.getElementById('precoVenda').value,
            "quantidade": document.getElementById('quantidade').value,
            
        }), //converter objeto javascript em um objeto do tipo json
        
    })
    .then((response) => response.json())
    .catch((error) => {
        console.log('Error: ', error);
    });
    limparCamposInputTela(); // função para limpar as informações do campo de input da tela/interface        
    alert("Livro cadastrado com sucesso!");
}



// CÓDIGO PARA BUSCAR POR TITULO OU AUTOR
const fetchLivros = async() => {
    window.location.hash = "/Buscar";
    
    let url = 'http://localhost:8080/api/livros/buscar';
    fetch(url, {
        method: 'get'
    }) 
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#livros-table tbody');
            const searchInput = document.querySelector('#search-input');
            
            const filterLivros = () => {
                const searchTerm = searchInput.value.toLowerCase();
                const filteredLivros = data.filter(livro => {
                    return (
                        livro.titulo.toLowerCase().includes(searchTerm) ||
                        livro.autoria.toLowerCase().includes(searchTerm) 
                    );
                });
                
                tableBody.innerHTML = '';
                
                filteredLivros.forEach(livro => {
                    const row = document.createElement('tr');
                    row.id =livro.id;
                    row.innerHTML = `
                        <td>${livro.id}</td>
                        <td>${livro.titulo}</td>
                        <td>${livro.autoria}</td>
                        <td>${livro.categoria}</td>
                        <td class="valor-monetario">${livro.precoVenda.toFixed(2)}</td>
                        <td>${livro.quantidade}</td>
                        <td><a onclick="fetchLivroDetails(${livro.id})"><img src="assets//img/bx-info-circle.svg" alt="Ícone de informação"></a></td>
                    `;
                    tableBody.appendChild(row);
                });
            };
            
            searchInput.addEventListener('input', filterLivros);
            
            filterLivros();
        })
        .catch(error => console.error(error));
}


