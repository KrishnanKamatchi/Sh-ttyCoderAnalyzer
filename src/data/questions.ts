import type { Question } from "../types/types";

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "How often do you push directly to main?",
    options: [
      { label: "Never", score: 0 },
      { label: "Sometimes", score: 3 },
      { label: "Often", score: 6 },
      { label: "rm -rf / (brave)", score: 10 },
    ],
  },
  {
    id: "q2",
    text: "Commit message style",
    options: [
      { label: "Descriptive", score: 0 },
      { label: "Brief", score: 2 },
      { label: "fix", score: 5 },
      { label: "idk lol", score: 8 },
    ],
  },
  {
    id: "q3",
    text: "Favorite debugging technique",
    options: [
      { label: "Debugger", score: 0 },
      { label: "console.log everywhere", score: 4 },
      { label: "Rubber ducking", score: 2 },
      { label: "Sacrifice to CI", score: 7 },
    ],
  },
  {
    id: "q4",
    text: "When you see 'works on my machine', you:",
    options: [
      { label: "Fix it", score: 0 },
      { label: "Ignore it", score: 3 },
      { label: "Blame ops", score: 6 },
      { label: "Add 50 console.log", score: 8 },
    ],
  },
  {
    id: "q5",
    text: "How many packages are in your package.json?",
    options: [
      { label: "0–5", score: 0 },
      { label: "6–20", score: 2 },
      { label: "21–100", score: 5 },
      { label: "1000+ (kidding?)", score: 9 },
    ],
  },
  {
    id: "q6",
    text: "Tabs or spaces?",
    options: [
      { label: "Tabs", score: 0 },
      { label: "Spaces", score: 0 },
      { label: "Both depending on mood", score: 4 },
      { label: "I indent with chaos", score: 7 },
    ],
  },
  {
    id: "q7",
    text: "CI fails — you:",
    options: [
      { label: "Fix tests", score: 0 },
      { label: "Re-run", score: 2 },
      { label: "Skip tests", score: 6 },
      { label: "--no-verify life", score: 9 },
    ],
  },
  {
    id: "q8",
    text: "Preferred framework",
    options: [
      { label: "React", score: 0 },
      { label: "Angular", score: 2 },
      { label: "Vue", score: 2 },
      { label: "My own 200-line framework", score: 6 },
    ],
  },
  {
    id: "q9",
    text: "You copy code from StackOverflow — you:",
    options: [
      { label: "Read & adapt", score: 0 },
      { label: "Paste & pray", score: 6 },
      { label: "Fail the build", score: 8 },
      { label: "Rewrite the internet", score: 3 },
    ],
  },
  {
    id: "q10",
    text: "Best comment in code",
    options: [
      { label: "TODO: fix", score: 0 },
      { label: "WTF?", score: 4 },
      { label: "Magic happens here", score: 6 },
      { label: "ASCII art of a dragon", score: 7 },
    ],
  },
];
