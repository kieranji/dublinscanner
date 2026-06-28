"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();

  const [area, setArea] = useState("Near TCD");
  const [category, setCategory] = useState("Food");
  const [budget, setBudget] = useState("2");
  const [source, setSource] = useState("Any");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams({
      area,
      category,
      budget,
      source,
    });

    router.push(`/search?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-gray-200 p-4 shadow-sm"
    >
      <label className="block text-sm font-semibold text-gray-900"></label>
      <select
        value={area}
        onChange={(event) => setArea(event.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-400 bg-white p-3 text-base font-medium text-gray-900"
      >
        <option>Near TCD</option>
        <option>City Centre</option>
        <option>Temple Bar</option>
        <option>Camden</option>
        <option>Rathmines</option>
        <option>Smithfield</option>
        <option>Any</option>
      </select>

      <label className="mt-4 block text-sm font-semibold text-gray-900">
        What do you want?
      </label>
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-400 bg-white p-3 text-base font-medium text-gray-900"
      >
        <option>Food</option>
        <option>Café</option>
        <option>Event</option>
        <option>Pub</option>
        <option>Any</option>
      </select>

      <label className="mt-4 block text-sm font-semibold text-gray-900">
        Budget
      </label>
      <select
        value={budget}
        onChange={(event) => setBudget(event.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-400 bg-white p-3 text-base font-medium text-gray-900"
      >
        <option value="0">Free</option>
        <option value="1">Under €10</option>
        <option value="2">Under €20</option>
        <option value="9">Any</option>
      </select>

      <label className="mt-4 block text-sm font-semibold text-gray-900">
        Source
      </label>
      
      <select
        value={source}
        onChange={(event) => setSource(event.target.value)}
        className="mt-2 w-full rounded-lg border border-gray-400 bg-white p-3 text-base font-medium text-gray-900"
      >
        <option>Any</option>
        <option>Google Maps</option>
        <option>Eventbrite</option>
        <option>Instagram</option>
        <option>Manual curated</option>
      </select>

      <button className="mt-6 w-full rounded-lg bg-black px-4 py-3 text-base font-semibold text-white">
        Search Dublin
      </button>
    </form>
  );
}