window.KNOWLEDGE_BASE_DATA = [
  {
    id: "present-simple-continuous",
    unit: "1A",
    category: "grammar",
    title: "Present Simple vs Present Continuous",
    summary: "Привычка / факт / состояние vs действие сейчас / временная ситуация.",
    body: `
      <div class="kb-compare">
        <section>
          <h3>Present Simple</h3>
          <p class="kb-key">обычно · регулярно · факт · состояние</p>
          <div class="kb-formula">I/you/we/they + V<br>he/she/it + V-s</div>
          <p><b>My boss cycles to work every morning.</b><br><span>Мой начальник ездит на работу на велосипеде каждое утро.</span></p>
        </section>
        <section>
          <h3>Present Continuous</h3>
          <p class="kb-key">сейчас · в текущий период · временно</p>
          <div class="kb-formula">am / is / are + V-ing</div>
          <p><b>I’m not eating chocolate this month.</b><br><span>В этом месяце я временно не ем шоколад.</span></p>
        </section>
      </div>

      <div class="kb-table-wrap">
        <table class="kb-table">
          <thead><tr><th></th><th>Present Simple</th><th>Present Continuous</th></tr></thead>
          <tbody>
            <tr><td>Утверждение</td><td>She works.</td><td>She is working.</td></tr>
            <tr><td>Отрицание</td><td>She doesn’t work.</td><td>She isn’t working.</td></tr>
            <tr><td>Вопрос</td><td>Does she work?</td><td>Is she working?</td></tr>
            <tr><td>Wh-вопрос</td><td>Where does she work?</td><td>What is she doing?</td></tr>
          </tbody>
        </table>
      </div>

      <div class="kb-note"><b>Важно:</b> после <b>does / doesn’t</b> смысловой глагол стоит без -s: <b>Does she work?</b></div>

      <h3 class="kb-subtitle">Глаголы состояния</h3>
      <p><b>believe, belong, know, love, recognize, understand, want, need</b> обычно описывают состояние, поэтому чаще используются в Present Simple.</p>

      <h3 class="kb-subtitle">Как образовать -ing</h3>
      <div class="kb-rules">
        <div><b>обычно + ing</b><span>work → working</span></div>
        <div><b>-e убираем</b><span>make → making</span></div>
        <div><b>-ie → y</b><span>lie → lying</span></div>
        <div><b>CVC</b><span>run → running</span></div>
        <div><b>w / x / y не удваиваем</b><span>fix → fixing</span></div>
      </div>
    `
  },

  {
    id: "future-forms",
    unit: "1B",
    category: "grammar",
    title: "Future forms",
    summary: "Present Continuous, be going to, will / won’t, Shall I / Shall we.",
    body: `
      <div class="kb-future">
        <div>
          <h3>Arrangement</h3>
          <div class="kb-formula">Present Continuous</div>
          <p><b>We’re going on holiday tomorrow.</b><br><span>Мы завтра едем в отпуск.</span></p>
          <small>План уже организован / есть договорённость.</small>
        </div>
        <div>
          <h3>Intention / evidence</h3>
          <div class="kb-formula">be going to + V</div>
          <p><b>He’s going to look for a new job.</b><br><span>Он собирается искать новую работу.</span></p>
          <small>Намерение или прогноз по видимым признакам.</small>
        </div>
        <div>
          <h3>Decision / promise / offer / prediction</h3>
          <div class="kb-formula">will / won’t + V</div>
          <p><b>I’ll have the steak.</b><br><span>Я возьму стейк.</span></p>
          <small>Решение сейчас, обещание, предложение помощи, прогноз.</small>
        </div>
        <div>
          <h3>Suggestion / offer</h3>
          <div class="kb-formula">Shall I...? / Shall we...?</div>
          <p><b>Shall we invite your parents?</b><br><span>Может, пригласим твоих родителей?</span></p>
          <small>Предложение сделать что-то.</small>
        </div>
      </div>
      <div class="kb-note"><b>Prediction:</b> иногда возможны и <b>will</b>, и <b>be going to</b>. Выбор зависит от смысла и контекста.</div>
    `
  },

  {
    id: "food-cooking",
    unit: "1A",
    category: "vocabulary",
    title: "Food & cooking",
    summary: "Основная лексика 1A Eating in...and out.",
    words: [
      ["aubergine","баклажан"],["avocado","авокадо"],["lobster","омар / лобстер"],
      ["squid","кальмар"],["tuna","тунец"],["courgette","кабачок / цукини"],
      ["prawns","креветки"],["mussels","мидии"],["beetroot","свёкла"],
      ["grilled","приготовленный на гриле"],["boiled","варёный"],["baked","запечённый"],
      ["fried","жареный"],["roast","запечённый в духовке"],["steamed","приготовленный на пару"],
      ["frozen","замороженный"],["raw","сырой"],["low-fat","с низким содержанием жира"],
      ["spicy","острый"],["tinned","консервированный"],["takeaway","еда навынос"]
    ],
    patterns: [
      ["cut down on","сократить потребление"],
      ["cut out","полностью исключить"],
      ["eat out","есть вне дома / в ресторане"],
      ["cheer up","поднять настроение"]
    ]
  },

  {
    id: "family",
    unit: "1B",
    category: "vocabulary",
    title: "Family relationships",
    summary: "Родственные связи из Modern families.",
    words: [
      ["great-grandfather","прадедушка"],["only child","единственный ребёнок"],
      ["niece","племянница"],["adopted child","усыновлённый / удочерённый ребёнок"],
      ["immediate family","ближайшая семья"],["stepmother","мачеха"],
      ["brother-in-law","брат супруга / муж сестры"],["half-sister","сестра с одним общим родителем"],
      ["siblings","братья и сёстры"],["extended family","расширенная семья"],
      ["nephew","племянник"],["stepsister","сводная сестра без общего родителя"]
    ],
    body: `
      <div class="kb-family">
        <div class="kb-you">YOU</div>
        <div><b>siblings</b><span>brothers & sisters</span></div>
        <div><b>niece / nephew</b><span>children of your sibling</span></div>
        <div><b>half-sister</b><span>one shared parent</span></div>
        <div><b>stepsister</b><span>no shared parent</span></div>
        <div><b>brother-in-law</b><span>relative by marriage</span></div>
      </div>
    `
  },

  {
    id: "personality",
    unit: "1B",
    category: "vocabulary",
    title: "Personality adjectives",
    summary: "Прилагательные характера из Unit 1B.",
    words: [
      ["spoilt","избалованный"],["anxious","тревожный"],["selfish","эгоистичный"],
      ["sensible","разумный / благоразумный"],["self-confident","уверенный в себе"],
      ["ambitious","амбициозный / целеустремлённый"],["stubborn","упрямый"],
      ["independent","самостоятельный / независимый"],["rebellious","бунтарский / непокорный"],
      ["patient","терпеливый"],["honest","честный"],["insecure","неуверенный в себе"],
      ["sociable","общительный"],["mature","зрелый"],["imaginative","с богатым воображением"],
      ["bossy","любящий командовать"],["moody","с переменчивым настроением"],
      ["competitive","соревновательный"],["reliable","надёжный"],
      ["affectionate","ласковый / любящий"],["sensitive","чувствительный"]
    ]
  },

  {
    id: "negative-prefixes",
    unit: "1B",
    category: "quick",
    title: "Negative prefixes",
    summary: "Противоположные personality adjectives.",
    body: `
      <div class="kb-prefixes">
        <div><b>dis-</b><span>honest → dishonest<br>organized → disorganized</span></div>
        <div><b>im-</b><span>mature → immature<br>patient → impatient</span></div>
        <div><b>in-</b><span>sensitive → insensitive</span></div>
        <div><b>ir-</b><span>responsible → irresponsible</span></div>
        <div><b>un-</b><span>reliable → unreliable<br>ambitious → unambitious<br>friendly → unfriendly<br>kind → unkind<br>selfish → unselfish</span></div>
      </div>
      <div class="kb-note">Форму с отрицательной приставкой лучше учить как отдельное слово, а не выбирать приставку случайно.</div>
    `
  },

  {
    id: "three-s",
    unit: "1B",
    category: "quick",
    title: "sensible · sensitive · sympathetic",
    summary: "Три похожих слова, которые легко перепутать.",
    body: `
      <div class="kb-three">
        <div><b>sensible</b><span>разумный, практичный</span><p>Be sensible!</p></div>
        <div><b>sensitive</b><span>чувствительный, легко задеть</span><p>Don’t be so sensitive.</p></div>
        <div><b>sympathetic</b><span>сочувствующий, понимающий</span><p>Be sympathetic.</p></div>
      </div>
    `
  },

  {
    id: "vowels",
    unit: "1A",
    category: "pronunciation",
    title: "Short & long vowel sounds",
    summary: "Звуки из pronunciation 1A.",
    body: `
      <div class="kb-sounds">
        <div><b>/ɪ/</b><span>fish</span><small>chicken, squid</small></div>
        <div><b>/iː/</b><span>tree</span><small>beef, peach</small></div>
        <div><b>/æ/</b><span>cat</span><small>crab, mango</small></div>
        <div><b>/ɑː/</b><span>car</span><small>carton, jar</small></div>
        <div><b>/ɒ/</b><span>clock</span><small>chocolate, sausage</small></div>
        <div><b>/ɔː/</b><span>horse</span><small>pork, prawns</small></div>
        <div><b>/ʊ/</b><span>bull</span><small>cookie, sugar</small></div>
        <div><b>/uː/</b><span>boot</span><small>cucumber, tuna</small></div>
      </div>
    `
  }
];
