export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "💻 What's your go-to when your code f*cks up big time?",
    options: [
      { text: "Rewrite it clean, like a smug b#stard", points: 30 },
      { text: "Stack Overflow, paste it, pray it", points: 20 },
      { text: "console.log('sh#t') and vibe", points: 10 },
      { text: "Blame the PM or a solar flare", points: 0 },
    ],
  },
  {
    id: 2,
    question: "😿 Imposter syndrome hitting you?",
    options: [
      { text: "Nah, I'm a code god, b#tches", points: 30 },
      { text: "Booze and a quick cry sesh", points: 20 },
      { text: "LinkedIn post: 'Embracing my journey!'", points: 10 },
      { text: "I'm not faking, I'm just trash", points: 0 },
    ],
  },
  {
    id: 3,
    question: "🧑‍💻 Pick your poison (language)?",
    options: [
      { text: "Rust/Go/PHP — you are a psycho", points: 30 },
      { text: "Python — lazy a#s script kiddie", points: 20 },
      { text: "JavaScript/Java — go k*ll yourself", points: 10 },
      { text: "Figma/Excel/ChatGPT/Cursor — 'coding' my a#s", points: 0 },
    ],
  },
  {
    id: 4,
    question: "🚨 Ever pushed code to prod on a Friday?",
    options: [
      { text: "Never, I'm not a psychopath", points: 30 },
      { text: "Once, with a backup and a rosary", points: 20 },
      { text: "F*ck it, ship it bro", points: 10 },
      { text: "Prod? I just email CC Word docs", points: 0 },
    ],
  },
  {
    id: 5,
    question: "📑 Tab count in your browser?",
    options: [
      { text: "Under 10 — I'm a f*cking monk", points: 30 },
      { text: "20-50 — research or bust", points: 20 },
      { text: "100+ — half are NSFW, half SO", points: 10 },
      { text: "One tab: Minesweeper | Netflix, f#ck work", points: 0 },
    ],
  },
  {
    id: 6,
    question: "🏃‍♂️ Agile/Scrum — your vibe?",
    options: [
      { text: "Sprint king, I own this sh#t", points: 30 },
      { text: "Standups are my personal hell", points: 20 },
      { text: "PMs jerk off to my misery", points: 10 },
      { text: "Sounds like a CrossFit cult", points: 0 },
    ],
  },
  {
    id: 7,
    question: "🪲 Bug hunting — what's your style?",
    options: [
      { text: "Debugger, logs, pro sh#t", points: 30 },
      { text: "Rubber duck, my only friend", points: 20 },
      { text: "Scream, smash, restart IDE", points: 10 },
      { text: "Call it a feature, gaslight QA", points: 0 },
    ],
  },
  {
    id: 8,
    question: "🎁 Conference swag — you in?",
    options: [
      { text: "F*ck no, I'm above that", points: 30 },
      { text: "Hoodies only, pleb", points: 20 },
      { text: "Free sh#t? Gimme all of it", points: 10 },
      { text: "I’m here for the open bar", points: 0 },
    ],
  },
  {
    id: 9,
    question: "🤖 AI in your code — friend or foe?",
    options: [
      { text: "Foe — I code raw, b#tch", points: 30 },
      { text: "Friend — less typing, more naps", points: 20 },
      { text: "Master — it owns my soul", points: 10 },
      { text: "AI? That’s just autocorrect", points: 0 },
    ],
  },
  {
    id: 10,
    question: "🗑️ Legacy code — how you deal?",
    options: [
      { text: "Burn it, rewrite from scratch", points: 30 },
      { text: "Patch it, respect the OGs", points: 20 },
      { text: "Add more sh#t, call it art", points: 10 },
      { text: "Scream and quit the job", points: 0 },
    ],
  },
];
