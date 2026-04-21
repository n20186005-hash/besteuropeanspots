import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Best European Spots | Hidden Gems Across Europe",
  description:
    "Discover hidden gems across Europe, from medieval towns and forgotten abbeys to ancient ruins and natural wonders, with a dedicated English homepage.",
};

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}
