import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  attractions,
  getAttraction,
  getAllSlugs,
  regionLabelsEN,
  typeLabelsEN,
  regionColors,
} from "@/lib/attractions";

/* ── Static Params ──────────────────────────────────── */
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ───────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const attraction = getAttraction(slug);
  if (!attraction) return {};

  return {
    title: `${attraction.name} (${attraction.englishName})`,
    description: attraction.description,
    openGraph: {
      title: `${attraction.name} — ${attraction.englishName}`,
      description: attraction.description,
      type: "article",
      siteName: "Best European Spots",
    },
  };
}

/* ── Section Component ──────────────────────────────── */
function Section({
  title,
  number,
  children,
}: {
  title: string;
  number: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 border-b border-border last:border-b-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-xs font-bold text-accent bg-accent/10 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        <h2 className="text-xl font-semibold text-primary">{title}</h2>
      </div>
      <div className="pl-10">{children}</div>
    </section>
  );
}

/* ── Info Row ───────────────────────────────────────── */
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 py-3 border-b border-border/50 last:border-b-0">
      <span className="text-sm font-medium text-muted w-24 flex-shrink-0">
        {label}
      </span>
      <span className="text-sm text-foreground leading-relaxed">{value}</span>
    </div>
  );
}

/* ── Placeholder Section ────────────────────────────── */
function PlaceholderContent({ text }: { text: string }) {
  return (
    <div className="bg-surface rounded-lg p-6 text-center">
      <p className="text-muted text-sm">{text}</p>
      <p className="text-muted-light text-xs mt-1">Coming Soon</p>
    </div>
  );
}

/* ── Breadcrumb Navigation ──────────────────────────── */
function Breadcrumb({
  name,
  englishName,
}: {
  name: string;
  englishName: string;
}) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted">
      <Link
        href="/"
        className="hover:text-primary transition-colors"
      >
        Home
      </Link>
      <span className="text-muted-light">/</span>
      <Link
        href="/#destinations"
        className="hover:text-primary transition-colors"
      >
        Destinations
      </Link>
      <span className="text-muted-light">/</span>
      <span className="text-primary font-medium truncate max-w-[200px]">
        {name}
      </span>
    </nav>
  );
}

/* ── Related Attractions ────────────────────────────── */
function RelatedAttractions({
  currentSlug,
  region,
  type,
}: {
  currentSlug: string;
  region: string;
  type: string;
}) {
  const related = attractions
    .filter(
      (a) =>
        a.slug !== currentSlug && (a.region === region || a.type === type)
    )
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {related.map((a) => {
          const color = regionColors[a.region] || "#555";
          return (
            <Link
              key={a.slug}
              href={`/attractions/${a.slug}`}
              className="group block bg-white rounded-xl overflow-hidden border border-border hover:shadow-md transition-all"
            >
              <div
                className="h-32"
                style={{
                  background: `linear-gradient(135deg, ${color}cc, ${color}44)`,
                }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white/25 text-4xl font-serif">
                    {a.name[0]}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-primary group-hover:text-primary-light transition-colors mb-1">
                  {a.name}
                </h3>
                <p className="text-xs text-muted">
                  {a.englishName} &middot; {a.country}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/* ── Page Component ─────────────────────────────────── */
export default async function AttractionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const attraction = getAttraction(slug);
  if (!attraction) notFound();

  const color = regionColors[attraction.region] || "#555";

  return (
    <article className="min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-64 sm:h-80"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}99 50%, ${color}55 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                {typeLabelsEN[attraction.type] || attraction.type}
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                {regionLabelsEN[attraction.region]}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {attraction.name}
            </h1>
            <p className="text-lg text-white/80">
              {attraction.englishName} &middot; {attraction.country} &middot;{" "}
              {attraction.city}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          name={attraction.name}
          englishName={attraction.englishName}
        />

        <div className="mt-8">
          {/* 1. 景点简介 */}
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              {attraction.description}
            </p>
          </Section>

          {/* 2. 基本信息 */}
          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="开放时间" value={attraction.openingHours} />
              <InfoRow label="门票价格" value={attraction.ticketPrice} />
              <InfoRow label="详细地址" value={attraction.address} />
              <InfoRow label="交通方式" value={attraction.transport} />
            </div>
          </Section>

          {/* 3. 历史背景 */}
          <Section number="3" title="历史背景">
            <PlaceholderContent text="历史背景内容正在整理中，敬请期待" />
          </Section>

          {/* 4. 游览路线建议 */}
          <Section number="4" title="游览路线建议">
            <PlaceholderContent text="游览路线建议正在整理中，敬请期待" />
          </Section>

          {/* 5. 最佳拍照机位 */}
          <Section number="5" title="最佳拍照机位">
            <PlaceholderContent text="拍照机位推荐正在整理中，敬请期待" />
          </Section>

          {/* 6. 附近可逛景点 */}
          <Section number="6" title="附近可逛景点">
            <PlaceholderContent text="周边景点信息正在整理中，敬请期待" />
          </Section>

          {/* 7. 周边住宿推荐 */}
          <Section number="7" title="周边住宿推荐">
            <PlaceholderContent text="住宿推荐正在整理中，敬请期待" />
          </Section>

          {/* 8. 实用小贴士 */}
          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value={attraction.bestSeason} />
              <InfoRow label="建议时长" value={attraction.suggestedDuration} />
              <InfoRow label="注意事项" value={attraction.tips} />
            </div>
          </Section>
        </div>

        {/* Related attractions */}
        <RelatedAttractions
          currentSlug={attraction.slug}
          region={attraction.region}
          type={attraction.type}
        />

        {/* Back link */}
        <div className="mt-12 mb-8 text-center">
          <Link
            href="/#destinations"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
          >
            <span>&larr;</span>
            <span>Back to All Destinations</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
