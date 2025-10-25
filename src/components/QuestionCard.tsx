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
  return (
    <Card
      className="w-full max-w-3xl border-4 border-primary bg-card/80 backdrop-blur-sm broken-glow rotate-broken"
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
          return (
            <Button
              key={index}
              onClick={() => onAnswer(option.points)}
              variant="outline"
              className={`w-full text-left justify-start h-auto p-4 border-4 border-${colors[index % 4]} hover:border-${colors[index % 4]} hover:bg-${colors[index % 4]}/20 hover-shake transition-all group comic-sans font-bold text-base md:text-lg`}
              style={{
                transform: `rotate(${rotation[index % 4]}deg)`,
                boxShadow: "4px 4px 0px rgba(0,0,0,0.5)",
              }}
            >
              <span
                className={`text-${colors[index % 4]} mr-3 text-xl font-black`}
              >
                {String.fromCharCode(65 + index)})
              </span>
              <span className="text-foreground group-hover:text-foreground transition-colors">
                {option.text}
              </span>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
