document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-toggle");
  const volumeSlider = document.getElementById("volume-slider");
  const volumeWrapper = document.querySelector(".volume-wrapper");

  if (!music || !musicBtn || !volumeSlider || !volumeWrapper) return;

  /* Restore saved state */
  const savedVolume = localStorage.getItem("musicVolume");
  const savedPlaying = localStorage.getItem("musicPlaying");
  const userUnlocked = localStorage.getItem("musicUnlocked");

  music.volume = savedVolume !== null ? parseFloat(savedVolume) : 0.5;
  volumeSlider.value = music.volume * 100;

  let isPlaying = savedPlaying === "true";

  /* Update UI */
  if (isPlaying) {
    musicBtn.textContent = "🎵";
    volumeWrapper.style.display = "flex";
  } else {
    musicBtn.textContent = "🔇";
    volumeWrapper.style.display = "none";
  }

  /* 🔓 Auto-resume ONLY if user already unlocked audio */
  if (isPlaying && userUnlocked === "true") {
    music.play().catch(() => {});
  }

  /* Toggle play / pause */
  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play().then(() => {
        localStorage.setItem("musicUnlocked", "true");
      });
      musicBtn.textContent = "🎵";
      volumeWrapper.style.display = "flex";
      localStorage.setItem("musicPlaying", "true");
    } else {
      music.pause();
      musicBtn.textContent = "🔇";
      volumeWrapper.style.display = "none";
      localStorage.setItem("musicPlaying", "false");
    }
    isPlaying = !isPlaying;
  });

  /* Volume control */
  volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value / 100;
    localStorage.setItem("musicVolume", music.volume);

    if (music.volume === 0) {
      music.pause();
      musicBtn.textContent = "🔇";
      volumeWrapper.style.display = "none";
      localStorage.setItem("musicPlaying", "false");
      isPlaying = false;
    }

    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
      music.currentTime = parseFloat(savedTime);
    }
  });

  window.addEventListener("beforeunload", () => {
    if (!music.paused) {
      localStorage.setItem("musicTime", music.currentTime);
    }
  });
});
