function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function showGreeting() {
    const message = document.getElementById('greeting');
    message.classList.toggle('hidden');
}
