// JavaScript для интерактивности
        document.addEventListener('DOMContentLoaded', function () {
            const secretButton = document.getElementById('secretButton');
            const secretSection = document.getElementById('secretSection');

            // Обработчик клика по кнопке
            secretButton.addEventListener('click', function () {
                if (secretSection.style.display === 'block') {
                    secretSection.style.display = 'none';
                    secretButton.textContent = 'Нажми для секрета!';
                } else {
                    secretSection.style.display = 'block';
                    secretButton.textContent = 'Спрятать секрет';

                    // Добавляем анимацию
                    secretSection.classList.add('fade-in');

                    // Меняем цвет фона страницы случайным образом
                    const colors = ['#f0f8ff', '#fef3c7', '#e0f2fe', '#fce7f3', '#dcfce7'];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    document.body.style.backgroundColor = randomColor;
                }
            });

            // Добавляем анимацию при прокрутке
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('section').forEach(section => {
                observer.observe(section);
            });
        });