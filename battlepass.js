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
seasonData.buys ??= [];
const seasonNum = dateNum(seasonEnd);
localStorage.setItem('battlepass', JSON.stringify(bpData));

const ALL_SZINEK = Object.keys(SZINEK);
ALL_SZINEK.sort();
const STAR = '<img src="images/star-outlined.webp" class="star-icon" />';

function showBattlePass() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  battlepasspage.style.display = 'block';
  const levelsHTML = (levels, unlocked) =>
    levels
      .map(level => {
        const entries = [];
        let prevDone = true;
        for (const e of level) {
          entries.push(bpEntry(e, prevDone && unlocked));
          prevDone = lockerFor(e.kind).includes(e.name);
        }
        const inside = entries.join('<i class="ti ti-chevron-right"></i>');
        return `<div class="bp-level">${inside}</div>`;
      })
      .join('');
  const unspentStars = seasonData.stars - seasonData.buys.length;
  const unspent = unspentStars
    ? Array.from({ length: unspentStars }, () => STAR).join(' ')
    : 'Gyűjts csillagokat! Nézd meg a mai küldetéseket!';
  const levels1 = levelsHTML(bpContents.levels.slice(0, 3), true);
  const levels2 = levelsHTML(bpContents.levels.slice(3, 6), seasonData.stars >= 10);
  const levels3 = levelsHTML(bpContents.levels.slice(6), seasonData.stars >= 20);
  const lockClosed = `<i class="ti ti-lock"></i>`;
  const lockOpen = `<i class="ti ti-lock-open"></i>`;
  const lock10 = seasonData.stars >= 10 ? lockOpen : lockClosed;
  const lock20 = seasonData.stars >= 20 ? lockOpen : lockClosed;
  const hr = `<hr style="flex: 1;"/>`;
  battlepasspagecontent.innerHTML = `
    <h1>Battle Pass</h1>
    <small>${seasonStr}-ig</small>
    <h3>${seasonData.stars} ${STAR}</h3>
    <div class="bordered">
      <div class="header"><div class="header-inside">Elköltendő csillagok</div></div>
      ${unspent}
    </div>
    ${levels1}
    <h3>${lock10} ${Math.min(10, seasonData.stars)}/10 ${STAR}</h3>
    ${levels2}
    <h3>${lock20} ${Math.min(20, seasonData.stars)}/20 ${STAR}</h3>
    ${levels3}
    <div class="explainer">
      <p>Helyes válaszokkal és küldetések teljesítésével csillagokat kapsz. (100,000 XP egy csillag.)
      Ezeket itt válthatod be színekre, kedvencekre és kutatókra. A battle pass soraiból szabadon
      választhatsz, de a soron belül balról jobbra kell haladnod. Az első három sor rögtön elérhető.
      A második három sor 10 csillag megszerzése után nyílik meg. Az utolsó három sorhoz 20 csillag
      kell.</p>
      <p>A korábban már megszerzett jutalmak úgy viselkednek, mintha megvetted volna őket, de nem
      kerülnek csillagba.</p>
      <p>Amikor a battle pass lejár, új battle pass kezdődik. Ilyenkor újra nulla csillaggal kezdesz,
      és ezen az oldalon új jutalmakat találsz majd. Ha nem szereztél meg valamit, amit szerettél volna,
      ne aggódj! Későbbi battle passokban visszatérhet!</p>
    </div>
    <div
      class="explainer"
      style="cursor: pointer; text-align: center; display: flex;"
      onclick="infoszuloknek.style.display='block'">${hr}<span style="padding: 0 10px;">Szülőknek</span>${hr}</div>
    <div class="explainer" id="infoszuloknek" style="display: none;">
      <p>A "battle pass" rendszert azért csinálják a játékok, hogy a gyerekek minél többet játsszanak
      velük és minél több pénzt befizessenek. De miért ne használhatnánk arra, hogy minél többet
      tanuljanak?
      </p>
      <p>A játék teljesen a böngészőben fut, és nem küld el semmilyen adatot. Azt sem tudom, hogy
      hányan játszanak vele. Mivel minden adatot a böngésző tárol, elveszhet az állásotok, ha például
      új telefont vesztek. Ha szeretnétek az állást átmenteni egy másik eszközre, akkor szóljatok!
      </p>
      <p>A képeket a <a href="https://nv-sana.mit.edu/">Sana 1.6B</a> model készítette.</p>
      <p>— Dani</p>
    </div>
    `;
  document.querySelectorAll('.buy-popup').forEach(e => {
    e.onclick = () => {
      const stars = Math.min(1, seasonData.stars - seasonData.buys.length);
      if (stars === 0) return;
      const key = e.dataset.key;
      for (const e of bpContents.levels.flat()) {
        if (`${e.kind}-${e.name}` === key) {
          seasonData.buys.push(key);
          localStorage.setItem('battlepass', JSON.stringify(bpData));
          const category = lockerFor(e.kind);
          category.push(e.name);
          localStorage.setItem('locker', JSON.stringify(lockerData));
          showBattlePass();
          showXp();
        }
      }
    };
  });
  document.querySelectorAll('.avatar-holder:has(.text)').forEach(e => {
    e.onfocus = () => {
      const szin = e.querySelector('.text').dataset.szin;
      applyColor(szin);
    };
    e.onblur = () => applyLockerSettings();
  });
  activateVideos();
}

