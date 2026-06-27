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
            <article
              key={place.id}
              className="rounded-2xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {place.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-600">
                    {place.category} · {place.area} · {place.price}
                  </p>
                </div>

                <button className="rounded-lg bg-black px-4 py-2 text-sm text-white">
                  Save
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {place.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 text-sm">
                <a href="#" className="underline">
                  Open Maps
                </a>
                <a href="#" className="underline">
                  View source
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}