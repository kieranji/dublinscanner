import PlaceCard from "@/components/PlaceCard";
import {places} from "@/lib/data";
import { getBudgetLabel } from "@/lib/filters";

type SearchPageProps = {
  searchParams: Promise<{
    area?: string;
    category?: string;
    budget?: string;
    source?: string;
    sort?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const selectedArea = params.area ?? "Any";
  const selectedCategory = params.category ?? "Any";
  const selectedBudget = Number(params.budget ?? "9");
  const selectedSource = params.source ?? "Any";
  const selectedSort = params.sort??"best";

  const filteredPlaces = places.filter((place) => {
    const areaMatches =
      selectedArea === "Any" ||
      place.area === selectedArea ||
      place.tags.includes(selectedArea);

    const categoryMatches =
      selectedCategory === "Any" || place.category === selectedCategory;

    const budgetMatches =
      selectedBudget === 9 || place.budgetLevel <= selectedBudget;

    const sourceMatches =
      selectedSource === "Any" || place.sourceName === selectedSource;

    return areaMatches && categoryMatches && budgetMatches;
  });

  const sortedPlaces = [...filteredPlaces].sort((a,b)=>{
    if (selectedSort==="cheapest"){
      return a.budgetLevel - b.budgetLevel;
    }  
    if (selectedSort==="closest"){
      return a.distanceFromTcdKm - b.distanceFromTcdKm;
    }
    return 0;
  });

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-gray-950 underline">
          Back to home
        </a>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Search results
        </h1>

        <p className="mt-2 text-base text-gray-800">
          Showing results for{" "}
          <span className="font-semibold text-gray-950">{selectedArea}</span> ·{" "}
          <span className="font-semibold text-gray-950">{selectedCategory}</span> ·{" "}
          <span className="font-semibold text-gray-950">
            {getBudgetLabel(selectedBudget)}
          </span>{" "}
          · <span className="font-semibold text-gray-950">{selectedSource}</span>
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <a
            href={`/search?area=${selectedArea}&category=${selectedCategory}&budget=${selectedBudget}&source=${selectedSource}&sort=best`}
            className={
              selectedSort === "best"
                ? "rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-gray-400 bg-white px-4 py-2 text-sm font-semibold text-gray-950"
            }
          >
            Best match
          </a>

          <a
            href={`/search?area=${selectedArea}&category=${selectedCategory}&budget=${selectedBudget}&source=${selectedSource}&sort=cheapest`}
            className={
              selectedSort === "cheapest"
                ? "rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-gray-400 bg-white px-4 py-2 text-sm font-semibold text-gray-950"
            }
          >
            Cheapest
          </a>

          <a
            href={`/search?area=${selectedArea}&category=${selectedCategory}&budget=${selectedBudget}&source=${selectedSource}&sort=closest`}
            className={
              selectedSort === "closest"
                ? "rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
                : "rounded-full border border-gray-400 bg-white px-4 py-2 text-sm font-semibold text-gray-950"
            }
          >
            Closest
          </a>

          <button className="rounded-full border border-gray-400 bg-white px-4 py-2 text-sm font-semibold text-gray-950">
            Open now
          </button>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a href="/map" className="rounded-lg border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-gray-50">
            View on map
          </a>

          <a
            href="/saved"
            className="rounded-lg border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-950 hover:bg-gray-50"
          >
            Saved places
          </a>
        </div>

        {sortedPlaces.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              No results found
            </h2>
            <p className="mt-2 text-gray-600">
              Try changing the area, category or budget.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4">
            {sortedPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                id={place.id}
                name={place.name}
                category={place.category}
                area={place.area}
                price={place.price}
                distanceFromTcdKm={place.distanceFromTcdKm}
                sourceName={place.sourceName}
                dateLabel={place.dateLabel}
                mapsUrl={place.mapsUrl}
                sourceUrl={place.sourceUrl}
                tags={place.tags}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}