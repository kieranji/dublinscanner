import { places } from "@/lib/data";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <a href="/" className="text-sm font-semibold text-gray-950 underline">
          Back to home
        </a>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Dublin local map
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-950">
              Explore places near TCD
            </h1>

            <p className="mt-2 text-base font-medium text-gray-800">
              A map-style view for food, cafés, events and student-friendly
              places in Dublin.
            </p>
          </div>

          <a
            href="/search?area=Any&category=Any&budget=9&sort=closest"
            className="rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white"
          >
            View closest results
          </a>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="relative min-h-[420px] rounded-3xl border border-gray-300 bg-gray-100 p-6">
            <div className="absolute left-1/2 top-1/2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
              TCD
            </div>

            {places.map((place, index) => (
              <a
                key={place.id}
                href={`/places/${place.id}`}
                className="absolute rounded-full border border-gray-400 bg-white px-3 py-2 text-xs font-semibold text-gray-950 shadow-sm"
                style={{
                  left: `${20 + index * 14}%`,
                  top: `${25 + index * 11}%`,
                }}
              >
                {place.category}
              </a>
            ))}

            <div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 text-sm font-medium text-gray-800 shadow-sm">
              Map placeholder
              <br />
              Real Mapbox map will be added later.
            </div>
          </div>

          <aside className="rounded-3xl border border-gray-300 p-5">
            <h2 className="text-lg font-bold text-gray-950">Places</h2>

            <div className="mt-4 grid gap-3">
              {places.map((place) => (
                <a
                  key={place.id}
                  href={`/places/${place.id}`}
                  className="rounded-2xl border border-gray-200 p-4 hover:bg-gray-50"
                >
                  <h3 className="font-semibold text-gray-950">{place.name}</h3>

                  <p className="mt-1 text-sm font-medium text-gray-800">
                    {place.category} · {place.area}
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-700">
                    {place.distanceFromTcdKm} km from TCD
                  </p>

                  <p className="mt-2 text-xs font-medium text-gray-700">
                    Lat: {place.latitude}, Lng: {place.longitude}
                  </p>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}