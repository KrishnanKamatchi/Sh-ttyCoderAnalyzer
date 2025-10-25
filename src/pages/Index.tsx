import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultCard } from "@/components/ResultCard";
import { WebcamCapture } from "@/components/WebcamCapture";
import { questions } from "@/data/questions";
import { getResult } from "@/data/results";
import { toast } from "sonner";
import { Code2, Github, Trophy } from "lucide-react";

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [showWebcam, setShowWebcam] = useState(false);

  const isStarted = currentQuestionIndex >= 0;
  const isComplete = currentQuestionIndex >= questions.length;
  const result = isComplete ? getResult(score) : null;

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    toast.success("Let's see how sh*tty you really are! 🎮");
  };

  const handleAnswer = (points: number) => {
    setScore((prev) => prev + points);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex(questions.length);
      }, 300);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(-1);
    setScore(0);
  };

  const justReload = () => {
    alert(
      "You are a f**king idiot... Your shit is gonna lost in the abyss...!",
    );
    window.location.reload();
  };

  const shareResult = () => {
    if (result) {
      const text = `I scored ${score}/600 on the Sh*tty Coder Analyzer! I'm a ${result.title}! 💩🔥\n\nTake the test: ${window.location.href}`;

      if (navigator.share) {
        navigator.share({ text }).catch(() => {
          navigator.clipboard.writeText(text);
          toast.success("Copied to clipboard! Share your shame! 📋");
        });
      } else {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard! Share your shame! 📋");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Chaotic animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-pulse glitch comic-sans text-hot-pink">
          {"</>"}
        </div>
        <div className="absolute top-40 right-20 text-5xl rotate-broken text-warning-orange">
          💩
        </div>
        <div className="absolute bottom-40 left-1/4 text-6xl glitch text-cyber-purple">
          🤖
        </div>
        <div className="absolute top-1/2 right-10 text-4xl chaos-text text-electric-blue impact">
          BUG
        </div>
        <div className="absolute bottom-20 right-1/3 text-7xl rotate-broken comic-sans text-puke-green">
          💀
        </div>
        <div className="absolute top-60 left-1/2 text-3xl chaos-text text-angry-red">
          SEGFAULT
        </div>
      </div>

      {/* Header */}
      <header
        className="border-b-4 border-primary bg-card/80 backdrop-blur-sm sticky top-0 z-40"
        style={{ boxShadow: "0 4px 0px rgba(0,0,0,0.8)" }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Code2 className="h-8 w-8 text-primary glitch" />
            <h1
              className="text-2xl md:text-4xl font-black text-primary chaos-text impact"
              style={{ transform: "rotate(-1deg)" }}
            >
              <button onClick={justReload}>💩 Sh*ttyCoderAnalyzer 💩</button>
            </h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-hot-pink hover-shake"
            onClick={() =>
              window.open(
                "https://github.com/KrishnanKamatchi/Sh-ttyCoderAnalyzer",
                "_blank",
              )
            }
          >
            <Github className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {!isStarted && (
            <div className="w-full max-w-3xl space-y-10 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="space-y-6">
                <h2
                  className="text-5xl md:text-8xl font-black text-primary chaos-text glitch impact uppercase"
                  style={{ transform: "rotate(-2deg)" }}
                >
                  Are You a Sh*tty Coder? 💀
                </h2>
                <p
                  className="text-xl md:text-3xl text-foreground font-black comic-sans"
                  style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.5)" }}
                >
                  Take this brutally offensive quiz to find out! 🔥
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div
                  className="p-6 border-4 border-hot-pink bg-card/80 hover-shake cursor-pointer rotate-broken"
                  style={{
                    boxShadow: "6px 6px 0px rgba(0,0,0,0.6)",
                    transform: "rotate(1deg)",
                  }}
                >
                  <div className="text-5xl mb-3">🎯</div>
                  <h3 className="text-xl font-black text-hot-pink mb-2 comic-sans">
                    10 Savage AF Questions
                  </h3>
                  <p className="text-sm text-foreground font-bold">
                    From Arch Linux to segfaults, we're roasting EVERYTHING.
                  </p>
                </div>
                <div
                  className="p-6 border-4 border-warning-orange bg-card/80 hover-shake cursor-pointer rotate-broken"
                  style={{
                    boxShadow: "6px 6px 0px rgba(0,0,0,0.6)",
                    transform: "rotate(-1deg)",
                  }}
                >
                  <div className="text-5xl mb-3">💀</div>
                  <h3 className="text-xl font-black text-warning-orange mb-2 comic-sans">
                    Brutal F*cking Roasts
                  </h3>
                  <p className="text-sm text-foreground font-bold">
                    Get categorized into hilarious dev disasters. No mercy.
                  </p>
                </div>
                <div
                  className="p-6 border-4 border-cyber-purple bg-card/80 hover-shake cursor-pointer rotate-broken"
                  style={{
                    boxShadow: "6px 6px 0px rgba(0,0,0,0.6)",
                    transform: "rotate(0.5deg)",
                  }}
                >
                  <div className="text-5xl mb-3">📸</div>
                  <h3 className="text-xl font-black text-cyber-purple mb-2 comic-sans">
                    Meme Generator
                  </h3>
                  <p className="text-sm text-foreground font-bold">
                    Capture your shame selfie and share it. Do it, coward.
                  </p>
                </div>
              </div>

              <Button
                onClick={startQuiz}
                size="lg"
                className="text-2xl rotate-broken  md:text-4xl px-16 py-10 bg-hot-pink text-black hover:bg-hot-pink/80 font-black border-8 border-hot-pink hover-shake comic-sans "
                style={{ boxShadow: "8px 8px 0px rgba(0,0,0,0.8)" }}
              >
                💩 Take the f*kin test, I dare u 🖕
              </Button>

              <div className="flex items-center justify-center gap-3 text-base text-muted-foreground font-bold comic-sans">
                <Trophy className="h-5 w-5 text-warning-orange" />
                <span>
                  Over 9000 (Its fake as usual) devs roasted into oblivion...
                </span>
              </div>
            </div>
          )}

          {isStarted && !isComplete && (
            <QuestionCard
              question={questions[currentQuestionIndex]}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}

          {isComplete && result && (
            <ResultCard
              result={result}
              score={score}
              onRestart={restartQuiz}
              onCapture={() => setShowWebcam(true)}
              onShare={shareResult}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t-4 border-primary bg-card/80 backdrop-blur-sm mt-20"
        style={{ boxShadow: "0 -4px 0px rgba(0,0,0,0.8)" }}
      >
        <div className="container mx-auto px-4 py-6 text-center">
          <p
            className="text-base text-foreground font-black comic-sans"
            style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.5)" }}
          >
            Made with 💩 by devs, for devs. No f*cks given. No feelings spared.
            18+ only. 🔥
          </p>
        </div>
      </footer>

      {/* Webcam Modal */}
      {showWebcam && result && (
        <WebcamCapture
          resultText={result.title}
          score={score}
          onClose={() => setShowWebcam(false)}
        />
      )}
    </div>
  );
};

export default Index;
