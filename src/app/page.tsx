import { attractions } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";
import Link from "next/link";

/* ── Hero Section ───────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #fff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="max-w-3xl">
          <p className="text-accent text-sm uppercase tracking-[0.25em] font-medium mb-6">
            Curated Collection
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            100 Hidden Gems
            <br />
            <span className="text-accent-light">Across Europe</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
            Beyond the tourist crowds — discover medieval old towns, forgotten
            abbeys, ancient ruins, and breathtaking natural wonders across 20+
            countries.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#destinations"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              Start Exploring
            </Link>
            <Link
              href="#regions"
              className="inline-flex items-center px-8 py-3.5 border border-white/25 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Browse by Region
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4">
          {[
            ["100", "Destinations"],
            ["20+", "Countries"],
            ["11", "Regions"],
            ["8", "Categories"],
          ].map(([num, label]) => (
            <div key={label}>
              <span className="text-3xl font-bold text-white">{num}</span>
              <span className="ml-2 text-sm text-white/50">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Region Highlights ──────────────────────────────── */
function RegionHighlights() {
  const highlights = [
    {
      region: "France",
      zhRegion: "法国",
      desc: "Romanesque abbeys, fortified medieval cities, and Provencal hilltop villages.",
      count: 10,
    },
    {
      region: "Italy",
      zhRegion: "意大利",
      desc: "Tuscan hill towns, Baroque Sicily, and ancient Roman heritage beyond Rome.",
      count: 12,
    },
    {
      region: "Germany",
      zhRegion: "德国",
      desc: "Half-timbered old towns, Rhine castles, and UNESCO cathedral cities.",
      count: 12,
    },
    {
      region: "Balkans",
      zhRegion: "巴尔干・东欧",
      desc: "Transylvanian citadels, Serbian fortresses, and Baltic old towns.",
      count: 10,
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-10 text-center">
          Featured Regions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <Link
              key={h.region}
              href="#destinations"
              className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors">
                  {h.region}
                </h3>
                <span className="text-xs bg-surface text-muted px-2 py-1 rounded-full">
                  {h.count} spots
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{h.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Home Page ──────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <RegionHighlights />
      <AttractionGallery attractions={attractions} />
    </>
  );
}
