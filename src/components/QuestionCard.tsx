import type { Question } from "../types/types";

type Props = {
  q: Question;
  value?: number;
  onChange: (qId: string, score: number) => void;
};

export default function QuestionCard({ q, value, onChange }: Props) {
  return (
    <div className="p-4 bg-slate-800/60 rounded-lg shadow-sm border border-slate-700">
      <div className="font-semibold mb-3 text-slate-100">{q.text}</div>
      <div className="flex flex-col gap-2">
        {q.options.map((opt, idx) => (
          <label
            key={idx}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <input
              type="radio"
              name={q.id}
              checked={value === opt.score}
              onChange={() => onChange(q.id, opt.score)}
              className="w-4 h-4"
            />
            <span className="text-sm text-slate-200">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
