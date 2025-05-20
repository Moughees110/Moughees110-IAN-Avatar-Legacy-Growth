import { useEffect, useState } from "react";
import { PhoneOff, MicOff, Volume2 } from "lucide-react";

export default function LiveCall() {
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number): string => {
    const mins = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const remSecs = (secs % 60).toString().padStart(2, "0");
    return `${mins}:${remSecs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-white bg-gray-950">
      <div className="text-2xl font-semibold mb-2">
        Live Call with AI Assistant
      </div>
      <div className="text-gray-400 mb-6">
        Call Duration: {formatTime(seconds)}
      </div>

      {/* AI Avatar or Waveform Placeholder */}
      <div className="w-40 h-40 bg-blue-600 rounded-full mb-6 flex items-center justify-center shadow-lg">
        <span className="text-xl font-bold">AI</span>
      </div>

      {/* Call Controls */}
      <div className="flex space-x-6">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition"
        >
          <MicOff
            className={`h-6 w-6 ${isMuted ? "text-red-500" : "text-white"}`}
          />
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition"
          onClick={() => alert("Call ended")}
        >
          <PhoneOff className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setSpeakerOn(!speakerOn)}
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition"
        >
          <Volume2
            className={`h-6 w-6 ${speakerOn ? "text-green-400" : "text-white"}`}
          />
        </button>
      </div>
    </div>
  );
}
