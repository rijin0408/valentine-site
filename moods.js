document.addEventListener("DOMContentLoaded", () => {
  const moodButtons = document.querySelectorAll(".mood-card");

  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mood = button.dataset.mood;
      window.location.href = `letter.html?mood=${mood}`;
    });
  });
});
