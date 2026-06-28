export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-gray-950 underline">
          Back to home
        </a>

        <p className="mt-8 text-sm font-semibold text-gray-800">
          About DublinScanner
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950">
          A local discovery platform for Dublin students
        </h1>

        <p className="mt-6 text-lg font-medium text-gray-800">
          DublinScanner helps students discover food, cafés, events, pubs,
          study spots and low-budget things to do in Dublin.
        </p>

        <div className="mt-8 grid gap-4">
          <section className="rounded-2xl border border-gray-300 p-5">
            <h2 className="text-xl font-bold text-gray-950">
              What problem does it solve?
            </h2>

            <p className="mt-3 font-medium text-gray-800">
              Local information is spread across many platforms such as Google
              Maps, Eventbrite, Instagram, official websites and student group
              chats. DublinScanner brings this information into one searchable
              place.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-300 p-5">
            <h2 className="text-xl font-bold text-gray-950">
              How is it different from food delivery apps?
            </h2>

            <p className="mt-3 font-medium text-gray-800">
              DublinScanner does not handle delivery, payments or bookings.
              Instead, it works like a local-life search engine: users compare
              options and then open the original source to book, navigate or
              learn more.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-300 p-5">
            <h2 className="text-xl font-bold text-gray-950">
              Where does the data come from?
            </h2>

            <p className="mt-3 font-medium text-gray-800">
              The first version uses manually curated demo data. Future versions
              can include real Dublin data collected from public sources and
              stored in a database.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-300 p-5">
            <h2 className="text-xl font-bold text-gray-950">
              Current MVP features
            </h2>

            <ul className="mt-3 list-inside list-disc space-y-2 font-medium text-gray-800">
              <li>Search by area, category, budget and source</li>
              <li>Sort by cheapest or closest to TCD</li>
              <li>View place details and external source links</li>
              <li>Explore places on a map-style page</li>
              <li>Use structured data for future database migration</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}