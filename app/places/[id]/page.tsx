import {places} from "@/lib/data";

type PlacePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlacePage({ params }: PlacePageProps) {
  const { id } = await params;
  const place = places.find((item) => item.id === Number(id));

  if (!place) {
    return (
      <main className="min-h-screen bg-white px-6 py-10">
        <section className="mx-auto max-w-3xl">
          <a href="/search" className="text-sm font-semibold text-gray-950 underline">
            Back to search
          </a>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Place not found
          </h1>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-3xl">
        <a href="/search" className="text-sm font-semibold text-gray-950 underline">
          Back to search
        </a>

        <p className="mt-8 text-sm font-medium text-gray-500">
          {place.category} · {place.area}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          {place.name}
        </h1>

        <p className="mt-3 text-lg text-gray-600">{place.price}</p>

        <p className="mt-6 text-gray-700">{place.description}</p>

        <div className="mt-6 rounded-2xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-900">Details</h2>

          <p className="mt-3 text-sm font-medium text-gray-800">
            Address: {place.address}
          </p>

          <div className="mt-3">
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-semibold text-gray-950">
              Source: {place.sourceName}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {place.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={place.mapsUrl}
            target="_blank"
            className="rounded-lg bg-black px-4 py-3 text-center font-medium text-white"
          >
            Open in Google Maps
          </a>

          <a
            href={place.sourceUrl}
            target="_blank"
            className="rounded-lg border border-gray-300 px-4 py-3 text-center font-medium text-gray-900"
          >
            View source
          </a>
        </div>
      </section>
    </main>
  );
}