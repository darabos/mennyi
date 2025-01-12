const bpData = JSON.parse(localStorage.getItem('battlepass') || '{}');
localStorage.setItem('battlepass', JSON.stringify(bpData));
bpstatus.onclick = function () {
  game.style.display = 'none';
  battlepass.style.display = 'block';
  showBattlePass();
};

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

function showBattlePass() {
  const options = ALL_KUTATO;
  battlepassoptions.innerHTML = [
    ...ALL_KUTATO.map(opt => {
      return `<img src="images/space-animals-sana/${opt}.jpeg" width="100" class="avatar" />`;
    }),
    ...ALL_KEDVENC.map(opt => {
      return `<img src="images/furballs-sana/${opt}.jpg" width="100" class="avatar" />`;
    }),
  ].join('');
}

closebp.onclick = function () {
  battlepass.style.display = 'none';
  game.style.display = 'block';
};
