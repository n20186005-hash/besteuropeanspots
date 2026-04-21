import { attractions, regionColors, stats, typeLabelsEN } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";
import Link from "next/link";
import { collections } from "@/lib/collections";
import { getAttractionCountries, getCountrySlug } from "@/lib/countries";
import { getCountryLabel } from "@/lib/site-locale";
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
          <div className="mt-8 flex flex-wrap gap-3">
            {copy.quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
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

function ContentChannels({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale].portal;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">{copy.channelsTitle}</h2>
          <p className="text-gray-600 leading-8">{copy.channelsDescription}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {copy.channels.map((channel, index) => (
            <Link
              key={channel.href}
              href={channel.href}
              className="rounded-2xl border border-border bg-surface p-7 hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
                {locale === "zh" ? `频道 0${index + 1}` : `Channel 0${index + 1}`}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{channel.title}</h3>
              <p className="text-sm text-gray-600 leading-7 mb-5">{channel.description}</p>
              <span className="text-sm font-medium text-primary">{channel.cta}</span>
            </Link>
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
              key={item.href}
              href={item.href}
              className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-all group"
            >
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
                {item.badge}
              </span>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary group-hover:text-primary-light transition-colors">
                  {item.label}
                </h3>
                <span className="text-xs bg-surface text-muted px-2 py-1 rounded-full">
                  {item.count} {item.unit}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-primary">{item.cta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountryGateways({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale].portal;
  const countryCounts = new Map<string, number>();
  const countryTypeCounts = new Map<string, Map<string, number>>();

  attractions.forEach((attraction) => {
    getAttractionCountries(attraction).forEach((country) => {
      countryCounts.set(country, (countryCounts.get(country) || 0) + 1);
      if (!countryTypeCounts.has(country)) {
        countryTypeCounts.set(country, new Map<string, number>());
      }
      const typeMap = countryTypeCounts.get(country)!;
      typeMap.set(attraction.type, (typeMap.get(attraction.type) || 0) + 1);
    });
  });

  const topCountries = Array.from(countryCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">{copy.countryTitle}</h2>
          <p className="text-gray-600 leading-8">{copy.countryDescription}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {topCountries.map(([country, count]) => {
            const topThemes = Array.from(countryTypeCounts.get(country)?.entries() || [])
              .sort((a, b) => b[1] - a[1])
              .slice(0, 2)
              .map(([type]) => (locale === "en" ? typeLabelsEN[type] || type : type));

            return (
              <Link
                key={country}
                href={`/destinations/${getCountrySlug(country)}`}
                className="rounded-2xl border border-border bg-surface p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {getCountryLabel(country, locale)}
                  </h3>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    {count}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {topThemes.map((theme) => (
                    <span
                      key={theme}
                      className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs text-gray-600 border border-border"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-7">
                  {locale === "zh"
                    ? `这个国家入口重点覆盖 ${topThemes.join("、")} 等内容，目前可直接浏览 ${count} 个隐藏景点。`
                    : `This country hub currently groups ${count} hidden gems, with strong coverage in ${topThemes.join(", ")}.`}
                </p>
                <span className="text-sm font-medium text-primary">{copy.countryCta}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CollectionSpotlight({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale].portal;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">{copy.collectionTitle}</h2>
          <p className="text-gray-600 leading-8">{copy.collectionDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => {
            const count = attractions.filter(collection.filter).length;
            return (
              <Link
                key={collection.slug}
                href={`/collections/${collection.slug}`}
                className="rounded-2xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-4">
                  {locale === "zh" ? `包含 ${Math.min(count, 15)} 个景点` : `${Math.min(count, 15)} attractions`}
                </span>
                <h3 className="text-xl font-semibold text-primary mb-3">{collection.title}</h3>
                <p className="text-sm text-gray-600 leading-7 mb-5">{collection.description}</p>
                <span className="text-sm font-medium text-primary">{copy.collectionCta}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EditorPicks({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale].portal;
  const featuredSlugs = [
    "vezelay-abbey",
    "stari-most-mostar",
    "valga-valka-twin-town",
    "vjetrenica-cave",
  ];
  const picks = featuredSlugs
    .map((slug) => attractions.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">{copy.attractionTitle}</h2>
          <p className="text-gray-600 leading-8">{copy.attractionDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {picks.map((attraction) => (
            <Link
              key={attraction.slug}
              href={`/attractions/${attraction.slug}`}
              className="group rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="h-36 flex items-center justify-center text-5xl font-serif text-white/25"
                style={{
                  background: `linear-gradient(135deg, ${(regionColors[attraction.region] || "#3b5998")}cc, ${(regionColors[attraction.region] || "#3b5998")}55)`,
                }}
              >
                {(locale === "en" ? attraction.englishName || attraction.name : attraction.name)[0]}
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-blue-700 mb-2">
                  {getCountryLabel(attraction.country, locale)} · {locale === "en" ? typeLabelsEN[attraction.type] || attraction.type : attraction.type}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 line-clamp-2">
                  {locale === "en" ? attraction.englishName || attraction.name : attraction.name}
                </h3>
                <p className="text-sm text-gray-600 leading-7 line-clamp-4 mb-4">
                  {locale === "en"
                    ? `${attraction.englishName || attraction.name} is one of the standout hidden gems currently highlighted on the homepage.`
                    : attraction.description}
                </p>
                <span className="text-sm font-medium text-primary">{copy.attractionCta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeShortcuts({ locale }: { locale: SiteLocale }) {
  const copy = homeCopy[locale].portal;
  const items = homeCopy[locale].seo.categories;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">{copy.typeTitle}</h2>
          <p className="text-gray-600 leading-8">{copy.typeDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-border bg-white p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-7 mb-4">{item.description}</p>
              <span className="text-sm font-medium text-primary">{copy.typeCta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeStructuredData({ locale }: { locale: SiteLocale }) {
  const seo = homeCopy[locale].seo;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Best European Spots",
        url: "https://www.besteuropeanspots.com",
        inLanguage: locale === "zh" ? "zh-CN" : "en-US",
        description:
          locale === "zh"
            ? "欧洲隐藏宝藏景点导航站，聚合国家页、分类页与景点详情页。"
            : "A curated guide to hidden gems across Europe with country, category, and attraction pages.",
      },
      {
        "@type": "CollectionPage",
        name: locale === "zh" ? "欧洲隐藏景点首页" : "Hidden Gems Across Europe Homepage",
        url: locale === "zh" ? "https://www.besteuropeanspots.com/" : "https://www.besteuropeanspots.com/en",
        inLanguage: locale === "zh" ? "zh-CN" : "en-US",
        about: locale === "zh" ? "欧洲隐藏景点" : "Hidden gems across Europe",
      },
      {
        "@type": "FAQPage",
        mainEntity: seo.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function HomePageContent({ locale }: { locale: SiteLocale }) {
  return (
    <>
      <HomeStructuredData locale={locale} />
      <Hero locale={locale} />
      <ContentChannels locale={locale} />
      <RegionHighlights locale={locale} />
      <CountryGateways locale={locale} />
      <CollectionSpotlight locale={locale} />
      <EditorPicks locale={locale} />
      <ThemeShortcuts locale={locale} />
      <AttractionGallery attractions={attractions} locale={locale} />
    </>
  );
}
