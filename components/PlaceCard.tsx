type PlaceCardProps = {
  id: number;
  name: string;
  category: string;
  area: string;
  price: string;
  distanceFromTcdKm: number;
  sourceName: string;
  tags: string[];
  dateLabel?: string;
};

export default function PlaceCard({
  id,
  name,
  category,
  area,
  price,
  distanceFromTcdKm,
  sourceName,
  tags,
  dateLabel,
}: PlaceCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>

          <p className="mt-1 text-sm font-medium text-gray-800">
            {category} · {area} · {price} · {distanceFromTcdKm} km from TCD
          </p>
          
          <p className="mt-2 text-xs font-semibold text-gray-700">
            Source: {sourceName}
          </p>
        </div>

        {dateLabel && (
          <p className="mt-3 text-sm font-semibold text-gray-900">
            {dateLabel}
          </p>
        )}

        <button className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">
          Save
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-sm font-semibold">
        <a href={`/places/${id}`} className="text-gray-950 underline">
          View details
        </a>
        <a href="#" className="text-gray-950 underline">
          Open Maps
        </a>
      </div>
    </article>
  );
}