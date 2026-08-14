const screens = [...document.querySelectorAll(".screen")];


// =====================
// МУЗЫКА
// =====================
const tracks = {
  intro: new Audio("music/intro.mp3"),
  quiz: new Audio("music/quiz.mp3"),
  final: new Audio("music/final.mp3")
};

tracks.quiz.loop = true;
tracks.intro.loop = true;
tracks.final.loop = true;

let soundEnabled = true;
let currentTrack = null;

function stopTrack(track) {
  if (!track) return;
  track.pause();
  track.currentTime = 0;
}

function stopAllMusic() {
  Object.values(tracks).forEach(stopTrack);
  currentTrack = null;
}

function playTrack(name) {
  if (!soundEnabled) return;
  stopAllMusic();
  currentTrack = tracks[name];
  const promise = currentTrack.play();
  if (promise && promise.catch) promise.catch(() => {});
}

const characters = {
  "Крош": {
    icon: "🐰",
    text: `
      <p>Лада! С днём рождения!</p>
      <p>Вот я тут подумал: день рождения — это же отличный повод пожелать человеку всего самого-самого! Поэтому желаю тебе побольше весёлых дней, побольше приключений и чтобы рядом всегда были люди, с которыми можно смеяться до слёз!</p>
      <p>А ещё желаю, чтобы даже если день вдруг начинается как какой-нибудь ужасно пасмурный понедельник, ты всё равно могла его быстренько превратить в нормальный день. Ну или хотя бы найти что-нибудь вкусное. Это тоже работает.</p>
      <p>И вообще… улыбайся почаще, ёлки-иголки!!</p>
      <p>Хотя, если честно, ты и так это отлично умеешь. 😁</p>
    `
  },
  "Ёжик": {
    icon: "🦔",
    text: `
      <p>Дорогая Лада!</p>
      <p>Я хочу пожелать тебе, чтобы рядом всегда были люди, с которыми можно быть собой.</p>
      <p>Знаешь, иногда человеку совсем не хочется казаться сильным, весёлым или идеальным. Иногда хочется просто рассказать, что тебе грустно, что ты устала или что что-то не получилось.</p>
      <p>И очень важно, когда рядом есть тот, кто не станет тебя осуждать, а просто скажет: «Всё хорошо. Я рядом».</p>
      <p>Поэтому я хочу пожелать тебе самой получать столько же тепла и поддержки, сколько ты отдаёшь другим, и чтобы таких людей у тебя было много, как фантиков в моей коллекции.</p>
      <p>Береги себя. Радуй себя. И никогда не забывай, что ты очень-очень хороший человек. 💗</p>
    `
  },
  "Бараш": {
    icon: "🐏",
    text: `
      <p>О, Лада!</p>
      <p>Как же трудно подобрать слова, когда хочется сказать человеку сразу так много всего…</p>
      <p>Ты похожа на тот самый тёплый солнечный день, который совершенно неожиданно появляется посреди долгой пасмурной недели.</p>
      <p>На тебя можно смотреть и улыбаться.<br>С тобой можно говорить о серьёзном и совершенно бессмысленном.<br>С тобой можно смеяться.<br>С тобой можно молчать.</p>
      <p>С тобой можно смотреть на горы и написать прекрасное стихотворение!</p>
      <p>И, наверное, самое прекрасное — рядом с тобой не нужно притворяться кем-то другим.</p>
      <p>Поэтому я желаю тебе всегда оставаться такой же искренней, лёгкой и удивительно тёплой.</p>
      <p>Пусть в твоей жизни будет как можно больше моментов, когда ты думаешь: «Как же хорошо, что всё именно так». 💗</p>
    `
  },
  "Нюша": {
    icon: "🐷",
    text: `
      <p>Ладочка!</p>
      <p>Во-первых, с днём рождения! 🎀</p>
      <p>А во-вторых, я хочу официально сообщить тебе очень важную информацию.</p>
      <p>Ты — невероятно стильная девушка. Вот просто невероятно!</p>
      <p>Эти твои модные образы, интересные сумочки, всякие красивые штучки — я прям завидую!! Ты умудряешься выглядеть классно даже тогда, когда, наверное, сама думаешь, что просто надела первое попавшееся.</p>
      <p>Но знаешь, что самое главное?</p>
      <p>Не одежда.<br>Не сумочки.<br>Не причёска.<br>А то, что ты остаёшься собой.</p>
      <p>Поэтому желаю тебе всегда нравиться самой себе. Покупать себе красивые вещи просто потому, что захотелось. Иногда баловать себя всякими приятностями и вообще не искать для этого никакого повода.</p>
      <p>Хотя один повод сегодня точно есть.</p>
      <p><strong>Ты родилась! 🥰</strong></p>
    `
  },
  "Совунья": {
    icon: "🦉",
    text: `
      <p>Лада, милая!</p>
      <p>Я хочу пожелать тебе здоровья, сил и побольше времени на себя.</p>
      <p>Потому что помогать другим — это замечательно.<br>Поддерживать близких — прекрасно.<br>Заботиться о тех, кого любишь, — очень важно.</p>
      <p>Но ты ведь тоже человек, тебе тоже иногда нужно остановиться, выдохнуть, вкусно поесть моего супа, отдохнуть, посмотреть что-нибудь приятное и просто сказать: «Сегодня я буду заботиться о себе».</p>
      <p>Так что пусть в новом году твоей жизни будет много таких дней.</p>
      <p>И пусть люди, которых ты любишь, не только принимают твоё тепло, но и возвращают его тебе.</p>
      <p>А если вдруг забудешь про себя — я напомню и приглашу тебя к себе на тёплую беседу!</p>
    `
  },
  "Копатыч": {
    icon: "🐻",
    text: `
      <p>Лада, поздравляю!</p>
      <p>Желаю тебе, чтобы всё у тебя получалось. И в работе, и в жизни, и во всех твоих задумках.</p>
      <p>Ты ведь уже много чего умеешь, а дальше будет ещё больше.</p>
      <p>Не бойся пробовать новое, не переживай из-за ошибок и не думай, что тебе обязательно нужно всё уметь сразу.</p>
      <p>Расти потихоньку, шаг за шагом.</p>
      <p>А если что-нибудь не получится — ничего страшного. Значит, получится потом, укуси меня пчола.</p>
      <p>Главное — не забывай радоваться тому, что уже получилось.</p>
      <p>Ну и отдыхать не забывай! А то некоторые товарищи могут так увлечься делами, что потом их приходится кормить насильно.</p>
    `
  },
  "Кар-Карыч": {
    icon: "🐦‍⬛",
    text: `
      <p>Дорогая Лада!</p>
      <p>За свою жизнь я успел заметить одну интересную вещь.</p>
      <p>Есть люди, после общения с которыми становится немного тяжелее.</p>
      <p>А есть люди, после которых почему-то становится легче.</p>
      <p>Вот ты — из вторых.</p>
      <p>Ты умеешь сделать обычный день приятнее просто своим присутствием. Умеешь рассмешить, поддержать, выслушать.</p>
      <p>И, что особенно важно, рядом с тобой человеку не страшно быть настоящим.</p>
      <p>Это очень редкое качество.</p>
      <p>Поэтому я желаю тебе никогда его не терять.</p>
      <p>Но и ещё кое-что.</p>
      <p>Пусть в твоей жизни будут люди, рядом с которыми <strong>тебе самой</strong> будет так же спокойно и хорошо, как другим рядом с тобой.</p>
    `
  },
  "Лосяш": {
    icon: "🫎",
    text: `
      <p>Любезная моя Лада!</p>
      <p>Проведя небольшой анализ имеющихся данных, я пришёл к следующему выводу.</p>
      <p>Вероятность того, что ты замечательный человек, стремится к стопроцентному значению. Это феноменально!</p>
      <p>Причём имеется целый ряд подтверждающих факторов:</p>
      <p>— высокий уровень доброты;<br>— развитое чувство юмора;<br>— способность поддерживать окружающих;<br>— выдающаяся улыбка;<br>— прекрасный вкус;<br>— стремление развиваться в профессиональной деятельности.</p>
      <p>Однако исследование выявило один существенный недостаток.</p>
      <p>Ты слишком много хорошего отдаёшь окружающим.</p>
      <p>Поэтому в новом году жизни предлагаю тебе провести эксперимент.</p>
      <p><strong>Часть этой доброты направлять исключительно на себя.</strong></p>
      <p>Полагаю, результаты будут поразительными.</p>
      <p>С днём рождения, Лада! 🎓</p>
    `
  },
  "Пин": {
    icon: "🐧",
    text: `
      <p>Лада!</p>
      <p>Гутен таг! И с днём рождения!</p>
      <p>Я долго думал, что именно тебе пожелать. Можно, конечно, пожелать счастья, здоровья, успехов и всего такого… Но я решил подойти к вопросу научно.</p>
      <p>Итак.</p>
      <p>После проведения многочисленных наблюдений и анализа доступных данных установлено:</p>
      <p><strong>Лада — очень хороший человек.</strong></p>
      <p>Причём это не предположение, а подтверждённый факт.</p>
      <p>Ты умеешь поддерживать людей, умеешь радоваться за них, умеешь рассмешить и даже в самые пасмурные дни каким-то образом умудряешься приносить с собой тепло.</p>
      <p>Поэтому моё главное пожелание тебе на этот год:</p>
      <p><strong>пусть всё хорошее, что ты отдаёшь другим, возвращается к тебе обратно.</strong></p>
      <p>Много-много раз.</p>
      <p>А ещё желаю тебе не бояться новых идей, пробовать, создавать и развиваться в том, что тебе действительно нравится.</p>
      <p>Если что-то не получается с первого раза — не страшно, вспомни мои изобретения! Я тоже не всё сразу построил. Иногда приходилось переделывать. Иногда несколько раз. Иногда очень много раз.</p>
      <p>Но зато потом получается!</p>
      <p>И ещё одно.</p>
      <p>Не забывай иногда выключать режим «надо» и включать режим <strong>«хочу»</strong>.</p>
      <p>Хочешь новую сумочку? Почему бы и нет.<br>Хочешь куда-нибудь поехать? Поехали.<br>Хочешь весь день ничего не делать? Иногда это тоже очень полезное научное исследование.</p>
      <p>И самое главное — оставайся собой.</p>
      <p>Потому что, согласно моим расчётам, именно эта версия Лады является оптимальной.</p>
      <p>С днём рождения! ❤️</p>
    `
  }
};

