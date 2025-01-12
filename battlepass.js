const bpData = JSON.parse(localStorage.getItem('battlepass') || '{}');
localStorage.setItem('battlepass', JSON.stringify(bpData));
bpstatus.onclick = function () {
  game.style.display = 'none';
  battlepass.style.display = 'block';
  showBattlePass();
};
function showBattlePass() {}

closebp.onclick = function () {
  battlepass.style.display = 'none';
  game.style.display = 'block';
};
