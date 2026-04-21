import { attractions, stats } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";
import Link from "next/link";
import { getAttractionCountries, getCountrySlug } from "@/lib/countries";
import { getCountryLabel, homeCopy, type SiteLocale } from "@/lib/site-locale";

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

function HomeSeoContent({ locale }: { locale: SiteLocale }) {
  const seo = homeCopy[locale].seo;
  const countryCounts = new Map<string, number>();

  attractions.forEach((attraction) => {
    getAttractionCountries(attraction).forEach((country) => {
      countryCounts.set(country, (countryCounts.get(country) || 0) + 1);
    });
  });

  const topCountries = Array.from(countryCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

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
    <section className="py-20 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            {seo.overviewTitle}
          </h2>
          <div className="space-y-5 text-base leading-8 text-gray-700">
            {seo.overviewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            {seo.categoryTitle}
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">{seo.categoryIntro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seo.categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="block rounded-xl border border-border bg-surface p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{category.title}</h3>
                <p className="text-sm text-gray-600 leading-7">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
            {seo.countryTitle}
          </h2>
          <p className="text-gray-600 max-w-3xl mb-8">{seo.countryIntro}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {topCountries.map(([country, count]) => (
              <Link
                key={country}
                href={`/destinations/${getCountrySlug(country)}`}
                className="flex items-center justify-between rounded-xl border border-border bg-white p-4 hover:shadow-sm transition-shadow"
              >
                <span className="font-medium text-gray-800">{getCountryLabel(country, locale)}</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">{count}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-surface p-8 border border-border">
            <h2 className="text-2xl font-bold text-primary mb-5">{seo.methodologyTitle}</h2>
            <ul className="space-y-4 text-gray-700 leading-7">
              {seo.methodologyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-8 border border-border">
            <h2 className="text-2xl font-bold text-primary mb-5">{seo.faqTitle}</h2>
            <div className="space-y-5">
              {seo.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700 leading-7">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
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
      <HomeSeoContent locale={locale} />
      <AttractionGallery attractions={attractions} locale={locale} />
    </>
  );
}
