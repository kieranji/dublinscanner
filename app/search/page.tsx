import PlaceCard from "@/components/PlaceCard";
import { places } from "@/lib/data";

type SearchPageProps = {
  searchParams: Promise<{
    area?: string;
    category?: string;
    budget?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;

  const selectedArea = params.area ?? "Any";
  const selectedCategory = params.category ?? "Any";
  const selectedBudget = Number(params.budget ?? "9");

  const filteredPlaces = places.filter((place) => {
    const areaMatches =
      selectedArea === "Any" ||
      place.area === selectedArea ||
      place.tags.includes(selectedArea);

    const categoryMatches =
      selectedCategory === "Any" || place.category === selectedCategory;

    const budgetMatches =
      selectedBudget === 9 || place.budgetLevel <= selectedBudget;

    return areaMatches && categoryMatches && budgetMatches;
  });

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="text-sm text-gray-500 underline">
          Back to home
        </a>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Search results
        </h1>

        <p className="mt-2 text-gray-600">
          Showing results for {selectedArea} · {selectedCategory} · Budget level{" "}
          {selectedBudget}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <button className="rounded-full border px-4 py-2 text-sm">
            Best match
          </button>
          <button className="rounded-full border px-4 py-2 text-sm">
            Cheapest
          </button>
          <button className="rounded-full border px-4 py-2 text-sm">
            Closest
          </button>
          <button className="rounded-full border px-4 py-2 text-sm">
            Open now
          </button>
        </div>

        {filteredPlaces.length === 0 ? (
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
            {filteredPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                id={place.id}
                name={place.name}
                category={place.category}
                area={place.area}
                price={place.price}
                tags={place.tags}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}