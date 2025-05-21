
import { useEffect, useState } from "react";
import { PhoneOff, MicOff, Mic, Volume2, VolumeX, User } from "lucide-react";

export default function LiveCall() {
  const [seconds, setSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);
  const [callEnded, setCallEnded] = useState(false);

  useEffect(() => {
    if (callEnded) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [callEnded]);

  const formatTime = (secs: number): string => {
    const mins = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const remSecs = (secs % 60).toString().padStart(2, "0");
    return `${mins}:${remSecs}`;
  };

  const handleEndCall = () => {
    setCallEnded(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="text-3xl font-bold mb-2">
        {callEnded ? "Call Ended" : "Live Call with AI Assistant"}
      </div>
      <div className="text-gray-400 mb-6 text-sm">
        {callEnded ? "Duration: " : "Call Duration: "}
        {formatTime(seconds)}
      </div>

      {/* AI Avatar / Waveform */}
      <div className="relative w-40 h-40 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center mb-6 overflow-hidden">
        {callEnded ? (
          <User className="h-12 w-12 text-white" />
        ) : (
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-white animate-pulse"
                style={{
                  height: `${10 + Math.random() * 40}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      {!callEnded && (
        <div className="flex space-x-8">
          {/* Mute/Unmute */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition shadow-lg"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <MicOff className="h-6 w-6 text-red-500" />
            ) : (
              <Mic className="h-6 w-6 text-white" />
            )}
          </button>

          {/* End Call */}
          <button
            onClick={handleEndCall}
            className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition shadow-lg"
            aria-label="End Call"
          >
            <PhoneOff className="h-6 w-6 text-white" />
          </button>

          {/* Speaker Toggle */}
          <button
            onClick={() => setSpeakerOn(!speakerOn)}
            className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition shadow-lg"
            aria-label={speakerOn ? "Speaker Off" : "Speaker On"}
          >
            {speakerOn ? (
              <Volume2 className="h-6 w-6 text-green-400" />
            ) : (
              <VolumeX className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      )}

      {/* Call Ended Message */}
      {callEnded && (
        <div className="mt-6 text-gray-300 text-sm">
          Thank you for calling. Please reconnect to start a new session.
        </div>
      )}
    </div>
  );
}