function activateVideos() {
  document.querySelectorAll('video').forEach(vid => {
    vid.onmouseover = () => vid.play();
    vid.onmouseout = () => vid.pause();
    let p = vid;
    while (p.tabIndex === -1 || p.tagName === 'VIDEO') {
      p = p.parentElement;
      if (p === undefined) return;
    }
    p.onfocus = () => vid.play();
    p.onblur = () => vid.pause();
  });
}

function lockerFor(kind) {
  if (kind === 'szin') {
    return lockerData.szinek;
  } else if (kind === 'kedvenc') {
    return lockerData.kedvencek;
  } else if (kind === 'kutato') {
    return lockerData.kutatok;
  }
}

function avatarContents(e) {
  const key = `${e.kind}-${e.name}`;
  if (VIDEOS[key] !== undefined) {
    return VIDEOS[key];
  } else if (e.kind == 'kutato') {
    return `<img src="images/space-animals-sana/${e.name}.jpeg" width="150" />`;
  } else if (e.kind == 'kedvenc') {
    return `<img src="images/furballs-sana/${e.name}.jpg" width="150" />`;
  } else if (e.kind == 'szin') {
    const [c1, c2] = SZINEK[e.name].split(' ');
    return `<div data-szin="${e.name}" class="text" style="background: linear-gradient(135deg, ${c1} 50%, ${c2} 50%)"></div>`;
  }
}

function bpEntry(e, prevDone) {
  const key = `${e.kind}-${e.name}`;
  const category = lockerFor(e.kind);
  const has = category.includes(e.name);
  const bought = seasonData.buys.includes(key);
  const cls = (has ? 'owned' : 'buyable') + (bought ? ' bought' : '');
  const mark = bought ? STAR : has ? '<i class="ti ti-circle-check"></i>' : '';
  const decor = mark ? `<div class="decor">${mark}</div>` : '';
  const inside = avatarContents(e);
  const stars = Math.min(1, seasonData.stars - seasonData.buys.length);
  const buyLabel = !prevDone ? '<i class="ti ti-lock"></i>' : !stars ? '' : 'Kérem!';
  const dataKey = stars && prevDone ? `data-key="${key}"` : '';
  const buyPopup = `<div class="buy-popup" ${dataKey}>${stars}/1 ${STAR} ${buyLabel}</div>`;
  return `
    <div class="avatar-holder ${cls}" tabindex="0">
      ${buyPopup}
      <div class="avatar ${cls}">${inside}${decor}</div>
    </div>`;
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
const bpContents = getBattlePassContents();
const bpKeys = Object.fromEntries(bpContents.levels.flat().map(e => [`${e.kind}-${e.name}`, e]));
seasonData.buys = seasonData.buys.filter(e => bpKeys[e]);
localStorage.setItem('battlepass', JSON.stringify(bpData));

const floatQueue = [];

function renderFloatOff(element, msg) {
  const floater = document.createElement('div');
  floater.classList.add('floater');
  floater.innerHTML = msg;
  document.body.appendChild(floater);
  const rect = element.getBoundingClientRect();
  floater.style.left = `${rect.left / 2 + rect.right / 2 + window.scrollX - floater.offsetWidth / 2}px`;
  floater.style.top = `${rect.top + window.scrollY}px`;
  setTimeout(() => {
    floater.remove();
  }, 2000);
  return floater;
}
function floatOff(element, msg) {
  floatQueue.push({ element, msg });
  if (floatQueue.length === 1) {
    floatNext();
  }
}
function floatNext() {
  if (floatQueue.length === 0) return;
  const { element, msg } = floatQueue[0];
  renderFloatOff(element, msg);
  setTimeout(() => {
    floatQueue.shift();
    floatNext();
  }, 1000);
}

function xpEvent(xp, msg) {
  floatOff(valasz, msg || `+${xp} XP`);
  seasonData.xp += xp;
  while (seasonData.xp > 100000) {
    seasonData.xp -= 100000;
    seasonData.stars += 1;
    floatOff(bpstatus, STAR);
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
    const s = seasonData.stars - seasonData.buys.length;
    e.style.visibility = s ? 'visible' : 'hidden';
    e.textContent = s;
  });
}
showXp();

bpstatus.onclick = showBattlePass;
document.querySelectorAll('.ti-stars').forEach(e => {
  e.onclick = showBattlePass;
});
