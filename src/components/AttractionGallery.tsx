"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Attraction } from "@/lib/attractions";
import {
  regions,
  types,
  regionLabelsEN,
  typeLabelsEN,
  regionColors,
} from "@/lib/attractions";

/* ── Attraction Card ────────────────────────────────── */
function AttractionCard({ attraction }: { attraction: Attraction }) {
  const color = regionColors[attraction.region] || "#555";
  return (
    <Link
      href={`/attractions/${attraction.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Image placeholder with gradient */}
      <div
        className="relative h-52 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}cc 0%, ${color}88 50%, ${color}44 100%)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/30 text-6xl font-serif">
            {attraction.name[0]}
          </span>
        </div>
        {/* Type badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded-full text-primary">
          {typeLabelsEN[attraction.type] || attraction.type}
        </span>
        {/* Country badge */}
        <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
          {attraction.country}
        </span>
      </div>
      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-primary mb-1 group-hover:text-primary-light transition-colors leading-snug">
          {attraction.name}
        </h3>
        <p className="text-sm text-muted mb-3">
          {attraction.englishName} &middot; {attraction.city}
        </p>
        <p className="text-sm text-muted-light leading-relaxed line-clamp-2">
          {attraction.description}
        </p>
      </div>
    </Link>
  );
}

/* ── Filter Pill ────────────────────────────────────── */
function FilterPill({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        active
          ? "bg-primary text-white shadow-sm"
          : "bg-surface text-muted hover:bg-surface-dark hover:text-primary"
      }`}
    >
      {label}
      {count !== undefined && (
        <span
          className={`text-xs ${active ? "text-white/70" : "text-muted-light"}`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

/* ── Main Gallery ───────────────────────────────────── */
export function AttractionGallery({
  attractions,
}: {
  attractions: Attraction[];
}) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return attractions.filter((a) => {
      if (selectedRegion && a.region !== selectedRegion) return false;
      if (selectedType && a.type !== selectedType) return false;
      return true;
    });
  }, [attractions, selectedRegion, selectedType]);

  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const base = selectedType
      ? attractions.filter((a) => a.type === selectedType)
      : attractions;
    for (const a of base) counts[a.region] = (counts[a.region] || 0) + 1;
    return counts;
  }, [attractions, selectedType]);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const base = selectedRegion
      ? attractions.filter((a) => a.region === selectedRegion)
      : attractions;
    for (const a of base) counts[a.type] = (counts[a.type] || 0) + 1;
    return counts;
  }, [attractions, selectedRegion]);

  return (
    <section id="destinations" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Explore All Destinations
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            100 carefully curated hidden gems across 20+ European countries.
            Filter by region or type to find your next adventure.
          </p>
        </div>

        {/* Filters */}
        <div id="regions" className="mb-10 space-y-4">
          {/* Region filter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-light mb-3 font-medium">
              Region
            </h4>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All Regions"
                active={selectedRegion === null}
                onClick={() => setSelectedRegion(null)}
                count={attractions.length}
              />
              {regions.map((r) => (
                <FilterPill
                  key={r}
                  label={regionLabelsEN[r]}
                  active={selectedRegion === r}
                  onClick={() =>
                    setSelectedRegion(selectedRegion === r ? null : r)
                  }
                  count={regionCounts[r] || 0}
                />
              ))}
            </div>
          </div>

          {/* Type filter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-light mb-3 font-medium">
              Type
            </h4>
            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All Types"
                active={selectedType === null}
                onClick={() => setSelectedType(null)}
              />
              {types.map((t) => (
                <FilterPill
                  key={t}
                  label={typeLabelsEN[t]}
                  active={selectedType === t}
                  onClick={() =>
                    setSelectedType(selectedType === t ? null : t)
                  }
                  count={typeCounts[t] || 0}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted mb-6">
          Showing <strong className="text-primary">{filtered.length}</strong>{" "}
          destination{filtered.length !== 1 && "s"}
          {selectedRegion && (
            <span>
              {" "}
              in{" "}
              <strong className="text-primary">
                {regionLabelsEN[selectedRegion]}
              </strong>
            </span>
          )}
          {selectedType && (
            <span>
              {" "}
              &middot; type:{" "}
              <strong className="text-primary">
                {typeLabelsEN[selectedType]}
              </strong>
            </span>
          )}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((a) => (
              <AttractionCard key={a.slug} attraction={a} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted">
            <p className="text-lg mb-2">No destinations match your filters.</p>
            <button
              onClick={() => {
                setSelectedRegion(null);
                setSelectedType(null);
              }}
              className="text-primary font-medium underline underline-offset-4"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
