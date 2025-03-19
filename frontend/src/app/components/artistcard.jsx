import Image from "next/image";

export default function ArtistCard({ artist }) {
    return (
        <div className="flex flex-col gap-2 p-4 text-white rounded-lg shadow-md justify-between mx-3">
            <div className="imagehcontainer bg-[url(/placeholder.jpg)] bg-cover bg-center rounded-lg w-46 h-50">

            </div>
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