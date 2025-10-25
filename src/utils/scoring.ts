import type { AnswersMap, Category } from "../types/types";

export function computeScore(answers: AnswersMap): number {
  return Object.values(answers).reduce((acc: number, v) => acc + (v ?? 0), 0);
}

export function mapToCategory(total: number, maxPossible = 100): Category {
  const pct = (total / Math.max(1, maxPossible)) * 100;

  if (pct <= 20) return { label: "Junior PleasantCoder", band: "mild" };
  if (pct <= 40) return { label: "StackOverflow Enthusiast", band: "mild" };
  if (pct <= 65) return { label: "Spaghetti Wrangler", band: "medium" };
  if (pct <= 85) return { label: "Sh*tty Architect", band: "hot" };
  return { label: "Nuclear Dev", band: "nuclear" };
}
