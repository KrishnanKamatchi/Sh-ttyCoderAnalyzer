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
    title: "🧙 Legendary Wizard",
    description: "Holy sh*t, you actually know what you're doing!",
    roast: "You're either lying, ChatGPT wrote these answers, or you're the one person who actually reads the f*cking manual. Probably unemployed because you're 'overqualified' lmao.",
    emoji: "🧙‍♂️",
    color: "electric-blue",
  },
  {
    minScore: 121,
    maxScore: 240,
    title: "📚 StackOverflow Goblin",
    description: "Ctrl+C, Ctrl+V is your entire personality",
    roast: "You've never written an original line of code in your life. Your GitHub is just a collection of 'fixed typo' commits. Your browser history is 90% StackOverflow, 10% 'how to center a div'.",
    emoji: "🧟",
    color: "puke-green",
  },
  {
    minScore: 241,
    maxScore: 360,
    title: "🤖 AI Prompt Monkey",
    description: "ChatGPT is your IDE and you're not even ashamed",
    roast: "You haven't written a for-loop from memory since 2022. Your job title should be 'Professional Prompt Engineer'. You panic when ChatGPT is down because you forgot how to code.",
    emoji: "🤖",
    color: "cyber-purple",
  },
  {
    minScore: 361,
    maxScore: 480,
    title: "🤡 Chaos Developer",
    description: "Production is your test environment",
    roast: "You push to main on Fridays. Your commit messages are 'fix', 'fix2', 'ACTUALLY_FIXED', 'pls work'. You've never written a test in your life. DevOps hates you. Everyone hates you.",
    emoji: "🤡",
    color: "warning-orange",
  },
  {
    minScore: 481,
    maxScore: 600,
    title: "💩 Absolute Disaster",
    description: "You shouldn't be allowed near a computer",
    roast: "You're the reason we can't have nice things. Your code is a war crime. You make PHP look good. Your IDE is probably Microsoft Word. Please change careers immediately, I'm begging you.",
    emoji: "💩",
    color: "angry-red",
  },
];

export function getResult(score: number): Result {
  return results.find((r) => score >= r.minScore && score <= r.maxScore) || results[results.length - 1];
}
