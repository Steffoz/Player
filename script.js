function showSection(id) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}

const progettiText = document.getElementById('progettiText');
const noteText = document.getElementById('noteText');

progettiText.value = localStorage.getItem('progetti') || '';
noteText.value = localStorage.getItem('note') || '';

progettiText.addEventListener('input', () => {
  localStorage.setItem('progetti', progettiText.value);
});
noteText.addEventListener('input', () => {
  localStorage.setItem('note', noteText.value);
});

function updateClock() {
  const now = new Date();
  const clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

showSection('progetti');
