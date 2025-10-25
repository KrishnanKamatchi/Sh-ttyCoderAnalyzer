export interface Result {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  roast: string;
  emoji: string;
  color: string;
}

export const results: Result[] = [
  {
    minScore: 0,
    maxScore: 120,
    title: "🧙 Code Sorcerer Supreme",
    description: "You're a f*cking unicorn who actually writes flawless code.",
    roast:
      "Well, sh#t, you majestic b#stard, you probably debug in your sleep and jerk off to clean architecture diagrams. Your code’s so perfect it makes us puke. Bet you’re unemployed ‘cause no one can handle your smug a#s. Bow down, you overqualified f*ck. 🪄",
    emoji: "🧙‍♂️",
    color: "mystic-blue",
  },
  {
    minScore: 121,
    maxScore: 240,
    title: "📚 StackOverflow Scavenger",
    description: "You live off stolen code and duct-tape fixes, bro.",
    roast:
      "You’re a f*cking pirate, looting StackOverflow like it’s your personal codebase. Your commits are a collage of 'works on my machine' and 'fixed typo'. We get it, bro, you’re surviving, but your GitHub’s a crime scene. Keep stealing, you shady c*nt. 🦴",
    emoji: "🧟",
    color: "slime-green",
  },
  {
    minScore: 241,
    maxScore: 360,
    title: "🤖 AI-Sucking Drone",
    description:
      "You’re basically ChatGPT’s b#tch, pumping out prompts like a pro.",
    roast:
      "Holy f*ck, you let AI wipe your a#s while you sip energy drinks. Your code’s just recycled LLM vomit, and you call it 'efficiency'. When the servers go down, you’re screwed, you prompt-pounding p#ssy. Keep kneeling to your robot overlord, bro. 🤖",
    emoji: "🤖",
    color: "neon-purple",
  },
  {
    minScore: 361,
    maxScore: 480,
    title: "💥 Prod-Wrecking Psychopath",
    description: "You treat production like a f*cking pinata and swing.",
    roast:
      "You absolute lunatic, yeeting untested sh#t to prod like it’s a game. Your commit messages are ‘oops’, ‘f*ck’, and ‘why’. DevOps has your face on a dartboard. Keep breaking sh#t, you chaotic c#cksucker—your disasters are legendary. 🖕",
    emoji: "💥",
    color: "rage-orange",
  },
  {
    minScore: 481,
    maxScore: 600,
    title: "💩 Dumpster Fire Dev",
    description: "Your existence is a bug report, you beautiful catastrophe.",
    roast:
      "Motherf*cker, you’re the reason we have rollbacks and therapy. Your bugs have fan clubs. Tech or non-tech, you’re a walking sh#tshow. Quit coding and sell hotdogs, you glorious f*ck-up. Take a bow, then delete yourself. 🔥",
    emoji: "💩",
    color: "toxic-red",
  },
];

export function getResult(score: number): Result {
  return (
    results.find((r) => score >= r.minScore && score <= r.maxScore) ||
    results[results.length - 1]
  );
}
