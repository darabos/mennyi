function loadMatekData() {
  const matekData = JSON.parse(localStorage.getItem('matek') || '{}');
  matekData.nyelv ??= 'Magyar';
  matekData.sebesseg ??= 1;
  matekData.osszeadas ??= true;
  matekData.kivonas ??= false;
  matekData.szorzas ??= false;
  matekData.irasbeli ??= false;
  matekData.ketjegyu ??= false;
  matekData.idore ??= false;
  matekData.szint ??= 2;
  matekData.szintlepes ??= true;
  localStorage.setItem('matek', JSON.stringify(matekData));
  nyelv.value = matekData.nyelv;
  sebesseg.value = matekData.sebesseg;
  osszeadas.checked = matekData.osszeadas;
  kivonas.checked = matekData.kivonas;
  szorzas.checked = matekData.szorzas;
  irasbeli.checked = matekData.irasbeli;
  ketjegyu.checked = matekData.ketjegyu;
  idore.checked = matekData.idore;
  szint.value = matekData.szint;
  szintlepes.checked = matekData.szintlepes;
}
loadMatekData();
function saveMatekData() {
  const matekData = {
    nyelv: nyelv.value,
    sebesseg: parseFloat(sebesseg.value),
    osszeadas: osszeadas.checked,
    kivonas: kivonas.checked,
    szorzas: szorzas.checked,
    irasbeli: irasbeli.checked,
    ketjegyu: ketjegyu.checked,
    idore: idore.checked,
    szint: parseInt(szint.value),
    szintlepes: szintlepes.checked,
  };
  localStorage.setItem('matek', JSON.stringify(matekData));
}
matek.querySelectorAll('input, select').forEach(e => {
  e.addEventListener('change', saveMatekData);
});

