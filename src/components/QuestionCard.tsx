import { Question } from "@/data/questions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface QuestionCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (points: number) => void;
}

export function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  // map your color names to actual hex / rgba or Tailwind-safe color classes
  const colorMap: Record<string, { border: string; text: string; bg: string }> =
    {
      "hot-pink": {
        border: "#FF4D8D",
        text: "#FF4D8D",
        bg: "rgba(255,77,141,0.12)",
      },
      "cyber-purple": {
        border: "#8A5CFF",
        text: "#8A5CFF",
        bg: "rgba(138,92,255,0.12)",
      },
      "warning-orange": {
        border: "#FF8A3D",
        text: "#FF8A3D",
        bg: "rgba(255,138,61,0.12)",
      },
      "electric-blue": {
        border: "#3DB4FF",
        text: "#3DB4FF",
        bg: "rgba(61,180,255,0.12)",
      },
    };

  return (
    <Card
      className="w-full max-w-3xl border-4 border-primary bg-card/80 backdrop-blur-sm broken-glow rotate-broken overflow-hidden"
      style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}
    >
      <CardHeader className="comic-sans">
        <CardDescription className="text-muted-foreground text-sm font-bold uppercase tracking-wider">
          💀 Question {currentQuestion} of {totalQuestions} 💀
        </CardDescription>
        <CardTitle
          className="text-2xl md:text-4xl font-black text-primary chaos-text impact"
          style={{ transform: "rotate(-1deg)" }}
        >
          {question.question}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {question.options.map((option, index) => {
          const colors = [
            "hot-pink",
            "cyber-purple",
            "warning-orange",
            "electric-blue",
          ];
          const rotation = [1, -1, 1.5, -0.5];
          const colorKey = colors[index % colors.length];
          const colorVals = colorMap[colorKey];

          // create a stable key: prefer question.id, fallback to a short sanitized question string
          const qKey =
            (question as Question).id ??
            question.question
              .slice(0, 40)
              .replace(/\s+/g, "-")
              .replace(/[^a-zA-Z0-9-_]/g, "");
          const itemKey = `${qKey}-${index}`;

          return (
            <Button
              key={itemKey}
              onClick={(e) => {
                onAnswer(option.points);
                // remove focus so :focus styles don't persist into the next render
                (e.currentTarget as HTMLButtonElement).blur();
              }}
              variant="outline"
              className={`w-full text-left justify-start h-auto p-3 md:p-4 border-4 hover-shake transition-all group comic-sans font-bold text-sm md:text-base`}
              style={{
                transform: `rotate(${rotation[index % 4]}deg)`,
                boxShadow: "4px 4px 0px rgba(0,0,0,0.5)",
                borderColor: colorVals.border,
                minHeight: 56,
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 w-full">
                <span
                  className="mr-0 md:mr-2 text-xl md:text-2xl font-black flex-shrink-0"
                  style={{ color: colorVals.text }}
                >
                  {String.fromCharCode(65 + index)})
                </span>

                <p className="text-foreground group-hover:text-foreground transition-colors whitespace-normal break-words text-left m-0">
                  {option.text}
                </p>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
