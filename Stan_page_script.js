document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backButton");

  backButton.addEventListener("click", () => {
    window.location.href = "index.html"; // переход на главную страницу
  });
});
