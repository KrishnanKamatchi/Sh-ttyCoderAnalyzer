export default function QuestionCard({ q, value, onChange }) {
  return (
    <div className="p-4 bg-slate-800 rounded-lg shadow-md">
      <div className="font-semibold mb-2">{q.text}</div>
      <div className="space-y-2">
        {q.options.map((opt, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name={q.id}
              checked={value === opt.score}
              onChange={() => onChange(q.id, opt.score)}
              className="w-4 h-4"
            />
            <span className="text-sm">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
