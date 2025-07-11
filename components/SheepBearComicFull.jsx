
import { useState } from "react";

const panelCaptions = [
  "When I Saw You", "Late Night Rain", "My Sheep", "I Missed You",
  "Bear’s Confession", "Pillow War", "You’re Still Here", "Torn Message",
  "The Break", "Echo Silence", "Why’d You Go?", "Coming Back",
  "Again, Again", "Our Stupid Song", "Almost Lost", "I Don’t Care",
  "It’s Still You", "Lay With Me", "Stay"
];

export default function SheepBearComicFull() {
  const [errorPanels, setErrorPanels] = useState([]);

  const handleImageError = (index) => {
    setErrorPanels((prev) => [...new Set([...prev, index])]);
  };

  return (
    <main className="p-6 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">🐻 Bear & 🐑 Sheep: The Full Comic</h1>
      <p className="text-lg italic mb-8">Every mural. Every echo. Bear’s POV, Sheep’s silence.</p>
      <div className="text-sm text-gray-500 italic mb-4">🔊 Voice Playback and Echo Mode Coming Soon</div>
      <div className="text-sm text-gray-500 italic mb-6">📱 Mobile App Export Supported</div>

      <div className="space-y-12">
        {panelCaptions.map((caption, i) => (
          <div key={i} className="transition-opacity duration-500 opacity-0 animate-fade-in">
            <img
              src={errorPanels.includes(i + 1) ? "/fallback.png" : `/panel-${i + 1}.png`}
              alt={`Panel ${i + 1}`}
              onError={() => handleImageError(i + 1)}
              className="rounded-xl shadow-md w-full max-w-4xl mx-auto mb-2"
            />
            <p className="text-lg italic text-gray-700">{caption}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
