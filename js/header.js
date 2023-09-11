'use strict';

// Header
// ======
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuButtonContainer = document.querySelector('.menu-button-container');

  menuButtonContainer?.addEventListener('click', () => {
    if (menuToggle) {
      menuToggle.checked = !menuToggle.checked;
    }
  });
});
