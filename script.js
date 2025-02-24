document.addEventListener('DOMContentLoaded', function() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const spinButton = document.getElementById('spinButton');
    const playCountDiv = document.getElementById('play-count');
    const resetButton = document.getElementById('resetButton');

    // 每次重新整理都重置遊玩次數
    localStorage.setItem('playCount', 0);
    let playCount = 0;

    playCountDiv.textContent = `遊玩次數: ${playCount}`;

    const symbols = ['🍎', '🍌', '🍒', '🍇', '🍊'];

    function spin() {
        spinButton.disabled = true;
        spinButton.textContent = "再試一次";

        reel1.classList.add('spinning');
        reel2.classList.add('spinning');
        reel3.classList.add('spinning');

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

            playCount++;
            localStorage.setItem('playCount', playCount);
            playCountDiv.textContent = `遊玩次數: ${playCount}`;

            spinButton.disabled = false;

        }, 2000);
    }

    spinButton.addEventListener('click', spin);

    resetButton.addEventListener('click', () => {
        localStorage.setItem('playCount', 0);
        playCount = 0;
        playCountDiv.textContent = `遊玩次數: ${playCount}`;
        spinButton.textContent = "開始轉動";
    });

    // 動態生成漂浮圖片
    const floatingImagesContainer = document.createElement('div');
    floatingImagesContainer.id = 'floating-images-container';
    document.body.appendChild(floatingImagesContainer);

    const numberOfImages = 20;
    const imagePath = 'image/LiyuChillGuy(W).svg';

    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('floating-image');

        const gridX = Math.floor(i % 5);
        const gridY = Math.floor(i / 5);
        const gridSize = 100 / 5;

        const randomOffset = gridSize * 0.2;
        const offsetX = -randomOffset + Math.random() * randomOffset * 2;
        const offsetY = -randomOffset + Math.random() * randomOffset * 2;

        img.style.top = `${gridSize * gridY + offsetY}%`;
        img.style.left = `${gridSize * gridX + offsetX}%`;

        const size = 70 + Math.random() * 100;
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;

        img.style.animationDelay = `${Math.random() * 10}s`;

        floatingImagesContainer.appendChild(img);
    }
});