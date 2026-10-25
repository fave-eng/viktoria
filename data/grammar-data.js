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
        hint: "Routines, facts, repeated actions, and states.",
        pattern: "I / you / we / they work · he / she / it works",
        example: "My boss cycles to work every morning."
      },
      {
        icon: "2",
        label: "Present continuous",
        hint: "Something happening now, around now, or temporarily.",
        pattern: "am / is / are + verb-ing",
        example: "We’re having a party right now."
      },
      {
        icon: "3",
        label: "Non-action verbs",
        hint: "Verbs such as believe, belong, know, love, recognize, and understand usually describe states.",
        pattern: "usually present simple",
        example: "I believe you. This bag doesn’t belong to me."
      },
      {
        icon: "4",
        label: "Meaning can change",
        hint: "Some verbs can be stative in one meaning and active in another.",
        pattern: "think = opinion / think about = activity",
        example: "Do you think it’s easy? · I’m thinking about dinner."
      }
    ],
    miniRules: [
      {
        title: "Affirmative",
        text: "Present simple: I work / she works. Present continuous: I am working / she is working.",
        example: "She plays tennis every week. She’s playing tennis now."
      },
      {
        title: "Negative",
        text: "Present simple: don’t / doesn’t + base verb. Present continuous: am not / isn’t / aren’t + verb-ing.",
        example: "He doesn’t use it every day. He isn’t using it now."
      },
      {
        title: "Questions",
        text: "Present simple: Do / Does + subject + base verb? Present continuous: Am / Is / Are + subject + verb-ing?",
        example: "Do you like it? · Are you watching TV?"
      },
      {
        title: "Short answers",
        text: "Present simple: Yes, I do. / No, she doesn’t. Present continuous: Yes, I am. / No, he isn’t.",
        example: "Are they studying? – Yes, they are."
      },
      {
        title: "Spelling with -ing",
        text: "Usually add -ing. Drop final -e: make → making. Double the final consonant in some short stressed verbs: sit → sitting.",
        example: "cycle → cycling · have → having · run → running"
      },
      {
        title: "Common non-action verbs",
        text: "believe, belong, know, like, love, need, recognize, remember, understand, want, and think when it means ‘have an opinion’.",
        example: "I love vegetables. Do you think the fish is cooked?"
      }
    ],
    tables: [
      {
        title: "Present simple vs present continuous",
        headers: ["Use", "Present simple", "Present continuous"],
        rows: [
          ["Routine", "I usually do my homework after class.", "—"],
          ["Now", "—", "I’m doing my homework right now."],
          ["State / opinion", "I think English is useful.", "—"],
          ["Temporary situation", "—", "I’m not eating chocolate this month."]
        ]
      }
    ],
    exampleGroups: [
      {
        title: "Action verbs",
        items: [
          "She plays tennis every Saturday.",
          "She’s playing tennis at the moment.",
          "He usually drives to work.",
          "He’s driving now."
        ]
      },
      {
        title: "Non-action verbs",
        items: [
          "I believe him.",
          "This bag belongs to me.",
          "That music sounds awful.",
          "I don’t recognize that woman."
        ]
      }
    ],
    commonMistakes: [
      "Don’t normally use a non-action verb in the continuous: I’m believing you ✗ → I believe you ✓.",
      "After does / doesn’t, use the base verb: She doesn’t belongs ✗ → She doesn’t belong ✓.",
      "Present continuous needs be: She playing tennis ✗ → She is playing tennis ✓.",
      "Use do / does for present-simple questions and am / is / are for present-continuous questions."
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
if (typeof document !== 'undefined') {
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
      display: grid;
      grid-template-columns: auto minmax(120px, 220px) auto;
      gap: 8px;
      align-items: end;
      margin-top: 18px;
      margin-bottom: 10px;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="greeting"] .exercise-item-header {
      align-self: end;
      padding-bottom: 7px;
    }
    [data-task="3e"].email-letter-enhanced [data-exercise-item="greeting"] .exercise-control::after {
      content: ",";
      margin-left: 2px;
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
}

/* Viktoria HW5 · Future forms */
(() => {
  'use strict';

  const TOPIC_ID = 'future-forms';
  const topic = {
    id: TOPIC_ID,
    order: 2,
    linkedLessonId: 'lesson-5',
    title: 'Future forms',
    level: 'A2.2',
    status: 'available',
    publishedAt: '2026-10-26',
    page: 'grammar-topic.html?id=future-forms',
    lockOnPass: true,
    revealAnswersOnError: false,

    explanation: 'В английском нет одной универсальной формы будущего. Present Continuous, be going to, will / won’t и Shall I / Shall we выбираются по смыслу: договорённость, намерение, решение в момент речи, обещание, предложение или прогноз.',
    formula: 'arrangement → Present Continuous · intention / evidence → be going to · instant decision / promise / offer / prediction → will · suggestion / offer → Shall I / Shall we',

    glanceCards: [
      {
        icon: '1',
        label: 'Present Continuous',
        hint: 'Уже организованный план или договорённость.',
        pattern: 'am / is / are + verb-ing',
        example: 'We’re going on holiday tomorrow.'
      },
      {
        icon: '2',
        label: 'be going to',
        hint: 'Намерение / уже принятое решение; прогноз по видимым признакам.',
        pattern: 'am / is / are + going to + verb',
        example: 'He’s going to look for a new job.'
      },
      {
        icon: '3',
        label: 'will / won’t',
        hint: 'Решение сейчас, обещание, предложение помощи, прогноз.',
        pattern: 'will / won’t + verb',
        example: 'I’ll have the steak.'
      },
      {
        icon: '4',
        label: 'Shall I...? / Shall we...?',
        hint: 'Предложение помощи или совместного действия.',
        pattern: 'Shall + I / we + verb?',
        example: 'Shall we invite your parents?'
      }
    ],

    miniRules: [
      {
        title: 'Present Continuous для arrangements',
        text: 'Используем, когда событие уже организовано: есть договорённость, бронирование, билет, назначенное время или другой конкретный план.',
        example: 'We’re going on holiday tomorrow. — Мы завтра едем в отпуск.'
      },
      {
        title: 'be going to для intentions',
        text: 'Используем для намерения или решения, которое было принято до момента речи.',
        example: 'He’s going to look for a new job. — Он собирается искать новую работу.'
      },
      {
        title: 'be going to для prediction from evidence',
        text: 'Если прогноз основан на том, что мы видим или знаем сейчас, часто используем be going to.',
        example: 'There’s too much shopping in this bag. It’s going to break. — В сумке слишком много покупок. Она сейчас порвётся.'
      },
      {
        title: 'will для instant decisions',
        text: 'Если решение принимается прямо во время разговора, используем will.',
        example: 'A: Are you ready to order? B: Yes, I’ll have the steak.'
      },
      {
        title: 'will / won’t для promises и offers',
        text: 'Will / won’t часто используется для обещаний и предложений помощи.',
        example: 'Don’t worry. I won’t be late. — Не переживай. Я не опоздаю.'
      },
      {
        title: 'Shall I...? / Shall we...?',
        text: 'Shall I...? — предложение помощи. Shall we...? — предложение сделать что-то вместе.',
        example: 'Shall I make some more coffee? · Shall we invite your parents?'
      }
    ],

    tables: [
      {
        title: 'Future forms: сравнение',
        headers: ['Смысл', 'Форма', 'Пример'],
        rows: [
          ['Уже организованный план', 'Present Continuous', 'We’re going on holiday tomorrow.'],
          ['Намерение', 'be going to + verb', 'He’s going to look for a new job.'],
          ['Прогноз по видимым признакам', 'be going to + verb', 'It’s going to break.'],
          ['Решение в момент речи', 'will + verb', 'I’ll have the steak.'],
          ['Обещание', 'will / won’t + verb', 'I won’t be late.'],
          ['Предложение / идея', 'Shall I...? / Shall we...?', 'Shall we invite your parents?']
        ]
      }
    ],

    exampleGroups: [
      {
        title: 'Одна ситуация — разные причины',
        items: [
          'We’re meeting them at six. — есть договорённость.',
          'We’re going to invite them. — намерение уже есть.',
          'I’ll invite them. — решение принято сейчас.',
          'Shall we invite them? — предложение.'
        ]
      }
    ],

    commonMistakes: [
      'Не выбирай Present Continuous только из-за tomorrow. Важно, есть ли уже arrangement.',
      'Не используй be going to для решения, принятого прямо сейчас: обычно нужен will.',
      'Для прогноза по видимым признакам обычно естественнее be going to: Look at those clouds. It’s going to rain.',
      'После will и be going to смысловой глагол стоит в начальной форме: will go, going to go.',
      'В некоторых predictions возможны и will, и be going to — контекст важнее одного маркера.'
    ],

    exercises: [
      {
        id: 'future-practice-1',
        title: 'Выбери форму по смыслу',
        difficulty: 'Средне',
        instructions: 'Выбери форму, которая соответствует причине в скобках.',
        hideAnswersOnError: true,
        items: [
          { id: '1', number: 1, input: 'select', prompt: 'The restaurant is booked. We ___ there at 8. (arrangement)', options: ['are having dinner', 'will have dinner', 'are going to have dinner'], answer: 0 },
          { id: '2', number: 2, input: 'select', prompt: 'I’ve already decided. I ___ a new job. (intention)', options: ['will look for', 'am going to look for', 'am looking for tomorrow'], answer: 1 },
          { id: '3', number: 3, input: 'select', prompt: 'A: We haven’t got any bread. B: OK, I ___ some. (instant decision)', options: ['will get', 'am going to get', 'am getting'], answer: 0 },
          { id: '4', number: 4, input: 'select', prompt: 'Look at that bag! It ___. (present evidence)', options: ['will break', 'is going to break', 'is breaking tomorrow'], answer: 1 },
          { id: '5', number: 5, input: 'select', prompt: '___ some more coffee? (offer)', options: ['Shall I make', 'Will I make', 'Am I making'], answer: 0 },
          { id: '6', number: 6, input: 'select', prompt: '___ your parents this weekend? (suggestion)', options: ['Shall we invite', 'Will we invite', 'Are we going invite'], answer: 0 }
        ]
      },
      {
        id: 'future-practice-2',
        title: 'Построй форму',
        difficulty: 'Сложнее',
        instructions: 'Напиши полное предложение.',
        hideAnswersOnError: true,
        items: [
          { id: '1', number: 1, prompt: 'we / go / on holiday tomorrow (arrangement)', input: 'text', answer: 'We’re going on holiday tomorrow.', acceptedAnswers: ['We’re going on holiday tomorrow.', "We're going on holiday tomorrow.", 'We are going on holiday tomorrow.'] },
          { id: '2', number: 2, prompt: 'he / look for / a new job (intention)', input: 'text', answer: 'He’s going to look for a new job.', acceptedAnswers: ['He’s going to look for a new job.', "He's going to look for a new job.", 'He is going to look for a new job.'] },
          { id: '3', number: 3, prompt: 'I / not be / late (promise)', input: 'text', answer: 'I won’t be late.', acceptedAnswers: ['I won’t be late.', "I won't be late.", 'I will not be late.'] },
          { id: '4', number: 4, prompt: 'we / invite / your parents? (suggestion)', input: 'text', answer: 'Shall we invite your parents?' }
        ]
      },
      {
        id: 'future-practice-3',
        title: 'Почему именно эта форма?',
        difficulty: 'Сложнее',
        instructions: 'Выбери причину использования формы.',
        hideAnswersOnError: true,
        items: [
          { id: '1', number: 1, input: 'single', prompt: 'We’re meeting Jack at 7.', options: ['arrangement', 'instant decision', 'promise'], answer: 0 },
          { id: '2', number: 2, input: 'single', prompt: 'I’ll answer the phone.', options: ['intention from before', 'instant decision', 'arrangement'], answer: 1 },
          { id: '3', number: 3, input: 'single', prompt: 'It’s going to rain.', options: ['prediction from present evidence', 'suggestion', 'promise'], answer: 0 },
          { id: '4', number: 4, input: 'single', prompt: 'Shall we order pizza?', options: ['prediction', 'suggestion', 'arrangement'], answer: 1 }
        ]
      }
    ]
  };

  window.GRAMMAR_DATA = Array.isArray(window.GRAMMAR_DATA) ? window.GRAMMAR_DATA : [];
  if (!window.GRAMMAR_DATA.some((item) => item?.id === TOPIC_ID)) {
    window.GRAMMAR_DATA.push(topic);
  }

  if (typeof document === 'undefined') return;

  const styles = `
    .future-hidden { display: none !important; }

    .future-guide {
      display: grid;
      gap: 26px;
      margin-bottom: 34px;
    }

    .future-guide * { box-sizing: border-box; }

    .future-section {
      padding: 27px 28px 30px;
      border: 1px solid #dbe3ef;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 12px 30px rgba(15,23,42,.045);
    }

    .future-hero {
      overflow: hidden;
      padding: 0;
      background:
        radial-gradient(circle at 94% 7%, rgba(124,58,237,.14), transparent 28%),
        linear-gradient(135deg,#fff,#f8f9ff);
    }

    .future-hero-copy {
      padding: 28px 30px 23px;
      border-bottom: 1px solid #e2e8f0;
    }

    .future-kicker {
      margin: 0 0 7px;
      color: #4f46e5;
      font-size: .72rem;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .future-guide h2 {
      margin: 0;
      color: #111827;
      font-size: clamp(1.45rem,2.5vw,2rem);
      line-height: 1.15;
    }

    .future-lead {
      max-width: 850px;
      margin: 10px 0 0;
      color: #5c687d;
      line-height: 1.65;
    }

    .future-grid {
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr));
    }

    .future-card {
      min-width: 0;
      padding: 24px 28px;
      border-right: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
    }

    .future-card:nth-child(2n) { border-right: 0; }
    .future-card:nth-last-child(-n+2) { border-bottom: 0; }

    .future-card h3 {
      margin: 0 0 6px;
      color: #111827;
      font-size: 1.08rem;
    }

    .future-purpose {
      margin: 0 0 11px;
      color: #64748b;
      font-size: .82rem;
      font-weight: 800;
    }

    .future-formula {
      display: inline-block;
      margin-bottom: 10px;
      padding: 7px 10px;
      border-radius: 10px;
      background: #eef2ff;
      color: #3730a3;
      font-family: ui-monospace,SFMono-Regular,Menlo,monospace;
      font-size: .84rem;
      font-weight: 900;
      line-height: 1.45;
    }

    .future-en {
      margin: 0;
      color: #111827;
      font-weight: 850;
      line-height: 1.5;
    }

    .future-ru {
      margin: 4px 0 0;
      color: #64748b;
      line-height: 1.5;
    }

    .future-section-head {
      display: grid;
      grid-template-columns: auto minmax(0,1fr);
      gap: 13px;
      align-items: start;
      margin-bottom: 19px;
    }

    .future-num {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 13px;
      background: #111827;
      color: #fff;
      font-weight: 900;
    }

    .future-section-head p {
      margin: 5px 0 0;
      color: #64748b;
      line-height: 1.55;
    }

    .future-table-wrap { overflow-x: auto; }

    .future-table {
      width: 100%;
      min-width: 800px;
      border-collapse: separate;
      border-spacing: 0;
      overflow: hidden;
      border: 1px solid #dbe3ef;
      border-radius: 16px;
    }

    .future-table th,
    .future-table td {
      padding: 13px 14px;
      border-right: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
      vertical-align: top;
    }

    .future-table th:last-child,
    .future-table td:last-child { border-right: 0; }

    .future-table tr:last-child td { border-bottom: 0; }

    .future-table th {
      background: #111827;
      color: #fff;
      font-size: .84rem;
    }

    .future-table td:first-child {
      background: #f8fafc;
      color: #334155;
      font-weight: 850;
    }

    .future-note {
      margin-top: 14px;
      padding: 13px 15px;
      border-left: 4px solid #6366f1;
      border-radius: 0 13px 13px 0;
      background: #f5f7ff;
      color: #475569;
      line-height: 1.6;
    }

    .future-contrast {
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: 12px;
    }

    .future-contrast > div {
      padding: 16px;
      border: 1px solid #e2e8f0;
      border-radius: 15px;
      background: #fbfcfe;
    }

    .future-contrast h3 {
      margin: 0 0 8px;
      color: #111827;
    }

    .future-contrast p {
      margin: 0;
      color: #475569;
      line-height: 1.58;
    }

    @media (max-width: 820px) {
      .future-grid,
      .future-contrast {
        grid-template-columns: 1fr;
      }

      .future-card {
        border-right: 0 !important;
        border-bottom: 1px solid #e2e8f0 !important;
      }

      .future-card:last-child { border-bottom: 0 !important; }
    }

    @media (max-width: 520px) {
      .future-section,
      .future-hero-copy,
      .future-card {
        padding-left: 18px;
        padding-right: 18px;
      }

      .future-section-head { grid-template-columns: 1fr; }
    }
  `;

  const guide = `
    <div class="future-guide" id="future-grammar-guide">
      <section class="future-section future-hero">
        <div class="future-hero-copy">
          <p class="future-kicker">Future forms</p>
          <h2>Сначала определи причину, потом выбирай форму</h2>
          <p class="future-lead">В английском нет одной универсальной формы будущего. Present Continuous, be going to и will описывают разные типы планов, решений и прогнозов.</p>
        </div>

        <div class="future-grid">
          <article class="future-card">
            <h3>Present Continuous</h3>
            <p class="future-purpose">Уже организованная договорённость</p>
            <span class="future-formula">am / is / are + V-ing</span>
            <p class="future-en">We’re going on holiday tomorrow.</p>
            <p class="future-ru">Мы завтра едем в отпуск. Поездка уже организована.</p>
          </article>

          <article class="future-card">
            <h3>be going to</h3>
            <p class="future-purpose">Намерение / прогноз по видимым признакам</p>
            <span class="future-formula">am / is / are + going to + V</span>
            <p class="future-en">He’s going to look for a new job.</p>
            <p class="future-ru">Он собирается искать новую работу. Решение уже принято.</p>
          </article>

          <article class="future-card">
            <h3>will / won’t</h3>
            <p class="future-purpose">Решение сейчас · обещание · offer · prediction</p>
            <span class="future-formula">will / won’t + V</span>
            <p class="future-en">I’ll have the steak.</p>
            <p class="future-ru">Я возьму стейк. Решение принято прямо сейчас.</p>
          </article>

          <article class="future-card">
            <h3>Shall I...? / Shall we...?</h3>
            <p class="future-purpose">Предложение помощи или совместного действия</p>
            <span class="future-formula">Shall + I / we + V?</span>
            <p class="future-en">Shall we invite your parents?</p>
            <p class="future-ru">Может, пригласим твоих родителей?</p>
          </article>
        </div>
      </section>

      <section class="future-section">
        <div class="future-section-head">
          <span class="future-num">1</span>
          <div>
            <h2>Как строятся формы</h2>
            <p>Сравни утверждение, отрицание и вопрос. После will и going to смысловой глагол остаётся в начальной форме.</p>
          </div>
        </div>

        <div class="future-table-wrap">
          <table class="future-table">
            <thead>
              <tr><th>Форма</th><th>Present Continuous</th><th>be going to</th><th>will</th></tr>
            </thead>
            <tbody>
              <tr><td>Утверждение</td><td>I’m meeting Anna.</td><td>I’m going to call her.</td><td>I’ll call her.</td></tr>
              <tr><td>Отрицание</td><td>I’m not meeting Anna.</td><td>I’m not going to call her.</td><td>I won’t call her.</td></tr>
              <tr><td>Вопрос</td><td>Are you meeting Anna?</td><td>Are you going to call her?</td><td>Will you call her?</td></tr>
            </tbody>
          </table>
        </div>

        <div class="future-note"><b>Не ориентируйся только на tomorrow / next week.</b> Например, <i>We’re going on holiday tomorrow</i> — Present Continuous, потому что это arrangement. Важно не время, а причина выбора формы.</div>
      </section>

      <section class="future-section">
        <div class="future-section-head">
          <span class="future-num">2</span>
          <div>
            <h2>Prediction: will или be going to?</h2>
            <p>Обе формы могут говорить о будущем, но оттенок часто разный.</p>
          </div>
        </div>

        <div class="future-contrast">
          <div>
            <h3>will</h3>
            <p><b>I think you’ll get married before 30.</b><br>Это мнение / прогноз говорящего.</p>
          </div>
          <div>
            <h3>be going to</h3>
            <p><b>There’s too much shopping in this bag. It’s going to break.</b><br>Есть видимый признак прямо сейчас.</p>
          </div>
        </div>

        <div class="future-note">В некоторых контекстах возможны две формы. В ключе к Unit 1B для <b>you / get married (a prediction)</b> допускаются <b>you’ll get</b> и <b>you’re going to get</b>.</div>
      </section>
    </div>
  `;

  function ensureStyle() {
    if (document.getElementById('future-grammar-style')) return;
    const style = document.createElement('style');
    style.id = 'future-grammar-style';
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function apply() {
    if (new URLSearchParams(location.search).get('id') !== TOPIC_ID) return;
    const root = document.getElementById('grammar-topic-root');
    if (!root) return;
    const practice = root.querySelector('#grammar-practice-section');
    if (!practice) return;

    ensureStyle();

    [
      '.grammar-intro-card',
      '#grammar-at-a-glance',
      '#grammar-rule-map',
      '#grammar-tables',
      '#grammar-examples',
      '#grammar-mistakes'
    ].forEach((selector) => root.querySelector(selector)?.classList.add('future-hidden'));

    if (!root.querySelector('#future-grammar-guide')) {
      practice.insertAdjacentHTML('beforebegin', guide);
    }
  }

  function start() {
    const root = document.getElementById('grammar-topic-root');
    if (!root) return;
    new MutationObserver(apply).observe(root, { childList: true, subtree: true });
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();

/* Viktoria HW5 · Opposite adjectives with negative prefixes */
(() => {
  'use strict';

  const TOPIC_ID = 'opposite-adjectives-negative-prefixes';
  const topic = {
    id: TOPIC_ID,
    order: 3,
    linkedLessonId: 'lesson-5',
    title: 'Opposite adjectives with negative prefixes',
    level: 'A2.2',
    status: 'available',
    publishedAt: '2026-10-26',
    page: 'grammar-topic.html?id=opposite-adjectives-negative-prefixes',
    lockOnPass: true,
    revealAnswersOnError: false,

    explanation: 'В английском противоположное значение многих прилагательных образуется отрицательной приставкой. Но одной универсальной приставки нет: конкретную форму нужно запоминать вместе со словом.',
    formula: 'un- · dis- · im- · in- · ir- + adjective → opposite meaning',

    glanceCards: [
      {
        icon: 'un',
        label: 'un-',
        hint: 'Самая частая приставка в этой группе.',
        pattern: 'un + adjective',
        example: 'reliable → unreliable'
      },
      {
        icon: 'dis',
        label: 'dis-',
        hint: 'Используется с некоторыми прилагательными, но не со всеми.',
        pattern: 'dis + adjective',
        example: 'honest → dishonest'
      },
      {
        icon: 'im',
        label: 'im-',
        hint: 'В этой теме используется с mature и patient.',
        pattern: 'im + adjective',
        example: 'patient → impatient'
      },
      {
        icon: 'in/ir',
        label: 'in- / ir-',
        hint: 'Форма зависит от конкретного слова.',
        pattern: 'in + adjective / ir + adjective',
        example: 'sensitive → insensitive · responsible → irresponsible'
      }
    ],

    miniRules: [
      {
        title: 'un-',
        text: 'В Unit 1B эта приставка используется с reliable, ambitious, imaginative, sociable, friendly, kind и selfish.',
        example: 'unreliable · unambitious · unimaginative · unsociable · unfriendly · unkind · unselfish'
      },
      {
        title: 'dis-',
        text: 'В Unit 1B dis- используется с honest и organized.',
        example: 'dishonest · disorganized'
      },
      {
        title: 'im-',
        text: 'В Unit 1B im- используется с mature и patient.',
        example: 'immature · impatient'
      },
      {
        title: 'in-',
        text: 'В Unit 1B in- используется с sensitive.',
        example: 'insensitive'
      },
      {
        title: 'ir-',
        text: 'В Unit 1B ir- используется с responsible.',
        example: 'irresponsible'
      },
      {
        title: 'Почему нельзя угадывать приставку',
        text: 'Приставка является частью словарной формы. Нельзя взять любое прилагательное и механически добавить понравившуюся приставку.',
        example: 'reliable → unreliable, но responsible → irresponsible'
      }
    ],

    tables: [
      {
        title: 'Negative prefixes из Unit 1B',
        headers: ['Приставка', 'Исходное слово', 'Противоположное слово'],
        rows: [
          ['dis-', 'honest', 'dishonest'],
          ['dis-', 'organized', 'disorganized'],
          ['im-', 'mature', 'immature'],
          ['im-', 'patient', 'impatient'],
          ['in-', 'sensitive', 'insensitive'],
          ['ir-', 'responsible', 'irresponsible'],
          ['un-', 'reliable', 'unreliable'],
          ['un-', 'ambitious', 'unambitious'],
          ['un-', 'imaginative', 'unimaginative'],
          ['un-', 'sociable', 'unsociable'],
          ['un-', 'friendly', 'unfriendly'],
          ['un-', 'kind', 'unkind'],
          ['un-', 'selfish', 'unselfish']
        ]
      }
    ],

    exampleGroups: [
      {
        title: 'Пары, которые нужно учить вместе',
        items: [
          'honest ↔ dishonest',
          'mature ↔ immature',
          'reliable ↔ unreliable',
          'sensitive ↔ insensitive',
          'responsible ↔ irresponsible',
          'patient ↔ impatient'
        ]
      }
    ],

    commonMistakes: [
      'unhonest ✗ → dishonest ✓',
      'unmature ✗ → immature ✓',
      'irreliable ✗ → unreliable ✓',
      'unsensitive ✗ → insensitive ✓',
      'unresponsible ✗ → irresponsible ✓',
      'unpatient ✗ → impatient ✓',
      'Главное: не угадывать приставку, а учить слово как пару.'
    ],

    exercises: [
      {
        id: 'prefix-practice-1',
        title: 'Выбери правильную противоположную форму',
        difficulty: 'Легко',
        instructions: 'Выбери правильный вариант.',
        hideAnswersOnError: true,
        items: [
          { id: '1', number: 1, input: 'select', prompt: 'honest →', options: ['unhonest', 'dishonest', 'inhonest'], answer: 1 },
          { id: '2', number: 2, input: 'select', prompt: 'mature →', options: ['immature', 'unmature', 'dismature'], answer: 0 },
          { id: '3', number: 3, input: 'select', prompt: 'reliable →', options: ['irreliable', 'disreliable', 'unreliable'], answer: 2 },
          { id: '4', number: 4, input: 'select', prompt: 'sensitive →', options: ['insensitive', 'unsensitive', 'dissensitive'], answer: 0 },
          { id: '5', number: 5, input: 'select', prompt: 'responsible →', options: ['unresponsible', 'irresponsible', 'disresponsible'], answer: 1 },
          { id: '6', number: 6, input: 'select', prompt: 'patient →', options: ['unpatient', 'impatient', 'inpatient'], answer: 1 }
        ]
      },
      {
        id: 'prefix-practice-2',
        title: 'Напиши противоположное слово',
        difficulty: 'Средне',
        instructions: 'Напиши противоположную форму полностью.',
        hideAnswersOnError: true,
        items: [
          { id: '1', number: 1, prompt: 'ambitious →', input: 'text', answer: 'unambitious' },
          { id: '2', number: 2, prompt: 'imaginative →', input: 'text', answer: 'unimaginative' },
          { id: '3', number: 3, prompt: 'organized →', input: 'text', answer: 'disorganized' },
          { id: '4', number: 4, prompt: 'sociable →', input: 'text', answer: 'unsociable' },
          { id: '5', number: 5, prompt: 'friendly →', input: 'text', answer: 'unfriendly' },
          { id: '6', number: 6, prompt: 'kind →', input: 'text', answer: 'unkind' },
          { id: '7', number: 7, prompt: 'selfish →', input: 'text', answer: 'unselfish' }
        ]
      },
      {
        id: 'prefix-practice-3',
        title: 'Выбери приставку',
        difficulty: 'Средне',
        instructions: 'Выбери приставку, которая используется в этом слове.',
        hideAnswersOnError: true,
        items: [
          { id: '1', number: 1, input: 'single', prompt: '___honest', options: ['un-', 'dis-', 'im-'], answer: 1 },
          { id: '2', number: 2, input: 'single', prompt: '___mature', options: ['un-', 'im-', 'ir-'], answer: 1 },
          { id: '3', number: 3, input: 'single', prompt: '___sensitive', options: ['in-', 'un-', 'dis-'], answer: 0 },
          { id: '4', number: 4, input: 'single', prompt: '___responsible', options: ['ir-', 'im-', 'un-'], answer: 0 },
          { id: '5', number: 5, input: 'single', prompt: '___reliable', options: ['ir-', 'dis-', 'un-'], answer: 2 }
        ]
      }
    ]
  };

  window.GRAMMAR_DATA = Array.isArray(window.GRAMMAR_DATA) ? window.GRAMMAR_DATA : [];
  if (!window.GRAMMAR_DATA.some((item) => item?.id === TOPIC_ID)) {
    window.GRAMMAR_DATA.push(topic);
  }

  if (typeof document === 'undefined') return;

  const styles = `
    .prefix-hidden { display: none !important; }

    .prefix-guide {
      display: grid;
      gap: 26px;
      margin-bottom: 34px;
    }

    .prefix-guide * { box-sizing: border-box; }

    .prefix-section {
      padding: 27px 28px 30px;
      border: 1px solid #dbe3ef;
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 12px 30px rgba(15,23,42,.045);
    }

    .prefix-hero {
      background:
        radial-gradient(circle at 92% 6%, rgba(79,70,229,.12), transparent 30%),
        linear-gradient(135deg,#fff,#f8f9ff);
    }

    .prefix-kicker {
      margin: 0 0 7px;
      color: #4f46e5;
      font-size: .72rem;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .prefix-guide h2 {
      margin: 0;
      color: #111827;
      font-size: clamp(1.45rem,2.5vw,2rem);
      line-height: 1.15;
    }

    .prefix-lead {
      max-width: 860px;
      margin: 10px 0 0;
      color: #5c687d;
      line-height: 1.65;
    }

    .prefix-pairs {
      display: grid;
      grid-template-columns: repeat(5,minmax(0,1fr));
      gap: 10px;
      margin-top: 20px;
    }

    .prefix-card {
      padding: 15px;
      border: 1px solid #e2e8f0;
      border-radius: 15px;
      background: #fbfcfe;
    }

    .prefix-card strong {
      display: block;
      margin-bottom: 8px;
      color: #4f46e5;
      font-size: 1.08rem;
    }

    .prefix-card span {
      display: block;
      color: #334155;
      line-height: 1.62;
    }

    .prefix-section-head {
      display: grid;
      grid-template-columns: auto minmax(0,1fr);
      gap: 13px;
      align-items: start;
      margin-bottom: 19px;
    }

    .prefix-num {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 13px;
      background: #111827;
      color: #fff;
      font-weight: 900;
    }

    .prefix-section-head p {
      margin: 5px 0 0;
      color: #64748b;
      line-height: 1.55;
    }

    .prefix-table-wrap { overflow-x: auto; }

    .prefix-table {
      width: 100%;
      min-width: 640px;
      border-collapse: separate;
      border-spacing: 0;
      overflow: hidden;
      border: 1px solid #dbe3ef;
      border-radius: 16px;
    }

    .prefix-table th,
    .prefix-table td {
      padding: 12px 14px;
      border-right: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
      text-align: left;
      vertical-align: top;
    }

    .prefix-table th:last-child,
    .prefix-table td:last-child { border-right: 0; }

    .prefix-table tr:last-child td { border-bottom: 0; }

    .prefix-table th {
      background: #111827;
      color: #fff;
    }

    .prefix-table td:first-child {
      background: #f8fafc;
      color: #4338ca;
      font-weight: 900;
    }

    .prefix-note {
      margin-top: 14px;
      padding: 13px 15px;
      border-left: 4px solid #6366f1;
      border-radius: 0 13px 13px 0;
      background: #f5f7ff;
      color: #475569;
      line-height: 1.6;
    }

    .prefix-compare {
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: 12px;
    }

    .prefix-compare > div {
      padding: 16px;
      border: 1px solid #e2e8f0;
      border-radius: 15px;
      background: #fbfcfe;
    }

    .prefix-compare h3 {
      margin: 0 0 8px;
      color: #111827;
    }

    .prefix-compare p {
      margin: 0;
      color: #475569;
      line-height: 1.6;
    }

    @media (max-width: 820px) {
      .prefix-pairs,
      .prefix-compare {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 520px) {
      .prefix-section {
        padding-left: 18px;
        padding-right: 18px;
      }

      .prefix-section-head { grid-template-columns: 1fr; }
    }
  `;

  const guide = `
    <div class="prefix-guide" id="prefix-grammar-guide">
      <section class="prefix-section prefix-hero">
        <p class="prefix-kicker">Opposite adjectives</p>
        <h2>Negative prefixes: приставку нельзя выбирать случайно</h2>
        <p class="prefix-lead">Приставка меняет значение прилагательного на противоположное. Но нет правила «всегда добавляй un-». Форму нужно учить вместе с исходным словом.</p>

        <div class="prefix-pairs">
          <div class="prefix-card">
            <strong>dis-</strong>
            <span>honest → <b>dishonest</b></span>
            <span>organized → <b>disorganized</b></span>
          </div>
          <div class="prefix-card">
            <strong>im-</strong>
            <span>mature → <b>immature</b></span>
            <span>patient → <b>impatient</b></span>
          </div>
          <div class="prefix-card">
            <strong>in-</strong>
            <span>sensitive → <b>insensitive</b></span>
          </div>
          <div class="prefix-card">
            <strong>ir-</strong>
            <span>responsible → <b>irresponsible</b></span>
          </div>
          <div class="prefix-card">
            <strong>un-</strong>
            <span>reliable → <b>unreliable</b></span>
            <span>friendly → <b>unfriendly</b></span>
            <span>kind → <b>unkind</b></span>
          </div>
        </div>
      </section>

      <section class="prefix-section">
        <div class="prefix-section-head">
          <span class="prefix-num">1</span>
          <div>
            <h2>Все формы из Unit 1B</h2>
            <p>Эти пары нужно запоминать как словарные единицы.</p>
          </div>
        </div>

        <div class="prefix-table-wrap">
          <table class="prefix-table">
            <thead>
              <tr><th>Приставка</th><th>Исходное слово</th><th>Противоположное слово</th></tr>
            </thead>
            <tbody>
              <tr><td>dis-</td><td>honest</td><td>dishonest</td></tr>
              <tr><td>dis-</td><td>organized</td><td>disorganized</td></tr>
              <tr><td>im-</td><td>mature</td><td>immature</td></tr>
              <tr><td>im-</td><td>patient</td><td>impatient</td></tr>
              <tr><td>in-</td><td>sensitive</td><td>insensitive</td></tr>
              <tr><td>ir-</td><td>responsible</td><td>irresponsible</td></tr>
              <tr><td>un-</td><td>reliable</td><td>unreliable</td></tr>
              <tr><td>un-</td><td>ambitious</td><td>unambitious</td></tr>
              <tr><td>un-</td><td>imaginative</td><td>unimaginative</td></tr>
              <tr><td>un-</td><td>sociable</td><td>unsociable</td></tr>
              <tr><td>un-</td><td>friendly</td><td>unfriendly</td></tr>
              <tr><td>un-</td><td>kind</td><td>unkind</td></tr>
              <tr><td>un-</td><td>selfish</td><td>unselfish</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="prefix-section">
        <div class="prefix-section-head">
          <span class="prefix-num">2</span>
          <div>
            <h2>Почему нельзя угадывать приставку</h2>
            <p>Слова похожи по смыслу, но используют разные отрицательные приставки.</p>
          </div>
        </div>

        <div class="prefix-compare">
          <div>
            <h3>responsible → irresponsible</h3>
            <p>Здесь используется <b>ir-</b>, а не un-. Поэтому <i>unresponsible</i> для этого упражнения неверно.</p>
          </div>
          <div>
            <h3>reliable → unreliable</h3>
            <p>Здесь используется <b>un-</b>, а не ir-. Поэтому <i>irreliable</i> неверно.</p>
          </div>
          <div>
            <h3>mature → immature</h3>
            <p>Нужна форма <b>immature</b>, а не <i>unmature</i>.</p>
          </div>
          <div>
            <h3>honest → dishonest</h3>
            <p>Нужна форма <b>dishonest</b>, а не <i>unhonest</i>.</p>
          </div>
        </div>

        <div class="prefix-note"><b>Лучший способ:</b> учить пары целиком: <b>honest ↔ dishonest</b>, <b>patient ↔ impatient</b>, <b>reliable ↔ unreliable</b>.</div>
      </section>
    </div>
  `;

  function ensureStyle() {
    if (document.getElementById('prefix-grammar-style')) return;
    const style = document.createElement('style');
    style.id = 'prefix-grammar-style';
    style.textContent = styles;
    document.head.appendChild(style);
  }

  function apply() {
    if (new URLSearchParams(location.search).get('id') !== TOPIC_ID) return;
    const root = document.getElementById('grammar-topic-root');
    if (!root) return;
    const practice = root.querySelector('#grammar-practice-section');
    if (!practice) return;

    ensureStyle();

    [
      '.grammar-intro-card',
      '#grammar-at-a-glance',
      '#grammar-rule-map',
      '#grammar-tables',
      '#grammar-examples',
      '#grammar-mistakes'
    ].forEach((selector) => root.querySelector(selector)?.classList.add('prefix-hidden'));

    if (!root.querySelector('#prefix-grammar-guide')) {
      practice.insertAdjacentHTML('beforebegin', guide);
    }
  }

  function start() {
    const root = document.getElementById('grammar-topic-root');
    if (!root) return;
    new MutationObserver(apply).observe(root, { childList: true, subtree: true });
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
