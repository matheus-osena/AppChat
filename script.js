let currentUser = 'Usu'; // usuário padrão

document.getElementById('userUsu').addEventListener('click', () => {
  currentUser = 'Usu';
  updateButtonStyles();
});

document.getElementById('userArio').addEventListener('click', () => {
  currentUser = 'Ario';
  updateButtonStyles();
});

function updateButtonStyles() {
  document.getElementById('userUsu').style.backgroundColor = currentUser === 'Usu' ? '#4caf50' : '#eee';
  document.getElementById('userArio').style.backgroundColor = currentUser === 'Ario' ? '#4caf50' : '#eee';
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageContainer = document.getElementById('message-container');

  if (messageInput.value.trim() !== '') {
    const message = document.createElement('div');
    message.className = currentUser === 'Usu' ? 'userUsuMessage' : 'userArioMessage';
    message.textContent = currentUser + ': ' + messageInput.value.trim();

    messageContainer.appendChild(message);
    messageInput.value = '';

    // Scroll
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}
