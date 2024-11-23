// Select menu, open button, and close button
const menu = document.getElementById('menu');
const openButton = document.getElementById('open-menu');
const closeButton = document.getElementById('close-menu');

// Add event listener to open button
openButton.addEventListener('click', () => {
  menu.classList.remove('hidden'); // Show the menu
  openButton.style.display = 'none'; // Hide the open button
});

// Add event listener to close button
closeButton.addEventListener('click', () => {
  menu.classList.add('hidden'); // Hide the menu
  openButton.style.display = 'block'; // Show the open button
});
