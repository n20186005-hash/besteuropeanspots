import { attractions, stats } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";
import Link from "next/link";
import { homeCopy, type SiteLocale } from "@/lib/site-locale";

function interpolate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}

function Hero({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale].hero;

  return (
    <section className="relative overflow-hidden bg-primary">
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
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {interpolate(copy.titleMain, { count: stats.destinations })}
            <br />
            <span className="text-accent-light">{copy.titleSuffix}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
            {interpolate(copy.description, { countries: stats.countries })}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#destinations"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-light transition-colors"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href="#regions"
              className="inline-flex items-center px-8 py-3.5 border border-white/25 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4">
          {[
            [stats.destinations.toString(), copy.stats[0]],
            [stats.countries.toString(), copy.stats[1]],
            [stats.regions.toString(), copy.stats[2]],
            [stats.types.toString(), copy.stats[3]],
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

function RegionHighlights({ locale }: { locale: SiteLocale }) {
  const featured = homeCopy[locale].featured;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-10 text-center">
          {featured.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.cards.map((item) => (
            <Link
              key={item.label}
              href="#destinations"
              className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors">
                  {item.label}
                </h3>
                <span className="text-xs bg-surface text-muted px-2 py-1 rounded-full">
                  {item.count} {item.unit}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePageContent({ locale }: { locale: SiteLocale }) {
  return (
    <>
      <Hero locale={locale} />
      <RegionHighlights locale={locale} />
      <AttractionGallery attractions={attractions} locale={locale} />
    </>
  );
}
