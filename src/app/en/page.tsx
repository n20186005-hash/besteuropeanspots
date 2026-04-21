import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Best European Spots | Hidden Gems Across Europe",
  description:
    "Discover 2,587 hidden gems across Europe by country, category, and editorial collections, from medieval towns and abbeys to ruins and natural landscapes.",
  keywords: [
    "hidden gems Europe",
    "Europe travel guide",
    "medieval towns Europe",
    "European abbeys",
    "archaeological sites Europe",
    "natural landscapes Europe",
    "off the beaten path Europe",
  ],
  alternates: {
    canonical: "https://www.besteuropeanspots.com/en",
    languages: {
      "zh-CN": "https://www.besteuropeanspots.com/",
      "en-US": "https://www.besteuropeanspots.com/en",
    },
  },
  openGraph: {
    title: "Best European Spots | Hidden Gems Across Europe",
    description:
      "Discover 2,587 hidden gems across Europe through country hubs, category pages, and editorial collections.",
    url: "https://www.besteuropeanspots.com/en",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}
