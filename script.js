document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.getElementById("backButton");

  backButton.addEventListener("click", () => {
    window.location.href = "home_page.html"; // переход на главную страницу
  });
});
