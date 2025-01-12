const lockerData = JSON.parse(localStorage.getItem('locker') || '{}');
lockerData.kutatok = lockerData.kutatok || ['snail-m', 'snail-f'];
lockerData.selectedKutato = lockerData.selectedKutato || 'snail-f';
lockerData.kedvencek = lockerData.kedvencek || ['Samantha', 'Dennis'];
lockerData.selectedKedvenc = lockerData.selectedKedvenc || 'none';
lockerData.szinek = lockerData.szinek || ['plain', 'snail'];
lockerData.selectedSzinek = lockerData.selectedSzinek || 'plain';
localStorage.setItem('locker', JSON.stringify(lockerData));
avatar.onclick = function () {
  game.style.display = 'none';
  locker.style.display = 'block';
  showLocker();
};
function showLocker() {
  if (locker_kutato.checked) {
    showLockerOptions(
      lockerData.kutatok,
      lockerData.selectedKutato,
      '<img src="images/space-animals-sana/CHOICE.jpeg" data-choice="CHOICE" width="100" class="avatar SELECTED" />'
    );
    lockeroptions.querySelectorAll('.avatar').forEach(avatar => {
      avatar.onclick = function () {
        lockerData.selectedKutato = avatar.dataset.choice;
        localStorage.setItem('locker', JSON.stringify(lockerData));
        lockeroptions.querySelectorAll('.avatar').forEach(avatar => avatar.classList.remove('selected'));
        avatar.classList.add('selected');
      };
    });
  } else if (locker_kedvenc.checked) {
    showLockerOptions(
      lockerData.kedvencek,
      lockerData.selectedKedvenc,
      '<img src="images/furballs-sana/CHOICE.jpg" data-choice="CHOICE" width="100" class="avatar SELECTED" />'
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
        console.log(lockerData.selectedSzinek);
        applyLockerSettings();
      };
    });
  }
}
const SZINEK = {
  plain: '#458 #fff',
  snail: '#333 #fa0',
  elphaba: '#222 #393',
  barbie: '#fcf #faf',
  snake: '#546 #90a',
  banana: '#ffd #fd4',
  silver: '#ddd #888',
};

function showLockerOptions(options, selected, template) {
  options.sort();
  lockeroptions.innerHTML = options
    .map(choice => template.replaceAll('CHOICE', choice).replaceAll('SELECTED', choice === selected ? 'selected' : ''))
    .join('');
}
function applyLockerSettings() {
  avatar.src = `images/space-animals-sana/${lockerData.selectedKutato}.jpeg`;
  kedvenc.style.display = lockerData.selectedKedvenc !== 'none' ? 'block' : 'none';
  kedvenc.src = `images/furballs-sana/${lockerData.selectedKedvenc}.jpg`;
  const [c1, c2] = SZINEK[lockerData.selectedSzinek].split(' ');
  document.documentElement.style.cssText = `--border-color: ${c1}; --bg-color: ${c2}`;
}
applyLockerSettings();
closelocker.onclick = function () {
  applyLockerSettings();
  locker.style.display = 'none';
  game.style.display = 'block';
};

locker_kutato.onclick = showLocker;
locker_kedvenc.onclick = showLocker;
locker_szinek.onclick = showLocker;
