/**
 * Published grammar topics for Viktoria.
 */
window.GRAMMAR_DATA = [
  {
    id: "present-simple-continuous-action-nonaction",
    order: 1,
    linkedLessonId: "lesson-2",
    title: "Present simple and present continuous: action and non-action verbs",
    level: "A2.2",
    status: "available",
    publishedAt: "2026-10-11",
    page: "grammar-topic.html?id=present-simple-continuous-action-nonaction",
    lockOnPass: true,
    revealAnswersOnError: false,
    explanation: "Use the present simple for routines, facts, and states. Use the present continuous for actions happening now or around now and for temporary situations. Some verbs usually describe a state rather than an action, so they normally stay in the present simple even when we mean ‘now’.",
    formula: "routine / fact / state → present simple · happening now / temporary → am / is / are + verb-ing",
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
        title: "Choose the correct form",
        difficulty: "Easy",
        instructions: "Choose the correct option.",
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
        title: "Complete the sentences",
        difficulty: "Medium",
        instructions: "Use the correct present simple or present continuous form.",
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
        title: "Choose the form that fits the meaning",
        difficulty: "Challenging",
        instructions: "Choose the correct answer for the context.",
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
        title: "Build the sentence or question",
        difficulty: "Most challenging",
        instructions: "Write the complete sentence or question.",
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
