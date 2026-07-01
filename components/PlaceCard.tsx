import SaveButton from "./SaveButton";

type PlaceCardProps = {
  id: number;
  name: string;
  category: string;
  area: string;
  price: string;
  distanceFromTcdKm: number;
  sourceName: string;
  dateLabel?: string;
  mapsUrl: string;
  sourceUrl: string;
  tags: string[];
};

export default function PlaceCard({
  id,
  name,
  category,
  area,
  price,
  distanceFromTcdKm,
  sourceName,
  dateLabel,
  mapsUrl,
  sourceUrl,
  tags,
}: PlaceCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>

          <p className="mt-1 text-sm font-medium text-gray-800">
            {category} · {area} · {price} · {distanceFromTcdKm} km from TCD
          </p>

          <div className="mt-3">
            <span className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-semibold text-gray-950">
              Source: {sourceName}
            </span>
          </div>

          {dateLabel && (
            <p className="mt-3 text-sm font-semibold text-gray-900">
              {dateLabel}
            </p>
          )}
        </div>

        <SaveButton placeId={id} />
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

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-gray-950 underline"
        >
          Open Maps
        </a>
        

        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="text-gray-950 underline"
        >
          View source
        </a>
      </div>
    </article>
  );
}