import React, { useEffect } from 'react';

const TypewriterEffect = () => {
  useEffect(() => {
    const span = document.querySelector('.typewriter-text');
    if (!span) return; // Ensure the element exists

    const textArr = span.getAttribute('data-text').split(', ');
    const typingSpeed = 150; // Speed per character (ms)
    const pauseBetweenWords = 1500; // Pause after a word is completed (ms)
    let currentTextIndex = 0;
    let isDeleting = false; // Tracks whether text is being deleted
    let charIndex = 0; // Tracks character index
    let typingInterval;

    const type = () => {
      const currentText = textArr[currentTextIndex];
      const partialText = isDeleting
        ? currentText.substring(0, charIndex--)
        : currentText.substring(0, charIndex++);

      span.innerHTML = partialText;

      if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end of the word
        setTimeout(() => (isDeleting = true), pauseBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % textArr.length;
      }

      // Adjust typing speed for typing and deleting
      const nextDelay = isDeleting ? typingSpeed / 2 : typingSpeed;
      clearTimeout(typingInterval);
      typingInterval = setTimeout(type, nextDelay);
    };

    type(); // Start the typing effect

    return () => clearTimeout(typingInterval); // Cleanup on unmount
  }, []);

  return null; // Component only handles logic
};

export default TypewriterEffect;
