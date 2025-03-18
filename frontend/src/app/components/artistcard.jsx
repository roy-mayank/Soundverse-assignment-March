import Image from "next/image";

export default function ArtistCard({ artist }) {
    return (
        <div className="flex flex-col gap-2 p-4 bg- text-white rounded-lg shadow-md">
            <Image src="" alt={artist.Artist} className="rounded-lg" />
            <div className="justify-between">
                {artist.Genres && artist.Genres.map((genre, index) => (
                    <span key={index} className="text-sm text-gray-500">{genre}</span>
                ))}
            </div>
            <h3 className="text-black font-bold">{artist.Artist}</h3>
            <p className="text-gray-500">{artist.Description}</p>

        </div>
    );
}