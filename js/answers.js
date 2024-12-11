const AnswerProvider = {
    answers: [
        // 谜语式答案
        { content: "月光下的影子知道答案", type: "riddle" },
        { content: "云中的倒影映照真相", type: "riddle" },
        { content: "沙漏里藏着时间的秘密", type: "riddle" },
        // ... 其他答案保持不变 ...
    ],

    getRandomAnswer() {
        return this.answers[Math.floor(Math.random() * this.answers.length)];
    }
}; 