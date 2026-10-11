/**
 * Published grammar topics for Viktoria.
 */
window.GRAMMAR_DATA = [
  {
    id: "present-simple-continuous-action-nonaction",
    order: 1,
    linkedLessonId: "lesson-2",
    title: "Present Simple и Present Continuous: глаголы действия и состояния",
    level: "A2.2",
    status: "available",
    publishedAt: "2026-10-11",
    page: "grammar-topic.html?id=present-simple-continuous-action-nonaction",
    lockOnPass: true,
    revealAnswersOnError: false,
    explanation: "Present Simple используем для привычек, регулярных действий, фактов и состояний. Present Continuous — для действий, которые происходят прямо сейчас или в текущий период, а также для временных ситуаций. Некоторые глаголы обозначают состояние, а не действие, поэтому обычно не употребляются в Continuous, даже если речь идёт о настоящем моменте.",
    formula: "привычка / факт / состояние → Present Simple · действие сейчас / временная ситуация → am / is / are + verb-ing",
    glanceCards: [
      {
        icon: "1",
        label: "Present simple",
        hint: "Привычки, факты, регулярные действия и состояния.",
        pattern: "I / you / we / they work · he / she / it works",
        example: "My boss cycles to work every morning."
      },
      {
        icon: "2",
        label: "Present continuous",
        hint: "Действие происходит сейчас, в текущий период или является временным.",
        pattern: "am / is / are + verb-ing",
        example: "We’re having a party right now."
      },
      {
        icon: "3",
        label: "Глаголы состояния",
        hint: "Глаголы believe, belong, know, love, recognize, understand и другие обычно описывают состояние, а не действие.",
        pattern: "обычно Present Simple",
        example: "I believe you. This bag doesn’t belong to me."
      },
      {
        icon: "4",
        label: "Значение может меняться",
        hint: "Некоторые глаголы в одном значении описывают состояние, а в другом — действие.",
        pattern: "think = мнение / think about = процесс размышления",
        example: "Do you think it’s easy? · I’m thinking about dinner."
      }
    ],
    miniRules: [
      {
        title: "Утвердительные предложения",
        text: "Present Simple: I work / she works. Present Continuous: I am working / she is working.",
        example: "She plays tennis every week. She’s playing tennis now."
      },
      {
        title: "Отрицательные предложения",
        text: "Present Simple: don’t / doesn’t + начальная форма глагола. Present Continuous: am not / isn’t / aren’t + verb-ing.",
        example: "He doesn’t use it every day. He isn’t using it now."
      },
      {
        title: "Вопросы",
        text: "Present Simple: Do / Does + подлежащее + начальная форма глагола? Present Continuous: Am / Is / Are + подлежащее + verb-ing?",
        example: "Do you like it? · Are you watching TV?"
      },
      {
        title: "Краткие ответы",
        text: "Present Simple: Yes, I do. / No, she doesn’t. Present Continuous: Yes, I am. / No, he isn’t.",
        example: "Are they studying? – Yes, they are."
      },
      {
        title: "Как добавить -ing",
        text: "Обычно просто добавляем -ing. Конечную -e убираем: make → making. В некоторых коротких глаголах с ударным последним слогом удваиваем конечную согласную: sit → sitting.",
        example: "cycle → cycling · have → having · run → running"
      },
      {
        title: "Частые глаголы состояния",
        text: "believe, belong, know, like, love, need, recognize, remember, understand, want, а также think в значении «считать / иметь мнение».",
        example: "I love vegetables. Do you think the fish is cooked?"
      }
    ],
    tables: [
      {
        title: "Present Simple и Present Continuous",
        headers: ["Когда используем", "Present Simple", "Present Continuous"],
        rows: [
          ["Регулярное действие", "I usually do my homework after class.", "—"],
          ["Прямо сейчас", "—", "I’m doing my homework right now."],
          ["Состояние / мнение", "I think English is useful.", "—"],
          ["Временная ситуация", "—", "I’m not eating chocolate this month."]
        ]
      }
    ],
    exampleGroups: [
      {
        title: "Глаголы действия",
        items: [
          "She plays tennis every Saturday.",
          "She’s playing tennis at the moment.",
          "He usually drives to work.",
          "He’s driving now."
        ]
      },
      {
        title: "Глаголы состояния",
        items: [
          "I believe him.",
          "This bag belongs to me.",
          "That music sounds awful.",
          "I don’t recognize that woman."
        ]
      }
    ],
    commonMistakes: [
      "Глаголы состояния обычно не употребляются в Continuous: I’m believing you ✗ → I believe you ✓.",
      "После does / doesn’t используем начальную форму глагола: She doesn’t belongs ✗ → She doesn’t belong ✓.",
      "В Present Continuous обязательно нужен глагол be: She playing tennis ✗ → She is playing tennis ✓.",
      "В вопросах Present Simple используем do / does, а в Present Continuous — am / is / are."
    ],
    exercises: [
      {
        id: "pspc-practice-1",
        title: "Выбери правильную форму",
        difficulty: "Легко",
        instructions: "Выбери правильный вариант.",
        hideAnswersOnError: true,
        items: [
          { id: "1", number: 1, input: "single", segments: ["I ", " this soup."], options: ["like", "am liking"], answer: 0 },
          { id: "2", number: 2, input: "single", segments: ["She ", " tennis right now."], options: ["plays", "is playing"], answer: 1 },
          { id: "3", number: 3, input: "single", segments: ["This bag ", " to me."], options: ["belongs", "is belonging"], answer: 0 },
          { id: "4", number: 4, input: "single", segments: ["We ", " dinner at the moment."], options: ["have", "are having"], answer: 1 }
        ]
      },
      {
        id: "pspc-practice-2",
        title: "Заполни пропуски",
        difficulty: "Средне",
        instructions: "Поставь глагол в правильную форму Present Simple или Present Continuous.",
        hideAnswersOnError: true,
        items: [
          { id: "1", number: 1, input: "gaps", segments: ["He usually ", " to work. (drive)"], answers: ["drives"] },
          { id: "2", number: 2, input: "gaps", segments: ["I ", " that woman. (not recognize)"], answers: [["don’t recognize", "don't recognize", "do not recognize"]] },
          { id: "3", number: 3, input: "gaps", segments: ["They ", " TV now. (watch)"], answers: [["are watching", "'re watching", "’re watching"]] },
          { id: "4", number: 4, input: "gaps", segments: ["She ", " well this week. (not sleep)"], answers: [["isn’t sleeping", "isn't sleeping", "is not sleeping"]] }
        ]
      },
      {
        id: "pspc-practice-3",
        title: "Выбери форму по смыслу",
        difficulty: "Сложнее",
        instructions: "Выбери вариант, который подходит по смыслу.",
        hideAnswersOnError: true,
        items: [
          { id: "1", number: 1, input: "select", prompt: "Opinion: ___ English is useful?", options: ["Do you think", "Are you thinking"], answer: 0 },
          { id: "2", number: 2, input: "select", prompt: "Activity now: I ___ about what to cook.", options: ["think", "am thinking"], answer: 1 },
          { id: "3", number: 3, input: "select", prompt: "State: That cake ___ delicious.", options: ["looks", "is looking"], answer: 0 },
          { id: "4", number: 4, input: "select", prompt: "Activity now: We ___ lunch.", options: ["have", "are having"], answer: 1 }
        ]
      },
      {
        id: "pspc-practice-4",
        title: "Составь предложение или вопрос",
        difficulty: "Самое сложное",
        instructions: "Напиши полное предложение или вопрос.",
        hideAnswersOnError: true,
        items: [
          { id: "1", number: 1, prompt: "what / you / do right now", input: "text", answer: "What are you doing right now?" },
          { id: "2", number: 2, prompt: "she / not use / the computer at the moment", input: "text", answer: "She isn’t using the computer at the moment.", acceptedAnswers: ["She isn’t using the computer at the moment.", "She isn't using the computer at the moment.", "She is not using the computer at the moment."] },
          { id: "3", number: 3, prompt: "this music / sound / awful", input: "text", answer: "This music sounds awful." },
          { id: "4", number: 4, prompt: "how often / your teacher / give / you homework", input: "text", answer: "How often does your teacher give you homework?" }
        ]
      }
    ]
  }
];

