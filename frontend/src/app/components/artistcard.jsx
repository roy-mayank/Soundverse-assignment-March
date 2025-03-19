'use client';
import { useState, useRef } from 'react';

export default function ArtistCard({ artist }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-col gap-3 m-4 text-white rounded-lg shadow-lg overflow-hidden group">
            <div
                className="relative bg-cover bg-center bg-[url(/placeholder.jpg)] w-full h-56 rounded-t-lg"
            >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-black bg-opacity-50 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" /></svg>
                        )}
                    </button>
                </div>
                <audio
                    ref={audioRef}
                    src="/meme.mp3"
                    onEnded={() => setIsPlaying(false)}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-wrap gap-2">
                    {artist.Genres && artist.Genres.map((genre, index) => (
                        <span
                            key={index}
                            className="text-white text-xs font-medium px-2 py-1 rounded-full bg-gray-700 bg-opacity-30 backdrop-blur-sm">
                            {genre}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{artist.Artist}</h3>
                <p className="text-gray-400">{artist.Description}</p>
            </div>
        </div>
    );
}