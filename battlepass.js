const bpData = JSON.parse(localStorage.getItem('battlepass') || '{}');
function getSeasonEnd() {
  // 2-month seasons.
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  return new Date(year, month + (month % 2), 0);
}
const seasonEnd = getSeasonEnd();
const seasonStr = seasonEnd.toLocaleDateString('hu');
bpData[seasonStr] ??= {};
const seasonData = bpData[seasonStr];
seasonData.xp ??= 0;
seasonData.stars ??= 0;
seasonData.unspentStars ??= 0;
const seasonNum = dateNum(seasonEnd);
localStorage.setItem('battlepass', JSON.stringify(bpData));

const ALL_KEDVENC = `
Anna
Bobby
Dennis
Elijah
George
Henry
Jack
Jacqueline
Judith
Julia
Kenneth
Larry
Lisa
Mark
Mary
Melissa
Pamela
Samantha
Sara
Sean
Walter
`
  .trim()
  .split('\n');
const ALL_KUTATO = `
alien-f
alien-m
axolotl-2-f
axolotl-2-m
axolotl-f
axolotl-m
bat-f
bat-m
black-panther-f
black-panther-m
broccoli-f
broccoli-m
camel-f
camel-m
cat-f
cat-m
catfish-f
catfish-m
cheetah-f
cheetah-m
crow-f
crow-m
dog-f
dog-m
dolphin-f
dolphin-m
dragon-2-f
dragon-2-m
dragon-f
dragon-m
fish-f
fish-m
frog-f
frog-m
lion-f
lion-m
octopus-f
octopus-m
peacock-f
peacock-m
pear-f
pear-m
pepper-f
pepper-m
shark-f
shark-m
sheep-f
sheep-m
slug-f
slug-m
snail-f
snail-m
snake-f
snake-m
turtle-f
turtle-m
wolf-f
wolf-m
zebra-f
zebra-m
`
  .trim()
  .split('\n');
const ALL_SZINEK = Object.keys(SZINEK);
ALL_SZINEK.sort();

function showBattlePass() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  battlepasspage.style.display = 'block';
  const bp = getBattlePassContents();
  const levelsHTML = levels =>
    levels
      .map(level => {
        const inside = level.map(bpEntry).join('<i class="ti ti-chevron-right"></i>');
        return `<div class="bp-level">${inside}</div>`;
      })
      .join('');
  const levels1 = levelsHTML(bp.levels.slice(0, 3));
  const levels2 = levelsHTML(bp.levels.slice(3, 6));
  const levels3 = levelsHTML(bp.levels.slice(6));
  const star = '<img src="images/star-outlined.webp" class="star-icon" />';
  const unspentStars = 0; //seasonData.unspentStars;
  const unspent = unspentStars
    ? Array.from({ length: unspentStars }, () => star).join(' ')
    : 'Gyűjts csillagokat! Nézd meg a mai küldetéseket!';
  battlepasspagecontent.innerHTML = `
    <h1>Battle Pass</h1>
    <small>${seasonStr}-ig</small>
    <div class="bordered">
      <div class="header"><div class="header-inside">Elköltendő csillagok</div></div>
      ${unspent}
    </div>
    ${levels1}
    <h3>10 ${star} után</h3>
    ${levels2}
    <h3>20 ${star} után</h3>
    ${levels3}
    `;
}

function bpEntry(e) {
  if (e.kind == 'kutato') {
    return `<img src="images/space-animals-sana/${e.name}.jpeg" width="150" class="avatar" />`;
  } else if (e.kind == 'kedvenc') {
    return `<img src="images/furballs-sana/${e.name}.jpg" width="150" class="avatar" />`;
  } else if (e.kind == 'szin') {
    const [c1, c2] = SZINEK[e.name].split(' ');
    return `<span class="avatar text" style="background: linear-gradient(135deg, ${c1} 50%, ${c2} 50%)" ></span>`;
  }
}

function getBattlePassContents() {
  const rng = splitmix32(seasonNum);
  const bp = { levels: [] };
  for (let level = 0; level < 9; ++level) {
    const row = [];
    while (true) {
      const choice = ALL_SZINEK[rng(ALL_SZINEK.length)];
      if (bp.levels.findIndex(level => level.findIndex(row => row.name === choice) !== -1) !== -1) continue;
      row.push({ kind: 'szin', name: choice, level, rank: 0 });
      break;
    }
    while (true) {
      const choice = ALL_KEDVENC[rng(ALL_KEDVENC.length)];
      if (bp.levels.findIndex(level => level.findIndex(row => row.name === choice) !== -1) !== -1) continue;
      row.push({ kind: 'kedvenc', name: choice, level, rank: 1 });
      break;
    }
    while (true) {
      const choice = ALL_KUTATO[rng(ALL_KUTATO.length)];
      if (bp.levels.findIndex(level => level.findIndex(row => row.name === choice) !== -1) !== -1) continue;
      row.push({ kind: 'kutato', name: choice, level, rank: 2 });
      break;
    }
    bp.levels.push(row);
  }
  return bp;
}

function floatOff(element, msg) {
  const floater = document.createElement('div');
  floater.classList.add('floater');
  floater.innerHTML = msg;
  document.body.appendChild(floater);
  const rect = element.getBoundingClientRect();
  floater.style.left = `${rect.left / 2 + rect.right / 2 + window.scrollX - floater.offsetWidth / 2}px`;
  floater.style.top = `${rect.top + window.scrollY}px`;
  setTimeout(() => {
    floater.remove();
  }, 1000);
  return floater;
}

function xpEvent(xp) {
  floatOff(valasz, `+${xp} XP`);
  seasonData.xp += xp;
  while (seasonData.xp > 100000) {
    seasonData.xp -= 100000;
    seasonData.stars += 1;
    seasonData.unspentStars += 1;
    floatOff(bpstatus, '<img src="images/star-outlined.webp" class="star-icon" />');
  }
  localStorage.setItem('battlepass', JSON.stringify(bpData));
  showXp();
}
function showXp() {
  document.querySelectorAll('.bp-bar-inside').forEach(e => {
    e.style.width = `${seasonData.xp / 1000}%`;
  });
  document.querySelectorAll('.bp-stars').forEach(e => {
    e.textContent = seasonData.stars;
  });
  document.querySelectorAll('.bp-unspent-stars').forEach(e => {
    const s = seasonData.unspentStars;
    e.style.visibility = s ? 'visible' : 'hidden';
    e.textContent = s;
  });
}
showXp();

bpstatus.onclick = showBattlePass;
document.querySelectorAll('.ti-stars').forEach(e => {
  e.onclick = showBattlePass;
});
showBattlePass();