speechSynthesis.onvoiceschanged = function () {};
const LANGUAGES = {
  Magyar: {
    lang: 'hu',
    prompt: 'Mennyi',
    plus: 'meg',
    minus: n => 'b' + 'xőőóőőóőóő'[n % 10].replace('x', 'xőóóőőóőóő'[Math.floor(n / 10)]) + 'l',
    times: n => 'sz' + 'xeöoeöoeoe'[n % 10].replace('x', 'xeooeeoeoe'[Math.floor(n / 10)]) + 'r',
    numbers: ['egy', 'kettő', 'három', 'négy', 'öt', 'hat', 'hét', 'nyolc', 'kilenc'],
    yes: ['Igen.', 'Igen.', 'Igen.', 'Igen.', 'Így van.'],
    no: ['Nem.', 'Nem.', 'Nem.', 'Nem.', 'Jaj, nem.'],
    slow: ['Túl lassú!', 'Gyorsabban!'],
  },
  Angol: {
    lang: 'en',
    prompt: 'What is',
    plus: 'plus',
    times: 'times',
    minus: 'minus',
    numbers: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    yes: ['Yes.', 'Correct.', 'Yeah.', 'Indeed.', 'Right.'],
    no: ['No.', 'No.', 'No.', 'No.', 'Nope.', 'Sorry.'],
    slow: ['Too slow!', 'Faster!', 'Too late!'],
  },
  Űrlény: {
    lang: 'hu',
    prompt: 'Mennyi',
    plus: 'meg',
    minus: n => 'bl' + 'xóóőóőóóóó'[n] + 'l',
    times: n => 'sz' + 'xooeoeoooo'[n] + 'r',
    numbers: ['ong', 'bong', 'ké', 'melo', 'gik', 'lekka', 'larp', 'donk', 'bedong'],
    yes: ['Igen.', 'Igen.', 'Igen.', 'Igen.', 'Így van.'],
    no: ['Nem.', 'Nem.', 'Nem.', 'Nem.', 'Jaj, nem.'],
    slow: ['Túl lassú!', 'Gyorsabban!', 'A bedong nem vár.'],
  },
  Csibe: {
    lang: 'hu',
    prompt: 'Mennyi',
    plus: 'meg',
    minus: 'ből',
    times: 'szer',
    numbers: [
      'csip',
      'csipcsip',
      'csipcsipcsip',
      'csipcsipcsipcsip',
      'csirip',
      'csipcsirip',
      'csipcsipcsirip',
      'csipcsipcsipcsirip',
      'csipcsipcsipcsipcsirip',
    ],
    yes: ['Igen.', 'Igen.', 'Igen.', 'Igen.', 'Így van, kukurikú.'],
    no: ['Nem.', 'Nem.', 'Nem.', 'Nem.', 'Csip, nem.'],
    slow: ['Túl lassú!', 'Gyorsabban!', 'Lassú csibe!'],
  },
  Japán: {
    lang: 'ja',
    prompt: '',
    plus: 'たす',
    minus: 'ひく',
    times: 'かける',
    ending: 'とは何ですか？',
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    yes: ['はい。', 'はい。', 'はい。', 'はい。', 'はい、確かに。'],
    no: ['いいえ。', 'いいえ。', 'いいえ。', 'いいえ。', 'とんでもない。'],
    slow: ['遅すぎる!'],
  },
  Hónapok: {
    lang: 'hu',
    prompt: 'Mennyi',
    plus: 'meg',
    minus: n => 'b' + 'xóóóóóóóóőőőő'[n] + 'l',
    times: n => 'sz' + 'xooooooooeeee'[n] + 'r',
    numbers: 'január február március április május június július augusztus szeptember október november december'.split(
      ' '
    ),
    yes: ['Igen.', 'Igen.', 'Igen.', 'Igen.', 'Így van.', 'Tökéletes.'],
    no: ['Nem.', 'Nem.', 'Nem.', 'Nem.', 'Jaj, nem.', 'Tökéletesen rossz.'],
    slow: ['Túl lassú!', 'Gyorsabban!'],
  },
  Hindi: {
    lang: 'hi',
    prompt: '',
    plus: 'और',
    minus: 'माइनस',
    times: 'गुणा',
    ending: 'कितना है?',
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    yes: ['सही!', 'हाँ!', 'बिल्कुल!', 'सही।'],
    no: ['नहीं।', 'गलत.'],
    slow: ['बहुत धीमा।', 'और वक्त नहीं।'],
  },
};
function languageChanged() {
  ketjegyu.disabled =
    nyelv.value !== 'Magyar' && nyelv.value !== 'Angol' && nyelv.value !== 'Japán' && nyelv.value !== 'Hindi';
  ketjegyu.checked = ketjegyu.checked && !ketjegyu.disabled;
}
function keepOne() {
  let checked = 0;
  for (const c of [osszeadas, kivonas, szorzas]) {
    if (c.checked) {
      checked += 1;
    }
  }
  for (const c of [osszeadas, kivonas, szorzas]) {
    c.disabled = checked === 1 && c.checked;
  }
}
osszeadas.onchange = keepOne;
kivonas.onchange = keepOne;
szorzas.onchange = keepOne;
keepOne();
for (const l in LANGUAGES) {
  nyelv.innerHTML += `<option value="${l}">${l}</option>`;
}
let answer = '';
function newTask(level) {
  const l = LANGUAGES[nyelv.value];
  let answer, last, mult, lastsign;
  const words = [];
  const math = [];
  for (let i = 0; i < level; ++i) {
    let n = Math.floor(Math.random() * l.numbers.length) + 1;
    let nword = l.numbers[n - 1];
    if (ketjegyu.checked) {
      n = 10 + Math.floor(Math.random() * 90);
      nword = n.toString();
    }
    let op;
    if (answer) {
      const options = [];
      if (osszeadas.checked) options.push(osszeadas);
      if (kivonas.checked && answer > n) options.push(kivonas);
      if (szorzas.checked && (lastsign == '+' || answer > mult * (n - 1))) options.push(szorzas);
      if (options.length === 0) {
        return newTask(level);
      } else {
        op = pickRandom(options);
      }
    }
    if (!op) {
      math.push(n);
      words.push(nword);
      answer = n;
      mult = n;
      lastsign = '+';
    } else if (op === szorzas) {
      math.push(' · ');
      math.push(n);
      words.push(typeof l.times === 'string' ? l.times : l.times(last));
      words.push(nword);
      if (lastsign === '+') answer += mult * (n - 1);
      else answer -= mult * (n - 1);
      mult *= n;
    } else if (op === kivonas) {
      math.push(' - ');
      math.push(n);
      words.push(typeof l.minus === 'string' ? l.minus : l.minus(last));
      words.push(nword);
      answer -= n;
      mult = n;
      lastsign = '-';
    } else {
      math.push(' + ');
      math.push(n);
      words.push(l.plus);
      words.push(nword);
      answer += n;
      mult = n;
      lastsign = '+';
    }
    last = n;
  }
  const text = l.prompt + ' ' + words.join(' ') + (l.ending || '?');
  return { math, text, answer, digits: ketjegyu.checked ? 2 : 1, level };
}
let task;
function start(alsoSay) {
  if (task) {
    clearTimeout(task.timeout);
  }
  task = newTask(parseInt(szint.value));
  kerdes.innerHTML = irasbeli.checked ? task.math.join('') : '';
  console.log(task.text);
  answer = '';
  valasz.value = '';
  valasz.style.backgroundColor = null;
  valasz.focus();
  say((alsoSay || '') + ' ' + task.text);
  if (idore.checked) {
    timer.style.display = 'block';
    // Animáció újraindítása.
    timer.classList.remove('timer-animation');
    timer.offsetWidth;
    timer.classList.add('timer-animation');
    task.timeout = setTimeout(function () {
      if (valasz.style.backgroundColor) {
        start();
      } else {
        start(pickRandom(LANGUAGES[nyelv.value].slow));
      }
    }, 10000);
  } else {
    timer.style.display = 'none';
  }
}
startbutton.onclick = () => start();
function say(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = LANGUAGES[nyelv.value].lang;
  u.rate = parseFloat(sebesseg.value);
  window.speechSynthesis.cancel();
  hangszoro.style.display = 'block';
  u.onend = function () {
    hangszoro.style.display = 'none';
  };
  window.speechSynthesis.speak(u);
}
function pickRandom(options) {
  return options[(Math.random() * options.length) | 0];
}
function sayRandom(options) {
  say(pickRandom(options));
}
valasz.onkeypress = function (e) {
  e.preventDefault();
  if (e.key === 'Enter') {
    start();
  }
  if (valasz.style.backgroundColor) return;
  if (e.key >= '0' && e.key <= '9') {
    answer = answer + e.key;
    const correct = task.answer.toString();
    if (answer === correct) {
      let score = parseInt(szint.value) * 50;
      if (szorzas.checked) score *= 2;
      if (ketjegyu.checked) score *= 5;
      if (idore.checked) score *= 10;
      if (!irasbeli.checked) score *= 10;
      valasz.style.backgroundColor = '#6f4';
      if (szintlepes.checked) {
        szint.value = parseInt(szint.value) + 1;
      }
      say(correct + ', ' + pickRandom(LANGUAGES[nyelv.value].yes));
      xpEvent(score);
      missionEvent({ correct: true, ...task });
    } else if (!correct.startsWith(answer)) {
      valasz.style.backgroundColor = '#f64';
      if (szintlepes.checked && parseInt(szint.value) > 2) {
        szint.value = parseInt(szint.value) - 1;
      }
      sayRandom(LANGUAGES[nyelv.value].no);
      missionEvent({ correct: false, ...task });
    }
    valasz.value = answer;
  }
};
