import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "伦茨基尔希城堡 (Lenzkirch Castle)",
  description: "伦茨基尔希城堡详细游览指南 - 芬兰中世纪时期极具代表性的城堡遗迹之一，融合中世纪军事防御风格与芬兰本土建筑底蕴",
  openGraph: {
    title: "伦茨基尔希城堡 — Lenzkirch Castle",
    description: "伦茨基尔希城堡详细游览指南 - 芬兰中世纪时期极具代表性的城堡遗迹之一",
    type: "article",
    siteName: "Best European Spots",
  },
};

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

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted">
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <span className="text-muted-light">/</span>
      <Link href="/#destinations" className="hover:text-primary transition-colors">
        Destinations
      </Link>
      <span className="text-muted-light">/</span>
      <span className="text-primary font-medium truncate max-w-[200px]">
        伦茨基尔希城堡
      </span>
    </nav>
  );
}

export default function LenzkirchCastlePage() {
  const color = "#4A90E2"; // Nordic color - blue for Finland/Nordic regions

  return (
    <article className="min-h-screen">
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
                Castle
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                北欧
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              伦茨基尔希城堡
            </h1>
            <p className="text-lg text-white/80">
              Lenzkirch Castle · 芬兰 · 伦茨基尔希
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              伦茨基尔希城堡坐落于芬兰西芬兰省伦茨基尔希市，濒临波罗的海支流，是芬兰中世纪时期极具代表性的城堡遗迹之一。城堡以厚重的石质城墙、高耸的瞭望塔、错落的欧式楼宇为特色，融合了中世纪军事防御风格与芬兰本土建筑底蕴，历经数百年沧桑仍保存完好，是感受芬兰中世纪军事历史、领略北欧古堡风情的核心景点，也是芬兰西芬兰省重要的历史文化地标。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="伦茨基尔希城堡整体开放时间分季节调整，夏季（5月-9月）9:00-18:00，冬季（10月-次年4月）10:00-16:00，每周一闭馆（节假日除外，具体以现场公示为准）；城堡内博物馆、地下密室等室内区域开放时间为夏季9:30-17:30，冬季10:30-15:30。建议游览时间为3-4小时，清晨可避开人流，感受古堡的静谧与庄严，傍晚可欣赏夕阳洒在城堡墙体上的绝美光影，体验感更佳。" 
              />
              <InfoRow 
                label="门票价格" 
                value="城堡大门票成人10欧元/人，学生、65岁以上老人凭有效证件半价（5欧元/人），12岁以下儿童免费；城堡内博物馆单独收费，成人6欧元/人，学生及老人3欧元/人，12岁以下儿童免费；讲解服务（含英文、芬兰文）12欧元/人，可现场预约，支持现金、信用卡及移动支付，部分线上平台可提前购票，享受1-2欧元优惠。" 
              />
              <InfoRow 
                label="详细地址" 
                value="城堡核心地址（Lenzkirch Castle, 65100 Lenzkirch, Finland），位于伦茨基尔希市中心西北部，濒临波罗的海支流，距离伦茨基尔希市中心约2公里，周边环绕着古堡公园与木质步道，远眺可欣赏波罗的海的辽阔风光，周边配套有餐饮、纪念品商店，出行便捷。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达芬兰坦佩雷机场（距离伦茨基尔希约80公里），打车前往约1小时，费用约100欧元；也可从坦佩雷市中心乘坐火车直达伦茨基尔希火车站，车程约1.5小时，票价约15欧元，火车站距离城堡约1.2公里，步行18分钟即可抵达，也可乘坐当地2路公交直达城堡入口，公交票价2.5欧元/人。市内交通方面，伦茨基尔希市区公交2路、5路均可直达城堡周边；市区打车前往城堡，费用约12-18欧元；城堡内部仅可步行游览，部分区域设有无障碍通道，方便老人及儿童出行。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                伦茨基尔希城堡的历史渊源可追溯至公元14世纪初，始建于1310年，由当时统治芬兰的瑞典贵族下令修建，最初作为军事防御工事，用于抵御外部势力入侵，守护波罗的海沿岸的商贸通道与周边村落。城堡选址于地势较高的河畔高地，依托波罗的海支流的天然屏障，形成了"易守难攻"的军事格局，城墙采用芬兰本地坚硬的花岗岩砌筑，厚度达1.5米，设有多个瞭望塔与射击孔，是当时芬兰西部重要的军事要塞。
              </p>
              <p>
                14世纪中期，随着芬兰与瑞典、俄罗斯之间的贸易往来日益频繁，伦茨基尔希城堡逐渐褪去纯军事功能，成为瑞典贵族在芬兰的居所之一，城堡内部陆续修建了宫殿、宴会厅、教堂等建筑，建筑风格融合了瑞典中世纪哥特式风格与芬兰本土石砌建筑特色，墙体雕刻精美，内饰奢华，成为当时芬兰西部贵族社交、议事的重要场所。这一时期，城堡周边逐渐形成了小型聚居地，居民多为城堡的侍从、工匠与商人，依托城堡的影响力，逐渐发展为区域性的商贸小枢纽。
              </p>
              <p>
                历史上，伦茨基尔希城堡历经多次战争与变迁，16世纪至17世纪，芬兰先后经历了瑞典与俄罗斯的多次战争，城堡作为军事要塞，多次遭受攻击与损毁，1642年的战争中，城堡的部分楼宇与瞭望塔被烧毁，此后瑞典贵族投入大量人力物力进行修复，严格保留了原有建筑的格局与军事防御特色，如今我们看到的城堡主体，大多是当时修复后的模样。1809年，芬兰成为俄罗斯帝国的大公国，伦茨基尔希城堡被收归俄国皇室所有，成为俄国皇室在芬兰的避暑行宫之一，期间对城堡内部进行了翻新，增添了俄罗斯风格的内饰与园林景观。
              </p>
              <p>
                19世纪中期，芬兰民族意识觉醒，伦茨基尔希城堡成为芬兰民族历史的重要象征，许多芬兰民族文化活动在此发起，城堡也逐渐成为芬兰人缅怀历史、凝聚民族精神的重要场所。20世纪以来，芬兰独立后，政府将伦茨基尔希城堡列为国家级历史遗迹，多次投入资金进行修复与保护，严格遵循"修旧如旧"的原则，妥善保护城堡的石质城墙、建筑遗迹与历史文物，同时完善周边配套设施，将其打造为集历史展示、文化体验、旅游观光于一体的特色景点。
              </p>
              <p>
                如今，伦茨基尔希城堡不仅是芬兰重要的历史文化载体，也是芬兰西芬兰省最受欢迎的旅游景点之一，每年吸引着来自世界各地的游客。城堡的每一处墙体、每一座瞭望塔都承载着厚重的历史，既见证了芬兰中世纪的军事纷争与商贸繁荣，也记录了芬兰民族的变迁与发展，成为感受芬兰中世纪历史、领略北欧古堡风情的重要窗口。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                伦茨基尔希城堡以城堡主体为核心，周边环绕着古堡公园、河畔步道与历史街区，景点布局紧凑，建筑特色鲜明，历史氛围浓厚，建议安排3-4小时游览。以下为经典步行游览路线，可全面领略城堡的军事防御特色、历史遗迹与周边风光，路线全程约1.8公里，节奏舒缓，兼顾打卡与体验感，同时可深入了解城堡的历史文化。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：城堡入口</strong>（设有景区简介牌与导览图，可在此领取导览手册，打卡古老的石质城门，城门上的雕刻记录着城堡的修建历史与军事用途，感受中世纪防御工事的威严厚重）</p>
                  
                  <p><strong>第一站：城堡广场</strong>（距离入口约150米，城堡核心区域，广场中央有中世纪骑士雕塑，周边环绕着石质回廊与古老的喷泉，可在广场休息片刻，欣赏城堡的整体风貌，拍摄城堡全景）</p>
                  
                  <p><strong>第二站：瞭望塔</strong>（位于广场东侧，步行3分钟可达，是城堡的标志性建筑，高约25米，登顶后可360度俯瞰整个城堡、古堡公园与波罗的海支流风光，感受中世纪军事瞭望的视角，塔内设有历史展品，可了解瞭望塔的功能与历史）</p>
                  
                  <p><strong>第三站：城堡主体楼宇</strong>（从瞭望塔步行5分钟可达，分为地上三层与地下一层，地上一层为宴会厅与议事厅，展示着中世纪贵族的生活用具、服饰与武器，内饰奢华，雕刻精美；地上二层为贵族卧室与书房，保留着当时的原貌；地下一层为密室与地牢，曾用于关押俘虏，可感受中世纪城堡的神秘与肃穆）</p>
                  
                  <p><strong>第四站：城堡博物馆</strong>（位于城堡主体西侧，步行4分钟可达，设于一座17世纪的石砌建筑中，馆内展示了城堡的历史遗物、军事装备、历史文献与民俗展品，通过图文、实物结合的方式，详细介绍城堡的发展历程与芬兰中世纪历史）</p>
                  
                  <p><strong>第五站：古堡公园</strong>（从博物馆步行6分钟可达，环绕城堡而建，园内有大片的草坪、古树与花卉，设有休闲座椅与木质步道，可漫步公园，感受古堡与自然景观的完美融合，欣赏波罗的海支流的河畔风光）</p>
                  
                  <p><strong>第六站：城堡周边历史街区</strong>（从公园步行10分钟可达，街区内保留着中世纪的石砌房屋与木质建筑，开设了当地特色的手工艺品店、咖啡馆与餐厅，可漫步街区，感受当地的人文氛围，购买特色纪念品）</p>
                  
                  <p><strong>终点：城堡出口</strong>（周边有停车场与公交站点，可乘坐公交或打车前往市区，结束游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>城堡内多为石质台阶与石板路面，雨后易滑，建议穿舒适的步行鞋；城堡内部分区域（如地牢、博物馆）禁止大声喧哗、随意触摸文物，禁止使用闪光灯拍照；夏季城堡内气候凉爽，早晚温差较大，可携带薄外套与饮用水；冬季气温较低，多雪，路面可能结冰，注意防滑，可携带保暖衣物；旅游旺季（6-8月）游客较多，建议避开正午人流高峰，错峰游览；城堡内禁止吸烟，禁止携带易燃易爆物品，遵守景区相关规定。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                伦茨基尔希城堡融合了中世纪军事防御建筑与北欧欧式建筑风格，厚重的石质城墙、高耸的瞭望塔、精致的雕刻与静谧的河畔风光相映成趣，光影层次丰富，既有中世纪的威严厚重，又有北欧的清新灵动，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、氛围大片等不同风格，无论是手机还是相机，都能拍出高质量照片，展现城堡的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 城堡瞭望塔顶端：</strong>这是拍摄城堡全景的最佳机位，登顶后可360度俯瞰整个伦茨基尔希城堡，石质城墙蜿蜒环绕，瞭望塔错落有致，古堡公园的绿植与波罗的海支流的河水相映成趣，远处的伦茨基尔希市区风貌尽收眼底，画面恢弘而有层次感。最佳拍摄时间为清晨（8:30-9:30），光线柔和，可更好地呈现城堡的石质纹理与整体风貌，避开人流高峰，拍摄效果更佳，建议携带广角镜头，捕捉全景美景。</p>
                    
                    <p><strong>2. 城堡石质城门旁：</strong>作为城堡的标志性入口，石质城门是网红拍照点。可站在城门外侧，以城门为主体，搭配城门上的雕刻与身后的城堡墙体，采用对称构图，拍摄城门的全貌与城堡的局部轮廓，厚重的石墙与精致的雕刻形成鲜明对比，画面极具历史氛围感；也可坐在城门旁的石阶上，以城门为背景，拍摄人物与城堡的同框照片，凸显古堡的威严与静谧。最佳拍摄时间为上午10:00-11:30，阳光斜照，可营造出柔和的光影效果，突出建筑细节。</p>
                    
                    <p><strong>3. 古堡公园河畔步道：</strong>沿河畔步道漫步，可找到绝佳的拍摄机位，以波罗的海支流为前景，拍摄对岸的城堡主体与瞭望塔，河水清澈，城堡的倒影映在水中，搭配岸边的绿植，画面清新自然，极具诗意。最佳拍摄时间为下午2:00-4:00，阳光柔和，避免正午强光直射，可拍摄出城堡与河水相映的绝美画面，建议携带长焦镜头，捕捉建筑细节与水面倒影。</p>
                    
                    <p><strong>4. 城堡主体楼宇回廊：</strong>城堡主体的石质回廊设计精美，石柱上雕刻着中世纪的花纹，回廊两侧的拱门错落有致，是拍摄复古风照片的绝佳机位。可选择回廊的拐角处，采用侧拍构图，捕捉回廊的延伸感与石柱的雕刻细节，搭配光影变化，营造出中世纪的神秘与庄重，适合拍摄复古风、氛围感照片，也可搭配简约服饰，提升画面的代入感。最佳拍摄时间为傍晚（17:00-18:00），夕阳洒在回廊上，镀上一层温暖的金色，画面极具感染力。</p>
                    
                    <p><strong>5. 城堡广场骑士雕塑旁：</strong>广场中央的骑士雕塑是城堡的标志性景观之一，也是拍摄人文风照片的绝佳机位。可以骑士雕塑为前景，拍摄周边的城堡墙体与回廊，雕塑的威严与城堡的厚重相得益彰，适合拍摄人文风、历史风照片；也可与雕塑同框，捕捉人物与历史景观的融合画面，展现古堡的历史氛围。最佳拍摄时间为上午9:30-10:30，阳光柔和，可清晰捕捉雕塑的细节与城堡的光影。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（8:30-9:30）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色、简约风格的衣物，如黑色、白色、卡其色，避免过于花哨，与城堡的石质墙体形成对比，更出片；部分区域禁止拍照，需遵守景区规定，拍摄时避免影响其他游客；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与人文特写，效果更佳；若想拍摄复古风照片，可搭配长裙、斗篷等服饰，与城堡的中世纪氛围更契合。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                伦茨基尔希城堡位于伦茨基尔希市中心西北部，周边景点丰富，多以历史遗迹、自然景观与民俗景点为主，游览完城堡后，可根据自身时间安排前往，既能丰富行程，也能更全面地感受伦茨基尔希的历史文化与自然之美。以下推荐几个距离城堡较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 伦茨基尔希河畔公园</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约800米，步行10分钟即可抵达，沿波罗的海支流而建，园内有大片的草坪、古树与花卉，设有木质步道与休闲座椅，可漫步公园，欣赏河畔风光，感受自然与人文的融合，免费开放，适合休闲放松、拍照打卡，夏季可在河畔野餐，冬季可欣赏河畔雪景。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 伦茨基尔希历史博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约1.2公里，步行15分钟即可抵达，或乘坐2路公交直达，车程约5分钟，票价2.5欧元。博物馆设于一座18世纪的石砌建筑中，馆内展示了伦茨基尔希市的历史遗物、民俗文化、传统手工艺与军事装备，可深入了解当地的人文风情与历史发展，开放时间为10:00-17:00，周三闭馆，成人门票5欧元，学生及老人半价，适合喜欢历史文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 波罗的海游船码头</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约1.5公里，步行20分钟即可抵达，或打车前往，费用约8欧元。可乘坐游船沿波罗的海支流游览，欣赏河畔的古老建筑、田园风光与自然景致，游船票价18欧元/人，全程约1.5小时，夏季（5-9月）运营，适合喜欢自然景观与休闲体验的游客，沿途可欣赏到城堡未被商业化的原始风貌。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 伦茨基尔希民俗村</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约2公里，可乘坐5路公交直达，车程约8分钟，票价2.5欧元。民俗村保留了芬兰传统的木质建筑与民俗风情，村内有老式木屋、民俗展馆、手工艺作坊，可体验芬兰传统手工艺、品尝当地特色美食，感受芬兰乡村的田园生活，开放时间为9:00-18:00，门票7欧元/人，适合家庭出行或喜欢民俗文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 伦茨基尔希艺术画廊</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离城堡约1.3公里，步行17分钟即可抵达，设于一座20世纪的欧式建筑内，馆内展示了芬兰本土艺术家的作品，涵盖绘画、雕塑、手工艺等多种类型，可感受芬兰的艺术氛围，开放时间为11:00-18:00，周四闭馆，成人门票6欧元，学生及老人半价，适合喜欢艺术文化的游客。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="7" title="住宿小贴士">
            <div className="space-y-4">
              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">详细住宿指南</h3>
                <div className="space-y-4 text-sm text-foreground leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">1. 住宿位置选择</h4>
                    <p>优先选择伦茨基尔希城堡周边500米范围内的住宿，出行便利，可随时前往城堡游览，部分住宿为老式石砌建筑改造，自带古堡韵味，可沉浸式感受当地的历史氛围；城堡周边多为特色民宿与精品酒店，距离核心景点近，步行可达城堡入口、古堡公园等景点；伦茨基尔希市中心距离城堡约2公里，这里有更多连锁酒店与经济型酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。自驾出行的游客可选择带免费停车位的住宿，城堡周边街道狭窄，停车不便，提前确认停车事宜。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品古堡酒店：</strong>可选择位于城堡周边的特色古堡酒店，这类酒店多由中世纪石砌建筑改造，装修融合了北欧简约元素与古堡复古风格，部分设有露台、观景台，可欣赏城堡全景或河畔风光，服务周到，价格约90-160欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>城堡周边有很多小众民宿，装修简约清新，部分保留了芬兰传统木质建筑的特色，带有小庭院或阳台，房东多为当地人，可提供地道的出行建议，价格约50-100欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约40-70欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约35-60欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>伦茨基尔希旅游旺季为6-8月，此时气候凉爽，风光优美，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，城堡周边街道停车费用较高（6-10欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住；城堡周边部分住宿为老式石砌建筑，无电梯，预订时可确认是否有电梯，便于携带大件行李。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分小众民宿不提供一次性牙刷和牙膏，建议提前自备；城堡周边多为石板路面，夜间照明较好，但部分小巷较为僻静，晚归时注意安全；住宿周边有很多当地特色餐厅，可品尝三文鱼、驯鹿肉、芬兰馅饼等芬兰特色美食，部分餐厅提供户外座位，可边就餐边欣赏城堡夜景；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>伦茨基尔希当地住宿整体价格适中，性价比高于芬兰首都赫尔辛基，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和休闲路线，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，此时城堡被白雪覆盖，石质城墙与白雪相映成趣，呈现出独特的北欧冬日古堡风光，适合喜欢静谧氛围与雪景风光的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="6月至8月，芬兰夏季白夜期间日照极长，适合深度探索" />
              <InfoRow label="建议时长" value="3-4小时" />
              <InfoRow label="注意事项" value="伦茨基尔希城堡是一座融合历史、文化、艺术与自然的独特景区，这里既有中世纪建筑的庄严厚重，又有北欧古堡的清新灵动，既有芬兰民俗的独特魅力，又有河畔风光的静谧柔美。无论是独自旅行、结伴出行，还是家庭出游，都能在这里找到属于自己的游览乐趣，感受芬兰中世纪历史与北欧古堡风情的魅力。希望这份详细的游览指南，能帮助你更好地领略伦茨基尔希城堡的风采，度过一段愉快的旅程。" />
            </div>
          </Section>
        </div>

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