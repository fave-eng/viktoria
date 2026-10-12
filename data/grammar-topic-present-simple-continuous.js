(() => {
  'use strict';

  const TOPIC_ID = 'present-simple-continuous-action-nonaction';
  const GUIDE_ID = 'viktoria-textbook-grammar';

  const styles = `
    #viktoria-grammar-guide { display:none !important; }
    .grammar-bespoke-hidden { display:none !important; }

    #${GUIDE_ID} {
      display:grid;
      gap:28px;
      margin:0 0 38px;
    }
    #${GUIDE_ID} * { box-sizing:border-box; }

    #${GUIDE_ID} .card {
      overflow:hidden;
      border:1px solid #dbe3ef;
      border-radius:24px;
      background:#fff;
      box-shadow:0 12px 32px rgba(15,23,42,.05);
    }
    #${GUIDE_ID} .pad { padding:28px; }

    #${GUIDE_ID} .eyebrow {
      margin:0 0 7px;
      color:#4f46e5;
      font-size:.72rem;
      font-weight:900;
      letter-spacing:.08em;
      text-transform:uppercase;
    }
    #${GUIDE_ID} h2 {
      margin:0 0 9px;
      color:#111827;
      font-size:clamp(1.45rem,2.5vw,2rem);
      line-height:1.15;
    }
    #${GUIDE_ID} h3 {
      margin:0 0 8px;
      color:#172033;
      font-size:1.05rem;
      line-height:1.3;
    }
    #${GUIDE_ID} p { line-height:1.58; }
    #${GUIDE_ID} .lead {
      max-width:900px;
      margin:0;
      color:#5c687d;
    }

    #${GUIDE_ID} .hero {
      background:
        radial-gradient(circle at 95% 0%,rgba(124,58,237,.12),transparent 28%),
        linear-gradient(135deg,#fff 0%,#f8f9ff 56%,#fbfcff 100%);
    }
    #${GUIDE_ID} .split {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      border-top:1px solid #e2e8f0;
    }
    #${GUIDE_ID} .lane {
      min-width:0;
      padding:24px 28px 28px;
    }
    #${GUIDE_ID} .lane + .lane {
      border-left:1px solid #e2e8f0;
      background:rgba(238,242,255,.42);
    }
    #${GUIDE_ID} .tag {
      display:inline-flex;
      margin-bottom:10px;
      padding:5px 10px;
      border-radius:999px;
      background:#eef2ff;
      color:#4338ca;
      font-size:.7rem;
      font-weight:900;
    }
    #${GUIDE_ID} .lane:nth-child(2) .tag {
      background:#f3e8ff;
      color:#6d28d9;
    }
    #${GUIDE_ID} .formula,
    #${GUIDE_ID} .code {
      display:inline-block;
      padding:7px 10px;
      border-radius:10px;
      background:#f1f5f9;
      color:#1e293b;
      font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
      font-weight:850;
      line-height:1.48;
    }
    #${GUIDE_ID} .example {
      margin-top:11px;
      padding:13px 14px;
      border:1px solid #e2e8f0;
      border-radius:15px;
      background:#fff;
    }
    #${GUIDE_ID} .criterion {
      display:block;
      margin-bottom:6px;
      color:#64748b;
      font-size:.7rem;
      font-weight:900;
      letter-spacing:.04em;
      text-transform:uppercase;
    }
    #${GUIDE_ID} .en {
      margin:0;
      color:#111827;
      font-weight:850;
    }
    #${GUIDE_ID} .ru {
      margin:4px 0 0;
      color:#64748b;
    }

    #${GUIDE_ID} .section-head {
      display:grid;
      grid-template-columns:auto minmax(0,1fr);
      gap:14px;
      align-items:start;
      margin-bottom:20px;
    }
    #${GUIDE_ID} .num {
      width:38px;
      height:38px;
      display:grid;
      place-items:center;
      border-radius:13px;
      background:#111827;
      color:#fff;
      font-weight:900;
    }
    #${GUIDE_ID} .section-head p {
      margin:5px 0 0;
      color:#64748b;
    }

    #${GUIDE_ID} .table-wrap {
      width:100%;
      overflow-x:auto;
      padding-bottom:3px;
    }
    #${GUIDE_ID} table {
      width:100%;
      border-collapse:separate;
      border-spacing:0;
      border:1px solid #dbe3ef;
      border-radius:17px;
      overflow:hidden;
    }
    #${GUIDE_ID} .compare { min-width:900px; }
    #${GUIDE_ID} th,
    #${GUIDE_ID} td {
      padding:14px 15px;
      vertical-align:top;
      text-align:left;
      border-right:1px solid #e2e8f0;
      border-bottom:1px solid #e2e8f0;
    }
    #${GUIDE_ID} th:last-child,
    #${GUIDE_ID} td:last-child { border-right:0; }
    #${GUIDE_ID} tr:last-child td { border-bottom:0; }

    #${GUIDE_ID} .compare thead th {
      background:#111827;
      color:#fff;
      font-size:.9rem;
    }
    #${GUIDE_ID} .compare thead th:nth-child(2) { background:#3730a3; }
    #${GUIDE_ID} .compare thead th:nth-child(3) { background:#6d28d9; }

    #${GUIDE_ID} .row-label {
      min-width:155px;
      background:#f8fafc;
      color:#334155;
      font-size:.78rem;
      font-weight:900;
    }

    #${GUIDE_ID} .note {
      margin:15px 0 0;
      padding:14px 16px;
      border-left:4px solid #6366f1;
      border-radius:0 14px 14px 0;
      background:#f5f7ff;
      color:#3f4a5d;
      line-height:1.6;
    }

    #${GUIDE_ID} .grid2 {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:14px;
    }
    #${GUIDE_ID} .rule,
    #${GUIDE_ID} .meaning {
      padding:17px;
      border:1px solid #dfe6f0;
      border-radius:17px;
      background:#fbfcfe;
    }
    #${GUIDE_ID} .rule p { margin:0;color:#5f6b80; }
    #${GUIDE_ID} .pattern {
      display:block;
      margin-top:11px;
      padding:10px 12px;
      border-radius:11px;
      background:#fff;
      color:#312e81;
      font-family:ui-monospace,SFMono-Regular,Menlo,monospace;
      font-weight:850;
      line-height:1.55;
    }
    #${GUIDE_ID} .small {
      display:block;
      margin-top:8px;
      color:#7c3aed;
      font-size:.86rem;
      line-height:1.48;
    }
    #${GUIDE_ID} .pills {
      display:flex;
      flex-wrap:wrap;
      gap:7px;
      margin-top:9px;
    }
    #${GUIDE_ID} .pills span {
      padding:6px 9px;
      border:1px solid #dbe3ef;
      border-radius:999px;
      background:#fff;
      color:#1e293b;
      font-size:.88rem;
      font-weight:760;
    }

    #${GUIDE_ID} .case + .case {
      margin-top:11px;
      padding-top:11px;
      border-top:1px solid #e2e8f0;
    }
    #${GUIDE_ID} .case > strong {
      display:block;
      margin-bottom:5px;
      color:#475569;
      font-size:.76rem;
      text-transform:uppercase;
      letter-spacing:.03em;
    }

    #${GUIDE_ID} .flow {
      display:grid;
      gap:10px;
    }
    #${GUIDE_ID} .flow-row {
      display:grid;
      grid-template-columns:36px minmax(0,1fr);
      gap:11px;
      padding:13px 14px;
      border:1px solid #e2e8f0;
      border-radius:14px;
      background:#fbfcfe;
    }
    #${GUIDE_ID} .flow-n {
      width:30px;
      height:30px;
      display:grid;
      place-items:center;
      border-radius:10px;
      background:#111827;
      color:#fff;
      font-weight:900;
      font-size:.78rem;
    }
    #${GUIDE_ID} .flow-row p { margin:0;color:#445065; }

    #${GUIDE_ID} .mistake {
      padding:13px 14px;
      border-radius:14px;
      background:#fff7f7;
      border:1px solid #fecaca;
    }
    #${GUIDE_ID} .mistake + .mistake { margin-top:10px; }
    #${GUIDE_ID} .wrong { color:#b91c1c;font-weight:850; }
    #${GUIDE_ID} .right { color:#166534;font-weight:850; }

    @media (max-width:820px) {
      #${GUIDE_ID} .split,
      #${GUIDE_ID} .grid2 { grid-template-columns:1fr; }
      #${GUIDE_ID} .lane + .lane {
        border-left:0;
        border-top:1px solid #e2e8f0;
      }
    }
    @media (max-width:520px) {
      #${GUIDE_ID} .pad,
      #${GUIDE_ID} .lane {
        padding-left:18px;
        padding-right:18px;
      }
      #${GUIDE_ID} .section-head { grid-template-columns:1fr; }
    }
  `;

  const html = `
    <section class="card hero">
      <div class="pad">
        <p class="eyebrow">Главная идея</p>
        <h2>Сначала определи смысл. Потом выбирай время.</h2>
        <p class="lead">Present Simple показывает привычку, регулярность, факт, постоянную ситуацию или состояние. Present Continuous показывает процесс: действие идёт сейчас, вокруг настоящего момента или ситуация временная.</p>
      </div>
      <div class="split">
        <article class="lane">
          <span class="tag">ОБЫЧНО · ФАКТ · СОСТОЯНИЕ</span>
          <h3>Present Simple</h3>
          <span class="formula">I / you / we / they + verb<br>he / she / it + verb-s</span>
          <div class="example">
            <span class="criterion">Критерий: регулярное действие</span>
            <p class="en">My boss cycles to work every morning.</p>
            <p class="ru">Мой начальник ездит на работу на велосипеде каждое утро. → Действие регулярно повторяется.</p>
          </div>
          <div class="example">
            <span class="criterion">Критерий: мнение / состояние</span>
            <p class="en">I think English is useful.</p>
            <p class="ru">Я считаю, что английский полезен. → think = мнение, поэтому Present Simple.</p>
          </div>
        </article>

        <article class="lane">
          <span class="tag">СЕЙЧАС · ВРЕМЕННО · В ТЕКУЩИЙ ПЕРИОД</span>
          <h3>Present Continuous</h3>
          <span class="formula">subject + am / is / are + verb-ing</span>
          <div class="example">
            <span class="criterion">Критерий: действие прямо сейчас</span>
            <p class="en">We’re having a party right now.</p>
            <p class="ru">У нас сейчас вечеринка. → Процесс идёт в момент речи.</p>
          </div>
          <div class="example">
            <span class="criterion">Критерий: временная ситуация</span>
            <p class="en">I’m not eating chocolate this month.</p>
            <p class="ru">В этом месяце я временно не ем шоколад. → Это временный период, а не постоянная привычка.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="card pad">
      <div class="section-head">
        <span class="num">1</span>
        <div>
          <h2>Сравнение конструкций</h2>
          <p>Смотри одновременно на смысл и на структуру утверждения, отрицания и вопроса.</p>
        </div>
      </div>

      <div class="table-wrap">
        <table class="compare">
          <thead>
            <tr><th>Что строим</th><th>Present Simple</th><th>Present Continuous</th></tr>
          </thead>
          <tbody>
            <tr>
              <td class="row-label">Утверждение</td>
              <td><span class="code">I/you/we/they + verb<br>he/she/it + verb-s</span><p class="en">She plays tennis every Friday.</p><p class="ru">Она играет в теннис каждую пятницу. → Регулярность.</p></td>
              <td><span class="code">subject + am/is/are + verb-ing</span><p class="en">She is playing tennis now.</p><p class="ru">Она сейчас играет в теннис. → Действие идёт сейчас.</p></td>
            </tr>
            <tr>
              <td class="row-label">Отрицание</td>
              <td><span class="code">subject + don’t/doesn’t + verb</span><p class="en">She doesn’t play tennis on Mondays.</p><p class="ru">Она не играет в теннис по понедельникам.</p></td>
              <td><span class="code">subject + am not/isn’t/aren’t + verb-ing</span><p class="en">She isn’t playing tennis now.</p><p class="ru">Она сейчас не играет в теннис.</p></td>
            </tr>
            <tr>
              <td class="row-label">Общий вопрос</td>
              <td><span class="code">Do/Does + subject + verb?</span><p class="en">Does she play tennis every week?</p><p class="ru">Она играет в теннис каждую неделю?</p></td>
              <td><span class="code">Am/Is/Are + subject + verb-ing?</span><p class="en">Is she playing tennis now?</p><p class="ru">Она сейчас играет в теннис?</p></td>
            </tr>
            <tr>
              <td class="row-label">Wh-вопрос</td>
              <td><span class="code">Wh-word + do/does + subject + verb?</span><p class="en">Where does she usually play?</p><p class="ru">Где она обычно играет?</p></td>
              <td><span class="code">Wh-word + am/is/are + subject + verb-ing?</span><p class="en">What is she doing right now?</p><p class="ru">Что она делает прямо сейчас?</p></td>
            </tr>
            <tr>
              <td class="row-label">Краткий ответ</td>
              <td><span class="code">Yes, she does. / No, she doesn’t.</span></td>
              <td><span class="code">Yes, she is. / No, she isn’t.</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="note"><strong>Главное различие:</strong> в Present Simple вопрос и отрицание требуют <b>do / does</b>. После <b>does / doesn’t</b> смысловой глагол возвращается в начальную форму: <b>Does she work?</b>, не <b>Does she works?</b>. В Present Continuous вспомогательный <b>be</b> уже находится внутри конструкции: <b>am / is / are + verb-ing</b>.</p>
    </section>

    <section class="card pad">
      <div class="section-head">
        <span class="num">2</span>
        <div><h2>Present Simple: he / she / it</h2><p>Окончание смыслового глагола меняется только в утвердительной форме.</p></div>
      </div>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Конец глагола</th><th>Что делаем</th><th>Пример</th></tr></thead>
          <tbody>
            <tr><td>обычный случай</td><td>+ s</td><td>work → works, play → plays</td></tr>
            <tr><td>-s, -ss, -sh, -ch, -x, часто -o</td><td>+ es</td><td>watch → watches, go → goes</td></tr>
            <tr><td>согласная + y</td><td>y → ies</td><td>study → studies</td></tr>
            <tr><td>гласная + y</td><td>+ s</td><td>play → plays, enjoy → enjoys</td></tr>
            <tr><td>have</td><td>особая форма</td><td>have → has</td></tr>
          </tbody>
        </table>
      </div>

      <p class="note"><strong>После does / doesn’t окончания -s/-es нет:</strong> <b>She works.</b> → <b>Does she work?</b> → <b>She doesn’t work.</b><br><strong>Be — отдельный случай:</strong> I am, he/she/it is, you/we/they are. С be не используем do/does: <b>Is she tired?</b>, <b>She isn’t tired.</b></p>
    </section>

    <section class="card pad">
      <div class="section-head">
        <span class="num">3</span>
        <div><h2>Как образуется форма с -ing</h2><p>Окончание -ing добавляется не одинаково во всех случаях. Смотри на последние буквы и, у длинных глаголов, на ударение.</p></div>
      </div>

      <div class="grid2">
        <article class="rule"><h3>1. Обычный случай: + ing</h3><p>Если специальных условий нет.</p><span class="pattern">work → working<br>play → playing<br>go → going<br>study → studying</span><span class="small">Конечная y обычно не меняется.</span></article>
        <article class="rule"><h3>2. Немая -e: убираем e</h3><p>Одну конечную немую e перед -ing обычно убираем.</p><span class="pattern">make → making<br>write → writing<br>have → having</span><span class="small">Но: see → seeing, agree → agreeing — двойную ee не убираем.</span></article>
        <article class="rule"><h3>3. -ie → y + ing</h3><span class="pattern">lie → lying<br>die → dying<br>tie → tying</span></article>
        <article class="rule"><h3>4. Короткий CVC: удваиваем согласную</h3><p>Согласная + гласная + согласная.</p><span class="pattern">run → running<br>sit → sitting<br>stop → stopping</span><span class="small">w, x, y не удваиваем: snowing, fixing, playing.</span></article>
        <article class="rule"><h3>5. Две гласные перед согласной: не удваиваем</h3><span class="pattern">read → reading<br>rain → raining<br>sleep → sleeping</span></article>
        <article class="rule"><h3>6. Длинный глагол: смотри на ударение</h3><p>Последний ударный слог + CVC → обычно удваиваем.</p><span class="pattern">begin → beginning<br>prefer → preferring<br>visit → visiting<br>open → opening</span></article>
        <article class="rule"><h3>7. Конечная -l: BrE / AmE</h3><span class="pattern">BrE: travel → travelling<br>AmE: travel → traveling</span><span class="small">English File ориентирован на британский вариант, поэтому travelling — ожидаемая форма.</span></article>
        <article class="rule"><h3>8. Конечная -c: добавляем k</h3><span class="pattern">panic → panicking<br>picnic → picnicking</span></article>
      </div>
    </section>

    <section class="card pad">
      <div class="section-head">
        <span class="num">4</span>
        <div><h2>Глаголы состояния</h2><p>Они описывают не процесс, а состояние: знание, мнение, чувство, желание, принадлежность или впечатление.</p></div>
      </div>

      <div class="grid2">
        <div class="rule"><h3>Мысли и знания</h3><div class="pills"><span>believe</span><span>know</span><span>remember</span><span>understand</span><span>mean</span></div></div>
        <div class="rule"><h3>Чувства и желания</h3><div class="pills"><span>like</span><span>love</span><span>hate</span><span>want</span><span>need</span><span>prefer</span></div></div>
        <div class="rule"><h3>Принадлежность</h3><div class="pills"><span>belong</span><span>own</span><span>have = иметь</span></div></div>
        <div class="rule"><h3>Восприятие / впечатление</h3><div class="pills"><span>sound</span><span>look = выглядеть</span><span>taste = быть на вкус</span><span>smell = пахнуть</span></div></div>
      </div>

      <div class="example"><span class="criterion">Состояние / мнение</span><p class="en">I believe him.</p><p class="ru">Я ему верю. → believe описывает состояние, поэтому Present Simple, даже если это моё мнение сейчас.</p></div>
    </section>

    <section class="card pad">
      <div class="section-head">
        <span class="num">5</span>
        <div><h2>Один глагол — разные значения</h2><p>Иногда один и тот же глагол может быть состоянием или действием. Тогда выбор времени меняется.</p></div>
      </div>

      <div class="grid2">
        <article class="meaning"><h3>think</h3><div class="case"><strong>Мнение → Present Simple</strong><p class="en">Do you think English is easy?</p><p class="ru">Ты считаешь, что английский лёгкий?</p></div><div class="case"><strong>Процесс размышления → Continuous</strong><p class="en">I’m thinking about what to cook.</p><p class="ru">Я сейчас думаю, что приготовить.</p></div></article>
        <article class="meaning"><h3>have</h3><div class="case"><strong>Иметь / обладать → Present Simple</strong><p class="en">I have a car.</p><p class="ru">У меня есть машина.</p></div><div class="case"><strong>Действие → Continuous</strong><p class="en">I’m having lunch.</p><p class="ru">Я сейчас обедаю.</p></div></article>
        <article class="meaning"><h3>look</h3><div class="case"><strong>Выглядеть → Present Simple</strong><p class="en">That cake looks delicious.</p><p class="ru">Этот торт выглядит очень вкусно.</p></div><div class="case"><strong>Смотреть → Continuous</strong><p class="en">I’m looking at the cake.</p><p class="ru">Я сейчас смотрю на торт.</p></div></article>
        <article class="meaning"><h3>smell / taste</h3><div class="case"><strong>Характеристика → Present Simple</strong><p class="en">The soup tastes spicy.</p><p class="ru">Суп острый на вкус.</p></div><div class="case"><strong>Намеренное действие → Continuous</strong><p class="en">She is tasting the soup.</p><p class="ru">Она пробует суп.</p></div></article>
      </div>
    </section>

    <section class="card pad">
      <div class="section-head">
        <span class="num">6</span>
        <div><h2>Алгоритм выбора времени</h2><p>Используй его, если сомневаешься.</p></div>
      </div>

      <div class="flow">
        <div class="flow-row"><span class="flow-n">1</span><p><strong>Это состояние?</strong> know, believe, love, want, belong, sound и т. п. → обычно Present Simple.</p></div>
        <div class="flow-row"><span class="flow-n">2</span><p><strong>Это привычка, регулярное действие, факт или постоянная ситуация?</strong> → Present Simple.</p></div>
        <div class="flow-row"><span class="flow-n">3</span><p><strong>Это происходит сейчас, вокруг настоящего момента или временно?</strong> → Present Continuous.</p></div>
        <div class="flow-row"><span class="flow-n">4</span><p><strong>Построй форму.</strong> Simple: do/does в вопросах и отрицаниях. Continuous: am/is/are + verb-ing.</p></div>
      </div>
    </section>

    <section class="card pad">
      <div class="section-head">
        <span class="num">7</span>
        <div><h2>Типичные ошибки</h2><p>Важно понимать, какое правило нарушено.</p></div>
      </div>

      <div class="mistake"><span class="wrong">✗ She doesn’t works here.</span> → <span class="right">✓ She doesn’t work here.</span><p>После doesn’t глагол стоит в начальной форме.</p></div>
      <div class="mistake"><span class="wrong">✗ She playing tennis now.</span> → <span class="right">✓ She is playing tennis now.</span><p>В Present Continuous обязательно нужен am/is/are.</p></div>
      <div class="mistake"><span class="wrong">✗ I’m believing you.</span> → <span class="right">✓ I believe you.</span><p>believe — глагол состояния.</p></div>
      <div class="mistake"><span class="wrong">✗ Does she plays tennis?</span> → <span class="right">✓ Does she play tennis?</span><p>После does смысловой глагол без -s.</p></div>
      <div class="mistake"><span class="wrong">✗ He is runing.</span> → <span class="right">✓ He is running.</span><p>run — короткий CVC-глагол, последняя согласная удваивается.</p></div>
    </section>
  `;

  function ensureStyle() {
    if (document.getElementById('viktoria-textbook-grammar-style')) return;
    const style = document.createElement('style');
    style.id = 'viktoria-textbook-grammar-style';
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function hideOld(root) {
    [
      '.grammar-intro-card',
      '#grammar-at-a-glance',
      '#grammar-rule-map',
      '#grammar-tables',
      '#grammar-examples',
      '#grammar-mistakes'
    ].forEach((selector) => root.querySelector(selector)?.classList.add('grammar-bespoke-hidden'));
  }

  function apply() {
    if (new URLSearchParams(location.search).get('id') !== TOPIC_ID) return;
    const root = document.getElementById('grammar-topic-root');
    if (!root) return;
    const practice = root.querySelector('#grammar-practice-section');
    if (!practice) return;

    ensureStyle();
    hideOld(root);

    let guide = root.querySelector('#' + GUIDE_ID);
    if (!guide) {
      guide = document.createElement('div');
      guide.id = GUIDE_ID;
      practice.insertAdjacentElement('beforebegin', guide);
      guide.innerHTML = html;
    }
  }

  function start() {
    const root = document.getElementById('grammar-topic-root');
    if (!root) return;
    new MutationObserver(apply).observe(root, { childList:true, subtree:true });
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once:true });
  } else {
    start();
  }
})();
