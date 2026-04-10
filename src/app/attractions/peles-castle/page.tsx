import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "锡纳亚佩莱斯城堡 (Peleș Castle)",
  description: "锡纳亚佩莱斯城堡详细游览指南 - 罗马尼亚第一任国王卡洛尔一世的夏宫，被誉为“喀尔巴阡山脉的明珠”",
  openGraph: {
    title: "锡纳亚佩莱斯城堡 — Peleș Castle",
    description: "锡纳亚佩莱斯城堡详细游览指南 - 罗马尼亚第一任国王卡洛尔一世的夏宫",
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
        锡纳亚佩莱斯城堡
      </span>
    </nav>
  );
}

export default function PelesCastlePage() {
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
                Castle
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                巴尔干・东欧
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              锡纳亚佩莱斯城堡
            </h1>
            <p className="text-lg text-white/80">
              Peleș Castle · 罗马尼亚 · 锡纳亚
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              锡纳亚佩莱斯城堡坐落于罗马尼亚普拉霍瓦县锡纳亚市，依偎在南喀尔巴阡山脉深处，是罗马尼亚第一任国王卡洛尔一世的夏宫，被誉为"喀尔巴阡山脉的明珠"。城堡融合哥特式、文艺复兴式等多种建筑风格，白墙尖顶、红窗雕花，隐匿于葱郁山林间，内部富丽堂皇，兼具艺术价值与历史底蕴，是感受罗马尼亚王室历史与欧式浪漫的必访胜地。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="城堡及周边园林开放时间分季节调整，夏季（4月-10月）9:00-18:00，冬季（11月-次年3月）9:00-16:00，每周一闭馆（节假日除外），具体开放时间以现场公示为准。建议游览时间为2-3小时，可兼顾城堡内部与周边园林景观，避开正午人流高峰。" 
              />
              <InfoRow 
                label="门票价格" 
                value="城堡内部参观门票分两种，基础门票30罗马尼亚列伊/人（约合6欧元），含主要展厅；全景门票45罗马尼亚列伊/人（约合9欧元），含所有展厅及城堡塔楼。学生、65岁以上老人凭有效证件半价，12岁以下儿童免费。园林及周边景观免费开放，城堡内讲解服务20罗马尼亚列伊/人，支持现金与信用卡支付。" 
              />
              <InfoRow 
                label="详细地址" 
                value="城堡核心地址（Strada Peleș 2, Sinaia 106100, Romania），位于锡纳亚市中部，坐落在喀尔巴阡山脉半山腰，周边被茂密的森林环绕，距离锡纳亚市中心约1公里，步行可达周边景点与餐饮区，远眺可欣赏山脉全景。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达布加勒斯特奥托佩尼国际机场（距离锡纳亚约130公里），打车前往约2小时，费用约200罗马尼亚列伊；也可从布加勒斯特乘坐火车直达锡纳亚火车站，车程约2.5小时，票价约40罗马尼亚列伊，火车站距离城堡约800米，步行10分钟即可抵达。市内交通方面，锡纳亚市区面积较小，可乘坐1路、3路公交直达城堡入口，公交票价2罗马尼亚列伊/人；打车从市区任意地点前往城堡，费用约10-20罗马尼亚列伊；也可沿山间步道步行前往，沿途可欣赏山林风光，步行约15分钟，沉浸式感受山城氛围。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                佩莱斯城堡的建造与罗马尼亚王室的发展紧密相关，其历史渊源可追溯至19世纪中期。1866年，当时的罗马尼亚联合王国国务会议决定，邀请德国霍亨索伦-锡格马林根家族的卡洛尔亲王出任罗马尼亚国王，卡洛尔一世登基后，希望在喀尔巴阡山脉修建一座夏宫，作为王室避暑与休闲的场所，同时彰显罗马尼亚王室的威严与格调。
              </p>
              <p>
                1872年，卡洛尔一世邀请德国建筑师爱德华·里德尔主持城堡设计与建造，工程于1883年完成首期建设，1914年全部竣工，前后耗时42年，凝聚了众多艺术家与建筑师的心血，是当时欧洲最豪华的王室宫殿之一。城堡最初设计为哥特式风格，后续建设中融入了文艺复兴式、巴洛克式等多种建筑元素，形成了独特的建筑风貌，既保留了欧式城堡的庄严宏伟，又增添了浪漫灵动的气质。
              </p>
              <p>
                作为卡洛尔一世的夏宫，佩莱斯城堡不仅是王室避暑胜地，也是当时罗马尼亚的重要外交场所，众多欧洲王室贵族、政界要员曾在此相聚，见证了罗马尼亚王室的辉煌岁月。城堡内部设有160间房间，包括兵器厅、议事厅、音乐厅、宴会厅、卧室等，每一间都装饰精美，收藏着大量珍贵的艺术品、古董家具、挂毯与兵器，彰显着王室的奢华与品味。
              </p>
              <p>
                一战结束后，罗马尼亚王室衰落，佩莱斯城堡逐渐褪去王室专属光环，1948年，罗马尼亚政府将其收归国有，改为博物馆，向公众开放，让更多人有机会领略这座城堡的艺术魅力与历史底蕴。20世纪以来，政府多次对城堡进行修复与保护，严格遵循"修旧如旧"的原则，还原了城堡的原始风貌，同时妥善保护内部的珍贵文物，使其成为罗马尼亚最具代表性的历史建筑之一，也是世界上最美丽的城堡之一。
              </p>
              <p>
                如今，佩莱斯城堡不仅是罗马尼亚重要的旅游景点，也是文化遗产保护的典范，每年吸引着来自世界各地的游客，其独特的建筑风格与深厚的历史底蕴，使其成为喀尔巴阡山脉中一颗璀璨的明珠，也成为罗马尼亚王室历史与欧式建筑艺术的重要载体。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                佩莱斯城堡景区由城堡主体、城堡塔楼、王室花园三部分组成，总面积适中，建议安排2-3小时游览，以下为经典步行游览路线，可全面领略城堡的建筑特色、内部珍宝与周边风光，路线全程约1.5公里，节奏舒缓，适合沉浸式感受王室氛围与山间美景。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：城堡主入口</strong>（标志性的雕花铁门，设有景区简介牌与导览图，可在此领取导览手册，打卡城堡外观全貌）</p>
                  
                  <p><strong>第一站：城堡主体一层</strong>（参观兵器厅、议事厅，欣赏大量16-19世纪的兵器、盔甲与古董家具，感受王室的威严与历史的厚重，聆听工作人员讲解相关历史典故）</p>
                  
                  <p><strong>第二站：城堡主体二层</strong>（游览音乐厅、宴会厅与王室卧室，欣赏精美的壁画、挂毯与水晶吊灯，感受王室生活的奢华，部分展厅可拍摄纪念照片，禁止使用闪光灯）</p>
                  
                  <p><strong>第三站：城堡塔楼</strong>（登顶塔楼，俯瞰整个佩莱斯城堡与周边山林全景，远眺喀尔巴阡山脉的壮丽风光，感受山间的静谧与辽阔，塔楼内设有小型观景台，适合拍照打卡）</p>
                  
                  <p><strong>第四站：王室花园</strong>（从城堡后侧出口进入，漫步于精心修剪的园林中，欣赏喷泉、雕塑与各类珍稀绿植，园林融合了法式与英式园林风格，曲径通幽，风景宜人，可在此休息片刻，感受自然与建筑的融合之美）</p>
                  
                  <p><strong>终点：城堡出口周边</strong>（周边有纪念品商店与咖啡馆，可购买特色纪念品，品尝当地咖啡与小吃，结束游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>城堡内部禁止大声喧哗、随意触摸文物与装饰，禁止使用闪光灯拍照；景区内多为石板路面与山间步道，部分路段有坡度，建议穿舒适的步行鞋；夏季山间蚊虫较多，可携带驱蚊用品，早晚温差较大，建议携带薄外套；冬季山区气温较低，部分路面可能结冰，注意防滑，可携带暖手用品；旅游旺季（5-9月）游客较多，建议提前1小时抵达，避免排队等候，可提前在线预订门票，节省时间。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                佩莱斯城堡依山而建，融合多种欧式建筑风格，白墙尖顶与葱郁山林、蓝天白云相映成趣，内部装饰富丽堂皇，细节精美，既有王室的庄严奢华，又有山间的清新灵动，光影层次丰富，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、自然景观等不同风格，无论是手机还是相机，都能拍出高质量照片，展现城堡的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 城堡主入口前广场：</strong>这是拍摄城堡全景的最佳机位之一，可采用对称构图，拍摄城堡的正面全貌，白墙、尖顶、雕花铁门与周边的绿植相互映衬，凸显城堡的庄严宏伟与浪漫气质。最佳拍摄时间为清晨（7:30-9:00），光线柔和，可更好地呈现城堡的建筑细节与纹理，避开人流高峰，拍摄效果更佳，建议携带广角镜头，捕捉城堡的整体风貌。</p>
                    
                    <p><strong>2. 城堡塔楼顶端：</strong>登顶塔楼后，可360度俯瞰整个景区，佩莱斯城堡的全貌、王室花园的绿植、远处的喀尔巴阡山脉尽收眼底，山水相依，风景壮阔。可拍摄城堡与山林的同框画面，展现自然与人文的融合之美；也可拍摄山间的云雾景观，清晨山间常有薄雾，营造出朦胧的仙境感，氛围感拉满，适合拍摄全景照与风景照。</p>
                    
                    <p><strong>3. 王室花园喷泉旁：</strong>花园内的喷泉的雕塑精美，周边绿植繁茂，是拍摄城堡侧景的绝佳场景。可以喷泉为前景，拍摄城堡的侧面轮廓，白墙尖顶倒映在喷泉水中，虚实结合，更具层次感；也可捕捉阳光透过树叶洒在喷泉与城堡上的光影效果，营造出浪漫静谧的氛围，适合拍摄复古风、清新风照片。</p>
                    
                    <p><strong>4. 城堡二层露台：</strong>露台位于城堡主体二层，视野开阔，可近距离拍摄城堡的尖顶与雕花细节，展现建筑的艺术价值。同时，露台也是拍摄山间风光的好机位，可远眺喀尔巴阡山脉的连绵起伏，捕捉山间的光影变化，适合拍摄建筑细节照与风景特写，建议携带长焦镜头，突出细节之美。</p>
                    
                    <p><strong>5. 山间步道旁：</strong>从锡纳亚市区前往城堡的山间步道旁，可拍摄城堡与山林的远景画面，城堡隐匿于葱郁的树林中，只露出部分尖顶，营造出神秘而浪漫的氛围。可采用远景构图，将山林、城堡与天空结合，展现喀尔巴阡山脉的壮丽与城堡的灵动，最佳拍摄时间为傍晚（17:00-18:30），夕阳洒在山林与城堡上，呈现出温暖的金黄色，画面极具感染力。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（7:30-9:00）和傍晚（17:00-18:30），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色衣物，避免过于花哨，与白墙、绿植形成对比，更出片；城堡内部部分展厅禁止拍照，需遵守景区规定，拍摄时避免影响其他游客；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与风景特写，效果更佳；若想拍摄复古风照片，可搭配长裙、草帽等服饰，与城堡氛围更契合。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                佩莱斯城堡位于锡纳亚市中心附近，周边景点丰富，多以自然景观与历史建筑为主，游览完城堡后，可根据自身时间安排前往，既能丰富行程，也能更全面地感受锡纳亚的山城风光与历史文化，以下推荐几个距离城堡较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 佩利什城堡（Pelișor Castle）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离佩莱斯城堡约300米，步行5分钟即可抵达，是卡洛尔一世为其子斐迪南王子修建的宫殿，建筑风格简约典雅，融合了新艺术运动风格，内部装饰精致，与佩莱斯城堡的奢华形成鲜明对比。开放时间为9:00-17:00，周一闭馆，成人门票20罗马尼亚列伊，学生半价，可一并游览，感受罗马尼亚王室的不同建筑风格。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 锡纳亚修道院</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约800米，可步行10分钟抵达，始建于17世纪，是锡纳亚市的标志性宗教建筑，融合了拜占庭式与哥特式建筑风格，外观简洁庄重，内部留存着精美的壁画与宗教文物，氛围庄严静谧。修道院周边植被茂盛，环境清幽，免费开放，进入修道院需遵守宗教礼仪，禁止大声喧哗、随意拍摄，建议穿着得体。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 喀尔巴阡山脉步道</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约1公里，可步行15分钟抵达，是锡纳亚最著名的自然景观之一，步道蜿蜒于喀尔巴阡山脉间，沿途植被繁茂，可欣赏山间的溪流、瀑布与珍稀动植物，登顶后可俯瞰整个锡纳亚市全景与山脉风光。步道免费开放，适合徒步爱好者，建议穿舒适的徒步鞋，携带饮用水，夏季前往可感受山间的清凉。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 锡纳亚城市博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离城堡约1公里，可步行12分钟或乘坐1路公交直达，设于一座19世纪的欧式建筑内，馆内展示了锡纳亚从古代到现代的历史遗物、民俗文化、传统服饰和手工艺品，详细介绍了锡纳亚的山城发展历程与佩莱斯城堡的建造背景，是了解当地历史文化的绝佳去处。开放时间为9:00-17:00，周一闭馆，成人门票10罗马尼亚列伊，学生半价。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 锡纳亚赌场</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离城堡约700米，可步行8分钟抵达，建于19世纪末，是一座新古典主义风格的建筑，外观华丽，内部装饰精美，曾是欧洲贵族休闲娱乐的场所，如今已成为锡纳亚的标志性建筑之一，可参观建筑外观，感受其历史韵味，部分区域可进入参观，免费开放，周边有众多咖啡馆和餐厅，适合休闲放松。</p>
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
                    <p>优先选择佩莱斯城堡周边500米范围内的住宿，出行便利，可随时前往城堡游览，也能便捷抵达周边景点与餐饮区，感受山城的静谧氛围；城堡周边多为特色民宿与度假酒店，装修融合了欧式风格与山间元素，部分酒店可远眺城堡与喀尔巴阡山脉美景，适合喜欢自然景观与人文体验的游客；锡纳亚市中心距离城堡约1公里，这里有更多连锁酒店与经济型酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。自驾出行的游客可选择带免费停车位的住宿，山区部分路段较窄，停车需注意安全。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品度假酒店：</strong>可选择位于城堡周边或山间的特色度假酒店，这类酒店通常设施完善，装修精致，融合了欧式建筑元素与现代舒适设施，部分设有露台、观景台，可欣赏山间风光与城堡美景，服务周到，价格约90-160欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>城堡周边有很多由老式欧式建筑改造的民宿，装修简约典雅，保留了传统建筑的特色，部分带有小庭院或阳台，步行可达城堡主要景点，价格约50-90欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约40-70欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约35-60欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>锡纳亚旅游旺季为5-9月，此时气候适宜，山间风光优美，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，山区街道停车费用较高（6-11欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分民宿不提供一次性牙刷和牙膏，建议提前自备；山区部分住宿为老式建筑，没有电梯，若携带大件行李，建议预订时有电梯的住宿；住宿周边多有餐厅和超市，购买生活用品和就餐便利，当地餐厅以罗马尼亚风味和山间特色美食为主，可品尝炖肉、烤香肠、山间野菜等特色菜品；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>锡纳亚当地住宿整体价格适中，性价比高于罗马尼亚首都布加勒斯特，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众徒步路线、特色美食和出行建议，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，此时山间常有雪景，城堡与雪景相映成趣，适合喜欢静谧氛围与雪景风光的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="5月至10月，秋季城堡周围红叶层林尽染尤其美丽；冬季雪景也别有风情" />
              <InfoRow label="建议时长" value="2-3小时" />
              <InfoRow label="注意事项" value="锡纳亚佩莱斯城堡是一座融合历史、艺术与自然的独特景区，这里既有王室宫殿的奢华典雅，又有山间风光的清新灵动，既有欧式建筑的浪漫唯美，又有喀尔巴阡山脉的壮丽辽阔。无论是独自旅行、结伴出行，还是家庭出游，都能在这里找到属于自己的游览乐趣，感受罗马尼亚王室历史与欧式建筑艺术的魅力。希望这份详细的游览指南，能帮助你更好地领略佩莱斯城堡的风采，度过一段愉快的旅程。" />
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