import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "尼什古堡 (Niš Fortress)",
  description: "尼什古堡详细游览指南 - 塞尔维亚最具代表性的中世纪堡垒之一，巴尔干半岛保存较完整的奥斯曼风格军事要塞",
  openGraph: {
    title: "尼什古堡 — Niš Fortress",
    description: "尼什古堡详细游览指南 - 塞尔维亚最具代表性的中世纪堡垒之一",
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
        尼什古堡
      </span>
    </nav>
  );
}

export default function NisFortressPage() {
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
                Fortress
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                巴尔干・东欧
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              尼什古堡
            </h1>
            <p className="text-lg text-white/80">
              Niš Fortress · 塞尔维亚 · 尼什
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              尼什古堡坐落于塞尔维亚南部城市尼什，地处尼沙瓦河与南摩拉瓦河汇流处，是塞尔维亚最具代表性的中世纪堡垒之一，也是巴尔干半岛保存较完整的奥斯曼风格军事要塞。古堡依山傍水、地势险要，呈不规则四边形布局，厚重的石砌城墙、高耸的防御塔楼与蜿蜒的护城河相得益彰，兼具军事防御的雄伟与河畔风光的柔美，承载着尼什千年的历史变迁与多文明交融的印记，是感受塞尔维亚南部历史底蕴与人文风情的必访之地。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="古堡整体全天免费开放，无统一闭园时间，建议游览时间为8:00-19:00。冬季（11-次年3月）光线较暗，且部分区域可能因天气原因临时封闭，建议17:00前结束游览；夏季（6-8月）可延长至20:00，傍晚时分可欣赏古堡与河畔的落日美景，氛围极佳。古堡内小型展览区开放时间为9:00-17:00，周一闭馆，具体以现场公示为准。" 
              />
              <InfoRow 
                label="门票价格" 
                value="古堡整体免费对外开放，无任何门票费用；内部临时展览、讲解服务需单独付费，讲解服务约180塞尔维亚第纳尔/人（约合1.5欧元），学生、65岁以上老人可享半价优惠，12岁以下儿童免费。部分塔楼登顶需支付40塞尔维亚第纳尔/人，残疾人及陪同人员可免费登顶。" 
              />
              <InfoRow 
                label="详细地址" 
                value="Trg Kralja Milana 1, Niš 18000, Serbia（核心区域位于尼什市中心，紧邻尼沙瓦河，北邻尼什老城，南接河畔休闲区，地理位置优越，步行即可抵达市中心主要商圈，可远眺尼沙瓦河全景与城市风貌）。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达尼什 Constantine the Great 机场，机场距离古堡约8公里，打车前往约15分钟，费用约500塞尔维亚第纳尔；也可乘坐飞机抵达贝尔格莱德尼古拉·特斯拉国际机场，再转乘长途大巴前往尼什汽车站，车程约3小时，大巴站距离古堡约10分钟步行路程。市内交通方面，可乘坐2路、5路、9路公交直达古堡入口，公交票价约70塞尔维亚第纳尔/人；打车从市中心任意地点前往古堡，费用约200-300塞尔维亚第纳尔；此外，可沿尼沙瓦河畔步行前往，沿途可欣赏河畔风光，步行约15分钟即可抵达，是感受尼什城市氛围的绝佳方式。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                尼什古堡的历史渊源可追溯至古罗马时期，其发展历程贯穿了古罗马、拜占庭、奥斯曼等多个时代，是巴尔干半岛历史变迁的"活化石"。早在公元1世纪，古罗马帝国就在此修建军事据点，作为连接巴尔干半岛与中东地区的交通要道，当时的据点以土坯和木材为主要材料，规模较小，主要用于防御和传递军事信息，见证了古罗马帝国在巴尔干地区的统治与繁荣。
              </p>
              <p>
                中世纪时期，拜占庭帝国接管此地，对原有据点进行扩建，改用石砌结构，增设防御塔楼和护城河，逐步形成了如今古堡的雏形，成为拜占庭帝国在南部巴尔干地区的重要军事要塞。这一时期，古堡不仅承担着军事防御功能，还成为当地的行政和文化中心，融合了拜占庭建筑风格与斯拉夫建筑元素，石砌城墙更加厚重，塔楼设计更加精巧，彰显着当时高超的建筑工艺。
              </p>
              <p>
                14世纪末，奥斯曼土耳其帝国征服尼什，古堡被改为军事据点，期间进行了大规模改造和扩建，融入了大量奥斯曼建筑元素，增设了清真寺、土耳其浴室和瞭望塔等设施，成为奥斯曼帝国在巴尔干半岛南部的重要统治据点，也是当时尼什地区的军事和行政核心。据记载，这一时期的古堡规模达到顶峰，城墙周长约2.5公里，设有4座主城门和12座防御塔楼，护城河环绕四周，防御体系十分完善，是当时巴尔干地区最坚固的军事要塞之一。
              </p>
              <p>
                19世纪初，塞尔维亚人民发动起义，反抗奥斯曼帝国的统治，尼什古堡成为起义军与奥斯曼军队激战的重要战场，古堡在战火中遭到一定损毁，部分城墙和塔楼坍塌。1833年，尼什被纳入塞尔维亚版图，古堡逐渐失去军事防御功能，成为历史遗迹。20世纪以来，塞尔维亚政府多次对古堡进行修复与保护，严格遵循"修旧如旧"的原则，重点修复了坍塌的城墙、塔楼和城门，还原了古堡的历史风貌，同时保留了不同时代的建筑痕迹。
              </p>
              <p>
                如今，尼什古堡不仅是塞尔维亚重要的历史文化遗址，也是当地举办文化活动、音乐会和民俗展览的重要场所，每年八月，著名的尼什维尔爵士节都会在古堡的遗迹之上举行，吸引着来自世界各地的游客和音乐人。每一块石板、每一座塔楼，都镌刻着尼什千年的辉煌与沧桑，承载着塞尔维亚人民抵御外敌、守护家园的集体记忆，也见证了古希腊、罗马、斯拉夫、奥斯曼等多种文明的交融与碰撞，具有深厚的历史与文化内涵。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                尼什古堡核心区域面积广阔，呈不规则四边形布局，周边环绕着尼沙瓦河，建议安排半天时间游览，以下为经典步行游览路线，可全面领略古堡的军事风貌、历史遗迹与河畔风光，路线全程约2.5公里，耗时2.5-3.5小时，中途可在古堡内的草坪或河畔休息，感受慢节奏的时光，沉浸式体验古堡的历史韵味。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：尼什古堡主城门</strong>（标志性的石砌拱门，设有古堡简介牌和导览图，是古堡的正门，可在此打卡拍照，感受古堡的雄伟气势）</p>
                  
                  <p><strong>第一站：主城门与城墙</strong>（参观保存完好的主城门，触摸厚重的石砌城墙，观察城墙之上的射击孔和防御设施，了解其军事防御功能，城墙顶部可漫步，欣赏尼沙瓦河与尼什城市风貌）</p>
                  
                  <p><strong>第二站：奥斯曼清真寺遗迹</strong>（古堡内保存最完整的奥斯曼时期建筑遗迹，残留的穹顶和墙体展现着奥斯曼建筑的独特风格，可了解当时的宗教文化与生活场景）</p>
                  
                  <p><strong>第三站：防御塔楼</strong>（古堡内最高的塔楼，登顶可俯瞰整个古堡全景、尼沙瓦河风光以及尼什老城的风貌，塔楼内展示着中世纪的军事器械和历史文物）</p>
                  
                  <p><strong>第四站：护城河与吊桥</strong>（古堡的重要防御设施，可在河畔漫步，欣赏护城河与古堡的相映之景，想象中世纪军事防御的森严，吊桥为后期修复，还原了当时的风貌）</p>
                  
                  <p><strong>第五站：古堡内部遗迹区</strong>（穿梭在散落的建筑遗迹之间，感受不同时代的建筑风格交融，这里留存着古罗马、拜占庭、奥斯曼时期的建筑碎片，偶尔会举办小型历史展览）</p>
                  
                  <p><strong>第六站：尼沙瓦河畔观景台</strong>（位于古堡南侧，紧邻尼沙瓦河，可欣赏河流的辽阔风光，远眺河畔的植被与城市建筑，感受自然与人文的融合之美）</p>
                  
                  <p><strong>终点：古堡西门</strong>（周边有当地特色小吃摊、纪念品商店和咖啡馆，可购买特色手工艺品，品尝当地美食，结束游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>古堡内多为石砌路面，部分路段不平整且有坡度，建议穿舒适的步行鞋；夏季（6-8月）阳光强烈，可携带遮阳帽、防晒霜，适量补充水分；冬季气温较低，部分路面可能结冰，注意防滑。若对历史文化感兴趣，可在入口处租用讲解设备或跟随当地讲解员，深入了解古堡的历史典故与建筑特色，提升游览体验。此外，旅游旺季（5-9月）游客较多，建议避开正午人流高峰，清晨或傍晚游览体验更佳，傍晚时分，夕阳洒在古堡城墙上，氛围感十足。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                尼什古堡依山傍水，厚重的石砌建筑与湛蓝的尼沙瓦河、翠绿的植被相映，光影层次丰富，既有中世纪军事堡垒的雄伟沧桑，又有河畔风光的柔美灵动，同时融合了多种文明的建筑元素，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、河畔风光等不同风格，无论是手机还是相机，都能拍出高质量照片，展现古堡的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 防御塔楼顶端：</strong>这是拍摄古堡全景的最佳机位，登顶后可360度俯瞰整个尼什古堡，不规则四边形的古堡格局、蜿蜒的城墙、高耸的塔楼与尼沙瓦河的美景尽收眼底，清晨光线柔和时，可拍出古堡的静谧与古朴，凸显历史的厚重感；傍晚夕阳西下时，阳光洒在石砌城墙上，呈现出温暖的金黄色，搭配尼沙瓦河的波光粼粼，氛围感拉满，建议携带广角镜头拍摄全景，捕捉古堡与河流、城市的交融之景。</p>
                    
                    <p><strong>2. 尼沙瓦河畔观景台：</strong>位于古堡南侧，是拍摄古堡与尼沙瓦河同框的绝佳场景。可以古堡的城墙和塔楼为主体，搭配宽阔的河流和远处的城市建筑，采用远景构图，展现自然与人文的融合之美；也可蹲在河畔，以河水为前景，拍摄古堡的倒影，虚实结合，更具层次感。最佳拍摄时间为日落时分，夕阳的余晖洒在河面和城墙上，画面极具感染力，也可拍摄古堡的落日剪影，简约而有格调。</p>
                    
                    <p><strong>3. 主城门处：</strong>主城门是古堡的标志性建筑，厚重的石砌拱门、斑驳的墙面和古老的雕刻，都极具历史感，拱门之上还留存着不同时代的建筑痕迹，彰显着多文明的交融。可采用对称构图，拍摄城门的全貌，展现其庄严雄伟的气质；也可站在城门内侧，以拱门为框架，拍摄古堡内部的城墙和塔楼，虚实结合，突出古堡的纵深感。建议在清晨拍摄，光线柔和，可更好地呈现墙面的纹理和雕刻细节，凸显古堡的历史沧桑感。</p>
                    
                    <p><strong>4. 古堡内部遗迹区：</strong>这里散落着古罗马、拜占庭、奥斯曼时期的建筑碎片、雕刻和城墙遗迹，是拍摄人文纪实类照片的绝佳场景。可近距离拍摄建筑的石砌纹理、古老的雕刻图案，展现不同时代的建筑工艺；也可在草坪上取景，捕捉阳光透过树叶洒在遗迹上的光影效果，营造出静谧而沧桑的氛围，适合拍摄复古风、纪实风照片。</p>
                    
                    <p><strong>5. 护城河沿岸：</strong>沿着护城河漫步，可拍摄古堡的城墙与护城河的相映之景，狭窄的护城河与高大的城墙形成鲜明对比，凸显古堡的军事防御特色。可采用侧景构图，拍摄城墙的倒影在水中的画面，或捕捉河畔的绿植与城墙的搭配，营造出清新自然的氛围；清晨时分，护城河面上有薄雾，拍摄出的照片更具朦胧感和故事感，仿佛穿越回中世纪。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（7:00-9:30）和傍晚（17:30-19:30），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色衣物，避免过于花哨，与石砌古堡、湛蓝河水形成对比，更出片；尊重古堡的历史遗迹，拍摄时避免触摸和损坏遗迹，禁止在遗迹上刻画；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节和河畔特写，效果更佳；若想拍摄人文气息浓厚的照片，可在傍晚拍摄当地居民在古堡内休闲散步的场景，还原古堡的生活气息。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                尼什古堡位于尼什市中心，周边景点丰富，距离较近，游览完古堡后，可根据自身时间安排前往，既能丰富行程，也能更全面地了解尼什的历史文化与自然风光，以下推荐几个距离古堡较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 尼沙瓦河畔长廊</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">紧邻古堡南侧，步行3分钟即可抵达，是沿着尼沙瓦河修建的休闲长廊，全长约1.2公里，沿途植被茂盛，设有休闲座椅、观景平台和小型雕塑，可漫步长廊，欣赏尼沙瓦河的辽阔风光，感受河畔的宁静与惬意。长廊周边有众多当地餐厅、咖啡馆和小吃摊，可一边品尝美食，一边欣赏河景，全天免费开放，是游览古堡间隙休闲放松的绝佳去处。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 尼什 skull tower（头骨塔）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古堡约1公里，可步行15分钟或乘坐2路公交直达，是塞尔维亚重要的历史纪念遗址，建于19世纪初，是为了纪念反抗奥斯曼帝国统治的塞尔维亚起义军将士而建，塔身由起义军将士的头骨堆砌而成，见证了塞尔维亚人民抵御外敌、英勇抗争的历史，具有深厚的历史意义。开放时间为9:00-17:00，周二闭馆，成人门票120塞尔维亚第纳尔，学生半价，12岁以下儿童免费。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 尼什城市博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古堡约800米，可步行10分钟抵达，位于一座19世纪的古典风格建筑内，馆内展示了尼什从古代到现代的历史遗物、民俗文化、传统服饰和手工艺品，详细介绍了尼什的历史变迁、人文风情以及古堡的发展历程，是了解尼什的绝佳去处。开放时间为9:00-17:00，周一闭馆，成人门票100塞尔维亚第纳尔，学生半价。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 圣尼古拉教堂</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古堡约700米，可步行8分钟抵达，始建于19世纪，是尼什市重要的宗教圣地，教堂融合了拜占庭与斯拉夫建筑风格，外观宏伟壮观，内部留存着大量中世纪壁画和宗教文物，氛围庄严静谧。开放时间为8:00-18:00，免费开放，进入教堂需遵守宗教礼仪，禁止大声喧哗、随意拍摄，建议穿着得体。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 尼什老城</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离古堡约500米，可步行5分钟抵达，是尼什最具烟火气的地方，狭窄的街巷、古老的建筑、特色的小店交织在一起，展现着尼什的民俗风情。老城内有众多当地特色餐厅、咖啡馆和纪念品商店，可品尝塞尔维亚烤肉、烤面包、水果沙拉等特色美食，购买手工艺品和当地特产，全天免费开放，适合漫步闲逛，感受当地的生活气息。</p>
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
                    <p>优先选择古堡周边500米范围内的住宿，出行便利，可随时前往古堡游览，也能便捷抵达尼沙瓦河畔长廊和尼什老城，感受夜晚的城市氛围；古堡周边多为特色民宿，装修简约古朴，部分民宿可远眺古堡和尼沙瓦河美景，融入了当地建筑元素，适合喜欢人文体验和河畔风光的游客；尼什市中心距离古堡约500米，这里有更多精品酒店和连锁酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。需要注意的是，古堡周边部分街巷较窄，自驾出行的游客可选择带免费停车位的住宿。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品酒店：</strong>可选择位于古堡周边或尼沙瓦河畔的特色精品酒店，这类酒店通常融合了当地建筑元素与现代设施，装修精致，部分酒店设有露台或河景房，可欣赏古堡或尼沙瓦河美景，服务周到，价格约90-160欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>古堡周边和尼什老城内有很多由老建筑改造的民宿，装修简约古朴，保留了传统建筑的特色，部分带有小庭院或阳台，步行可达古堡和老城主要景点，价格约50-90欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约40-70欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约35-60欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>尼什旅游旺季为5-9月，此时气候适宜，且恰逢尼什维尔爵士节等特色活动，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，市中心街道停车费用较高（7-12欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分民宿不提供一次性牙刷和牙膏，建议提前自备；古堡周边和老城内部分住宿为老式建筑，没有电梯，若携带大件行李，建议预订时有电梯的住宿；住宿周边多有餐厅和超市，购买生活用品和就餐便利，当地餐厅以塞尔维亚风味和尼沙瓦河湖鲜为主，可品尝烤肉、烤鱼、传统炖菜等特色美食；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>尼什当地住宿整体价格适中，性价比高于塞尔维亚首都贝尔格莱德，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和出行建议，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，适合喜欢静谧氛围的游客前往，此时古堡人少清净，可更好地感受其历史韵味。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="4月至10月，夏季古堡内常举办尼什维尔爵士音乐节等露天活动" />
              <InfoRow label="建议时长" value="半天（核心区域步行游览约需2.5-3.5小时）" />
              <InfoRow label="注意事项" value="尼什古堡是一座集历史、文化、自然于一体的独特景区，这里既有千年历史的厚重底蕴，又有现代都市的活力气息，既有中世纪军事堡垒的雄伟沧桑，又有河畔风光的柔美灵动。无论是独自旅行、结伴出行，还是家庭出游，都能在这里找到属于自己的游览乐趣，感受塞尔维亚的人文魅力与历史底蕴。希望这份详细的游览指南，能帮助你更好地领略尼什古堡的风采，度过一段愉快的旅程。" />
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