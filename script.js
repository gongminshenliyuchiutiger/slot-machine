const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const resultDiv = document.getElementById('result');

const symbols = ['🍎', '🍌', '🍒', '🍇', '🍊'];

function spin() {
    const result1 = symbols[Math.floor(Math.random() * symbols.length)];
    const result2 = symbols[Math.floor(Math.random() * symbols.length)];
    const result3 = symbols[Math.floor(Math.random() * symbols.length)];

    reel1.textContent = result1;
    reel2.textContent = result2;
    reel3.textContent = result3;

    if (result1 === result2 && result2 === result3) {
        resultDiv.textContent = '恭喜！你贏了！';
    } else {
        resultDiv.textContent = '再試一次！';
    }
}

spinButton.addEventListener('click', spin);