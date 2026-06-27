type PlaceCardProps = {
  id: number;
  name: string;
  category: string;
  area: string;
  price: string;
  tags: string[];
};

export default function PlaceCard({
  id,
  name,
  category,
  area,
  price,
  tags,
}: PlaceCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>

          <p className="mt-1 text-sm text-gray-600">
            {category} · {area} · {price}
          </p>
        </div>

        <button className="rounded-lg bg-black px-4 py-2 text-sm text-white">
          Save
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        <a href={`/places/${id}`} className="underline">
          View details
        </a>
        <a href="#" className="underline">
          Open Maps
        </a>
      </div>
    </article>
  );
}