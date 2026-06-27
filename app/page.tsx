import SearchForm from "@/components/SearchForm";

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

        <SearchForm />

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