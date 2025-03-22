import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [videoUrl, setVideoUrl] = useState(null);

  const ads = [
    {
      title: "Tuto Cuisine Express",
      description: "Découvrez la recette rapide avec ce robot multifonction.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=400&h=250&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Mini-Doc Beauté",
      description: "L’histoire du parfum français à travers les âges.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=400&h=250&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Clip Pop Jeune Talent",
      description: "Un nouvel artiste à découvrir, en partenariat avec SoundSpot.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=400&h=250&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Conseils Tech Influenceur",
      description: "Astuce rapide pour booster ton setup gaming !",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=400&h=250&q=80",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ads.map((ad, index) => (
          <div key={index} className="rounded-2xl shadow-md overflow-hidden bg-white">
            <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{ad.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{ad.description}</p>
              <button
                onClick={() => setVideoUrl(ad.video)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded"
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