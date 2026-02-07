document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     PHOTO FLY-IN → STACK → CYCLE
  ================================ */
  const photos = Array.from(document.querySelectorAll(".photo-wrapper"));
  if (photos.length === 0) return;

  const directions = [
    { x: "-140%", y: "0%" },
    { x: "140%", y: "0%" },
    { x: "0%", y: "-140%" },
    { x: "0%", y: "140%" },
  ];

  // PHASE 1: Fly in and stack
  photos.forEach((photo, index) => {
    const dir = directions[Math.floor(Math.random() * directions.length)];

    photo.style.setProperty("--from-x", dir.x);
    photo.style.setProperty("--from-y", dir.y);
    photo.style.setProperty("--rotate", `${Math.random() * 12 - 6}deg`);
    photo.style.zIndex = index;

    setTimeout(() => {
      photo.classList.add("in");
    }, index * 250);
  });

  // PHASE 2: Cycle stack order
  function cycleStack() {
    const top = photos.shift();
    top.classList.add("cycle-out");

    setTimeout(() => {
      top.classList.remove("cycle-out");
      photos.push(top);

      photos.forEach((photo, i) => {
        photo.style.zIndex = i;
      });
    }, 600);
  }

  // Start cycling AFTER all photos have stacked
  setTimeout(
    () => {
      setInterval(cycleStack, 3200);
    },
    photos.length * 300 + 1000,
  );

  /* ===============================
     SPARKLES
  ================================ */
  const sparkleLayer = document.getElementById("sparkle-layer");
  if (!sparkleLayer) return;

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

  document.addEventListener("click", (e) => {
    spawnSparkle(e.clientX, e.clientY);
  });

  document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    spawnSparkle(touch.clientX, touch.clientY);
  });
});
