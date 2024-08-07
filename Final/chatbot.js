document.addEventListener('DOMContentLoaded', function() {
    const botIcon = document.getElementById('bot-icon');
    const chatContainer = document.getElementById('chat-container');
    const chatBody = document.getElementById('chat-body');
    const questionList = document.getElementById('question-list');
    const answerDiv = document.getElementById('answer');
    const userQuestionInput = document.getElementById('user-question');
    const sendBtn = document.getElementById('send-btn');
    const refreshBtn = document.getElementById('refresh-btn');

    botIcon.addEventListener('click', function() {
        chatContainer.classList.toggle('minimized');
        if (chatContainer.classList.contains('minimized')) {
            chatContainer.style.display = 'none';
        } else {
            chatContainer.style.display = 'block';
        }
    });

    questionList.addEventListener('click', function(event) {
        if (event.target && event.target.nodeName === 'LI') {
            const answer = event.target.getAttribute('data-answer');
            displayMessage(event.target.innerText, 'question');
            displayMessage(answer, 'answer');
        }
    });

    sendBtn.addEventListener('click', function() {
        const userQuestion = userQuestionInput.value.trim();
        if (userQuestion) {
            displayMessage(userQuestion, 'question');
            userQuestionInput.value = ''; // Clear input after sending
            // Provide a default response or handle the question appropriately
            displayMessage('This is a placeholder answer.', 'answer');
        }
    });

    refreshBtn.addEventListener('click', function() {
        answerDiv.innerHTML = '';
    });

    function displayMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = type;
        messageDiv.innerText = message;
        answerDiv.appendChild(messageDiv);
        answerDiv.scrollTop = answerDiv.scrollHeight; // Auto-scroll to the bottom
    }
});
