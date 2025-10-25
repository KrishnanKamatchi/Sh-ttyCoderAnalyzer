import { useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, X, Download } from "lucide-react";
import { toast } from "sonner";

interface WebcamCaptureProps {
  resultText: string;
  score: number;
  onClose: () => void;
}

export function WebcamCapture({ resultText, score, onClose }: WebcamCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsStreaming(true);
      }
    } catch (error) {
      toast.error("Failed to access camera. Please check permissions.");
      console.error("Camera error:", error);
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsStreaming(false);
    }
  }, [stream]);

  const captureImage = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);

        // Add roast overlay
        ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        ctx.fillRect(0, canvas.height - 120, canvas.width, 120);

        // Add text
        ctx.font = "bold 24px 'Courier New'";
        ctx.fillStyle = "#00ff00";
        ctx.textAlign = "center";
        ctx.fillText(resultText, canvas.width / 2, canvas.height - 80);
        ctx.font = "20px 'Courier New'";
        ctx.fillText(`Score: ${score}/500`, canvas.width / 2, canvas.height - 50);
        ctx.font = "16px 'Courier New'";
        ctx.fillStyle = "#ffff00";
        ctx.fillText("Sh*ttyCoderAnalyzer.dev", canvas.width / 2, canvas.height - 20);

        const imageData = canvas.toDataURL("image/png");
        setCapturedImage(imageData);
        stopCamera();
        toast.success("Shame captured successfully! 📸");
      }
    }
  }, [resultText, score, stopCamera]);

  const downloadImage = useCallback(() => {
    if (capturedImage) {
      const link = document.createElement("a");
      link.download = `shitty-coder-${Date.now()}.png`;
      link.href = capturedImage;
      link.click();
      toast.success("Downloading your shame... 💾");
    }
  }, [capturedImage]);

  const handleClose = useCallback(() => {
    stopCamera();
    onClose();
  }, [stopCamera, onClose]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-2 border-primary bg-card">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl text-primary neon-text">
            📸 Capture Your Shame
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="text-foreground hover:text-primary"
          >
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden border-2 border-primary">
            {!capturedImage ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
                <canvas ref={canvasRef} className="hidden" />
              </>
            ) : (
              <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
            )}
          </div>

          <div className="flex gap-3">
            {!isStreaming && !capturedImage && (
              <Button
                onClick={startCamera}
                className="flex-1 bg-primary text-black hover:bg-primary/80"
              >
                <Camera className="mr-2 h-5 w-5" />
                Start Camera
              </Button>
            )}

            {isStreaming && !capturedImage && (
              <>
                <Button
                  onClick={captureImage}
                  className="flex-1 bg-warning text-black hover:bg-warning/80"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Capture Shame
                </Button>
                <Button
                  onClick={stopCamera}
                  variant="outline"
                  className="border-destructive text-destructive"
                >
                  Cancel
                </Button>
              </>
            )}

            {capturedImage && (
              <>
                <Button
                  onClick={downloadImage}
                  className="flex-1 bg-accent text-black hover:bg-accent/80"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </Button>
                <Button
                  onClick={() => {
                    setCapturedImage(null);
                    startCamera();
                  }}
                  variant="outline"
                  className="border-primary text-primary"
                >
                  Retake
                </Button>
              </>
            )}
          </div>

          <p className="text-sm text-muted-foreground text-center font-mono">
            💀 Your shame will be immortalized forever
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
