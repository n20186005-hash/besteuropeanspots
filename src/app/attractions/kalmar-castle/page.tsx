import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "卡尔马城堡 (Kalmar Castle)",
  description: "卡尔马城堡详细游览指南 - 瑞典保存最完好的文艺复兴风格建筑之一，北欧历史上极具标志性的城堡遗迹",
  openGraph: {
    title: "卡尔马城堡 — Kalmar Castle",
    description: "卡尔马城堡详细游览指南 - 瑞典保存最完好的文艺复兴风格建筑之一",
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
        卡尔马城堡
      </span>
    </nav>
  );
}

export default function KalmarCastlePage() {
  const color = "#4A90E2"; // Nordic color - blue for Sweden/Nordic regions

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
              卡尔马城堡
            </h1>
            <p className="text-lg text-white/80">
              Kalmar Castle · 瑞典 · 卡尔马
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              卡尔马城堡坐落于瑞典卡尔马省卡尔马市的波罗的海西岸，是瑞典保存最完好的文艺复兴风格建筑之一，也是北欧历史上极具标志性的城堡遗迹。城堡临海而建，融合了中世纪军事防御风格与文艺复兴时期的建筑美学，承载着卡尔马联盟的辉煌历史，是感受瑞典中世纪军事文化、文艺复兴建筑魅力与波罗的海海滨风光的核心景点，每年吸引无数游客前来探寻历史印记。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="城堡整体开放时间分季节调整，夏季（5月-9月）9:00-18:00，冬季（10月-次年4月）10:00-16:00，每周一闭馆（节假日除外，具体以现场公示为准）。城堡庭院及外围区域可免费自由漫步，室内展厅及塔楼需购票进入。建议游览时间为3-4小时，清晨可避开人流，感受城堡与波罗的海的静谧交融，傍晚可欣赏夕阳洒在城堡墙体上的绝美光影，沉浸式体验中世纪城堡的庄严与静谧。" 
              />
              <InfoRow 
                label="门票价格" 
                value="城堡外围庭院免费开放；室内展厅及塔楼成人150瑞典克朗/人，学生、65岁以上老人凭有效证件半价（75瑞典克朗/人），12岁以下儿童免费；英文讲解服务180瑞典克朗/人，可现场预约，支持现金、信用卡及移动支付，部分线上平台可提前购票，享受10-20瑞典克朗优惠。每年6月-8月旅游旺季，建议提前线上购票，避免现场排队。" 
              />
              <InfoRow 
                label="详细地址" 
                value="城堡核心地址（Kalmar Slott, 392 32 Kalmar, Sweden），位于卡尔马市西海岸，濒临波罗的海，距离卡尔马市中心广场约1.5公里，周边环绕着海滨休闲步道与绿植景观，配套有当地特色餐厅、手工艺品商店，出行便捷，步行即可抵达周边核心景点与商圈。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达卡尔马机场（距离城堡约10公里），打车前往约15分钟，费用约200瑞典克朗；也可从瑞典首都斯德哥尔摩乘坐火车直达卡尔马中央火车站，车程约4.5小时，票价约450瑞典克朗，火车站距离城堡约1.2公里，步行18分钟即可抵达，也可乘坐当地3路、7路公交直达城堡入口，公交票价25瑞典克朗/人。市内交通方面，卡尔马市区公交3路、7路、10路均可直达城堡周边；市区打车前往城堡，费用约60-100瑞典克朗；城堡内部仅可步行游览，部分区域设有无障碍通道，方便老人及儿童出行，城堡内路面多为石板路，建议穿舒适的步行鞋。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                卡尔马城堡的历史渊源可追溯至公元12世纪，其发展与卡尔马的港口战略地位、北欧三国的政治联盟紧密相关，是北欧历史上重要的军事防御堡垒与政治活动场所。作为波罗的海西岸的重要据点，卡尔马城堡凭借临海的地理优势，成为中世纪瑞典抵御外敌入侵、守护海上贸易航线的重要屏障，见证了北欧地区数百年的政治更迭与文化交融。
              </p>
              <p>
                12世纪初，卡尔马城堡最初以木质防御工事的形式建成，主要用于抵御丹麦与德国北部势力的入侵，守护瑞典东南部的海上疆域。随着时间的推移，木质工事逐渐被石质建筑取代，14世纪末，城堡进行了第一次大规模扩建，增设了防御塔楼、城墙与护城河，形成了初步的军事防御体系，成为当时瑞典最坚固的城堡之一。
              </p>
              <p>
                1397年，卡尔马城堡迎来了其历史上最辉煌的时刻——北欧三国（瑞典、丹麦、挪威）在此签订了《卡尔马条约》，建立了著名的卡尔马联盟，旨在对抗强大的汉莎同盟在波罗的海的势力，推举丹麦女王为三国共主，实现北欧地区的政治统一。这一时期，卡尔马城堡成为卡尔马联盟的核心政治场所，见证了北欧三国短暂的统一历程，也成为北欧历史上极具标志性的遗迹之一。
              </p>
              <p>
                然而，卡尔马联盟的统一并未持续太久，由于三国利益分歧加剧，联盟内部矛盾不断，1523年，瑞典宣布退出卡尔马联盟，联盟宣告解体，卡尔马城堡的政治地位随之下降，但作为军事堡垒仍发挥着重要作用。16世纪，瑞典国王古斯塔夫·瓦萨对城堡进行了大规模改造，将其从纯粹的军事防御堡垒，改造为兼具居住、办公与防御功能的综合性城堡，融入了文艺复兴时期的建筑风格，形成了如今我们看到的城堡风貌。
              </p>
              <p>
                历史上，卡尔马城堡历经多次战争与修缮，17世纪的斯科讷战争中，城堡曾遭到破坏，战后瑞典政府对其进行了全面修缮，严格遵循"修旧如旧"的原则，保留了中世纪的防御格局与文艺复兴时期的建筑细节。19世纪以来，瑞典政府将卡尔马城堡列为国家级历史遗迹，持续投入资金进行保护与修缮，同时对公众开放，让更多人了解其承载的北欧历史与文化。
              </p>
              <p>
                如今，卡尔马城堡不仅是瑞典重要的历史文化载体，也是北欧最受欢迎的旅游景点之一，每年吸引约50万人前来参观。城堡的石质墙体、防御塔楼、护城河与文艺复兴风格的内饰，共同勾勒出中世纪北欧的军事与文化风貌，走在城堡的石板路上，仿佛能感受到几百年前北欧三国结盟的庄严时刻，也能领略到文艺复兴时期建筑艺术的独特魅力，成为感受瑞典中世纪历史、领略北欧建筑风情的重要窗口。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                卡尔马城堡以石质城墙、防御塔楼与临海庭院为核心，分为军事防御区、宫廷生活区、历史展厅区三大区域，景点布局紧凑，建筑特色鲜明，历史氛围与海滨风光交融，建议安排3-4小时游览。以下为经典步行游览路线，可全面领略城堡的建筑风貌、历史底蕴与海滨美景，路线全程约1.5公里，节奏舒缓，兼顾打卡与体验感，同时可深入了解卡尔马联盟的历史与瑞典中世纪军事文化。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：卡尔马城堡入口</strong>（城堡正门设有标志性的石质拱门，门口有卡尔马联盟的历史标识，可在此打卡拍照，感受城堡的庄严气势）</p>
                  
                  <p><strong>第一站：城堡护城河与吊桥</strong>（从入口步行2分钟可达，护城河环绕城堡一周，水质清澈，吊桥采用中世纪木质结构，是城堡的重要防御设施，可漫步吊桥，感受中世纪军事防御的严谨，拍摄城堡与护城河的全景）</p>
                  
                  <p><strong>第二站：防御塔楼</strong>（从吊桥步行3分钟可达，塔楼高约20米，是城堡的制高点，内部保留着中世纪的瞭望台与射击孔，登顶后可俯瞰整个城堡、波罗的海与卡尔马市区全景，感受临海城堡的壮阔风光）</p>
                  
                  <p><strong>第三站：军事防御展厅</strong>（从塔楼步行5分钟可达，设于城堡的地下区域，展示着中世纪的武器、盔甲、防御工具等展品，详细介绍卡尔马城堡的军事防御体系与战争历史，可深入了解中世纪瑞典的军事文化）</p>
                  
                  <p><strong>第四站：宫廷生活区</strong>（从展厅步行4分钟可达，位于城堡的核心区域，包括国王寝宫、议事厅、宴会厅等，内饰采用文艺复兴风格，装饰精美，保留着当年的家具与陈设，可感受中世纪贵族的生活氛围）</p>
                  
                  <p><strong>第五站：卡尔马联盟展厅</strong>（从宫廷生活区步行3分钟可达，展厅内通过文物、图片、影像等形式，详细介绍卡尔马联盟的建立、发展与解体历程，展现北欧三国的政治与文化交融）</p>
                  
                  <p><strong>第六站：城堡临海庭院</strong>（从展厅步行6分钟可达，庭院位于城堡西侧，濒临波罗的海，设有休闲座椅，可漫步庭院，欣赏波罗的海的辽阔风光，感受海风的清新，也可拍摄城堡与大海相映的绝美画面）</p>
                  
                  <p><strong>终点：城堡出口</strong>（周边有停车场与公交站点，可乘坐公交或打车前往市区，也可步行前往附近的海滨步道，继续感受波罗的海的海滨风情）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>城堡内多为石板路面，雨后易滑，建议穿舒适的步行鞋；室内展厅与塔楼内禁止大声喧哗、随意触摸文物，禁止使用闪光灯拍照；夏季卡尔马气候凉爽，多微风，可携带薄外套；冬季气温较低，多雪，路面可能结冰，注意防滑，可携带保暖衣物；旅游旺季（6-8月）游客较多，建议避开正午人流高峰，错峰游览；城堡内禁止吸烟，禁止携带易燃易爆物品，遵守景区相关规定；城堡周边有很多当地特色餐厅，可品尝瑞典传统美食，感受当地饮食文化。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                卡尔马城堡以庄严的石质建筑为核心，融合了中世纪军事防御风格与文艺复兴时期的建筑美学，搭配波罗的海的辽阔海景，光影层次丰富，既有中世纪的古朴厚重，又有海滨风光的清新壮阔，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、氛围大片等不同风格，无论是手机还是相机，都能拍出高质量照片，展现城堡的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 城堡入口拱门处：</strong>这是拍摄城堡全景的绝佳机位，站在拱门前方，可捕捉到城堡的整体轮廓，石质城墙、防御塔楼与拱门相互映衬，背景可搭配远处的波罗的海，画面庄严而壮阔，极具中世纪军事城堡的气势。最佳拍摄时间为上午9:00-10:30，阳光斜照，可营造出柔和的光影效果，突出城堡的石质纹理与建筑细节，避开人流高峰。</p>
                    
                    <p><strong>2. 吊桥与护城河旁：</strong>吊桥与护城河是城堡的标志性景观，也是拍摄复古风照片的绝佳机位。可以吊桥为前景，拍摄后方的城堡墙体与塔楼，护城河的水面倒映着城堡的身影，画面极具层次感；也可站在吊桥上，以护城河与城堡为背景，拍摄人物与城堡的同框照片，凸显中世纪的复古氛围。最佳拍摄时间为上午10:30-11:30，阳光柔和，可清晰捕捉吊桥的木质纹理与护城河的清澈水面。</p>
                    
                    <p><strong>3. 防御塔楼顶端：</strong>这是拍摄城堡与波罗的海全景的最佳机位，登顶塔楼后，可360度俯瞰整个卡尔马城堡、卡尔马市区与波罗的海，城堡的石质建筑群错落有致，波罗的海的海面波光粼粼，山海与城堡完美融合，画面恢弘而有诗意。最佳拍摄时间为下午2:00-4:00，阳光充足，可清晰捕捉海面的光影变化与城堡的建筑细节，建议携带广角镜头，捕捉全景美景。</p>
                    
                    <p><strong>4. 宫廷生活区露台：</strong>露台位于城堡的核心区域，面向波罗的海，是拍摄建筑细节与海滨风光融合的绝佳机位。可近距离拍摄文艺复兴风格的门窗装饰、石质浮雕，搭配远处的波罗的海，画面清新而雅致；也可坐在露台的座椅上，以城堡建筑与大海为背景，拍摄人物氛围感照片，凸显复古与浪漫的氛围。最佳拍摄时间为傍晚17:00-18:00，夕阳洒在露台与海面上，镀上一层温暖的金色，画面极具感染力。</p>
                    
                    <p><strong>5. 临海庭院岸边：</strong>临海庭院紧邻波罗的海，是拍摄城堡与大海同框的绝佳机位。可选择庭院的岸边，以城堡的塔楼为背景，拍摄波罗的海的辽阔海面，海浪与城堡相映成趣，画面壮阔而灵动；也可拍摄城堡在海面上的倒影，搭配岸边的绿植，营造出清新自然的氛围，适合拍摄治愈系照片。最佳拍摄时间为清晨9:00前，此时海面平静，游客较少，可捕捉到城堡与大海的静谧之美。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（9:00前）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色、简约风格的衣物，如白色、米色、深蓝色，避免过于花哨，与城堡的石质色调形成对比，更出片；室内展厅禁止拍照，需遵守景区规定，拍摄时避免影响其他游客；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与海面特写，效果更佳；若想拍摄复古风照片，可搭配长裙、骑士风服饰等，与城堡的中世纪氛围更契合。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                卡尔马城堡位于卡尔马市西海岸，周边景点丰富，多以历史遗迹、艺术场馆与海滨景观为主，紧邻波罗的海，游览完城堡后，可根据自身时间安排前往，既能丰富行程，也能更全面地感受卡尔马的历史文化与自然之美。以下推荐几个距离城堡较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 卡尔马老城</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约1.5公里，步行20分钟即可抵达，或乘坐3路公交直达，车程约5分钟，票价25瑞典克朗。老城保留了中世纪的街巷格局与建筑风貌，石质房屋错落有致，街巷内设有小众咖啡馆、手工艺品商店与当地特色餐厅，可漫步街巷，感受中世纪卡尔马的市井烟火气，免费开放，适合所有游客前往。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 卡尔马大教堂</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约1.3公里，步行18分钟即可抵达，建于1660年，是卡尔马省最重要的大教堂，由瑞典著名建筑师大尼科德姆斯·特辛主持设计，采用巴洛克式古典主义风格，外观恢弘典雅，内部装饰精美，设有巨大的管风琴与系列宗教绘画，开放时间为10:00-17:00，周日闭馆，免费开放，适合喜欢宗教建筑与艺术文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 卡尔马艺术馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约1.8公里，步行25分钟即可抵达，或乘坐7路公交直达，车程约7分钟，票价25瑞典克朗。艺术馆始建于1942年，2008年正式完工，建筑外观简洁现代，内部展览着从文艺复兴时期到当代的艺术作品，藏品丰富，开放时间为10:00-18:00，周三闭馆，成人门票40瑞典克朗，儿童免费，适合喜欢艺术文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 波罗的海海滨步道</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约300米，步行5分钟即可抵达，步道沿波罗的海蜿蜒，全长约2公里，周边植被繁茂，设有休闲座椅与观景平台，可漫步步道，欣赏波罗的海的辽阔风光，感受海风的清新，也可远眺卡尔马城堡的全景，免费开放，适合所有游客前往，尤其适合饭后散步、休闲放松。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 卡尔马市政厅</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离城堡约1.6公里，步行22分钟即可抵达，建于17世纪末，采用荷兰巴罗克风格，外观宏伟，内饰精美，是卡尔马市的标志性建筑之一，开放时间为9:00-16:00，周六日闭馆，免费开放，适合喜欢建筑与城市风光的游客，登顶市政厅可俯瞰卡尔马市区与波罗的海风光。</p>
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
                    <p>优先选择卡尔马城堡周边500米范围内的住宿，出行便利，可随时漫步城堡、前往海滨步道，部分住宿为老式石质建筑改造，自带复古韵味，可沉浸式感受当地的历史氛围与海滨风情；城堡周边多为特色民宿与精品酒店，距离核心景点近，步行可达老城、大教堂等景点；卡尔马市中心距离城堡约1.5公里，这里有更多连锁酒店与经济型酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。自驾出行的游客可选择带免费停车位的住宿，城堡周边街道狭窄，停车不便，提前确认停车事宜。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品复古酒店：</strong>可选择位于城堡周边的特色复古酒店，这类酒店多由17至18世纪的石质建筑改造，装修融合了北欧简约元素与中世纪复古风格，部分设有露台、观景台，可欣赏城堡全景或波罗的海风光，服务周到，价格约1000-1800瑞典克朗/晚。</p>
                    
                    <p><strong>特色民宿：</strong>城堡周边有很多小众民宿，装修简约清新，部分保留了瑞典传统建筑的特色，带有小庭院或阳台，房东多为当地人，可提供地道的出行建议，价格约500-1000瑞典克朗/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约400-700瑞典克朗/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约300-600瑞典克朗/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>卡尔马旅游旺季为6-8月，此时气候凉爽，风光优美，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，城堡周边街道停车费用较高（40-70瑞典克朗/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住；城堡周边部分住宿为老式石质建筑，无电梯，预订时可确认是否有电梯，便于携带大件行李。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分小众民宿不提供一次性牙刷和牙膏，建议提前自备；城堡周边多为石板路面，夜间照明较好，但部分小巷较为僻静，晚归时注意安全；住宿周边有很多当地特色餐厅，可品尝瑞典肉丸、盐渍三文鱼、传统肉汤等特色美食，部分餐厅提供户外座位，可边就餐边欣赏城堡夜景与波罗的海风光；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>卡尔马当地住宿整体价格适中，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和休闲路线，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，此时城堡被白雪覆盖，石质建筑与白雪、大海相映成趣，呈现出独特的北欧冬日风光，适合喜欢静谧氛围与雪景风光的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="6月至8月，夏季活动丰富且全面开放；圣诞季有特别的中世纪市集" />
              <InfoRow label="建议时长" value="3-4小时" />
              <InfoRow label="注意事项" value="城堡内部分区域台阶陡峭，行动不便者需留意；夏季常有历史情景再现表演，建议提前查询活动日程；城堡旁有免费停车场" />
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