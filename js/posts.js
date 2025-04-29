// Funções relacionadas a posts
document.addEventListener('DOMContentLoaded', function() {
    // Carrega todos os posts na página de fofocas
    if (document.getElementById('postsContainer')) {
        loadAllPosts();
    }
    
    // Carrega posts do usuário na página de perfil
    if (document.getElementById('userPosts')) {
        loadUserPosts();
    }
});

function loadAllPosts() {
    // Simulação - na implementação real, fazer requisição AJAX
    const allPosts = [
        {
            id: 1,
            user: 'Fofoqueiro101',
            avatar: 'images/default-avatar.jpg',
            time: '2 horas atrás',
            content: 'Vocês viram o que aconteceu no laboratório de informática hoje? O professor nem percebeu!',
            image: 'images/lab.jpg',
            likes: 24,
            comments: 8,
            isLiked: false
        },
        {
            id: 2,
            user: 'ReporterX',
            avatar: 'images/avatar2.jpg',
            time: '5 horas atrás',
            content: 'O diretor foi visto saindo com uma mulher misteriosa após o expediente... Será que é o que estamos pensando?',
            image: '',
            likes: 56,
            comments: 23,
            isLiked: true
        },
        {
            id: 3,
            user: 'Curioso88',
            avatar: 'images/avatar3.jpg',
            time: 'Ontem',
            content: 'Alguém sabe por que o refeitório mudou o cardápio esta semana? Está uma delícia!',
            image: 'images/food.jpg',
            likes: 12,
            comments: 5,
            isLiked: false
        }
    ];
    
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';
    
    allPosts.forEach(post => {
        const postHTML = `
            <div class="post fade-in" data-post-id="${post.id}">
                <div class="post-header">
                    <img src="${post.avatar}" alt="${post.user}" class="post-avatar">
                    <span class="post-user">${post.user}</span>
                    <span class="post-time">${post.time}</span>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
                </div>
                <div class="post-actions">
                    <div class="post-action like-btn ${post.isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <i class="fas fa-heart"></i> <span class="like-count">${post.likes}</span>
                    </div>
                    <div class="post-action comment-btn" data-post-id="${post.id}">
                        <i class="fas fa-comment"></i> ${post.comments}
                    </div>
                </div>
                <div class="comments" id="comments-${post.id}">
                    <!-- Comentários seriam carregados aqui -->
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', postHTML);
    });
    
    // Configura eventos de like
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', handleLike);
    });
    
    // Configura eventos de comentário
    document.querySelectorAll('.comment-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            toggleComments(postId);
        });
    });
}

function loadUserPosts() {
    // Simulação - na implementação real, fazer requisição AJAX para posts do usuário
    const userPosts = [
        {
            id: 4,
            user: localStorage.getItem('username') || 'Eu',
            avatar: localStorage.getItem('avatar') || 'images/default-avatar.jpg',
            time: '3 dias atrás',
            content: 'Postei isso há alguns dias, alguém se lembra?',
            image: '',
            likes: 8,
            comments: 2,
            isLiked: false
        },
        {
            id: 5,
            user: localStorage.getItem('username') || 'Eu',
            avatar: localStorage.getItem('avatar') || 'images/default-avatar.jpg',
            time: '1 semana atrás',
            content: 'Minha primeira fofoca aqui no site! Espero que gostem!',
            image: 'images/first-post.jpg',
            likes: 15,
            comments: 3,
            isLiked: false
        }
    ];
    
    const container = document.getElementById('userPosts');
    container.innerHTML = '';
    
    userPosts.forEach(post => {
        const postHTML = `
            <div class="post fade-in" data-post-id="${post.id}">
                <div class="post-header">
                    <img src="${post.avatar}" alt="${post.user}" class="post-avatar">
                    <span class="post-user">${post.user}</span>
                    <span class="post-time">${post.time}</span>
                    <button class="btn btn-danger btn-sm delete-post" data-post-id="${post.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                    ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
                </div>
                <div class="post-actions">
                    <div class="post-action like-btn ${post.isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                        <i class="fas fa-heart"></i> <span class="like-count">${post.likes}</span>
                    </div>
                    <div class="post-action comment-btn" data-post-id="${post.id}">
                        <i class="fas fa-comment"></i> ${post.comments}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', postHTML);
    });
    
    // Configura eventos de like
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', handleLike);
    });
    
    // Configura eventos de deletar post
    document.querySelectorAll('.delete-post').forEach(btn => {
        btn.addEventListener('click', function() {
            const postId = this.getAttribute('data-post-id');
            deletePost(postId);
        });
    });
}

function handleLike(e) {
    const likeBtn = e.currentTarget;
    const postId = likeBtn.getAttribute('data-post-id');
    const likeCount = likeBtn.querySelector('.like-count');
    let count = parseInt(likeCount.textContent);
    
    if (likeBtn.classList.contains('liked')) {
        // Já curtiu, remover like
        likeBtn.classList.remove('liked');
        count--;
    } else {
        // Curtir
        likeBtn.classList.add('liked');
        count++;
    }
    
    likeCount.textContent = count;
    
    // Simulação - na implementação real, enviar para o servidor
    console.log(`Post ${postId} ${likeBtn.classList.contains('liked') ? 'curtido' : 'descurtido'}`);
}

function toggleComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    
    if (!commentsSection) return;
    
    if (commentsSection.innerHTML.trim() === '') {
        // Carrega comentários
        loadComments(postId);
    } else {
        // Alterna visibilidade
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    }
}

