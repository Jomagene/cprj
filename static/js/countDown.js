const count = document.querySelectorAll("h1[data-toggle='counter-up']"); 

function animateNumber(paragraphElement) {
const targetNumber = parseInt(paragraphElement.textContent, 10); 

let currentNumber = 0;
const animationDuration = 300;

const interval = setInterval(() => {
    currentNumber += Math.ceil((targetNumber - currentNumber) / (animationDuration / 10));
    paragraphElement.textContent = currentNumber;

    if (currentNumber >= targetNumber) {
    clearInterval(interval);
    }
}, 10);
}

const options = {
root: null,
threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    animateNumber(entry.target); 
    observer.unobserve(entry.target);
    }
});
});

count.forEach(paragraph => observer.observe(paragraph));