const missionData = JSON.parse(localStorage.getItem('missions') || '{}');
const todayDate = new Date();
const today = todayDate.toLocaleDateString('hu');
const weekendDate = new Date(new Date().setDate(new Date().getDate() + 7 - new Date().getDay()));
const weekend = weekendDate.toLocaleDateString('hu');
missionData.daily ||= {};
missionData.daily[today] ||= {};
missionData.weekly ||= {};
missionData.weekly[weekend] ||= {};
const dailyMissions = missionData.daily[today];
const weeklyMissions = missionData.weekly[weekend];
dailyMissions.done ||= 0;
weeklyMissions.done ||= 0;
localStorage.setItem('missions', JSON.stringify(missionData));
// Number of days since 1970-01-01.
function dateNum(date) {
  return Math.floor(date.getTime() / 1000 / 60 / 60 / 24);
}
const dailyNum = dateNum(todayDate);
const weeklyNum = dateNum(weekendDate);
function getDailyMissions() {
  const missions = [];
  for (let i = 0; i < 3; ++i) {
    const m = getMission(dailyNum * 1000 + dailyMissions.done + i, false);
    missions.push(m);
  }
  return missions;
}
function getWeeklyMissions() {
  const missions = [];
  for (let i = 0; i < 5; ++i) {
    const m = getMission(weeklyNum * 1001 + weeklyMissions.done + i, true);
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
const OPERATIONS = ['összeadás', 'kivonás', 'szorzás'];
const OPSYMBOLS = [' + ', ' - ', ' · '];
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
    m.minLevel = 2;
    m.text = `Csinálj ${m.count} ${jegyu}${OPERATIONS[m.operation]}t hibátlanul egymás után`;
  } else {
    m.count = rng(3) * 5 + 5;
    if (m.digits === 1) {
      m.count += rng(2) * 5 + 5;
    }
    if (weekly) {
      m.count *= 2;
    }
    m.operation = rng(3);
    m.minLevel = rng(3) + 2;
    if (m.minLevel === 2) {
      m.text = `Csinálj ${m.count} ${jegyu}${OPERATIONS[m.operation]}t`;
    } else {
      m.text = `Csinálj ${m.count} ${jegyu}${OPERATIONS[m.operation]}t legalább ${NUMS[m.minLevel - 1]} számmal`;
    }
  }
  m.reward = weekly ? 5000 : 2000;
  const data = weekly ? weeklyMissions : dailyMissions;
  data[num] ||= {};
  data[num].progress ||= 0;
  m.data = data[num];
  return m;
}
function missionMatch(m, e) {
  if (!e.correct) return false;
  if (e.level < m.minLevel) return false;
  if (!e.math.includes(OPSYMBOLS[m.operation])) return false;
  if (e.digits < m.digits) return false;
  return true;
}
function missionEvent(e) {
  const dailyMissions = getDailyMissions();
  const weeklyMissions = getWeeklyMissions();
  for (const m of [...dailyMissions, ...weeklyMissions]) {
    if (missionMatch(m, e)) {
      m.data.progress += 1;
      if (m.data.progress === m.count) {
        m.done = true;
        if (m.weekly) {
          weeklyMissions.done += 1;
        } else {
          dailyMissions.done += 1;
        }
      }
    } else if (m.consecutive) {
      m.data.progress = 0;
    }
  }
  localStorage.setItem('missions', JSON.stringify(missionData));
}
const xpFormat = new Intl.NumberFormat('en-US').format;
function missionLI(m) {
  return `<li>
    <span class="mission-text">${m.text}</span>
    <span class="mission-reward">${m.data.progress}/${m.count}</span>
    <span class="mission-reward">${xpFormat(m.reward)} XP</span>
  </li>`;
}
function showMissions() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  missionpage.style.display = 'block';
  const dailyMissions = getDailyMissions();
  const weeklyMissions = getWeeklyMissions();
  const dailyText = dailyMissions.map(missionLI).join('');
  const weeklyText = weeklyMissions.map(missionLI).join('');
  const dailyProgress = Array.from({ length: 3 }, (_, i) => {
    const reward = '20,000 XP';
    return i < dailyMissions.done
      ? `<i class="ti ti-circle-check-filled"><b class="done">${reward}</b></i>`
      : `<i class="ti ti-circle"><b>${reward}</b></i>`;
  }).join('');
  const weeklyProgress = Array.from({ length: 5 }, (_, i) => {
    const reward = i === 4 ? '<img src="images/star-outlined.webp"/>' : '30,000 XP';
    return i < weeklyMissions.done
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