const order = ["Лосяш", "Нюша", "Крош", "Кар-Карыч", "Пин", "Бараш", "Совунья", "Копатыч", "Ёжик"];
const options = ["Крош", "Ёжик", "Бараш", "Нюша", "Совунья", "Копатыч", "Кар-Карыч", "Лосяш", "Пин"];

let current = 0;
let score = 0;
let locked = false;

const $ = (id) => document.getElementById(id);

function showScreen(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("heartBtn").addEventListener("click", () => { playTrack("intro"); showScreen("password"); });

$("passwordBtn").addEventListener("click", checkPassword);
$("passwordInput").addEventListener("keydown", e => {
  if (e.key === "Enter") checkPassword();
});

function checkPassword() {
  const value = $("passwordInput").value.trim().toUpperCase();
  if (value === "ДР_140803") {
    $("passwordError").textContent = "";
    showScreen("intro");
  } else {
    $("passwordError").textContent = "Не-а… жители долины говорят, что это не тот код 🌼";
    $("passwordInput").animate(
      [{ transform: "translateX(-7px)" }, { transform: "translateX(7px)" }, { transform: "translateX(0)" }],
      { duration: 250 }
    );
  }
}

$("startQuizBtn").addEventListener("click", () => {
  stopTrack(tracks.intro);
  playTrack("quiz");
  current = 0;
  score = 0;
  showScreen("quiz");
  renderQuiz();
});

function renderQuiz() {
  locked = false;
  const name = order[current];
  const character = characters[name];

  $("progress").style.setProperty("--progress", `${((current + 1) / order.length) * 100}%`);
  $("quizNumber").textContent = `Поздравление №${current + 1}`;
  $("quote").innerHTML = character.text;
  $("feedback").textContent = "";
  $("feedback").style.color = "";
  $("nextBtn").classList.add("hidden");

  // The correct answer must always be present.
  const distractors = options
    .filter(nameOption => nameOption !== name)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const shuffled = [name, ...distractors].sort(() => Math.random() - 0.5);
  $("answers").innerHTML = "";

  shuffled.forEach(nameOption => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = `${characters[nameOption].icon} ${nameOption}`;
    btn.addEventListener("click", () => chooseAnswer(btn, nameOption, name));
    $("answers").appendChild(btn);
  });
}

