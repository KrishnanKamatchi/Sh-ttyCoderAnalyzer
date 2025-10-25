import Confetti from "react-confetti";
import type { Category } from "../types/types";

type Props = {
  total: number;
  category: Category;
  onRestart: () => void;
};

export default function ResultCard({ total, category, onRestart }: Props) {
  const showConfetti = total > 60;
  const id = "result-card";

  return (
    <div
      id={id}
      className="p-6 rounded-xl shadow-2xl relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(124,58,237,0.9) 0%, rgba(236,72,153,0.9) 100%)",
        color: "white",
      }}
    >
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      <h2 className="text-3xl font-extrabold mb-2">{category.label}</h2>
      <p className="mb-4 opacity-90">Score: {total}</p>
      <blockquote className="italic mb-6 opacity-95">
        {generateRoast(category.label)}
      </blockquote>

      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-white text-slate-900 rounded-md font-semibold"
        >
          Try again
        </button>

        <button
          onClick={() => {
            alert("Share/export not implemented yet — will use html2canvas");
          }}
          className="px-4 py-2 border border-white rounded-md"
        >
          Share (soon)
        </button>
      </div>
    </div>
  );
}

function generateRoast(label: string): string {
  const roasts: Record<string, string> = {
    "Junior PleasantCoder": "You write comments and floss after commits. Cute.",
    "StackOverflow Enthusiast":
      "You copy solutions and call it engineering. Bold.",
    "Spaghetti Wrangler": "Your app runs on duct tape and prayer. Keep going.",
    "Sh*tty Architect":
      "You design systems that scare the infra team. Respect.",
    "Nuclear Dev": "You don't push to main — you detonate it. Absolute unit.",
  };
  return roasts[label] ?? "You're indescribable and probably dangerous.";
}
