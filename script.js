// Cute warning messages for the "No" button
const noMessages = [
    "No 😢",
    "Are you sure? 🥺",
    "Really sure? 😿",
    "Please please! 🙏",
    "Pwetty pwease? 🥹",
    "With sugar on top? 🍬",
    "Think about it again! 💭",
    "Are you positive? 😰",
    "Just one more chance? 🌸",
    "I'll be very sad... 😭",
    "I'll be very depressed 💔",
    "You're breaking my heart 😞",
    "My teddy will cry too 🧸😢",
    "Pretty pretty please? ✨",
    "I'll give you chocolates! 🍫",
    "Forever alone... 😿",
    "Don't do this to me! 💕",
    "Last chance... 🥺",
    "PLEASE! 😭💔"
];

// Emotional emoji reactions (sad, crying, pampering)
const emotionalEmojis = [
    "🥺",
    "😢",
    "😭",
    "😿",
    "💔",
    "😞",
    "😥",
    "🥹",
    "😰",
    "😓",
    "🫣",
    "🙏",
    "😩",
    "😫",
    "🥺💦",
    "😭💔",
    "🫠",
    "😿💧",
    "🥺🙏"
];

let noClickCount = 0;
let yesButtonScale = 1;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('questionScreen');
const successScreen = document.getElementById('successScreen');
const heartsBg = document.getElementById('heartsBg');
const emotionalEmoji = document.getElementById('emotionalEmoji');

// Create floating hearts in background
function createFloatingHearts() {
    const hearts = ['💕', '💖', '💗', '💓', '💘', '💝', '♥️', '❤️', '🩷'];

    setInterval(() => {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heartsBg.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 13000);
    }, 400);
}

// Handle Yes button click
yesBtn.addEventListener('click', () => {
    // Create confetti explosion
    createConfetti();

    // Show success screen
    setTimeout(() => {
        questionScreen.classList.add('hidden');
        successScreen.classList.remove('hidden');
    }, 300);
});

// Handle No button click
noBtn.addEventListener('click', () => {
    noClickCount++;

    // Add shake animation
    noBtn.classList.add('shake');
    setTimeout(() => noBtn.classList.remove('shake'), 400);

    // Show emotional emoji reaction
    const randomEmoji = emotionalEmojis[Math.floor(Math.random() * emotionalEmojis.length)];
    emotionalEmoji.textContent = randomEmoji;
    emotionalEmoji.classList.remove('animate');
    void emotionalEmoji.offsetWidth; // Trigger reflow for animation restart
    emotionalEmoji.classList.add('animate');
});

// Create confetti effect
function createConfetti() {
    const colors = ['#ff85a2', '#ff5c8d', '#ffb6c1', '#e84a7f', '#ff69b4', '#ff1493'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Initialize floating hearts
createFloatingHearts();

// Make no button run away anywhere on screen on hover
noBtn.addEventListener('mouseenter', () => {
    // Calculate random position anywhere on the screen
    const btnRect = noBtn.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Random position with padding from edges
    const padding = 50;
    const randomX = padding + Math.random() * (screenWidth - btnRect.width - padding * 2);
    const randomY = padding + Math.random() * (screenHeight - btnRect.height - padding * 2);

    // Make button fixed position and teleport it
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '9999';
    noBtn.style.transition = 'none'; // Instant teleport, no animation
});
