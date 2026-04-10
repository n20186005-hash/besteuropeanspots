import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">&#9830;</span>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight text-primary">
                Best European Spots
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted hidden sm:block">
                Hidden Gems Across Europe
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="/#destinations"
              className="text-muted hover:text-primary transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/#regions"
              className="text-muted hover:text-primary transition-colors"
            >
              Regions
            </Link>
            <Link
              href="/#about"
              className="text-muted hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>
          <Link
            href="/#destinations"
            className="md:hidden text-sm text-primary font-medium"
          >
            Explore
          </Link>
        </div>
      </div>
    </header>
  );
}
