document.addEventListener('DOMContentLoaded', function() {
    // Filtro de tempo
    const trendingTime = document.getElementById('trending-time');
    
    if (trendingTime) {
        trendingTime.addEventListener('change', function() {
            // Simular carregamento de dados diferentes
            console.log('Filtrando trending por:', this.value);
            
            // Em uma aplicação real, aqui seria uma chamada AJAX
            // para buscar os posts mais relevantes no período selecionado
        });
    }
    
    // Carregar posts virais
    function loadViralPosts(time = 'today') {
        // Simulação de dados
        const viralPosts = [
            {
                id: 1,
                user: {
                    name: "Carlos Eduardo",
                    username: "@carloseduardo",
                    avatar: "imagens/user1.jpg"
                },
                content: "Novo diretor pode ser anunciado na próxima semana! Segundo fontes próximas à reitoria, a decisão já foi tomada.",
                time: "2 horas atrás",
                likes: 245,
                comments: 78,
                shares: 42,
                isLiked: false,
                media: null
            },
            {
                id: 2,
                user: {
                    name: "Ana Maria",
                    username: "@aninhamat",
                    avatar: "imagens/user2.jpg"
                },
                content: "Prova de Cálculo será adiada - Confirmação? O professor não confirmou ainda, mas vários alunos estão comentando.",
                time: "5 horas atrás",
                likes: 189,
                comments: 42,
                shares: 23,
                isLiked: true,
                media: "imagens/calculus.jpg"
            }
        ];
        
        const postsContainer = document.querySelector('.viral-posts .fofocas-list');
        if (postsContainer) {
            postsContainer.innerHTML = '';
            
            viralPosts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.className = 'fofoca-card viral-card';
                postElement.innerHTML = `
                    <div class="fofoca-header">
                        <img src="${post.user.avatar}" alt="Usuário" class="profile-pic-small">
                        <div class="user-info">
                            <h3>${post.user.name}</h3>
                            <span class="username">${post.user.username}</span>
                            <span class="post-time">${post.time}</span>
                        </div>
                        <span class="viral-badge"><i class="fas fa-bolt"></i> Viral</span>
                    </div>
                    <div class="fofoca-content">
                        <p>${post.content}</p>
                        ${post.media ? `<img src="${post.media}" alt="Mídia" class="fofoca-image">` : ''}
                    </div>
                    <div class="fofoca-stats">
                        <span>${post.likes.toLocaleString()} curtidas</span>
                        <span>${post.comments.toLocaleString()} comentários</span>
                        <span>${post.shares.toLocaleString()} compartilhamentos</span>
                    </div>
                    <div class="fofoca-actions">
                        <button class="${post.isLiked ? 'liked' : ''}"><i class="${post.isLiked ? 'fas' : 'far'} fa-heart"></i> Curtir</button>
                        <button><i class="far fa-comment"></i> Comentar</button>
                        <button><i class="fas fa-share"></i> Compartilhar</button>
                    </div>
                `;
                
                postsContainer.appendChild(postElement);
            });
        }
    }
    
    // Carregar posts virais iniciais
    loadViralPosts();
    
    // Interação com posts
    document.addEventListener('click', function(e) {
        if (e.target.closest('.fofoca-actions button')) {
            const button = e.target.closest('button');
            if (button.innerHTML.includes('fa-heart')) {
                button.classList.toggle('liked');
                const icon = button.querySelector('i');
                if (button.classList.contains('liked')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            }
        }
    });
});