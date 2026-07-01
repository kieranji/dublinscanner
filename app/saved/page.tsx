"use client";

import { useEffect, useState } from "react";
import { places, type Place } from "@/lib/data";
import PlaceCard from "@/components/PlaceCard";

export default function SavedPage() {
  const [savedPlaces, setSavedPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("savedPlaces") || "[]");

    const matchedPlaces = places.filter((place) =>
      savedIds.includes(place.id)
    );

    setSavedPlaces(matchedPlaces);
  }, []);

  function clearSavedPlaces() {
    localStorage.removeItem("savedPlaces");
    setSavedPlaces([]);
  }

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="text-sm font-semibold text-gray-950 underline">
          Back to home
        </a>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Saved places
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-950">
              Your saved Dublin ideas
            </h1>

            <p className="mt-2 text-base font-medium text-gray-800">
              Places and events you saved while exploring DublinScanner.
            </p>
          </div>

          {savedPlaces.length > 0 && (
            <button
              onClick={clearSavedPlaces}
              className="rounded-lg border border-gray-400 px-4 py-3 text-sm font-semibold text-gray-950"
            >
              Clear saved
            </button>
          )}
        </div>

        {savedPlaces.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-gray-300 p-6">
            <h2 className="text-xl font-bold text-gray-950">
              No saved places yet
            </h2>

            <p className="mt-2 font-medium text-gray-800">
              Go to search results and save a few places or events.
            </p>

            <a
              href="/search?area=Any&category=Any&budget=9&source=Any&sort=best"
              className="mt-4 inline-flex rounded-lg bg-black px-4 py-3 font-semibold text-white"
            >
              Browse places
            </a>
          </div>
        ) : (
          <div className="mt-8 grid gap-4">
            {savedPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                id={place.id}
                name={place.name}
                category={place.category}
                area={place.area}
                price={place.price}
                distanceFromTcdKm={place.distanceFromTcdKm}
                sourceName={place.sourceName}
                dateLabel={place.dateLabel}
                mapsUrl={place.mapsUrl}
                tags={place.tags}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}