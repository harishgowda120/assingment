// Add functionality for countdown timer if needed
const countdowns = document.querySelectorAll('.countdown');
countdowns.forEach(timer => {
    let time = 3600; // 1 hour in seconds
    setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timer.textContent = `${minutes}m ${seconds}s`;
        time--;
    }, 1000);
});

function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

