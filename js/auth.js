// Simulação de sistema de autenticação
document.addEventListener('DOMContentLoaded', function() {
    // Formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validação simples (em um sistema real, isso seria feito no servidor)
            if (email && password) {
                // Simula um login bem-sucedido
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                
                // Redireciona para a página inicial
                window.location.href = 'index.html';
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }
    
    // Formulário de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('reg-username').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            const terms = document.getElementById('terms').checked;
            
            // Validação simples
            if (!username || !email || !password || !confirmPassword) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem.');
                return;
            }
            
            if (!terms) {
                alert('Você deve aceitar os termos de serviço.');
                return;
            }
            
            // Simula um registro bem-sucedido
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('username', username);
            
            // Redireciona para a página inicial
            window.location.href = 'index.html';
        });
    }
    
    // Formulário de alteração de senha
    const securityForm = document.getElementById('security-form');
    if (securityForm) {
        securityForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('current-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmNewPassword = document.getElementById('confirm-new-password').value;
            
            // Validação simples
            if (!currentPassword || !newPassword || !confirmNewPassword) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            if (newPassword !== confirmNewPassword) {
                alert('As novas senhas não coincidem.');
                return;
            }
            
            // Simula uma alteração de senha bem-sucedida
            alert('Senha alterada com sucesso!');
            securityForm.reset();
        });
    }
    
    // Formulário de perfil
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const displayName = document.getElementById('display-name').value;
            const username = document.getElementById('username').value;
            const bio = document.getElementById('bio').value;
            
            // Validação simples
            if (!displayName || !username) {
                alert('Por favor, preencha pelo menos o nome e o nome de usuário.');
                return;
            }
            
            // Simula uma atualização de perfil bem-sucedida
            localStorage.setItem('displayName', displayName);
            localStorage.setItem('username', username);
            localStorage.setItem('bio', bio);
            
            alert('Perfil atualizado com sucesso!');
        });
    }
});