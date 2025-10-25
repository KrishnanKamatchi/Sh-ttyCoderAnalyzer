import Confetti from "react-confetti";

export default function ResultCard({ total, category, onRestart }) {
  const showConfetti = total > 70;
  return (
    <div className="p-6 bg-gradient-to-r from-purple-700 to-pink-600 rounded-xl text-white shadow-xl relative">
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      <h2 className="text-2xl font-bold mb-2">Result: {category.label}</h2>
      <p className="mb-4">Score: {total}</p>
      <div className="mb-4 italic">Roast: {generateRoast(category.label)}</div>
      <div className="flex gap-3">
        <button
          onClick={onRestart}
          className="px-4 py-2 bg-white text-slate-900 rounded"
        >
          Try again
        </button>
        <button className="px-4 py-2 border border-white rounded">
          Share (soon)
        </button>
      </div>
    </div>
  );
}

function generateRoast(label) {
  const roasts = {
    "Junior PleasantCoder": "You write comments and floss after commits. Cute.",
    "StackOverflow Enthusiast":
      "You CTRL+C life and CTRL+V into production. Bold.",
    "Spaghetti Wrangler": "Your code is art in a 3AM-hangover kinda way.",
    "Sh*tty Architect": "Architecture by duct tape — but it works, somewhere.",
    "Nuclear Dev": "You don't fix bugs. You redefine the problem space.",
  };
  return roasts[label] || "Congrats, you're a mystery.";
}