/* Viktoria HW2 UI enhancements */
(() => {
  const LESSON_ID = 'lesson-2';

  const styles = `
    /* 2a — workbook-style sound chart */
    [data-task="2a"].sound-sort-enhanced .pronunciation-sort-board {
      display: grid;
      gap: 18px;
      padding: 18px;
      border-top: 1px solid var(--border);
      background: #f8fafc;
    }
    [data-task="2a"] .sound-word-bank {
      display: flex;
      flex-wrap: wrap;
      gap: 9px;
      min-height: 62px;
      padding: 14px;
      border: 1px dashed #aebbd0;
      border-radius: 16px;
      background: #fff;
    }
    [data-task="2a"] .sound-word-bank::before {
      content: "WORDS";
      width: 100%;
      color: var(--indigo);
      font-size: .68rem;
      font-weight: 900;
      letter-spacing: .08em;
    }
    [data-task="2a"] .sound-columns {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      border: 1px solid var(--border);
      border-radius: 18px;
      overflow: hidden;
      background: #fff;
    }
    [data-task="2a"] .sound-column {
      min-width: 0;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }
    [data-task="2a"] .sound-column:nth-child(4n) { border-right: 0; }
    [data-task="2a"] .sound-column:nth-last-child(-n+4) { border-bottom: 0; }
    [data-task="2a"] .sound-column-head {
      min-height: 70px;
      display: grid;
      place-items: center;
      gap: 3px;
      padding: 10px 8px;
      background: #f1f5f9;
      text-align: center;
    }
    [data-task="2a"] .sound-column-head strong {
      font-size: 1rem;
      color: var(--dark);
    }
    [data-task="2a"] .sound-column-head span {
      color: var(--muted);
      font-size: .86rem;
      font-weight: 800;
    }
    [data-task="2a"] .sound-dropzone {
      min-height: 116px;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      gap: 8px;
      padding: 12px;
      transition: .15s ease;
    }
    [data-task="2a"] .sound-dropzone.is-over {
      background: #eef2ff;
      box-shadow: inset 0 0 0 2px rgba(79,70,229,.22);
    }
    [data-task="2a"] .sound-sort-word {
      width: auto !important;
      display: inline-flex !important;
      align-items: center;
      gap: 6px;
      padding: 9px 12px !important;
      border: 1px solid #d7deeb !important;
      border-radius: 999px !important;
      background: #fff !important;
      box-shadow: 0 3px 8px rgba(15,23,42,.05);
      cursor: grab;
      user-select: none;
    }
    [data-task="2a"] .sound-sort-word:active { cursor: grabbing; }
    [data-task="2a"] .sound-sort-word.is-picked {
      border-color: var(--indigo) !important;
      background: #eef2ff !important;
      box-shadow: 0 0 0 3px rgba(79,70,229,.10);
    }
    [data-task="2a"] .sound-sort-word.is-example-word {
      cursor: default;
      border-color: #c7d2fe !important;
      background: #eef2ff !important;
    }
    [data-task="2a"] .sound-chip-label {
      color: var(--dark);
      font-weight: 850;
      white-space: nowrap;
    }
    [data-task="2a"] .sound-chip-example {
      color: var(--indigo);
      font-size: .62rem;
      font-weight: 900;
      letter-spacing: .05em;
      text-transform: uppercase;
    }
    [data-task="2a"] .sound-sort-word .pronunciation-choice-reference,
    [data-task="2a"] .sound-sort-word .pronunciation-choice-options {
      display: none !important;
    }
    [data-task="2a"] .sound-sort-word .feedback {
      margin: 0;
      padding: 0 2px;
      font-size: .72rem;
    }
    [data-task="2a"] .sound-sort-help {
      margin: 0;
      color: var(--muted);
      font-size: .88rem;
    }

    /* 3b — correction OR tick */
    [data-task="3b"] .correction-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin-top: 10px;
    }
    [data-task="3b"] .correction-actions .text-field {
      flex: 1 1 320px;
      min-width: 0;
    }
    [data-task="3b"] .correction-tick {
      flex: 0 0 auto;
      min-height: 44px;
      padding: 9px 13px;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      background: #fff;
      color: var(--dark);
      font: inherit;
      font-weight: 800;
      cursor: pointer;
    }
    [data-task="3b"] .correction-tick:hover,
    [data-task="3b"] .correction-tick.is-active {
      border-color: #22c55e;
      background: #f0fdf4;
      color: #166534;
    }

    /* 3e — actual email sheet */
    [data-task="3e"].email-letter-enhanced .exercise-items {
      margin: 0 22px 24px;
      padding: 28px 34px 32px;
      border: 1px solid #cfd8e6;
      border-radius: 12px;
      background:
        linear-gradient(#fff, #fff) padding-box,
        linear-gradient(135deg, #eef2ff, #fff) border-box;
      box-shadow: 0 12px 28px rgba(15,23,42,.08);
      position: relative;
    }
    [data-task="3e"].email-letter-enhanced .exercise-items::before {
      content: "✉";
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      color: #64748b;
      font-size: 1.05rem;
    }
    [data-task="3e"].email-letter-enhanced .exercise-items > * {
      margin: 0;
    }
    [data-task="3e"].email-letter-enhanced .exercise-display-copy {
      padding: 12px 0 8px;
      border-left: 0;
      color: var(--dark);
      font-size: 1rem;
      line-height: 1.5;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item] {
      padding: 4px 0;
      border: 0;
      background: transparent;
      box-shadow: none;
    }
    [data-task="3e"].email-letter-enhanced .exercise-item-header {
      display: inline-flex;
      width: auto;
      margin: 0;
      align-items: center;
      gap: 10px;
    }
    [data-task="3e"].email-letter-enhanced .exercise-item-header .exercise-number,
    [data-task="3e"].email-letter-enhanced .feedback {
      display: none !important;
    }
    [data-task="3e"].email-letter-enhanced .exercise-control {
      padding: 0;
    }
    [data-task="3e"].email-letter-enhanced .text-field {
      width: 100%;
      min-height: 42px;
      padding: 8px 2px 5px;
      border: 0;
      border-bottom: 1.5px solid #aeb9c9;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
    }
    [data-task="3e"].email-letter-enhanced .text-field:focus {
      border-bottom-color: var(--indigo);
      box-shadow: none;
      outline: none;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="greeting"] {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      gap: 8px;
      margin-top: 18px;
      margin-bottom: 10px;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="greeting"] .exercise-item-header {
      flex: 0 0 auto;
      align-self: flex-end;
      margin: 0;
      padding: 0 0 7px;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="greeting"] .exercise-control {
      flex: 0 1 220px;
      display: flex;
      align-items: flex-end;
      gap: 2px;
      padding: 0;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="greeting"] .exercise-control .text-field {
      width: 100%;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="greeting"] .exercise-control::after {
      content: ",";
      margin-left: 2px;
      padding-bottom: 7px;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item^="line-"] {
      margin: 2px 0;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="signature"] {
      width: min(240px, 70%);
      margin-top: 0;
    }

    @media (max-width: 760px) {
      [data-task="2a"] .sound-columns { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      [data-task="2a"] .sound-column:nth-child(odd) { border-right: 1px solid var(--border); }
      [data-task="2a"] .sound-column:nth-child(even) { border-right: 0; }
      [data-task="2a"] .sound-column:nth-last-child(-n+4) { border-bottom: 1px solid var(--border); }
      [data-task="2a"] .sound-column:nth-last-child(-n+2) { border-bottom: 0; }
      [data-task="3e"].email-letter-enhanced .exercise-items {
        margin-inline: 12px;
        padding: 24px 18px 28px;
      }
    }
    @media (max-width: 460px) {
      [data-task="2a"] .sound-columns { grid-template-columns: 1fr; }
      [data-task="2a"] .sound-column { border-right: 0 !important; border-bottom: 1px solid var(--border) !important; }
      [data-task="2a"] .sound-column:last-child { border-bottom: 0 !important; }
      [data-task="2a"] .sound-dropzone { min-height: 88px; }
      [data-task="3b"] .correction-tick { width: 100%; }
    }
  `;

  const ensureStyles = () => {
    if (document.getElementById('viktoria-hw2-enhancement-styles')) return;
    const style = document.createElement('style');
    style.id = 'viktoria-hw2-enhancement-styles';
    style.textContent = styles;
    document.head.appendChild(style);
  };

  const dispatchEdit = (input) => {
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const enhanceSoundSort = (exercise) => {
    if (!exercise || exercise.dataset.soundSortEnhanced === 'true') return;
    const table = exercise.querySelector('.pronunciation-choice-table');
    if (!table) return;

    const rows = [...table.querySelectorAll('.pronunciation-choice-row')];
    if (rows.length < 2) return;

    const firstInteractive = rows.find((row) => row.querySelector('input[type="radio"]'));
    if (!firstInteractive) return;
    const optionLabels = [...firstInteractive.querySelectorAll('.pronunciation-table-choice span')].map((span) => span.textContent.trim());
    if (optionLabels.length !== 8) return;

    exercise.dataset.soundSortEnhanced = 'true';
    exercise.classList.add('sound-sort-enhanced');

    const board = document.createElement('div');
    board.className = 'pronunciation-sort-board';

    const help = document.createElement('p');
    help.className = 'sound-sort-help';
    help.textContent = 'Drag each word into a column. On a phone or tablet, tap a word and then tap the column.';
    board.appendChild(help);

    const bank = document.createElement('div');
    bank.className = 'sound-word-bank';
    bank.setAttribute('aria-label', 'Words to sort');
    board.appendChild(bank);

    const columns = document.createElement('div');
    columns.className = 'sound-columns';

    const splitLabel = (label) => {
      const match = label.match(/^(.*?)\s+(\/.*\/)$/);
      return match ? [match[1], match[2]] : [label, ''];
    };

    const dropzones = optionLabels.map((label, index) => {
      const [word, ipa] = splitLabel(label);
      const column = document.createElement('section');
      column.className = 'sound-column';
      column.dataset.soundIndex = String(index);
      column.innerHTML = `<div class="sound-column-head"><strong>${word}</strong><span>${ipa}</span></div><div class="sound-dropzone" data-sound-dropzone="${index}"></div>`;
      columns.appendChild(column);
      return column.querySelector('.sound-dropzone');
    });
    board.appendChild(columns);

    let picked = null;
    const setPicked = (row) => {
      if (picked && picked !== row) picked.classList.remove('is-picked');
      picked = row;
      if (picked) picked.classList.add('is-picked');
    };

    const place = (row, index, notify = true) => {
      if (!row || row.classList.contains('is-example-word')) return;
      const radio = row.querySelector(`input[type="radio"][value="${index}"]`);
      if (!radio) return;
      radio.checked = true;
      dropzones[index].appendChild(row);
      row.dataset.soundSelected = String(index);
      setPicked(null);
      if (notify) dispatchEdit(radio);
    };

    const clearPlacement = (row, notify = true) => {
      if (!row || row.classList.contains('is-example-word')) return;
      const radios = [...row.querySelectorAll('input[type="radio"]')];
      radios.forEach((radio) => { radio.checked = false; });
      bank.appendChild(row);
      delete row.dataset.soundSelected;
      setPicked(null);
      if (notify && radios[0]) dispatchEdit(radios[0]);
    };

    dropzones.forEach((zone, index) => {
      zone.addEventListener('dragover', (event) => {
        event.preventDefault();
        zone.classList.add('is-over');
      });
      zone.addEventListener('dragleave', () => zone.classList.remove('is-over'));
      zone.addEventListener('drop', (event) => {
        event.preventDefault();
        zone.classList.remove('is-over');
        if (picked) place(picked, index);
      });
      zone.addEventListener('click', (event) => {
        if (event.target.closest('.sound-sort-word')) return;
        if (picked) place(picked, index);
      });
    });

    bank.addEventListener('dragover', (event) => event.preventDefault());
    bank.addEventListener('drop', (event) => {
      event.preventDefault();
      if (picked) clearPlacement(picked);
    });

    rows.forEach((row, rowIndex) => {
      const reference = row.querySelector('.pronunciation-choice-reference strong')?.textContent.trim() || '';
      const label = document.createElement('span');
      label.className = 'sound-chip-label';
      label.textContent = reference;

      if (row.classList.contains('exercise-example')) {
        row.classList.add('sound-sort-word', 'is-example-word');
        row.removeAttribute('role');
        row.appendChild(label);
        const badge = document.createElement('span');
        badge.className = 'sound-chip-example';
        badge.textContent = 'example';
        row.appendChild(badge);
        dropzones[1].appendChild(row); // beef → tree /iː/
        return;
      }

      row.classList.add('sound-sort-word');
      row.draggable = true;
      row.removeAttribute('role');
      row.appendChild(label);

      row.addEventListener('dragstart', (event) => {
        setPicked(row);
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', reference);
      });
      row.addEventListener('dragend', () => setPicked(null));
      row.addEventListener('click', (event) => {
        if (event.target.closest('input, label')) return;
        setPicked(picked === row ? null : row);
      });

      const checked = row.querySelector('input[type="radio"]:checked');
      if (checked) {
        const index = Number(checked.value);
        if (Number.isInteger(index) && dropzones[index]) dropzones[index].appendChild(row);
        else bank.appendChild(row);
      } else {
        bank.appendChild(row);
      }
    });

    table.replaceWith(board);
  };

  const enhanceCorrections = (exercise) => {
    if (!exercise || exercise.dataset.correctionEnhanced === 'true') return;
    exercise.dataset.correctionEnhanced = 'true';

    exercise.querySelectorAll('[data-exercise-item]').forEach((item) => {
      if (item.classList.contains('exercise-example')) return;
      const input = item.querySelector('input.text-field');
      if (!input) return;

      input.placeholder = 'Correct the highlighted phrase, or tick if the sentence is correct';

      const currentControl = input.closest('.exercise-control') || input.parentElement;
      const actions = document.createElement('div');
      actions.className = 'correction-actions';
      input.parentNode.insertBefore(actions, input);
      actions.appendChild(input);

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'correction-tick';
      button.innerHTML = '✓ Sentence is correct';
      actions.appendChild(button);

      const refresh = () => button.classList.toggle('is-active', input.value.trim() === '✓');
      button.addEventListener('click', () => {
        input.value = '✓';
        refresh();
        dispatchEdit(input);
      });
      input.addEventListener('input', refresh);
      refresh();
    });
  };

  const enhanceEmail = (exercise) => {
    if (!exercise || exercise.dataset.emailEnhanced === 'true') return;
    exercise.dataset.emailEnhanced = 'true';
    exercise.classList.add('email-letter-enhanced');

    const greeting = exercise.querySelector('[data-exercise-item="greeting"]');
    if (greeting) {
      const control = greeting.querySelector('.exercise-control');
      if (control && !control.querySelector('.email-comma')) {
        const comma = document.createElement('span');
        comma.className = 'email-comma';
        comma.textContent = ',';
        control.appendChild(comma);
      }
    }
  };

  const apply = () => {
    const lessonId = new URLSearchParams(location.search).get('id');
    if (lessonId !== LESSON_ID) return;
    const root = document.getElementById('lesson-root');
    if (!root) return;
    ensureStyles();
    enhanceSoundSort(root.querySelector('[data-task="2a"]'));
    enhanceCorrections(root.querySelector('[data-task="3b"]'));
    enhanceEmail(root.querySelector('[data-task="3e"]'));
  };

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('lesson-root');
    if (!root) return;
    new MutationObserver(apply).observe(root, { childList: true, subtree: true });
    apply();
  });
})();

