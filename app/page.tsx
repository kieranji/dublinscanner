import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-gray-800">
          Dublin local discovery
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          Find food, events and things to do in Dublin
        </h1>

        <p className="mt-4 text-lg font-medium text-gray-800">
          A student-friendly discovery platform for cheap eats, cafés, pubs,
          events and weekend plans.
        </p>

        <SearchForm />

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-gray-100 p-4 font-semibold text-gray-900">Cheap eats near TCD</div>
          <div className="rounded-xl bg-gray-100 p-4 font-semibold text-gray-900">
            Free events this weekend
          </div>
          <div className="rounded-xl bg-gray-100 p-4 font-semibold text-gray-900">Study cafés</div>
        </div>

        <div className="mt-6">
          <a
            href="/map"
            className="inline-flex rounded-lg border border-gray-400 px-4 py-3 font-semibold text-gray-950"
          >
            Open Dublin map
          </a>

          <a
            href="/about"
            className="inline-flex rounded-lg border border-gray-400 px-4 py-3 font-semibold text-gray-950"
          >
            About this project
          </a>

          <a
            href="/saved"
            className="inline-flex rounded-lg border border-gray-400 px-4 py-3 font-semibold text-gray-950"
          >
            Saved places
          </a>
        </div>
        
      </section>
    </main>
  );
}