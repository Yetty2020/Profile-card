function updateUTCTime() {
    const timeElement = document.getElementById('utc-time');
    const now = new Date();
    timeElement.textContent = now.toUTCString();
}

// Initial call
updateUTCTime();

// Update every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);