function chooseAnswer(button, selected, correct) {
  if (locked) return;

  const buttons = [...document.querySelectorAll(".answer")];

  if (selected === correct) {
    locked = true;
    score++;
    button.classList.add("correct");
    buttons.forEach(b => b.disabled = true);
    $("feedback").textContent = `🎉 Правильно! Это был ${correct}!`;
    $("feedback").style.color = "#5b8c5a";
    $("nextBtn").classList.remove("hidden");
  } else {
    button.classList.add("wrong");
    button.disabled = true;
    $("feedback").textContent = "Не-а… попробуй ещё раз 👀";
    $("feedback").style.color = "#c87384";
  }
}

$("nextBtn").addEventListener("click", () => {
  current++;
  if (current < order.length) {
    renderQuiz();
  } else {
    showScore();
  }
});

function showScore() {
  stopTrack(tracks.quiz);
  currentTrack = null;
  showScreen("score");
  const total = order.length;
  $("scoreTitle").textContent = `${score} из ${total}!`;

  if (score === total) {
    $("scoreText").textContent = "Кажется, ты слишком хорошо знаешь жителей Ромашковой долины…";
  } else if (score >= 7) {
    $("scoreText").textContent = "Очень достойно! Жители долины официально впечатлены.";
  } else if (score >= 4) {
    $("scoreText").textContent = "Некоторые жители решили немного тебя запутать. Но результат всё равно отличный!";
  } else {
    $("scoreText").textContent = "Похоже, жители долины специально всё перепутали. Они сами признаются позже.";
  }

  $("flowers").textContent = "🌼 ".repeat(Math.max(1, score));
}

$("finalBtn").addEventListener("click", () => {
  playTrack("final");
  showScreen("final");
});

$("celebrateBtn").addEventListener("click", () => {
  showScreen("celebration");
  makeConfetti();
});

function makeConfetti() {
  const box = $("confetti");
  box.innerHTML = "";
  const symbols = ["🌼", "❤️", "💗", "✨", "🌸", "⭐"];

  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.fontSize = `${12 + Math.random() * 18}px`;
    piece.style.animationDuration = `${2.5 + Math.random() * 3}s`;
    piece.style.animationDelay = `${Math.random() * .8}s`;
    piece.style.setProperty("--x", `${-100 + Math.random() * 200}px`);
    box.appendChild(piece);
  }
}

const soundToggle = document.createElement("button");
soundToggle.className = "sound-toggle";
soundToggle.type = "button";
soundToggle.textContent = "🔊";
soundToggle.setAttribute("aria-label", "Включить или выключить звук");
document.body.appendChild(soundToggle);

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.textContent = soundEnabled ? "🔊" : "🔇";
  if (!soundEnabled) {
    stopAllMusic();
  }
});
