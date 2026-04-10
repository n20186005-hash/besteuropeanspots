import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "布拉索夫老城 (Brașov Old Town)",
  description: "布拉索夫老城详细游览指南 - 特兰西瓦尼亚地区保存最完整的中世纪老城之一，素有“罗马尼亚的心脏”之称",
  openGraph: {
    title: "布拉索夫老城 — Brașov Old Town",
    description: "布拉索夫老城详细游览指南 - 特兰西瓦尼亚地区保存最完整的中世纪老城之一",
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
        布拉索夫老城
      </span>
    </nav>
  );
}

export default function BrasovOldTownPage() {
  const color = "#8b0000"; // Balkans & Eastern Europe color

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
                Old Town
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                巴尔干・东欧
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              布拉索夫老城
            </h1>
            <p className="text-lg text-white/80">
              Brașov Old Town · 罗马尼亚 · 布拉索夫
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              布拉索夫老城坐落于罗马尼亚布拉索夫县首府布拉索夫市，被南喀尔巴阡山脉环绕，素有"罗马尼亚的心脏"之称，是特兰西瓦尼亚地区保存最完整的中世纪老城之一。老城保留着完整的中世纪城市格局，融合哥特式、巴洛克式、萨克森风格建筑，红瓦石墙、窄巷古宅错落有致，兼具历史厚重感与欧式浪漫，是感受中世纪欧洲风情、体验多元文化交融的必访胜地。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="布拉索夫老城整体全天开放，无统一闭馆时间；老城内部景点（教堂、博物馆等）开放时间分季节调整，夏季（4月-10月）9:00-18:00，冬季（11月-次年3月）9:00-16:00，每周一部分景点闭馆（具体以现场公示为准）。建议游览时间为3-4小时，可沉浸式感受老城的中世纪氛围，避开正午人流高峰。" 
              />
              <InfoRow 
                label="门票价格" 
                value="老城整体免费开放，无需购买大门票；内部独立景点单独收费，黑教堂门票15罗马尼亚列伊/人（约合3欧元），布拉索夫城市博物馆门票10罗马尼亚列伊/人（约合2欧元），学生、65岁以上老人凭有效证件半价，12岁以下儿童免费。部分教堂免费开放，讲解服务15罗马尼亚列伊/人，支持现金与信用卡支付，部分小众景点可现场扫码购票。" 
              />
              <InfoRow 
                label="详细地址" 
                value="老城核心地址（Strada Sfatului 1, Brașov 500036, Romania），位于布拉索夫市中心，被中世纪城墙环绕，核心区域为议会广场，周边辐射多条古街巷，距离布拉索夫火车站约1.5公里，步行可达周边餐饮、购物区，远眺可欣赏南喀尔巴阡山脉的壮丽风光。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达布加勒斯特奥托佩尼国际机场（距离布拉索夫约180公里），打车前往约2.5小时，费用约250罗马尼亚列伊；也可从布加勒斯特乘坐火车直达布拉索夫火车站，车程约3小时，票价约50罗马尼亚列伊，火车站距离老城入口约1.5公里，步行20分钟或乘坐2路、5路公交直达，公交票价2罗马尼亚列伊/人。市内交通方面，布拉索夫市区公交网络发达，1路、3路、7路公交均可直达老城周边；市区打车前往老城，费用约10-15罗马尼亚列伊；老城内部街巷狭窄，禁止机动车通行，仅可步行游览，沉浸式感受中世纪街巷氛围。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                布拉索夫老城的历史渊源可追溯至新石器时代，当时已有人类在此定居，公元2世纪至8世纪，定居者逐渐形成稳定的部落社会与宗教信仰，为老城的发展奠定了基础。真正的城市化始于12世纪至13世纪，随着开拓者的到来，这里逐渐形成聚居地，修建学校、教堂，开辟各类行业，逐步发展为区域性商贸枢纽。
              </p>
              <p>
                1211年，匈牙利国王安德烈二世邀请条顿骑士团来到此地，骑士团修建了坚固的城墙，城墙内的要塞逐渐成为萨克森人的定居点，这便是布拉索夫老城的雏形。此后，萨克森人与此前在此定居的居民共同推动商贸发展，萨克森商人凭借匈牙利国王赐予的免税政策，逐渐成为当地的主导力量，他们修建豪宅、行会建筑、教堂与市政厅，形成了如今老城独特的萨克森风格建筑风貌，也让老城充满了浓郁的"德国感"。
              </p>
              <p>
                历史上，布拉索夫老城的归属历经变迁，13世纪至16世纪早期属于匈牙利王国，16世纪中期属于东匈牙利王国，16世纪后期至19世纪初属于特兰西瓦尼亚王国，19世纪初至20世纪早期属于奥匈帝国，数百年的政权更迭，让老城融合了多元文化元素，哥特式的教堂、巴洛克式的市政厅、萨克森风格的民居，共同构成了老城独特的建筑景观。
              </p>
              <p>
                中世纪时期，布拉索夫老城是重要的商业重镇，1364年起，议会广场便成为一年一度跨国市集的举办地，成为当时的"城市会展中心"，来自欧洲各地的商人在此交易，推动了文化与经济的交融。这一时期，老城也经历了诸多波折，1421年奥斯曼人入侵，城市遭到破坏；1689年，城内暴动引发大火，黑教堂被熏黑，"黑教堂"之名也由此而来。
              </p>
              <p>
                近代以来，布拉索夫老城逐渐褪去商贸枢纽的光环，成为罗马尼亚重要的历史文化载体。20世纪以来，罗马尼亚政府多次对老城进行修复与保护，严格遵循"修旧如旧"的原则，还原中世纪建筑的原始风貌，妥善保护内部的历史文物与文化遗迹。如今，布拉索夫老城不仅是罗马尼亚最受欢迎的旅游景点之一，也是感受中世纪欧洲历史、体验多元文化交融的重要窗口，每年吸引着来自世界各地的游客。
              </p>
              <p>
                老城的每一处街巷、每一座建筑都承载着厚重的历史，沙伊门见证着萨克森人与原住民的历史变迁，黑教堂记录着火灾与重建的过往，议会广场留存着中世纪市集的繁华印记，这些历史遗迹共同构成了布拉索夫老城的独特魅力，也让这里成为罗马尼亚历史文化的重要象征。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                布拉索夫老城以议会广场为核心，周边辐射多条古街巷，景区总面积不大，但景点密集，建议安排3-4小时游览，以下为经典步行游览路线，可全面领略老城的中世纪建筑特色、历史遗迹与人文氛围，路线全程约2公里，节奏舒缓，适合沉浸式感受老城的浪漫与厚重。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：老城主入口</strong>（中世纪城墙入口，设有景区简介牌与导览图，可在此领取导览手册，打卡古老城墙与城门，感受中世纪防御工事的威严）</p>
                  
                  <p><strong>第一站：沙伊门</strong>（距离入口约200米，建于1827年，古典主义风格，曾是原住民进出老城的唯一通道，见证了老城的族群变迁，可打卡城门建筑，聆听相关历史典故）</p>
                  
                  <p><strong>第二站：议会广场</strong>（老城核心区域，距离沙伊门约300米，广场中央有喷泉与鸽子群，周边环绕着市政厅、行会建筑，可参观巴洛克式市政厅，感受中世纪市集的繁华气息，在广场休息片刻，欣赏周边建筑风貌）</p>
                  
                  <p><strong>第三站：黑教堂</strong>（位于议会广场东侧，步行2分钟可达，罗马尼亚乃至东巴尔干地区最大的哥特式教堂，可进入内部参观，欣赏巨大的机械管风琴与历史文物，感受教堂的庄严与静谧）</p>
                  
                  <p><strong>第四站：绳索街</strong>（从黑教堂步行5分钟可达，东南欧最窄的街道，宽1.1-1.3米，砖石路面，两侧是色彩各异的古宅，可漫步窄巷，打卡网红景点，感受老城的小巧与灵动）</p>
                  
                  <p><strong>第五站：布拉索夫城市博物馆</strong>（距离绳索街约400米，设于19世纪欧式建筑内，可参观馆内的历史遗物、民俗文化展品，了解老城的发展历程）</p>
                  
                  <p><strong>第六站：老城制高点</strong>（从博物馆步行10分钟可达，可登顶俯瞰整个布拉索夫老城全景，远眺南喀尔巴阡山脉，感受老城与自然的融合之美）</p>
                  
                  <p><strong>终点：老城出口周边</strong>（周边有特色餐厅、纪念品商店，可品尝当地特色美食，购买手工艺品，结束游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>老城内部街巷狭窄，多为石板路面，建议穿舒适的步行鞋；部分景点内部禁止大声喧哗、随意触摸文物，黑教堂内部禁止使用闪光灯拍照；夏季老城气温适中，早晚温差较小，可携带遮阳帽与饮用水；冬季气温较低，部分路面可能结冰，注意防滑；旅游旺季（5-9月）游客较多，建议避开正午人流高峰，错峰游览；老城内部商铺多为当地特色小店，可理性消费，感受当地人文气息。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                布拉索夫老城融合了多种欧式建筑风格，红瓦石墙、窄巷古宅与南喀尔巴阡山脉相映成趣，光影层次丰富，既有中世纪的庄严厚重，又有欧式小镇的浪漫灵动，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、街巷氛围等不同风格，无论是手机还是相机，都能拍出高质量照片，展现老城的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 老城制高点：</strong>这是拍摄老城全景的最佳机位，登顶后可360度俯瞰整个布拉索夫老城，红瓦屋顶错落有致，中世纪城墙环绕四周，远处的南喀尔巴阡山脉连绵起伏，山水与人文景观完美融合，画面壮阔而有层次感。最佳拍摄时间为清晨（7:30-9:00），光线柔和，可更好地呈现老城的建筑细节与整体风貌，避开人流高峰，拍摄效果更佳，建议携带广角镜头，捕捉全景美景。</p>
                    
                    <p><strong>2. 议会广场中央：</strong>广场是老城的核心，也是拍摄老城人文氛围的绝佳机位。可以广场中央的喷泉为前景，拍摄周边的巴洛克式市政厅与萨克森风格行会建筑，红瓦黄墙相映成趣，搭配广场上的鸽子群，氛围感拉满，适合拍摄人文风、清新风照片。最佳拍摄时间为上午10:00-11:00，阳光柔和，可捕捉到建筑的光影细节，也能拍到行人与鸽子的灵动画面。</p>
                    
                    <p><strong>3. 绳索街中段：</strong>作为东南欧最窄的街道，绳索街本身就是网红拍照点。可站在街巷中段，采用纵向构图，拍摄街巷的延伸感，两侧色彩各异的古宅、砖石路面与头顶的天空相互映衬，凸显街巷的小巧与灵动。建议穿着纯色衣物，与古宅的色彩形成对比，更出片；最佳拍摄时间为下午3:00-4:00，阳光斜照，可营造出柔和的光影效果，避免正午强光直射。</p>
                    
                    <p><strong>4. 黑教堂正面广场：</strong>黑教堂是老城的标志性建筑，其哥特式尖顶与古朴的石墙极具辨识度。可在教堂正面广场采用对称构图，拍摄教堂的正面全貌，突出教堂的庄严宏伟，教堂前的教士雕像可作为前景，增添历史厚重感。最佳拍摄时间为傍晚（17:00-18:30），夕阳洒在教堂石墙上，呈现出温暖的金黄色，画面极具感染力，建议携带长焦镜头，拍摄教堂的尖顶细节。</p>
                    
                    <p><strong>5. 老城古街巷拐角：</strong>老城的古街巷纵横交错，拐角处往往能拍出极具氛围感的照片。可选择两侧是红瓦古宅的街巷拐角，采用侧拍构图，捕捉街巷的延伸感与建筑的细节，搭配光影变化，营造出中世纪的静谧与浪漫。最佳拍摄时间为清晨或傍晚，光线柔和，可避免人流干扰，适合拍摄复古风、氛围感照片，也可搭配当地特色服饰，提升画面的代入感。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（7:30-9:00）和傍晚（17:00-18:30），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色、简约风格的衣物，避免过于花哨，与老城的红瓦石墙形成对比，更出片；部分景点内部禁止拍照，需遵守景区规定，拍摄时避免影响其他游客；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与人文特写，效果更佳；若想拍摄复古风照片，可搭配长裙、复古帽子等服饰，与老城的中世纪氛围更契合。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                布拉索夫老城位于布拉索夫市中心，周边景点丰富，多以历史建筑、自然景观与人文景点为主，游览完老城后，可根据自身时间安排前往，既能丰富行程，也能更全面地感受布拉索夫的历史文化与自然之美，以下推荐几个距离老城较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 布兰城堡（Bran Castle）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离布拉索夫老城约30公里，打车前往约40分钟，费用约80罗马尼亚列伊，也可乘坐旅游专线公交直达，车程约1小时，票价约15罗马尼亚列伊。城堡建于14世纪，是一座哥特式城堡，因被误认为是"吸血鬼城堡"而闻名，内部装饰精美，保留着中世纪的防御工事，开放时间为9:00-17:00，周一闭馆，成人门票30罗马尼亚列伊，学生半价，适合喜欢中世纪城堡与奇幻文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 锡吉什瓦拉老城（Sighișoara Old Town）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离布拉索夫老城约100公里，可乘坐火车或长途汽车前往，车程约2小时，票价约30罗马尼亚列伊。锡吉什瓦拉老城是罗马尼亚最美小镇，被列入世界文化遗产，保留着完整的中世纪格局，建筑风格与布拉索夫老城相似但更具小众韵味，免费开放，内部有吸血鬼原型弗拉德三世的故居，适合深度感受中世纪欧洲小镇风情。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 布拉索夫圣母升天大教堂</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约500米，步行7分钟即可抵达，是一座拜占庭式与哥特式融合的教堂，外观简洁庄重，内部留存着精美的壁画与宗教文物，氛围庄严静谧，免费开放，进入教堂需遵守宗教礼仪，禁止大声喧哗、随意拍摄，建议穿着得体，适合喜欢宗教文化与建筑艺术的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 喀尔巴阡山脉徒步步道</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约3公里，可乘坐3路公交直达，车程约15分钟，或打车前往，费用约15罗马尼亚列伊。步道蜿蜒于南喀尔巴阡山脉间，沿途植被繁茂，可欣赏山间的溪流、瀑布与珍稀动植物，登顶后可俯瞰整个布拉索夫市全景与老城风貌，步道免费开放，适合徒步爱好者，建议穿舒适的徒步鞋，携带饮用水。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 布拉索夫天文馆</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离老城约1公里，步行15分钟即可抵达，设于一座欧式建筑内，馆内有先进的天文设备，可观看天文科普影片、观测星空，是了解天文知识的绝佳去处，开放时间为10:00-18:00，周二闭馆，成人门票12罗马尼亚列伊，学生半价，适合家庭出行与天文爱好者。</p>
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
                    <p>优先选择布拉索夫老城内部或周边500米范围内的住宿，出行便利，可随时漫步老城街巷，感受中世纪氛围，部分住宿为老式欧式建筑改造，自带复古韵味，可沉浸式体验当地生活；老城周边多为特色民宿与精品酒店，距离核心景点近，步行可达议会广场、黑教堂等景点；布拉索夫市中心距离老城约1公里，这里有更多连锁酒店与经济型酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。自驾出行的游客可选择带免费停车位的住宿，老城周边街道狭窄，停车不便，提前确认停车事宜。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品度假酒店：</strong>可选择位于老城内部的特色度假酒店，这类酒店多由中世纪古宅改造，装修融合了欧式复古元素与现代舒适设施，部分设有露台、观景台，可欣赏老城全景或山脉风光，服务周到，价格约80-150欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>老城周边有很多小众民宿，装修简约典雅，保留了萨克森风格建筑的特色，部分带有小庭院或阳台，房东多为当地人，可提供地道的出行建议，价格约45-85欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约35-65欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约30-55欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>布拉索夫旅游旺季为5-9月，此时气候适宜，山间风光优美，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，老城周边街道停车费用较高（5-10欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住；老城内部部分住宿为老式建筑，无电梯，预订时可确认是否有电梯，便于携带大件行李。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分小众民宿不提供一次性牙刷和牙膏，建议提前自备；老城周边多为石板路面，夜间照明较好，但部分小巷较为僻静，晚归时注意安全；住宿周边有很多当地特色餐厅，可品尝炖肉、烤香肠、奶酪卷等罗马尼亚特色美食，部分餐厅提供户外座位，可边就餐边欣赏老城夜景；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>布拉索夫当地住宿整体价格适中，性价比高于罗马尼亚首都布加勒斯特，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和徒步路线，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，此时山间常有雪景，老城与雪景相映成趣，适合喜欢静谧氛围与雪景风光的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="5月至10月，秋季山间色彩尤为壮观；冬季适合结合附近波亚纳布拉索夫滑雪场游玩" />
              <InfoRow label="建议时长" value="1–2天" />
              <InfoRow label="注意事项" value="布拉索夫老城是一座融合历史、文化、艺术与自然的独特景区，这里既有中世纪建筑的庄严厚重，又有欧式小镇的浪漫灵动，既有萨克森文化的独特魅力，又有多元文化交融的历史印记。无论是独自旅行、结伴出行，还是家庭出游，都能在这里找到属于自己的游览乐趣，感受中世纪欧洲的历史底蕴与文化魅力。希望这份详细的游览指南，能帮助你更好地领略布拉索夫老城的风采，度过一段愉快的旅程。" />
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