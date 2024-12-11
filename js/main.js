document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const resultContainer = document.getElementById('result');
    const answerText = document.getElementById('answer-text');
    const retryButton = document.getElementById('retry-button');
    
    let isAnimating = false;

    // 点击书本事件
    book.addEventListener('click', () => {
        if (isAnimating) return;
        
        isAnimating = true;
        book.classList.add('flipping');
        
        setTimeout(() => {
            showAnswer();
        }, 750);
    });

    // 显示答案
    function showAnswer() {
        const answer = AnswerProvider.getRandomAnswer();
        answerText.textContent = answer.content;
        resultContainer.classList.remove('hidden');
        setTimeout(() => {
            resultContainer.classList.add('visible');
        }, 50);
    }

    // 重试按钮事件
    retryButton.addEventListener('click', () => {
        resultContainer.classList.remove('visible');
        setTimeout(() => {
            resultContainer.classList.add('hidden');
            book.classList.remove('flipping');
            isAnimating = false;
        }, 300);
    });

    // 添加装饰性星星
    createStars();
});

// 创建装饰性星星
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
} 