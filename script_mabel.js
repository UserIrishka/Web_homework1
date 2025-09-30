// Находим изображение и аудио
const img = document.querySelector('img[alt="Мейбл Пайнс"]');
const audio = document.getElementById('mabel-voice');

// Добавляем обработчик клика
img.addEventListener('click', function() {
    audio.currentTime = 0; // Сбрасываем к началу, если уже играет
    audio.play(); // Воспроизводим звук
});

// Код для кнопки вечеринки 
const secretButton = document.getElementById('secretButton');
const hiddenInfo = document.getElementById('hiddenInfo');

// Переменная для интервала мигания
let blinkInterval;

// Массив цветов для мигания 
const partyColors = ['#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093', '#ff4500', '#ffd700', '#00ff00', '#ff6347', '#adff2f'];

secretButton.addEventListener('click', function() {
    if (hiddenInfo.style.display === 'block') {
        hiddenInfo.style.display = 'none';
        secretButton.textContent = 'Нажми, если любишь веселиться';
        // Останавливаем мигание
        clearInterval(blinkInterval);
        // Возвращаем оригинальный фон с картинкой
        document.body.style.backgroundImage = 'url("back.jpg")';
        document.body.style.backgroundColor = ''; // Сбрасываем цвет
    } else {
        hiddenInfo.style.display = 'block';
        secretButton.textContent = 'Вернуть спокойствие';
        // Убираем картинку фона, чтобы мигали только цвета
        document.body.style.backgroundImage = 'none';
        // Запускаем мигание
        blinkInterval = setInterval(() => {
            const randomColor = partyColors[Math.floor(Math.random() * partyColors.length)];
            document.body.style.backgroundColor = randomColor;
        }, 300); // 300мс — скорость мигания 
    }
});
