document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".mood-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.dataset.mood;
      button.classList.add("mood-selected");

      setTimeout(() => {
        window.location.href = `letter.html?mood=${mood}`;
      }, 200);
    });
  });
});
