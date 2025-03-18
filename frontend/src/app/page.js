import ArtistCard from "./components/artistcard";

export default async function Home() {
  const data = await fetch("http://127.0.0.1:8000/");
  const json = await data.json();
  console.log(json);

  return (
    <div className="min-h-screen min-w-screen flex justify-center bg-gradient-to-tl from-neutral-950 to-purple-500 from-80% to-100% sm:bg-black">
      <div className="text-white text-start p-6 pt-20 w-[75%] gap-6 flex flex-col">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl">
            Explore <strong>DNA</strong>
          </h2>
          <p className="text-gray-500 text-sm">
            One of a kind AI Music experience, powered by real artists and
            musicians.
          </p>
        </div>
        <div>
          {json.map((artist) => (
            <ArtistCard key={artist.Artist} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
