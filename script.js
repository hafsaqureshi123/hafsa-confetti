document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "h") {
      createHafsaShower();
    }
  });
  
  function createHafsaShower() {
    for (let i = 0; i < 50; i++) {  // Creates 50 "Hafsa" elements per keypress
      const hafsaText = document.createElement("div");
      hafsaText.classList.add("hafsa-text");
      hafsaText.textContent = "Hafsa";
  
      // Randomize the position and delay for each element
      hafsaText.style.left = `${Math.random() * 100}vw`;
      hafsaText.style.top = `-5vh`;
      hafsaText.style.animationDelay = `${Math.random() * 2}s`;
  
      document.body.appendChild(hafsaText);
  
      // Remove the element after animation ends
      hafsaText.addEventListener("animationend", () => {
        hafsaText.remove();
      });
    }
  }
  