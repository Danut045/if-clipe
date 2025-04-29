document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn) {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('register-link').style.display = 'none';
        document.getElementById('profile-link').style.display = 'block';
        
        // Carregar nome de usuário se disponível
        const username = localStorage.getItem('username');
        if (username) {
            document.getElementById('nav-username').textContent = username;
        }
    } else {
        document.getElementById('profile-link').style.display = 'none';
    }
    
    // Botões de seguir
    const followButtons = document.querySelectorAll('.follow-btn, .follow-category');
    followButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (isLoggedIn) {
                this.classList.toggle('following');
                if (this.classList.contains('following')) {
                    this.textContent = 'Seguindo';
                    this.style.backgroundColor = '#f5f5f5';
                    this.style.color = var(--text-color);
                } else {
                    this.textContent = 'Seguir';
                    this.style.backgroundColor = var(--primary-color);
                    this.style.color = 'white';
                }
            } else {
                alert('Você precisa estar logado para seguir usuários ou categorias.');
                window.location.href = 'login.html';
            }
        });
    });
    
    // Filtros de pesquisa
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Aqui você implementaria a filtragem real dos resultados
        });
    });
    
    // Ordenação
    const sortSelects = document.querySelectorAll('select');
    sortSelects.forEach(select => {
        select.addEventListener('change', function() {
            // Aqui você implementaria a ordenação real dos resultados
            console.log('Ordenar por:', this.value);
        });
    });
});