import { useState } from "react";
import { Mic, Play } from "lucide-react";

export default function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", audioUrl: "/sample-reply.mp3" }, // Replace with real audio
  ]);

  const handleRecord = () => {
    setIsRecording(true);

    // Simulate recording logic
    setTimeout(() => {
      setIsRecording(false);

      const userVoice = { from: "user", audioUrl: "/sample-user.mp3" };
      const botReply = { from: "bot", audioUrl: "/sample-reply.mp3" };

      setMessages((prev) => [...prev, userVoice, botReply]);

      // Optional: auto play user's voice after recording
      const audio = new Audio(userVoice.audioUrl);
      audio.play();
    }, 2000); // shorter recording simulation
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="p-3 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-base font-semibold">🎤 VoiceBot Chat</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-2 rounded-xl flex items-center gap-2 text-sm ${
              msg.from === "user"
                ? "bg-blue-600 ml-auto"
                : "bg-gray-800 mr-auto"
            }`}
          >
            <Play size={16} />
            <audio controls src={msg.audioUrl} className="w-full" />
          </div>
        ))}
      </div>

      {/* Voice Input */}
      <div className="p-3 border-t border-gray-800">
        <div className="flex items-center justify-center">
          <button
            onClick={handleRecord}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition ${
              isRecording
                ? "bg-red-600 animate-pulse"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <Mic size={24} />
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-1">
          {isRecording ? "Recording..." : "Tap to record"}
        </p>
      </div>
    </div>
  );
}
