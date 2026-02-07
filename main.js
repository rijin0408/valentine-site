document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     SLIDESHOW
  ================================ */
  const wrappers = document.querySelectorAll(".photo-wrapper");
  let currentIndex = 0;
  let intervalId = null;

  function startSlideshow() {
    intervalId = setInterval(() => {
      wrappers.forEach((wrapper) => {
        wrapper.classList.remove("active");
      });

      wrappers[currentIndex].classList.add("active");
      currentIndex = (currentIndex + 1) % wrappers.length;
    }, 3500);
  }

  function stopSlideshow() {
    clearInterval(intervalId);
  }

  startSlideshow();

  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseenter", stopSlideshow);
    wrapper.addEventListener("mouseleave", startSlideshow);
  });

  /* ===============================
     CLICK / TAP SPARKLES
  ================================ */
  const sparkleLayer = document.getElementById("sparkle-layer");
  const sparkleIcons = ["✶", "✦", "✧", "♡", "❤"];

  function spawnSparkle(x, y) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.textContent =
      sparkleIcons[Math.floor(Math.random() * sparkleIcons.length)];

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    sparkleLayer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
  }

  // Desktop
  document.addEventListener("click", (e) => {
    spawnSparkle(e.clientX, e.clientY);
  });

  // Mobile
  document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    spawnSparkle(touch.clientX, touch.clientY);
  });
});
