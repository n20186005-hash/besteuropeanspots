import type { Metadata } from "next";
import { HomePageContent } from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "最佳欧洲景点 | 欧洲隐藏宝藏目的地与深度游指南",
  description:
    "探索欧洲 2587 个隐藏宝藏景点，按国家、六大分类与专题榜单发现中世纪古镇、修道院、古代遗迹与自然奇观。",
  keywords: [
    "欧洲隐藏景点",
    "欧洲小众旅行",
    "欧洲古镇推荐",
    "欧洲修道院",
    "欧洲历史遗迹",
    "欧洲自然景观",
    "欧洲深度游",
  ],
  alternates: {
    canonical: "https://www.besteuropeanspots.com/",
    languages: {
      "zh-CN": "https://www.besteuropeanspots.com/",
      "en-US": "https://www.besteuropeanspots.com/en",
    },
  },
  openGraph: {
    title: "最佳欧洲景点 | 欧洲隐藏宝藏目的地与深度游指南",
    description:
      "探索欧洲 2587 个隐藏宝藏景点，按国家、分类与榜单入口发现值得深挖的欧洲旅行目的地。",
    url: "https://www.besteuropeanspots.com/",
    locale: "zh_CN",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageContent locale="zh" />;
}
