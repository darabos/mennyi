const lockerData = JSON.parse(localStorage.getItem('locker') ?? '{}');
lockerData.kutatok ??= ['snail-m', 'snail-f'];
lockerData.selectedKutato ??= 'none';
lockerData.kedvencek ??= ['Samantha', 'Dennis'];
lockerData.selectedKedvenc ??= 'none';
lockerData.szinek ??= ['original', 'snail'];
lockerData.selectedSzinek ??= 'original';
localStorage.setItem('locker', JSON.stringify(lockerData));
function showLocker() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  locker.style.display = 'block';
  if (locker_kutato.checked) {
    showLockerOptions(
      lockerData.kutatok.map(k => ({ kind: 'kutato', name: k })),
      lockerData.selectedKutato
    );
    lockeroptions.innerHTML += `<span class="avatar text none ${
      lockerData.selectedKedvenc === 'none' ? 'selected' : ''
    }" data-choice="none" >✕</span>`;
    lockeroptions.querySelectorAll('.avatar').forEach(avatar => {
      avatar.onclick = function () {
        lockerData.selectedKutato = avatar.dataset.choice;
        localStorage.setItem('locker', JSON.stringify(lockerData));
        lockeroptions.querySelectorAll('.avatar').forEach(avatar => avatar.classList.remove('selected'));
        avatar.classList.add('selected');
        applyLockerSettings();
      };
    });
  } else if (locker_kedvenc.checked) {
    showLockerOptions(
      lockerData.kedvencek.map(k => ({ kind: 'kedvenc', name: k })),
      lockerData.selectedKedvenc
    );
    lockeroptions.innerHTML += `<span class="avatar text none ${
      lockerData.selectedKedvenc === 'none' ? 'selected' : ''
    }" data-choice="none" >✕</span>`;
    lockeroptions.querySelectorAll('.avatar').forEach(avatar => {
      avatar.onclick = function () {
        lockerData.selectedKedvenc = avatar.dataset.choice;
        localStorage.setItem('locker', JSON.stringify(lockerData));
        lockeroptions.querySelectorAll('.avatar').forEach(avatar => avatar.classList.remove('selected'));
        avatar.classList.add('selected');
        applyLockerSettings();
      };
    });
  } else if (locker_szinek.checked) {
    lockeroptions.innerHTML = lockerData.szinek
      .map(neve => {
        const [c1, c2] = SZINEK[neve].split(' ');
        return `<span class="avatar text ${
          lockerData.selectedSzinek === neve ? 'selected' : ''
        }" data-choice="${neve}" style="background: linear-gradient(135deg, ${c1} 50%, ${c2} 50%)" ></span>`;
      })
      .join('');
    lockeroptions.querySelectorAll('.avatar').forEach(avatar => {
      avatar.onclick = function () {
        lockerData.selectedSzinek = avatar.dataset.choice;
        localStorage.setItem('locker', JSON.stringify(lockerData));
        lockeroptions.querySelectorAll('.avatar').forEach(avatar => avatar.classList.remove('selected'));
        avatar.classList.add('selected');
        applyLockerSettings();
      };
    });
  }
  activateVideos();
}

function showLockerOptions(options, selected) {
  options.sort();
  lockeroptions.innerHTML = options
    .map(
      choice => `
      <div
        tabindex="0"
        class="avatar ${choice.name === selected ? 'selected' : ''}"
        data-choice="${choice.name}">
        ${avatarContents(choice)}
      </div>`
    )
    .join('');
}
function applyLockerSettings() {
  matekbpheader.style.display = lockerData.selectedKutato === 'none' ? 'none' : 'block';
  matekbgheader.style.display = lockerData.selectedKutato === 'none' ? 'block' : 'none';
  if (lockerData.selectedKutato !== 'none') {
    avatar.src = `images/space-animals-sana/${lockerData.selectedKutato}.jpeg`;
  }
  kedvenc.style.display = lockerData.selectedKedvenc !== 'none' ? 'block' : 'none';
  if (lockerData.selectedKedvenc !== 'none') {
    kedvenc.src = `images/furballs-sana/${lockerData.selectedKedvenc}.jpg`;
  }
  applyColor(lockerData.selectedSzinek);
}
function applyColor(colorName) {
  const [c1, c2] = (SZINEK[colorName] ?? SZINEK.original).split(' ');
  document.documentElement.style.cssText = `--border-color: ${c1}; --bg-color: ${c2}`;
}
applyLockerSettings();
function showMatek() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  matek.style.display = 'block';
}

locker_kutato.onclick = showLocker;
locker_kedvenc.onclick = showLocker;
locker_szinek.onclick = showLocker;
avatar.onclick = () => {
  locker_kutato.checked = true;
  showLocker();
};
kedvenc.onclick = () => {
  locker_kedvenc.checked = true;
  showLocker();
};
document.querySelectorAll('.ti-shirt').forEach(e => {
  e.onclick = showLocker;
});
document.querySelectorAll('.ti-home').forEach(e => {
  e.onclick = showMatek;
});
