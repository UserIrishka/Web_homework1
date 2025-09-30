// Находим изображение и аудио
const img = document.querySelector('img[alt="Мейбл Пайнс"]');
const audio = document.getElementById('mabel-voice');

// Добавляем обработчик клика
img.addEventListener('click', function() {
    audio.currentTime = 0; // Сбрасываем к началу, если уже играет
    audio.play(); // Воспроизводим звук
});
