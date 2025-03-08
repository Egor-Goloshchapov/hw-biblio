document.addEventListener("DOMContentLoaded", () => {
    const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";" ];
    let currentKeyIndex = Math.floor(Math.random() * keys.length);
    const keyDisplay = document.getElementById("key");
    const newGameBtn = document.getElementById("new-game");
    
    function updateKeyDisplay() {
        keyDisplay.textContent = keys[currentKeyIndex];
    }

    updateKeyDisplay();

    document.addEventListener("keydown", (event) => {
        if (event.key === keys[currentKeyIndex]) {
            currentKeyIndex = Math.floor(Math.random() * keys.length);
            updateKeyDisplay();
            PNotify.success({ text: "Правильна клавіша!" });
        } else {
            PNotify.error({ text: "Неправильна клавіша! Спробуйте ще раз." });
        }
    });

    document.addEventListener("keypress", (event) => {
        event.preventDefault();
    });

    newGameBtn.addEventListener("click", () => {
        currentKeyIndex = Math.floor(Math.random() * keys.length);
        updateKeyDisplay();
        PNotify.info({ text: "Нова гра почалася! Натисніть правильну клавішу." });
    });
});
