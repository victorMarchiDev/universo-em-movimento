const postsContainer = document.getElementById('postsContainer');

// Função para carregar os posts do localStorage
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach((post, index) => addPostToDOM(post.title, post.description, post.image, index));
}

// Função para adicionar post ao DOM
function addPostToDOM(titulo, descricao, imagem, index) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post-card');

    const post = document.createElement('div');
    post.classList.add('post-content');

    post.innerHTML = `
        <div>
            <h3>${titulo}</h3>
            <p>${descricao}</p>
            <img src="${imagem}" alt="Imagem do post" />
            <button class="delete-button" data-index="${index}">Excluir</button>
        </div>
    `;

    postContainer.appendChild(post);
    postsContainer.insertBefore(postContainer, postsContainer.firstChild);

    // Adiciona o evento de clique para excluir o post
    post.querySelector('.delete-button').addEventListener('click', () => {
        deletePost(index);
    });
}

// Função para salvar posts no localStorage
function savePost(titulo, descricao, imagem) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ title: titulo, description: descricao, image: imagem });
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Função para excluir um post
function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(index, 1); // Remove o post pelo índice
    localStorage.setItem('posts', JSON.stringify(posts)); // Atualiza o localStorage

    // Recarrega os posts na tela
    postsContainer.innerHTML = '';
    alert("Post Excluido!");
    loadPosts(); // Recarrega os posts após a exclusão
}

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').files[0];

    if (imagem) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            addPostToDOM(titulo, descricao, imageUrl, postsContainer.children.length); // Adiciona o post ao DOM
            savePost(titulo, descricao, imageUrl); // Salva o post no localStorage
        };
        reader.readAsDataURL(imagem); // Lê a imagem como URL
    }

    this.reset(); // Limpa os campos do formulário
});

// Carrega posts ao inicializar
loadPosts();
