export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-gray-500">
          Dublin local discovery
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          Find food, events and things to do in Dublin
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          A student-friendly discovery platform for cheap eats, cafés, pubs,
          events and weekend plans.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 p-4 shadow-sm">
          <label className="block text-sm font-medium text-gray-700">
            Where?
          </label>
          <select className="mt-2 w-full rounded-lg border border-gray-300 p-3">
            <option>Near TCD</option>
            <option>City Centre</option>
            <option>Rathmines</option>
            <option>Smithfield</option>
          </select>

          <label className="mt-4 block text-sm font-medium text-gray-700">
            What do you want?
          </label>
          <select className="mt-2 w-full rounded-lg border border-gray-300 p-3">
            <option>Food</option>
            <option>Cafés</option>
            <option>Events</option>
            <option>Pubs</option>
            <option>Study spots</option>
          </select>

          <label className="mt-4 block text-sm font-medium text-gray-700">
            Budget
          </label>
          <select className="mt-2 w-full rounded-lg border border-gray-300 p-3">
            <option>Free</option>
            <option>Under €10</option>
            <option>Under €20</option>
            <option>Any</option>
          </select>

          <a
            href="/search"
            className="mt-6 block w-full rounded-lg bg-black px-4 py-3 text-center font-medium text-white"
          >
          Search Dublin
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-gray-100 p-4">Cheap eats near TCD</div>
          <div className="rounded-xl bg-gray-100 p-4">
            Free events this weekend
          </div>
          <div className="rounded-xl bg-gray-100 p-4">Study cafés</div>
        </div>
      </section>
    </main>
  );
}