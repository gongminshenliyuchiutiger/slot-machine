const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const resultDiv = document.getElementById('result');

const symbols = ['🍎', '🍌', '🍒', '🍇', '🍊'];

function spin() {
    // 在轉動時清除 win class
    resultDiv.classList.remove('win');

    // 啟動轉輪動畫
    reel1.classList.add('spinning');
    reel2.classList.add('spinning');
    reel3.classList.add('spinning');

    // 延遲一段時間後停止轉動並顯示結果
    setTimeout(() => {
        reel1.classList.remove('spinning');
        reel2.classList.remove('spinning');
        reel3.classList.remove('spinning');

        const result1 = symbols[Math.floor(Math.random() * symbols.length)];
        const result2 = symbols[Math.floor(Math.random() * symbols.length)];
        const result3 = symbols[Math.floor(Math.random() * symbols.length)];

        reel1.textContent = result1;
        reel2.textContent = result2;
        reel3.textContent = result3;

        if (result1 === result2 && result2 === result3) {
            resultDiv.textContent = '恭喜！你贏了！';
            resultDiv.classList.add('win'); // 添加 win class 啟動獲勝動畫
        } else {
            resultDiv.textContent = '再試一次！';
        }
    }, 2000); // 2 秒
}

spinButton.addEventListener('click', spin);