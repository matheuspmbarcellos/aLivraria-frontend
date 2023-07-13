# Aplicação de Cadastro de Livros

Esta é uma aplicação em JavaScript, HTML e CSS que permite cadastrar livros por meio de um formulário. Os dados do livro, como título, autoria, editora, categoria, ISBN, preço e quantidade, são inseridos no formulário e enviados para uma API desenvolvida com Spring Boot, que utiliza o banco de dados PostgreSQL para armazenar as informações.

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

1. Cadastro de Livros: Os usuários podem preencher um formulário com as informações do livro, incluindo título, autoria, editora, categoria, ISBN, preço e quantidade. Esses dados são enviados para a API, que os armazena no banco de dados.

2. Listagem de Livros: A API fornece rotas para recuperar todos os livros cadastrados. A aplicação JavaScript consome essas rotas e exibe a lista de livros na página HTML.

3. Pesquisa por Título ou Autoria: A aplicação permite que os usuários pesquisem livros por título ou autoria. Ao digitar o título ou autor no campo de pesquisa, a aplicação faz uma requisição à API, que retorna os livros correspondentes. Esses livros são exibidos na página HTML.

## Tecnologias Utilizadas

A aplicação utiliza as seguintes tecnologias:

- JavaScript: Linguagem de programação utilizada para desenvolver a lógica da aplicação no lado do cliente.

- HTML: Linguagem de marcação utilizada para estruturar a página da aplicação.

- CSS: Linguagem utilizada para estilizar a página e fornecer uma experiência visual agradável.

- Spring Boot: Framework utilizado para desenvolver a API RESTful em Java.

- PostgreSQL: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados dos livros.

## Pré-requisitos

Antes de executar a aplicação, é necessário ter instalado o seguinte:

- Navegador web atualizado, como Google Chrome, Mozilla Firefox ou Microsoft Edge.

- Node.js: Plataforma de execução de JavaScript.

- PostgreSQL: Sistema de gerenciamento de banco de dados. Certifique-se de ter um servidor PostgreSQL em execução.

## Executando a Aplicação

Siga as etapas abaixo para executar a aplicação:

1. Clone o repositório para o seu ambiente local:

    ~~~bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ~~~

2. Navegue até o diretório do projeto:

    ~~~bash
    cd nome-do-repositorio
    ~~~
3. Abra o arquivo index.html com um navegador.

A aplicação será carregada no navegador e você poderá começar a cadastrar livros, visualizar a lista de livros e pesquisar por título ou autoria.

## Configuração da API

Certifique-se de configurar corretamente a API desenvolvida com Spring Boot e o banco de dados PostgreSQL. Verifique se a API está em execução e se está configurada para se conectar ao banco de dados corretamente. Certifique-se também de que as rotas da API estejam configuradas corretamente na aplicação JavaScript.

## Considerações Finais

Essa aplicação é apenas um exemplo básico de como cadastrar, listar e pesquisar livros utilizando JavaScript, HTML, CSS, Spring Boot e PostgreSQL. Você pode personalizá-la e adicionar mais funcionalidades de acordo com suas necessidades.

Divirta-se usando a aplicação de cadastro de livros!
