"use client";

import { useEffect, useState } from "react";

type SaveButtonProps = {
  placeId: number;
};

export default function SaveButton({ placeId }: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("savedPlaces") || "[]");
    setIsSaved(savedIds.includes(placeId));
  }, [placeId]);

  function handleSave() {
    const savedIds: number[] = JSON.parse(
      localStorage.getItem("savedPlaces") || "[]"
    );

    let nextSavedIds: number[];

    if (savedIds.includes(placeId)) {
      nextSavedIds = savedIds.filter((savedId) => savedId !== placeId);
    } else {
      nextSavedIds = [...savedIds, placeId];
    }

    localStorage.setItem("savedPlaces", JSON.stringify(nextSavedIds));
    setIsSaved(nextSavedIds.includes(placeId));
  }

  return (
    <button
      onClick={handleSave}
      className={
        isSaved
          ? "rounded-lg border border-gray-400 bg-white px-4 py-2 text-center text-sm font-semibold text-gray-950"
          : "rounded-lg bg-black px-4 py-2 text-center text-sm font-semibold text-white"
      }
    >
      {isSaved ? "Saved" : "Save"}
    </button>
  );
}