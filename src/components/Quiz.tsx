import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";
import { QUESTIONS } from "../data/questions";
import { computeScore, mapToCategory } from "../utils/scoring";
import type { AnswersMap, Category } from "../types/types";
import type { JSX } from "react/jsx-dev-runtime";

export default function Quiz(): JSX.Element {
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  function handleChange(qId: string, score: number): void {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setShowResult(true);
  }

  const total = computeScore(answers);
  const maxPossible = QUESTIONS.length * 10;
  const category: Category = mapToCategory(total, maxPossible);

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
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-500 rounded-md font-semibold"
        >
          Reveal my fate
        </button>
      </div>
    </form>
  );
}
