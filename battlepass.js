// setTimeout(function () {
//   document.documentElement.style.cssText = '--bg-color: red';
//   setTimeout(function () {
//     document.documentElement.style.cssText = '--bg-color: green';
//   }, 1000);
// }, 1000);

const lockerData = JSON.parse(localStorage.getItem('locker') || '{}');
lockerData.kutatok = lockerData.kutatok || ['snail-m', 'snail-f'];
lockerData.selectedKutato = lockerData.selectedKutato || 'snail-f';
lockerData.kedvencek = lockerData.kedvencek || ['Samantha', 'Dennis'];
lockerData.selectedKedvenc = lockerData.selectedKedvenc || 'none';
lockerData.szinek = lockerData.szinek || ['snail'];
lockerData.selectedSzinek = lockerData.selectedSzinek || 'snail';
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
    lockeroptions.innerHTML += ` <span class="avatar none ${
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
  }
}

function showLockerOptions(options, selected, template) {
  options.sort();
  lockeroptions.innerHTML = options
    .map(choice => template.replaceAll('CHOICE', choice).replaceAll('SELECTED', choice === selected ? 'selected' : ''))
    .join(' ');
}
function applyLockerSettings() {
  avatar.src = `images/space-animals-sana/${lockerData.selectedKutato}.jpeg`;
  kedvenc.style.display = lockerData.selectedKedvenc !== 'none' ? 'block' : 'none';
  kedvenc.src = `images/furballs-sana/${lockerData.selectedKedvenc}.jpg`;
}
applyLockerSettings();
closelocker.onclick = function () {
  applyLockerSettings();
  locker.style.display = 'none';
  game.style.display = 'block';
};

locker_kutato.onclick = showLocker;
locker_kedvenc.onclick = showLocker;
