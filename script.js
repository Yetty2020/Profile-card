function updateUTCTime() {
    const timeElement = document.getElementById('utc-time');
    const now = new Date();
    timeElement.textContent = now.toUTCString();
}
updateUTCTime();

