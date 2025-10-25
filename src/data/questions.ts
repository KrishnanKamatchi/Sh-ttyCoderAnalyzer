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
      { text: "Blame the PM or a solar flare", points: 0 },
      { text: "console.log('sh#t') and vibe", points: 20 },
      { text: "Rewrite it clean, like a smug b#stard", points: 60 },
      { text: "Stack Overflow, paste it, pray it", points: 40 },
    ],
  },
  {
    id: 2,
    question: "😿 Imposter syndrome hitting you?",
    options: [
      { text: "I'm not faking, I'm just trash", points: 0 },
      { text: "Nah, I'm a code god, b#tches", points: 60 },
      { text: "LinkedIn post: 'Embracing my journey!'", points: 20 },
      { text: "Booze and a quick cry sesh", points: 40 },
    ],
  },
  {
    id: 3,
    question: "🧑‍💻 Pick your poison (language)?",
    options: [
      { text: "JavaScript/Java — go k*ll yourself", points: 20 },
      { text: "Figma/Excel/ChatGPT/Cursor — 'coding' my a#s", points: 0 },
      { text: "Rust/Go/PHP — you are a psycho", points: 60 },
      { text: "Python — lazy a#s script kiddie", points: 40 },
    ],
  },
  {
    id: 4,
    question: "🚨 Ever pushed code to prod on a Friday?",
    options: [
      { text: "F*ck it, ship it bro", points: 20 },
      { text: "Never, I'm not a psychopath", points: 60 },
      { text: "Prod? I just email CC Word docs", points: 0 },
      { text: "Once, with a backup and a rosary", points: 40 },
    ],
  },
  {
    id: 5,
    question: "📑 Tab count in your browser?",
    options: [
      { text: "One tab: Minesweeper | Netflix, f#ck work", points: 0 },
      { text: "20-50 — research or bust", points: 40 },
      { text: "100+ — half are NSFW, half SO", points: 20 },
      { text: "Under 10 — I'm a f*cking monk", points: 60 },
    ],
  },
  {
    id: 6,
    question: "🏃‍♂️ Agile/Scrum — your vibe?",
    options: [
      { text: "Sounds like a CrossFit cult", points: 0 },
      { text: "PMs jerk off to my misery", points: 20 },
      { text: "Sprint king, I own this sh#t", points: 60 },
      { text: "Standups are my personal hell", points: 40 },
    ],
  },
  {
    id: 7,
    question: "🪲 Bug hunting — what's your style?",
    options: [
      { text: "Rubber duck, my only friend", points: 40 },
      { text: "Call it a feature, gaslight QA", points: 0 },
      { text: "Scream, smash, restart IDE", points: 20 },
      { text: "Debugger, logs, pro sh#t", points: 60 },
    ],
  },
  {
    id: 8,
    question: "🎁 Conference swag — you in?",
    options: [
      { text: "Hoodies only, pleb", points: 40 },
      { text: "I’m here for the open bar", points: 0 },
      { text: "F*ck no, I'm above that", points: 60 },
      { text: "Free sh#t? Gimme all of it", points: 20 },
    ],
  },
  {
    id: 9,
    question: "🤖 AI in your code — friend or foe?",
    options: [
      { text: "Master — it owns my soul", points: 20 },
      { text: "Foe — I code raw, b#tch", points: 60 },
      { text: "AI? That’s just autocorrect", points: 0 },
      { text: "Friend — less typing, more naps", points: 40 },
    ],
  },
  {
    id: 10,
    question: "🗑️ Legacy code — how you deal?",
    options: [
      { text: "Add more sh#t, call it art", points: 20 },
      { text: "Scream and quit the job", points: 0 },
      { text: "Burn it, rewrite from scratch", points: 60 },
      { text: "Patch it, respect the OGs", points: 40 },
    ],
  },
];
