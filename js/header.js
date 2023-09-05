'use strict'

// Header
// ======
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button-container')
  const menu = document.querySelector('.menu')

  menuButton.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'flex'
    }
  })
})