function loadComments(postId) {
    // Simulação - na implementação real, fazer requisição AJAX
    const comments = [
        {
            id: 1,
            user: 'Comentarista1',
            avatar: 'images/avatar4.jpg',
            time: '1 hora atrás',
            content: 'Isso é incrível! Mais detalhes, por favor!',
            isOwner: false
        },
        {
            id: 2,
            user: localStorage.getItem('username') || 'Eu',
            avatar: localStorage.getItem('avatar') || 'images/default-avatar.jpg',
            time: '45 minutos atrás',
            content: 'Eu vi com meus próprios olhos!',
            isOwner: true
        }
    ];
    
    const commentsSection = document.getElementById(`comments-${postId}`);
    commentsSection.innerHTML = '';
    
    comments.forEach(comment => {
        const commentHTML = `
            <div class="comment" data-comment-id="${comment.id}">
                <div class="comment-header">
                    <img src="${comment.avatar}" alt="${comment.user}" class="comment-avatar">
                    <span class="comment-user">${comment.user}</span>
                    <span class="comment-time">${comment.time}</span>
                </div>
                <p>${comment.content}</p>
                <div class="comment-actions">
                    ${comment.isOwner ? '<button class="btn btn-danger btn-sm delete-comment" data-comment-id="${comment.id}"><i class="fas fa-trash"></i> Remover</button>' : ''}
                </div>
            </div>
        `;
        commentsSection.insertAdjacentHTML('beforeend', commentHTML);
    });
    
    // Adicionar área para novo comentário
    const newCommentHTML = `
        <div class="add-comment">
            <textarea class="form-control" placeholder="Adicione um comentário..." rows="2"></textarea>
            <button class="btn btn-primary btn-sm post-comment" data-post-id="${postId}" style="margin-top: 0.5rem;">Comentar</button>
        </div>
    `;
    commentsSection.insertAdjacentHTML('beforeend', newCommentHTML);
    
    // Configurar evento para postar comentário
    document.querySelector(`.post-comment[data-post-id="${postId}"]`).addEventListener('click', function() {
        const textarea = this.previousElementSibling;
        const content = textarea.value.trim();
        
        if (content) {
            addComment(postId, content);
            textarea.value = '';
        }
    });
    
    // Configurar eventos para deletar comentários
    document.querySelectorAll(`.delete-comment`).forEach(btn => {
        btn.addEventListener('click', function() {
            const commentId = this.getAttribute('data-comment-id');
            deleteComment(postId, commentId);
        });
    });
}

function addComment(postId, content) {
    // Simulação - na implementação real, enviar para o servidor
    console.log(`Novo comentário no post ${postId}: ${content}`);
    
    // Atualizar interface
    const commentsSection = document.getElementById(`comments-${postId}`);
    const newComment = {
        id: Date.now(), // ID temporário
        user: localStorage.getItem('username') || 'Eu',
        avatar: localStorage.getItem('avatar') || 'images/default-avatar.jpg',
        time: 'Agora',
        content: content,
        isOwner: true
    };
    
    const commentHTML = `
        <div class="comment" data-comment-id="${newComment.id}">
            <div class="comment-header">
                <img src="${newComment.avatar}" alt="${newComment.user}" class="comment-avatar">
                <span class="comment-user">${newComment.user}</span>
                <span class="comment-time">${newComment.time}</span>
            </div>
            <p>${newComment.content}</p>
            <div class="comment-actions">
                <button class="btn btn-danger btn-sm delete-comment" data-comment-id="${newComment.id}"><i class="fas fa-trash"></i> Remover</button>
            </div>
        </div>
    `;
    
    // Inserir antes do formulário de comentário
    const form = commentsSection.querySelector('.add-comment');
    form.insertAdjacentHTML('beforebegin', commentHTML);
    
    // Configurar evento para deletar o novo comentário
    commentsSection.querySelector(`.delete-comment[data-comment-id="${newComment.id}"]`).addEventListener('click', function() {
        deleteComment(postId, newComment.id);
    });
    
    // Atualizar contador de comentários
    const commentBtn = document.querySelector(`.comment-btn[data-post-id="${postId}"]`);
    if (commentBtn) {
        const count = parseInt(commentBtn.textContent.match(/\d+/)[0]) + 1;
        commentBtn.innerHTML = `<i class="fas fa-comment"></i> ${count}`;
    }
}

function deleteComment(postId, commentId) {
    // Simulação - na implementação real, enviar para o servidor
    console.log(`Remover comentário ${commentId} do post ${postId}`);
    
    // Remover da interface
    const comment = document.querySelector(`.comment[data-comment-id="${commentId}"]`);
    if (comment) {
        comment.remove();
    }
    
    // Atualizar contador de comentários
    const commentBtn = document.querySelector(`.comment-btn[data-post-id="${postId}"]`);
    if (commentBtn) {
        const count = Math.max(0, parseInt(commentBtn.textContent.match(/\d+/)[0]) - 1);
        commentBtn.innerHTML = `<i class="fas fa-comment"></i> ${count}`;
    }
}

function deletePost(postId) {
    // Simulação - na implementação real, enviar para o servidor
    if (confirm('Tem certeza que deseja excluir esta postagem?')) {
        console.log(`Remover post ${postId}`);
        
        // Remover da interface
        const post = document.querySelector(`.post[data-post-id="${postId}"]`);
        if (post) {
            post.remove();
        }
    }
}