document.addEventListener('DOMContentLoaded', function() {
    // Upload de mídia
    const mediaUpload = document.getElementById('media-upload');
    const addImageBtn = document.getElementById('add-image');
    const addVideoBtn = document.getElementById('add-video');
    const mediaPreview = document.getElementById('media-preview');
    
    if (addImageBtn) {
        addImageBtn.addEventListener('click', function() {
            mediaUpload.setAttribute('accept', 'image/*');
            mediaUpload.click();
        });
    }
    
    if (addVideoBtn) {
        addVideoBtn.addEventListener('click', function() {
            mediaUpload.setAttribute('accept', 'video/*');
            mediaUpload.click();
        });
    }
    
    mediaUpload.addEventListener('change', function(e) {
        mediaPreview.innerHTML = '';
        const files = e.target.files;
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileType = file.type.split('/')[0];
            const reader = new FileReader();
            
            reader.onload = function(event) {
                const mediaElement = document.createElement(fileType === 'image' ? 'img' : 'video');
                mediaElement.src = event.target.result;
                
                if (fileType === 'video') {
                    mediaElement.controls = true;
                }
                
                const mediaContainer = document.createElement('div');
                mediaContainer.className = 'media-item';
                mediaContainer.appendChild(mediaElement);
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-media';
                removeBtn.innerHTML = '<i class="fas fa-times"></i>';
                removeBtn.addEventListener('click', function() {
                    mediaContainer.remove();
                });
                
                mediaContainer.appendChild(removeBtn);
                mediaPreview.appendChild(mediaContainer);
            };
            
            reader.readAsDataURL(file);
        }
    });
    
    // Seletor de emojis
    const emojiBtn = document.getElementById('add-emoji');
    const postTextarea = document.getElementById('post-textarea');
    
    if (emojiBtn && postTextarea) {
        emojiBtn.addEventListener('click', function() {
            const picker = new EmojiPicker({
                rootElement: document.body,
                onSelect: (emoji) => {
                    postTextarea.value += emoji;
                    postTextarea.focus();
                },
                position: 'absolute',
                offset: {
                    top: emojiBtn.getBoundingClientRect().bottom + window.scrollY,
                    left: emojiBtn.getBoundingClientRect().left + window.scrollX
                }
            });
            
            picker.open();
        });
    }
    
    // Publicar post
    const submitPost = document.getElementById('submit-post');
    
    if (submitPost) {
        submitPost.addEventListener('click', function() {
            const postText = postTextarea.value.trim();
            const mediaFiles = mediaUpload.files;
            
            if (!postText && mediaFiles.length === 0) {
                alert('Por favor, adicione texto ou mídia ao post.');
                return;
            }
            
            // Simular envio do post
            alert('Post publicado com sucesso!');
            postTextarea.value = '';
            mediaPreview.innerHTML = '';
            mediaUpload.value = '';
        });
    }
    
    // Atualizar foto de perfil
    const profilePicInput = document.getElementById('profile-pic');
    const profilePicPreview = document.getElementById('profile-pic-preview');
    
    if (profilePicInput && profilePicPreview) {
        profilePicInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) { // 5MB
                    alert('A imagem deve ter menos de 5MB.');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePicPreview.src = event.target.result;
                    
                    // Atualizar em todas as instâncias (simulação)
                    document.querySelectorAll('.profile-pic-small, .profile-pic-large').forEach(img => {
                        img.src = event.target.result;
                    });
                    
                    // Simular upload para o servidor
                    setTimeout(() => {
                        alert('Foto de perfil atualizada com sucesso!');
                    }, 1000);
                };
                reader.readAsDataURL(file);
            }
        });
    }
});