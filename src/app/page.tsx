import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "最佳欧洲景点 | 欧洲隐藏宝藏目的地",
  description:
    "探索欧洲隐藏宝藏景点，发现中世纪古镇、修道院、古代遗迹与自然奇观，支持中文首页浏览。",
};

export default function HomePage() {
  return <HomePageContent locale="zh" />;
}
