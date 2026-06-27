import PlaceCard from "@/components/PlaceCard";

const places = [
  {
    id: 1,
    name: "Cheap Ramen near TCD",
    category: "Food",
    area: "City Centre",
    price: "Under €15",
    tags: ["Asian food", "Cheap", "Near TCD"],
  },
  {
    id: 2,
    name: "Study Café near Trinity",
    category: "Café",
    area: "Near TCD",
    price: "Under €10",
    tags: ["Study spot", "Coffee", "Quiet"],
  },
  {
    id: 3,
    name: "Free Comedy Night",
    category: "Event",
    area: "Temple Bar",
    price: "Free",
    tags: ["Comedy", "Nightlife", "Free"],
  },
  {
    id: 4,
    name: "Student Friendly Pub",
    category: "Pub",
    area: "Camden",
    price: "Under €20",
    tags: ["Drinks", "Group-friendly", "Open late"],
  },
];

export default function SearchPage() {
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
          Here are some student-friendly places and events in Dublin.
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

        <div className="mt-8 grid gap-4">
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              name={place.name}
              category={place.category}
              area={place.area}
              price={place.price}
              tags={place.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}