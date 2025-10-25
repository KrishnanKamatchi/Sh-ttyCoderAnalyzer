import { Result } from "@/data/results";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Camera, RotateCcw } from "lucide-react";

interface ResultCardProps {
  result: Result;
  score: number;
  onRestart: () => void;
  onCapture: () => void;
  onShare: () => void;
}

export function ResultCard({ result, score, onRestart, onCapture, onShare }: ResultCardProps) {
  return (
    <div className="w-full max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card 
        className={`border-8 border-${result.color} bg-card/90 backdrop-blur-sm rotate-broken`}
        style={{ boxShadow: '12px 12px 0px rgba(0,0,0,0.8)' }}
      >
        <CardHeader className="text-center space-y-6 comic-sans">
          <div className="text-9xl animate-bounce glitch">{result.emoji}</div>
          <CardTitle className={`text-4xl md:text-6xl font-black text-${result.color} chaos-text impact uppercase`} style={{ transform: 'rotate(-2deg)' }}>
            {result.title}
          </CardTitle>
          <CardDescription className="text-3xl text-foreground font-black comic-sans" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}>
            💀 Score: {score} / 600 💀
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-6 text-center">
            <p className="text-2xl md:text-3xl text-primary font-black comic-sans" style={{ transform: 'rotate(1deg)' }}>
              {result.description}
            </p>
            <div 
              className={`p-8 border-4 border-${result.color} bg-${result.color}/20 rotate-broken`}
              style={{ 
                boxShadow: '6px 6px 0px rgba(0,0,0,0.6)',
                transform: 'rotate(-1deg)'
              }}
            >
              <p className="text-lg md:text-xl text-foreground font-bold comic-sans leading-relaxed">
                🔥💀🔥 <span className="font-black uppercase impact">GET F*CKING ROASTED:</span> {result.roast}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <Button
              onClick={onCapture}
              variant="outline"
              className="w-full border-4 border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black font-black comic-sans text-lg h-auto py-4"
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.5)', transform: 'rotate(-1deg)' }}
            >
              <Camera className="mr-2 h-6 w-6" />
              📸 Shame Selfie
            </Button>
            <Button
              onClick={onShare}
              variant="outline"
              className="w-full border-4 border-warning-orange text-warning-orange hover:bg-warning-orange hover:text-black font-black comic-sans text-lg h-auto py-4"
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.5)', transform: 'rotate(1deg)' }}
            >
              <Share2 className="mr-2 h-6 w-6" />
              🔥 Share Roast
            </Button>
            <Button
              onClick={onRestart}
              variant="outline"
              className="w-full border-4 border-hot-pink text-hot-pink hover:bg-hot-pink hover:text-black font-black comic-sans text-lg h-auto py-4"
              style={{ boxShadow: '4px 4px 0px rgba(0,0,0,0.5)', transform: 'rotate(-0.5deg)' }}
            >
              <RotateCcw className="mr-2 h-6 w-6" />
              🔄 Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
