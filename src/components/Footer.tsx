"use client";

import Link from "next/link";
import { regions, stats } from "@/lib/attractions";
import { getCountryLabel, getLocaleFromPathname, homeCopy } from "@/lib/site-locale";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = homeCopy[locale].footer;
  const halfRegions = Math.ceil(regions.length / 2);
  
  return (
    <footer id="about" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-3">{copy.aboutTitle}</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {copy.aboutDescription}
            </p>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              {copy.regions}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {regions.slice(0, halfRegions).map((r) => (
                <li key={r}>
                  <Link
                    href={`/#destinations`}
                    className="hover:text-white transition-colors"
                  >
                    {getCountryLabel(r, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Regions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              {copy.moreRegions}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              {regions.slice(halfRegions).map((r) => (
                <li key={r}>
                  <Link
                    href={`/#destinations`}
                    className="hover:text-white transition-colors"
                  >
                    {getCountryLabel(r, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
                {copy.legal}
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    {copy.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-white transition-colors">
                    {copy.terms}
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-settings" className="hover:text-white transition-colors">
                    {copy.cookies}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
                {copy.support}
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="mailto:n20186005@gmail.com" className="hover:text-white transition-colors">
                    n20186005@gmail.com
                  </a>
                </li>
                <li className="text-xs">
                  {copy.supportHint}
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
                {copy.about}
              </h4>
              <p className="text-sm text-white/70 leading-relaxed">
                {copy.aboutSite}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50 border-t border-white/10 pt-8">
            <p>&copy; {new Date().getFullYear()} besteuropeanspots.com</p>
            <p>{stats.destinations} {copy.copyrightSuffix}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
