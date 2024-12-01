document.addEventListener('DOMContentLoaded', () => {
    // Chat functionality
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messages = document.getElementById('messages');

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            messages.appendChild(messageElement);
            messageInput.value = '';
            messages.scrollTop = messages.scrollHeight;
        }
    });

    // Code assistance functionality
    const codeInput = document.getElementById('code-input');
    const suggestionsButton = document.getElementById('suggestions-button');
    const suggestions = document.getElementById('suggestions');

    suggestionsButton.addEventListener('click', () => {
        const code = codeInput.value.trim();
        if (code !== '') {
            const exampleSuggestions = [
                'Use const instead of var for variables.',
                'Consider using arrow functions for shorter syntax.',
                'Avoid global variables for better scope management.'
            ];
            suggestions.innerHTML = '';
            exampleSuggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.textContent = suggestion;
                suggestionElement.classList.add('suggestion');
                suggestions.appendChild(suggestionElement);
            });
        }
    });

    // Toggle AI chat functionality
    const toggleChatButton = document.getElementById('toggle-chat');
    const aiChat = document.getElementById('ai-chat');

    toggleChatButton.addEventListener('click', () => {
        if (aiChat.style.display === 'none' || aiChat.style.display === '') {
            aiChat.style.display = 'block';
        } else {
            aiChat.style.display = 'none';
        }
    });
});
