import type { Attraction } from "@/lib/attractions";

export type AttractionCollection = {
  title: string;
  slug: string;
  description: string;
  filter: (attraction: Attraction) => boolean;
};

export const collections: AttractionCollection[] = [
  {
    title: "南欧 15 大被低估的历史遗迹",
    slug: "top-15-hidden-historical-spots-in-southern-europe",
    description: "避开罗马和雅典的人潮，探索意大利、希腊与西班牙的隐秘古城和神庙。",
    filter: (attraction) =>
      ["意大利", "希腊", "西班牙", "葡萄牙"].includes(attraction.country) &&
      attraction.type === "历史遗迹",
  },
  {
    title: "西欧最美中世纪古城",
    slug: "most-beautiful-medieval-towns-western-europe",
    description: "穿越回中世纪，漫步在法国、德国和比利时的石板路上。",
    filter: (attraction) =>
      ["法国", "德国", "比利时", "荷兰"].includes(attraction.country) &&
      attraction.type === "古城",
  },
  {
    title: "欧洲隐秘的绝美修道院与大教堂",
    slug: "hidden-abbeys-and-cathedrals-europe",
    description: "远离喧嚣，寻找欧洲大陆上那些宁静、神圣且建筑精美的宗教圣地。",
    filter: (attraction) => attraction.type === "教堂修道院",
  },
];
