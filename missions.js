function showMissions() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  missions.style.display = 'block';
}

document.querySelectorAll('.ti-flag').forEach(e => {
  e.onclick = showMissions;
});
