function showMissions() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  missions.style.display = 'block';
  const today = new Date().toLocaleDateString('hu');
  // The last day of the week:
  const weekend = new Date(new Date().setDate(new Date().getDate() + 7 - new Date().getDay())).toLocaleDateString('hu');
  missionlist.innerHTML = `
    <h1>Napi küldetések</h1>
    <small>${today}</small>
    <ul class="mission-list">
      <li><span class="mission-text">Csinálj 10 szorzást</span><span class="mission-reward">+25,000 XP</span></li>
      <li><span class="mission-text">Csinálj 10 szorzást</span><span class="mission-reward">+25,000 XP</span></li>
      <li><span class="mission-text">Csinálj 10 szorzást</span><span class="mission-reward">+25,000 XP</span></li>
    </ul>
    <h1>Heti küldetések</h1>
    <small>${weekend}-ig</small>
    <ul class="mission-list">
      <li><span class="mission-text">Csinálj 10 szorzást</span><span class="mission-reward">+25,000 XP</span></li>
      <li><span class="mission-text">Csinálj 10 szorzást</span><span class="mission-reward">+25,000 XP</span></li>
      <li><span class="mission-text">Csinálj 10 szorzást</span><span class="mission-reward">+25,000 XP</span></li>
    </ul>
  `;
}

document.querySelectorAll('.ti-flag').forEach(e => {
  e.onclick = showMissions;
});
showMissions();
