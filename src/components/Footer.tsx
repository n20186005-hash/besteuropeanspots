import Link from "next/link";
import { regions, regionLabelsEN } from "@/lib/attractions";

export function Footer() {
  return (
    <footer id="about" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Best European Spots</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Curating 100 of Europe&apos;s most captivating hidden gems — from
              forgotten abbeys and medieval old towns to ancient ruins and
              natural wonders off the beaten path.
            </p>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Regions
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {regions.slice(0, 6).map((r) => (
                <li key={r}>
                  <Link
                    href={`/#destinations`}
                    className="hover:text-white transition-colors"
                  >
                    {regionLabelsEN[r]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Regions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              More Regions
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {regions.slice(6).map((r) => (
                <li key={r}>
                  <Link
                    href={`/#destinations`}
                    className="hover:text-white transition-colors"
                  >
                    {regionLabelsEN[r]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} besteuropeanspots.com</p>
          <p>100 Hidden Gems. One Continent. Endless Discovery.</p>
        </div>
      </div>
    </footer>
  );
}
