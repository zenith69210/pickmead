import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [videoUrl, setVideoUrl] = useState(null);

  const ads = [
    {
      title: "Tuto Cuisine Express",
      description: "Découvrez la recette rapide avec ce robot multifonction.",
      image: "https://source.unsplash.com/400x250/?cooking,kitchen",
      video: "https://www.youtube.com/embed/1dH0T-0tJ74"
    },
    {
      title: "Mini-Doc Beauté",
      description: "L’histoire du parfum français à travers les âges.",
      image: "https://source.unsplash.com/400x250/?beauty,perfume",
      video: "https://www.youtube.com/embed/lQKi06z-u_s"
    },
    {
      title: "Clip Pop Jeune Talent",
      description: "Un nouvel artiste à découvrir avec SoundSpot.",
      image: "https://source.unsplash.com/400x250/?music,concert",
      video: "https://www.youtube.com/embed/NpEaa2P7qZI"
    },
    {
      title: "Conseils Tech Influenceur",
      description: "Astuce rapide pour booster ton setup gaming !",
      image: "https://source.unsplash.com/400x250/?gaming,setup",
      video: "https://www.youtube.com/embed/x4WjC6epHYc"
    },
    {
      title: "Workout Flash",
      description: "15 min d'entraînement intense à la maison.",
      image: "https://source.unsplash.com/400x250/?fitness,workout",
      video: "https://www.youtube.com/embed/VHyGqsPOUHs"
    },
    {
      title: "Mode Durable",
      description: "Découvrez la tendance éthique du moment.",
      image: "https://source.unsplash.com/400x250/?fashion,eco",
      video: "https://www.youtube.com/embed/H1IYB9B4r7U"
    },
    {
      title: "Smartphone 2025",
      description: "La nouvelle génération de mobile est là.",
      image: "https://source.unsplash.com/400x250/?smartphone,tech",
      video: "https://www.youtube.com/embed/h2YfpKXjwrM"
    },
    {
      title: "Voyage Virtuel",
      description: "Explorez des destinations depuis votre salon.",
      image: "https://source.unsplash.com/400x250/?travel,virtual",
      video: "https://www.youtube.com/embed/wF4cT9bYcO8"
    },
  ];

  return (
    <div className="p-6 space-y-12">
      {videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="Contenu vidéo"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center p-4">
              <button
                onClick={() => setVideoUrl(null)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                ✖ Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">Vos contenus sponsorisés personnalisés</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ads.map((ad, index) => (
          <div key={index} className="rounded-2xl shadow-md overflow-hidden bg-white">
            <img src={ad.image} alt={ad.title} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h2 className="text-sm font-semibold mb-1">{ad.title}</h2>
              <p className="text-xs text-gray-600 mb-2">{ad.description}</p>
              <button
                onClick={() => setVideoUrl(ad.video)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-2 py-1 rounded"
              >
                ▶ Regarder maintenant
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
