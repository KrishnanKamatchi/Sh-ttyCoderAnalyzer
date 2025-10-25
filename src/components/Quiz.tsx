import QuestionCard from "./QuestionCard";
import { QUESTIONS } from "../data/questions";
import { computeScore, mapToCategory } from "../utils/scoring";
import ResultCard from "./ResultCard";
import { useState } from "react";

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  function handleChange(qId, score) {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowResult(true);
  }

  const total = computeScore(answers);
  const category = mapToCategory(total, QUESTIONS.length * 10);

  if (showResult) {
    return (
      <ResultCard
        total={total}
        category={category}
        onRestart={() => {
          setAnswers({});
          setShowResult(false);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {QUESTIONS.map((q) => (
        <QuestionCard
          key={q.id}
          q={q}
          value={answers[q.id]}
          onChange={handleChange}
        />
      ))}
      <div className="flex gap-3">
        <button type="submit" className="px-4 py-2 bg-emerald-500 rounded">
          Reveal my fate
        </button>
      </div>
    </form>
  );
}
