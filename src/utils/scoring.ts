export function computeScore(answers) {
  const total = Object.values(answers).reduce((s, v) => s + (v || 0), 0);
  return total;
}

export function mapToCategory(total, maxPossible = 150) {
  const pct = (total / maxPossible) * 100;
  if (pct <= 20) return { label: "Junior PleasantCoder", band: "mild" };
  if (pct <= 40) return { label: "StackOverflow Enthusiast", band: "mild" };
  if (pct <= 65) return { label: "Spaghetti Wrangler", band: "medium" };
  if (pct <= 85) return { label: "Sh*tty Architect", band: "hot" };
  return { label: "Nuclear Dev", band: "nuclear" };
}
