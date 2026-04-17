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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const filtered = useMemo(() => {
    return attractions.filter((a) => {
      // 文本搜索过滤
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = a.name?.toLowerCase().includes(q);
        const matchEn = a.englishName?.toLowerCase().includes(q);
        const matchCity = a.city?.toLowerCase().includes(q);
        const matchCountry = a.country?.toLowerCase().includes(q);
        if (!matchName && !matchEn && !matchCity && !matchCountry) return false;
      }
      
      // 分类过滤
      if (selectedRegion && a.region !== selectedRegion) return false;
      if (selectedType && a.type !== selectedType) return false;
      return true;
    });
  }, [attractions, selectedRegion, selectedType, searchQuery]);

  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const base = selectedType
        ? attractions.filter((a) => a.type === selectedType)
        : attractions;
      const searchFiltered = searchQuery
        ? base.filter(a => {
            const q = searchQuery.toLowerCase();
            return a.name?.toLowerCase().includes(q) || a.englishName?.toLowerCase().includes(q) || a.city?.toLowerCase().includes(q) || a.country?.toLowerCase().includes(q);
          })
        : base;
      for (const a of searchFiltered) counts[a.region] = (counts[a.region] || 0) + 1;
      return counts;
    }, [attractions, selectedType, searchQuery]);
  
    const typeCounts = useMemo(() => {
      const counts: Record<string, number> = {};
      const base = selectedRegion
        ? attractions.filter((a) => a.region === selectedRegion)
        : attractions;
      const searchFiltered = searchQuery
        ? base.filter(a => {
            const q = searchQuery.toLowerCase();
            return a.name?.toLowerCase().includes(q) || a.englishName?.toLowerCase().includes(q) || a.city?.toLowerCase().includes(q) || a.country?.toLowerCase().includes(q);
          })
        : base;
      for (const a of searchFiltered) counts[a.type] = (counts[a.type] || 0) + 1;
      return counts;
    }, [attractions, selectedRegion, searchQuery]);

  return (
    <section id="destinations" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Explore All Destinations
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            {attractions.length} carefully curated hidden gems across Europe.
            Filter by region or type to find your next adventure.
          </p>
        </div>

        {/* Filters and Search */}
        <div id="regions" className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search by name, city, or country... (e.g., Paris, Castle, 巴黎)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3.5 pl-11 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all shadow-sm text-gray-700 bg-white"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

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
                  label={regionLabelsEN[r] || r}
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
                  label={typeLabelsEN[t] || t}
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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.slice(0, visibleCount).map((a) => (
                <AttractionCard key={a.slug} attraction={a} />
              ))}
            </div>
            
            {/* Load More Button */}
            {visibleCount < filtered.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + 24)}
                  className="inline-flex items-center px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:text-primary transition-all shadow-sm"
                >
                  Load More ({filtered.length - visibleCount} remaining)
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 text-muted">
            <p className="text-lg mb-2">No destinations match your search or filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion(null);
                setSelectedType(null);
                setVisibleCount(24);
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
