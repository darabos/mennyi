const missionData = JSON.parse(localStorage.getItem('missions') || '{}');
const todayDate = new Date();
const today = todayDate.toLocaleDateString('hu');
const weekendDate = new Date(new Date().setDate(new Date().getDate() + 7 - new Date().getDay()));
const weekend = weekendDate.toLocaleDateString('hu');
missionData.daily ||= {};
missionData.daily[today] ||= {};
missionData.weekly ||= {};
missionData.weekly[weekend] ||= {};
const todayMissions = missionData.daily[today];
const weekMissions = missionData.weekly[weekend];
todayMissions.done ||= 0;
weekMissions.done ||= 0;
localStorage.setItem('missions', JSON.stringify(missionData));
// Number of days since 1970-01-01.
function dateNum(date) {
  return Math.floor(date.getTime() / 1000 / 60 / 60 / 24);
}
const todayNum = dateNum(todayDate);
const weekNum = dateNum(weekendDate);
function getDailyMissions() {
  const missions = [];
  for (let i = 0; i < 3; ++i) {
    const m = getMission(todayNum * 1000 + todayMissions.done + i, false);
    missions.push(m);
  }
  return missions;
}
function getWeeklyMissions() {
  const missions = [];
  for (let i = 0; i < 5; ++i) {
    const m = getMission(todayNum * 1001 + weekMissions.done + i, true);
    missions.push(m);
  }
  return missions;
}
function splitmix32(a) {
  return function (range) {
    a |= 0;
    a = (a + 0x9e3779b9) | 0;
    let t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    return Math.floor(range * (((t = t ^ (t >>> 15)) >>> 0) / 4294967296));
  };
}
const OPERATIONS = ['összeadást', 'kivonást', 'szorzást'];
const NUMS = LANGUAGES.Magyar.numbers;
function getMission(num, weekly) {
  const rng = splitmix32(num);
  const m = { weekly };
  m.consecutive = weekly ? rng(10) === 0 : rng(5) === 0;
  m.digits = rng(2) + 1;
  const jegyu = m.digits === 2 ? 'kétjegyű ' : '';
  if (m.consecutive) {
    m.count = weekly ? rng(3) * 5 + 10 : rng(2) * 5 + 5;
    m.operation = rng(3);
    m.minPieces = 2;
    m.text = `Csinálj ${m.count} ${jegyu}${OPERATIONS[m.operation]} hibátlanul egymás után`;
  } else {
    m.count = rng(3) * 5 + 5;
    if (m.digits === 1) {
      m.count += rng(2) * 5 + 5;
    }
    if (weekly) {
      m.count *= 2;
    }
    m.operation = rng(3);
    m.minPieces = rng(3) + 2;
    if (m.minPieces === 2) {
      m.text = `Csinálj ${m.count} ${jegyu}${OPERATIONS[m.operation]}`;
    } else {
      m.text = `Csinálj ${m.count} ${jegyu}${OPERATIONS[m.operation]} legalább ${NUMS[m.minPieces - 1]} számmal`;
    }
  }
  return m;
}
function showMissions() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  missionpage.style.display = 'block';
  const dailyMissions = getDailyMissions();
  const weeklyMissions = getWeeklyMissions();
  const dailyText = dailyMissions
    .map(m => `<li><span class="mission-text">${m.text}</span><span class="mission-reward">+2,000 XP</span></li>`)
    .join('');
  const weeklyText = weeklyMissions
    .map(m => `<li><span class="mission-text">${m.text}</span><span class="mission-reward">+5,000 XP</span></li>`)
    .join('');
  const dailyProgress = Array.from({ length: 3 }, (_, i) => {
    const reward = '20,000 XP';
    return i < todayMissions.done
      ? `<i class="ti ti-circle-check-filled"><b class="done">${reward}</b></i>`
      : `<i class="ti ti-circle"><b>${reward}</b></i>`;
  }).join('');
  const weeklyProgress = Array.from({ length: 5 }, (_, i) => {
    const reward = i === 4 ? '<img src="images/star-outlined.webp"/>' : '30,000 XP';
    return i < weekMissions.done
      ? `<i class="ti ti-circle-check-filled"><b class="done">${reward}</b></i>`
      : `<i class="ti ti-circle"><b>${reward}</b></i>`;
  }).join('');
  missionlist.innerHTML = `
    <h1>Napi küldetések</h1>
    <small>${today}</small>
    <div class="mission-progress">
      ${dailyProgress}
    </div>
    <ul class="mission-list">
      ${dailyText}
    </ul>
    <h1>Heti küldetések</h1>
    <small>${weekend}-ig</small>
    <div class="mission-progress">
      ${weeklyProgress}
    </div>
    <ul class="mission-list">
      ${weeklyText}
    </ul>
  `;
}

document.querySelectorAll('.ti-flag').forEach(e => {
  e.onclick = showMissions;
});
showMissions();
