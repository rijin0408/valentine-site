document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const mood = params.get("mood");
  const actions = document.getElementById("letter-actions");
  const pickAgainBtn = document.getElementById("pick-again");

  const moodTitle = document.getElementById("mood-title");
  const letterGrid = document.getElementById("letter-choices");
  const letterCard = document.querySelector(".letter-card");
  const letterText = document.querySelector(".letter-text");

  const moodNames = {
    happy: "Happy, bebeb?",
    sad: "Sad, bebeb?",
    angry: "Angry, bebeb?",
    tired: "Tired, bebeb?",
  };

  const letters = {
    happy: [
      "Hello, bebeb. It is nice to know that you are happy right now. Keep it up! You do not have to feel the pressure that something bad might happen just because you are happy right now. I love you!",
      "Wow, bebeb, you are happy?! Did you eat something that made you do the 'Yummy food bebeb' dance? Or maybe new clothes that you bought? Whatever the reason might be for your happiness right now, you deserve that. I love you, bebeb!",
      "Ohhhh! My bebeb is happy. Thank you, beb, for being happy, and I know yourself thanks you as well. You have been harsh on yourself lately—take this moment to appreciate how pretty you are and how pretty your life is.",
      "Bub, it seems like you are happy today. I hope you will also be happy tomorrow when you’re tired from all the work you have in a day, next week when it seems like there’s nothing to be happy about anymore. You do not have to be happy all the time—but you always deserve happiness when it comes.",
      "Hi! You look happy right now. You know you look really cute when you smile playfully and laugh your heart out. Your smile and your dance every time we eat delicious food—no matter how simple—makes everything better. Thank you, beb, for choosing to be happy.",
      "Oh, for this letter there’s nothing much. I just want you to know that I love you, and it is COMPLETELY fine to be happy and enjoy your moment. I love you, beb.",
    ],

    sad: [
      "That’s fine, beb. Be sad. Cry your heart out. Whatever it is that made you sad right now is completely valid. There is no need to fix anything by yourself. I am always here. I love you.",
      "Hi, beb. It seems like you’re really sad right now. I wish I could be there to hug you and kiss you—and hug you and kiss you again. I love you, beb.",
      "Hello, beb. It’s me again. I may not fully know what’s going on in your head right now, but just know that I am here and will always be here for you. No need to explain anything. Share it with me once you’re ready. I love you.",
      "Beb! Always remember that it’s okay to be sad. It’s okay to cry. It will never make you less of a strong and independent woman. You are awesome.",
      "That’s okay, beb. Be sad. Cry your heart out. Just don’t forget to breathe, rest, and take care of yourself. I am always here for you.",
      "Beb, it will be okay.",
    ],

    angry: [
      "Hala, galit si bebeb. Oh naur!!!!! Joke lang. Don’t bite me. Kidding aside—whatever the reason you are angry right now completely makes sense, and I agree with you. No need to gather your calm brain cells yet.",
      "Hi, bub. You seem mad and frustrated right now. It’s okay. I am here. I will not go anywhere. I am not scared. You can rant all you want once you are ready. I will listen.",
      "Okay… 3… 2… 1… inhale… exhale… inhale… exhale… inhale… I love you, beb. ‘Di natin sila bati. Ice cream? Just tell me. My treat.",
      "Sino nag-away sayo?! Hindi natin sila bati. Ano ginawa nila sayo? Ano sinabi nila? Lika na—hindi natin sila bibigyan ng fishball at kwek-kwek.",
      "Hello, beb. Whatever the reason you are angry right now—even if it’s me—just know it’s okay. I am not going anywhere. If it’s me, I’m sorry, and I still choose you. If it’s not me… bakit nila inaaway baby ko?!",
      "Beb, don’t stoop down to their level.",
    ],

    tired: [
      "Hello, beb. Are you tired? Okay lang ‘yan. Rest na. You don’t have to finish everything today. Take a deep breath and rest.",
      "Hello, bub. I am really proud of you for pushing forward no matter how tiring your day was or how heavy everything felt. You deserve to rest. I love you, beb.",
      "Hi, beb. You have been amazing lately—as always. You deserve to rest your body, mind, and emotions. Empty your thoughts for a while and just rest.",
      "You probably feel like you haven’t done anything worthy of rest. I COMPLETELY DISAGREE, you fool (hindi ‘yan sigaw, don’t cry). You have done more than enough today.",
      "Hi, it seems like you just want to bed-rot. That’s fine. Your feelings are valid. You’re making the right decision. Go, beb. Rest.",
      "I love you, beb.",
    ],
  };

  // Fallback
  if (!mood || !letters[mood]) {
    moodTitle.textContent = "For beb💜";
    letterText.textContent =
      "No matter how you’re feeling, I hope this brings you comfort.";
    letterCard.style.display = "block";
    return;
  }

  moodTitle.textContent = moodNames[mood];

  // Shuffle letters
  const shuffled = [...letters[mood]].sort(() => Math.random() - 0.5);

  shuffled.forEach((text) => {
    const btn = document.createElement("button");
    btn.className = "letter-choice";
    btn.textContent = "💌";

    btn.addEventListener("click", () => {
      letterText.textContent = text;
      letterGrid.style.display = "none";
      letterCard.style.display = "block";
      actions.style.display = "flex";
    });

    letterGrid.appendChild(btn);
  });

  pickAgainBtn.addEventListener("click", () => {
    window.location.reload();
  });
});
