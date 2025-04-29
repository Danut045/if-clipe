// Verificação de login (simplificado)
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está logado (simulação)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Atualiza a navegação com base no status de login
    if (isLoggedIn) {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('register-link').style.display = 'none';
        document.getElementById('profile-link').style.display = 'block';
    } else {
        document.getElementById('login-link').style.display = 'block';
        document.getElementById('register-link').style.display = 'block';
        document.getElementById('profile-link').style.display = 'none';
    }
    
    // Troca de abas nas configurações
    const tabButtons = document.querySelectorAll('.settings-tabs button');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões e conteúdos
                document.querySelectorAll('.settings-tabs button').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Mostra o conteúdo correspondente
                const tabId = this.getAttribute('data-tab');
                document.getElementById(`${tabId}-tab`).classList.add('active');
            });
        });
    }
    
    // Upload de imagem de perfil (simulação)
    const profilePicInput = document.getElementById('profile-pic');
    if (profilePicInput) {
        profilePicInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('profile-pic-preview').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Upload de imagem de capa (simulação)
    const coverPicInput = document.getElementById('cover-pic');
    if (coverPicInput) {
        coverPicInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('cover-pic-preview').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // Botões de upload
    const uploadPicBtn = document.getElementById('upload-pic-btn');
    if (uploadPicBtn) {
        uploadPicBtn.addEventListener('click', function() {
            profilePicInput.click();
        });
    }
    
    const uploadCoverBtn = document.getElementById('upload-cover-btn');
    if (uploadCoverBtn) {
        uploadCoverBtn.addEventListener('click', function() {
            coverPicInput.click();
        });
    }
});