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