/* Viktoria grammar topic bespoke guide */
(() => {
  const TOPIC_ID = 'present-simple-continuous-action-nonaction';

  const styles = `
    .grammar-bespoke-hidden { display: none !important; }

    .v-grammar-guide {
      display: grid;
      gap: 28px;
      margin-bottom: 34px;
    }
    .v-grammar-guide * { box-sizing: border-box; }

    .v-grammar-hero {
      overflow: hidden;
      border: 1px solid #d9e1ee;
      border-radius: 26px;
      background:
        radial-gradient(circle at 92% 10%, rgba(99,102,241,.14), transparent 28%),
        linear-gradient(135deg, #ffffff 0%, #f7f8ff 52%, #f8fafc 100%);
      box-shadow: 0 18px 45px rgba(15,23,42,.07);
    }
    .v-grammar-hero-top {
      padding: 28px 30px 22px;
      border-bottom: 1px solid #e2e8f0;
    }
    .v-grammar-kicker {
      margin: 0 0 8px;
      color: #4f46e5;
      font-size: .72rem;
      font-weight: 900;
      letter-spacing: .09em;
      text-transform: uppercase;
    }
    .v-grammar-hero h2 {
      margin: 0;
      max-width: 800px;
      color: #111827;
      font-size: clamp(1.7rem, 3vw, 2.6rem);
      line-height: 1.08;
    }
    .v-grammar-hero-top > p:last-child {
      max-width: 820px;
      margin: 13px 0 0;
      color: #526077;
      line-height: 1.65;
    }

    .v-tense-lanes {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
    }
    .v-tense-lane {
      min-width: 0;
      padding: 26px 30px 30px;
    }
    .v-tense-lane + .v-tense-lane {
      border-left: 1px solid #e2e8f0;
      background: rgba(238,242,255,.46);
    }
    .v-tense-tag {
      display: inline-flex;
      align-items: center;
      min-height: 28px;
      margin-bottom: 11px;
      padding: 4px 10px;
      border-radius: 999px;
      background: #eef2ff;
      color: #4338ca;
      font-size: .7rem;
      font-weight: 900;
      letter-spacing: .04em;
    }
    .v-tense-lane:nth-child(2) .v-tense-tag {
      background: #ede9fe;
      color: #6d28d9;
    }
    .v-tense-lane h3 {
      margin: 0 0 6px;
      color: #0f172a;
      font-size: 1.35rem;
    }
    .v-tense-formula {
      margin: 0 0 18px;
      color: #64748b;
      font-weight: 800;
    }
    .v-criterion-list {
      display: grid;
      gap: 12px;
    }
    .v-criterion {
      padding: 14px 15px;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      background: #fff;
    }
    .v-criterion-label {
      display: block;
      margin-bottom: 7px;
      color: #475569;
      font-size: .72rem;
      font-weight: 900;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .v-example-en {
      margin: 0;
      color: #111827;
      font-weight: 850;
      line-height: 1.48;
    }
    .v-example-ru {
      margin: 4px 0 0;
      color: #64748b;
      line-height: 1.48;
    }

    .v-grammar-section {
      padding: 27px 28px 30px;
      border: 1px solid #dbe3ef;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 12px 30px rgba(15,23,42,.045);
    }
    .v-grammar-section-head {
      display: grid;
      grid-template-columns: auto minmax(0,1fr);
      gap: 14px;
      align-items: start;
      margin-bottom: 22px;
    }
    .v-grammar-number {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 13px;
      background: #111827;
      color: #fff;
      font-weight: 900;
    }
    .v-grammar-section h2 {
      margin: 0;
      color: #111827;
      font-size: clamp(1.4rem, 2.3vw, 1.9rem);
    }
    .v-grammar-section-head p {
      margin: 5px 0 0;
      color: #64748b;
      line-height: 1.55;
    }

    .v-compare-wrap {
      overflow-x: auto;
      margin-top: 4px;
      padding-bottom: 4px;
    }
    .v-compare-table {
      width: 100%;
      min-width: 760px;
      border-collapse: separate;
      border-spacing: 0;
      overflow: hidden;
      border: 1px solid #dbe3ef;
      border-radius: 18px;
      background: #fff;
    }
    .v-compare-table th,
    .v-compare-table td {
      padding: 15px 16px;
      vertical-align: top;
      border-right: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
    }
    .v-compare-table th:last-child,
    .v-compare-table td:last-child { border-right: 0; }
    .v-compare-table tr:last-child td { border-bottom: 0; }
    .v-compare-table thead th {
      background: #111827;
      color: #fff;
      font-size: .92rem;
    }
    .v-compare-table thead th:nth-child(2) { background: #3730a3; }
    .v-compare-table thead th:nth-child(3) { background: #6d28d9; }
    .v-compare-label {
      width: 22%;
      min-width: 150px;
      background: #f8fafc;
      color: #334155;
      font-size: .78rem;
      font-weight: 900;
      letter-spacing: .02em;
    }
    .v-formula {
      display: inline-block;
      margin-bottom: 8px;
      padding: 6px 9px;
      border-radius: 9px;
      background: #eef2ff;
      color: #3730a3;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: .86rem;
      font-weight: 900;
      line-height: 1.45;
    }
    .v-compare-table td:nth-child(3) .v-formula {
      background: #f3e8ff;
      color: #6d28d9;
    }
    .v-compare-example {
      margin: 0;
      color: #111827;
      font-weight: 800;
      line-height: 1.45;
    }
    .v-compare-translation {
      margin: 4px 0 0;
      color: #64748b;
      font-size: .9rem;
      line-height: 1.45;
    }
    .v-compare-note {
      margin: 14px 0 0;
      padding: 13px 15px;
      border-radius: 14px;
      background: #f8fafc;
      color: #475569;
      line-height: 1.55;
    }
    .v-compare-note strong { color: #111827; }

    .v-state-groups {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 14px;
    }
    .v-state-group {
      padding: 16px;
      border-radius: 17px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
    }
    .v-state-group strong {
      display: block;
      margin-bottom: 8px;
      color: #334155;
    }
    .v-state-words {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }
    .v-state-words span {
      padding: 6px 9px;
      border-radius: 999px;
      background: #fff;
      border: 1px solid #dbe3ef;
      color: #1e293b;
      font-size: .9rem;
      font-weight: 750;
    }
    .v-state-note {
      margin: 16px 0 0;
      padding: 14px 16px;
      border-left: 4px solid #6366f1;
      border-radius: 0 14px 14px 0;
      background: #f5f7ff;
      color: #374151;
      line-height: 1.6;
    }

    .v-ing-board {
      display: grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap: 14px;
    }
    .v-ing-rule {
      position: relative;
      overflow: hidden;
      padding: 18px;
      border: 1px solid #dfe6f0;
      border-radius: 18px;
      background: #fbfcfe;
    }
    .v-ing-rule::before {
      content: attr(data-rule);
      position: absolute;
      right: 12px;
      top: 10px;
      color: #cbd5e1;
      font-size: 1.55rem;
      font-weight: 950;
    }
    .v-ing-rule h3 {
      margin: 0 44px 8px 0;
      color: #111827;
      font-size: 1rem;
    }
    .v-ing-rule p {
      margin: 0;
      color: #566176;
      line-height: 1.55;
    }
    .v-ing-pattern {
      display: block;
      margin-top: 12px;
      padding: 10px 12px;
      border-radius: 12px;
      background: #fff;
      color: #312e81;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-weight: 850;
      line-height: 1.45;
    }
    .v-ing-rule em {
      display: block;
      margin-top: 9px;
      color: #7c3aed;
      font-style: normal;
      font-size: .86rem;
      font-weight: 750;
    }
    .v-ing-structure {
      display: inline-flex;
      gap: 4px;
      margin-top: 8px;
      font-size: .76rem;
      font-weight: 900;
    }
    .v-ing-structure span {
      padding: 4px 7px;
      border-radius: 8px;
      background: #eef2ff;
      color: #4338ca;
    }

    .v-meaning-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 14px;
    }
    .v-meaning-card {
      padding: 18px;
      border: 1px solid #e2e8f0;
      border-radius: 18px;
      background: linear-gradient(180deg,#fff,#f8fafc);
    }
    .v-meaning-card h3 {
      margin: 0 0 12px;
      color: #111827;
    }
    .v-meaning-pair {
      display: grid;
      gap: 11px;
    }
    .v-meaning-case {
      padding-top: 11px;
      border-top: 1px solid #e2e8f0;
    }
    .v-meaning-case:first-child {
      padding-top: 0;
      border-top: 0;
    }
    .v-meaning-case strong {
      display: block;
      margin-bottom: 5px;
      color: #475569;
      font-size: .78rem;
    }

    @media (max-width: 820px) {
      .v-tense-lanes,
      .v-state-groups,
      .v-ing-board,
      .v-meaning-grid {
        grid-template-columns: 1fr;
      }
      .v-tense-lane + .v-tense-lane {
        border-left: 0;
        border-top: 1px solid #e2e8f0;
      }
    }
    @media (max-width: 520px) {
      .v-grammar-hero-top,
      .v-tense-lane,
      .v-grammar-section {
        padding-left: 18px;
        padding-right: 18px;
      }
      .v-grammar-section-head {
        grid-template-columns: 1fr;
      }
    }
  `;

  const guideHtml = `
    <div class="v-grammar-guide" id="viktoria-grammar-guide">
      <section class="v-grammar-hero">
        <div class="v-grammar-hero-top">
          <p class="v-grammar-kicker">Сначала выбери смысл, потом форму</p>
          <h2>Present Simple или Present Continuous?</h2>
          <p>Не начинай с окончания глагола. Сначала определи, что ты хочешь сказать: это обычное/постоянное или происходит сейчас/временно?</p>
        </div>

        <div class="v-tense-lanes">
          <article class="v-tense-lane">
            <span class="v-tense-tag">ОБЫЧНО · ВСЕГДА · ФАКТ · СОСТОЯНИЕ</span>
            <h3>Present Simple</h3>
            <p class="v-tense-formula">do / does · verb / verb-s</p>
            <div class="v-criterion-list">
              <div class="v-criterion">
                <span class="v-criterion-label">Критерий: регулярное действие</span>
                <p class="v-example-en">My boss cycles to work every morning.</p>
                <p class="v-example-ru">Мой начальник ездит на работу на велосипеде каждое утро.</p>
              </div>
              <div class="v-criterion">
                <span class="v-criterion-label">Критерий: мнение / состояние</span>
                <p class="v-example-en">I think English is useful.</p>
                <p class="v-example-ru">Я считаю, что английский полезен.</p>
              </div>
            </div>
          </article>

          <article class="v-tense-lane">
            <span class="v-tense-tag">СЕЙЧАС · В ЭТОТ ПЕРИОД · ВРЕМЕННО</span>
            <h3>Present Continuous</h3>
            <p class="v-tense-formula">am / is / are + verb-ing</p>
            <div class="v-criterion-list">
              <div class="v-criterion">
                <span class="v-criterion-label">Критерий: действие прямо сейчас</span>
                <p class="v-example-en">We’re having a party right now.</p>
                <p class="v-example-ru">У нас сейчас вечеринка.</p>
              </div>
              <div class="v-criterion">
                <span class="v-criterion-label">Критерий: временная ситуация</span>
                <p class="v-example-en">I’m not eating chocolate this month.</p>
                <p class="v-example-ru">В этом месяце я временно не ем шоколад.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="v-grammar-section">
        <div class="v-grammar-section-head">
          <span class="v-grammar-number">1</span>
          <div>
            <h2>Сравнение Present Simple и Present Continuous</h2>
            <p>Эта таблица показывает не только, когда использовать каждое время, но и как построить утверждение, отрицание и вопрос.</p>
          </div>
        </div>

        <div class="v-compare-wrap">
          <table class="v-compare-table">
            <thead>
              <tr>
                <th>Что строим</th>
                <th>Present Simple</th>
                <th>Present Continuous</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="v-compare-label">Когда используем</td>
                <td>
                  <span class="v-formula">обычно · регулярно · факт · состояние</span>
                  <p class="v-compare-example">I work every day.</p>
                  <p class="v-compare-translation">Я работаю каждый день.</p>
                </td>
                <td>
                  <span class="v-formula">сейчас · в текущий период · временно</span>
                  <p class="v-compare-example">I’m working now.</p>
                  <p class="v-compare-translation">Я сейчас работаю.</p>
                </td>
              </tr>

              <tr>
                <td class="v-compare-label">Утверждение</td>
                <td>
                  <span class="v-formula">I / you / we / they + verb<br>he / she / it + verb-s</span>
                  <p class="v-compare-example">She plays tennis every Friday.</p>
                  <p class="v-compare-translation">Она играет в теннис каждую пятницу.</p>
                </td>
                <td>
                  <span class="v-formula">subject + am / is / are + verb-ing</span>
                  <p class="v-compare-example">She is playing tennis now.</p>
                  <p class="v-compare-translation">Она сейчас играет в теннис.</p>
                </td>
              </tr>

              <tr>
                <td class="v-compare-label">Отрицание</td>
                <td>
                  <span class="v-formula">I / you / we / they + don’t + verb<br>he / she / it + doesn’t + verb</span>
                  <p class="v-compare-example">She doesn’t play tennis on Mondays.</p>
                  <p class="v-compare-translation">Она не играет в теннис по понедельникам.</p>
                </td>
                <td>
                  <span class="v-formula">subject + am not / isn’t / aren’t + verb-ing</span>
                  <p class="v-compare-example">She isn’t playing tennis now.</p>
                  <p class="v-compare-translation">Она сейчас не играет в теннис.</p>
                </td>
              </tr>

              <tr>
                <td class="v-compare-label">Общий вопрос</td>
                <td>
                  <span class="v-formula">Do / Does + subject + verb?</span>
                  <p class="v-compare-example">Does she play tennis every week?</p>
                  <p class="v-compare-translation">Она играет в теннис каждую неделю?</p>
                </td>
                <td>
                  <span class="v-formula">Am / Is / Are + subject + verb-ing?</span>
                  <p class="v-compare-example">Is she playing tennis now?</p>
                  <p class="v-compare-translation">Она сейчас играет в теннис?</p>
                </td>
              </tr>

              <tr>
                <td class="v-compare-label">Wh-вопрос</td>
                <td>
                  <span class="v-formula">Wh-word + do / does + subject + verb?</span>
                  <p class="v-compare-example">Where does she usually play tennis?</p>
                  <p class="v-compare-translation">Где она обычно играет в теннис?</p>
                </td>
                <td>
                  <span class="v-formula">Wh-word + am / is / are + subject + verb-ing?</span>
                  <p class="v-compare-example">What is she doing right now?</p>
                  <p class="v-compare-translation">Что она делает прямо сейчас?</p>
                </td>
              </tr>

              <tr>
                <td class="v-compare-label">Краткий ответ</td>
                <td>
                  <span class="v-formula">Yes, she does. / No, she doesn’t.</span>
                  <p class="v-compare-translation">В ответе повторяем do / does.</p>
                </td>
                <td>
                  <span class="v-formula">Yes, she is. / No, she isn’t.</span>
                  <p class="v-compare-translation">В ответе повторяем am / is / are.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="v-compare-note"><strong>Главное различие:</strong> в Present Simple для вопросов и отрицаний нужен помощник <b>do / does</b>, а в Present Continuous глагол <b>be</b> уже находится внутри конструкции: <b>am / is / are + verb-ing</b>.</p>
      </section>

      <section class="v-grammar-section">
        <div class="v-grammar-section-head">
          <span class="v-grammar-number">2</span>
          <div>
            <h2>Глаголы состояния: почему они обычно не идут в Continuous</h2>
            <p>Они описывают не действие в процессе, а мнение, чувство, принадлежность, знание или восприятие.</p>
          </div>
        </div>

        <div class="v-state-groups">
          <div class="v-state-group">
            <strong>Мысли и знания</strong>
            <div class="v-state-words"><span>believe</span><span>know</span><span>remember</span><span>understand</span><span>think = считать</span></div>
          </div>
          <div class="v-state-group">
            <strong>Чувства и желания</strong>
            <div class="v-state-words"><span>like</span><span>love</span><span>want</span><span>need</span></div>
          </div>
          <div class="v-state-group">
            <strong>Принадлежность</strong>
            <div class="v-state-words"><span>belong</span><span>have = иметь</span></div>
          </div>
          <div class="v-state-group">
            <strong>Восприятие</strong>
            <div class="v-state-words"><span>recognize</span><span>sound</span><span>look = выглядеть</span></div>
          </div>
        </div>

        <div class="v-state-note">
          <strong>Пример:</strong> I believe him. — Я ему верю. Здесь <b>believe</b> — состояние/мнение, поэтому нужен Present Simple, даже если речь идёт о том, что я думаю сейчас.
        </div>
      </section>

      <section class="v-grammar-section">
        <div class="v-grammar-section-head">
          <span class="v-grammar-number">3</span>
          <div>
            <h2>Как образуется форма с -ing</h2>
            <p>Окончание не всегда просто добавляется. Смотри на последние буквы глагола и на ударение.</p>
          </div>
        </div>

        <div class="v-ing-board">
          <article class="v-ing-rule" data-rule="01">
            <h3>Обычный случай: просто + ing</h3>
            <p>Если специальных условий нет, добавляем <b>-ing</b>.</p>
            <span class="v-ing-pattern">work → working<br>play → playing<br>go → going</span>
            <em>Конечная y обычно не меняется: study → studying.</em>
          </article>

          <article class="v-ing-rule" data-rule="02">
            <h3>Немая -e в конце: убираем e</h3>
            <p>Если глагол заканчивается на одну немую <b>-e</b>, она исчезает перед <b>-ing</b>.</p>
            <span class="v-ing-pattern">make → making<br>write → writing<br>have → having</span>
            <em>Но двойную ee не убираем: see → seeing, agree → agreeing.</em>
          </article>

          <article class="v-ing-rule" data-rule="03">
            <h3>-ie в конце: ie → y + ing</h3>
            <p>Сочетание <b>-ie</b> меняется на <b>y</b>, затем добавляется -ing.</p>
            <span class="v-ing-pattern">lie → lying<br>die → dying<br>tie → tying</span>
          </article>

          <article class="v-ing-rule" data-rule="04">
            <h3>Короткий ударный CVC: удваиваем согласную</h3>
            <p>Если короткий глагол заканчивается по модели <b>согласная + гласная + согласная</b>, последнюю согласную обычно удваиваем.</p>
            <div class="v-ing-structure"><span>C</span><span>V</span><span>C</span></div>
            <span class="v-ing-pattern">run → running<br>sit → sitting<br>stop → stopping</span>
          </article>

          <article class="v-ing-rule" data-rule="05">
            <h3>w, x, y обычно не удваиваются</h3>
            <p>Даже если конец похож на CVC, буквы <b>w, x, y</b> в этой позиции не удваиваем.</p>
            <span class="v-ing-pattern">snow → snowing<br>fix → fixing<br>play → playing</span>
          </article>

          <article class="v-ing-rule" data-rule="06">
            <h3>Длинный глагол: смотри на ударение</h3>
            <p>Если последний слог ударный и конец CVC, согласную удваиваем. Если ударение не на последнем слоге — обычно нет.</p>
            <span class="v-ing-pattern">begin → beginning<br>prefer → preferring<br>visit → visiting<br>open → opening</span>
            <em>В British English: travel → travelling. В American English чаще traveling.</em>
          </article>
        </div>
      </section>

      <section class="v-grammar-section">
        <div class="v-grammar-section-head">
          <span class="v-grammar-number">4</span>
          <div>
            <h2>Один глагол, два значения</h2>
            <p>Иногда выбор времени зависит не от самого глагола, а от его значения в конкретном предложении.</p>
          </div>
        </div>

        <div class="v-meaning-grid">
          <article class="v-meaning-card">
            <h3>think</h3>
            <div class="v-meaning-pair">
              <div class="v-meaning-case">
                <strong>Мнение → Present Simple</strong>
                <p class="v-example-en">Do you think English is easy?</p>
                <p class="v-example-ru">Ты считаешь, что английский лёгкий?</p>
              </div>
              <div class="v-meaning-case">
                <strong>Процесс размышления → Continuous</strong>
                <p class="v-example-en">I’m thinking about what to cook.</p>
                <p class="v-example-ru">Я сейчас думаю, что приготовить.</p>
              </div>
            </div>
          </article>

          <article class="v-meaning-card">
            <h3>have</h3>
            <div class="v-meaning-pair">
              <div class="v-meaning-case">
                <strong>Иметь / обладать → Present Simple</strong>
                <p class="v-example-en">I have a car.</p>
                <p class="v-example-ru">У меня есть машина.</p>
              </div>
              <div class="v-meaning-case">
                <strong>Действие → Continuous</strong>
                <p class="v-example-en">I’m having lunch right now.</p>
                <p class="v-example-ru">Я сейчас обедаю.</p>
              </div>
            </div>
          </article>

          <article class="v-meaning-card">
            <h3>look</h3>
            <div class="v-meaning-pair">
              <div class="v-meaning-case">
                <strong>Выглядеть → Present Simple</strong>
                <p class="v-example-en">That cake looks delicious.</p>
                <p class="v-example-ru">Этот торт выглядит очень вкусно.</p>
              </div>
              <div class="v-meaning-case">
                <strong>Смотреть → действие</strong>
                <p class="v-example-en">I’m looking at the cake.</p>
                <p class="v-example-ru">Я сейчас смотрю на торт.</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  `;

  const ensureStyle = () => {
    if (document.getElementById('viktoria-grammar-guide-styles')) return;
    const style = document.createElement('style');
    style.id = 'viktoria-grammar-guide-styles';
    style.textContent = styles;
    document.head.appendChild(style);
  };

  const apply = () => {
    if (new URLSearchParams(location.search).get('id') !== TOPIC_ID) return;
    const root = document.getElementById('grammar-topic-root');
    if (!root || root.dataset.bespokeGrammarApplied === 'true') return;
    const practice = root.querySelector('#grammar-practice-section');
    if (!practice) return;

    root.dataset.bespokeGrammarApplied = 'true';
    ensureStyle();

    [
      '.grammar-intro-card',
      '#grammar-at-a-glance',
      '#grammar-rule-map',
      '#grammar-tables',
      '#grammar-examples',
      '#grammar-mistakes'
    ].forEach((selector) => root.querySelector(selector)?.classList.add('grammar-bespoke-hidden'));

    practice.insertAdjacentHTML('beforebegin', guideHtml);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('grammar-topic-root');
    if (!root) return;
    new MutationObserver(apply).observe(root, { childList: true, subtree: true });
    apply();
  });
})();
