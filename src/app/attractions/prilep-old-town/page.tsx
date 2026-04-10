import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "普里莱普老城 (Prilep Old Town)",
  description: "普里莱普老城详细游览指南 - 北马其顿保存最完好的历史街区之一，巴尔干半岛极具特色的中世纪老城",
  openGraph: {
    title: "普里莱普老城 — Prilep Old Town",
    description: "普里莱普老城详细游览指南 - 北马其顿保存最完好的历史街区之一",
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
        普里莱普老城
      </span>
    </nav>
  );
}

export default function PrilepOldTownPage() {
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
              普里莱普老城
            </h1>
            <p className="text-lg text-white/80">
              Prilep Old Town · 北马其顿 · 普里莱普
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              普里莱普老城坐落于北马其顿中部的普里莱普市，依偎在岩石山丘之间，是北马其顿保存最完好的历史街区之一，也是巴尔干半岛极具特色的中世纪老城。老城以奥斯曼风格建筑为核心，融合了拜占庭、新古典主义等多种建筑风貌，鹅卵石街巷蜿蜒曲折，串联起古集市、钟楼、清真寺等历史遗迹，兼具历史厚重感与当地烟火气，是感受北马其顿人文底蕴、体验巴尔干民俗风情的核心目的地。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="普里莱普老城整体全天免费开放，无统一闭园时间；街区内商铺、餐厅通常9:00-20:00营业，周末部分商铺会延长至21:00。老城内部景点（钟楼、清真寺、博物馆等）开放时间各异，一般为9:00-17:00，周一部分景点闭馆，具体以现场公示或官方通知为准。" 
              />
              <InfoRow 
                label="门票价格" 
                value="老城街区本身无门票，免费对外开放；内部景点单独收费，普里莱普钟楼登顶门票200北马其顿第纳尔（约合3欧元），学生、老人半价；查理什清真寺免费开放，建议自愿捐赠；1941年10月纪念馆成人门票150北马其顿第纳尔，学生免费；其他小型历史建筑、民俗展馆多为免费或低价（50-100北马其顿第纳尔）。" 
              />
              <InfoRow 
                label="详细地址" 
                value="Prilep Old Town, Prilep 7500, North Macedonia（核心区域围绕老城集市广场展开，地处普里莱普河以北、市中心山丘南侧，毗邻亚历山大广场，紧邻马克夫塔楼山脚下）。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达北马其顿首都斯科普里国际机场，机场有长途大巴直达普里莱普汽车站，车程约1.5小时；北马其顿国内可乘坐长途大巴往返普里莱普与斯科普里、奥赫里德等城市，大巴站距离老城约15分钟步行路程。市内交通方面，老城内部适合步行游览，街巷狭窄且多为步行街，禁止机动车通行；周边可乘坐1路、3路、5路公交抵达老城入口，也可租用当地共享自行车或打车前往，打车从市中心到老城入口约500北马其顿第纳尔。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                普里莱普老城的历史渊源可追溯至古希腊时期，其所在区域曾是古代培拉戈尼亚地区的一部分，居住着古希腊培拉戈尼亚部落，考古发现表明，这里早在公元前4世纪就有人类定居，附近的斯泰贝拉古城遗址便是当时的重要聚居地，见证了古希腊文明与巴尔干本土文化的早期融合。"普里莱普"一词源于古斯拉夫语，意为"依附于岩石之上"，恰如其分地描述了老城依山而建的地理特征。
              </p>
              <p>
                公元1014年，普里莱普首次在希腊文献中被记载，当时这里是保加利亚沙皇萨穆伊尔兵败克莱迪翁战役后病逝的地方，成为巴尔干地区重要的历史节点。此后，这里先后被拜占庭帝国、第二保加利亚帝国统治，1334年被塞尔维亚国王杜尚纳入版图，1365年后归属于武卡欣共治者，1371年武卡欣去世后，其子马尔科（即著名的马尔科国王）成为普里莱普的统治者，这段时期成为老城发展的第一个黄金期，马尔科塔楼等标志性建筑便始建于这一阶段，老城逐渐成为巴尔干中部的军事要塞和贸易中转站。
              </p>
              <p>
                1395年，普里莱普被奥斯曼帝国征服，此后的数百年间，老城在奥斯曼统治下逐渐形成了独特的奥斯曼风格风貌，大量清真寺、土耳其浴室、集市建筑拔地而起，其中查理什清真寺建于1476年，是老城现存最古老的奥斯曼建筑之一，而老城集市则成为当时巴尔干地区重要的商品交易场所，烟草、大理石、纺织品等商品在此集散，推动了老城的经济繁荣。这一时期，老城的建筑风格逐渐融合了奥斯曼与本地传统元素，形成了兼具实用性与观赏性的独特风貌。
              </p>
              <p>
                19世纪后期，随着奥斯曼帝国的衰落，普里莱普成为塞尔维亚、黑山等国争夺的焦点，1913年巴尔干战争后，普里莱普被划入塞尔维亚控制范围，一战后成为南斯拉夫王国的一部分，老城的部分奥斯曼建筑被改造，新增了新古典主义风格的建筑，进一步丰富了老城的建筑风貌。二战期间，普里莱普成为北马其顿反法西斯起义的重要据点，1941年10月的反法西斯起义在此爆发，老城见证了当地人民的抗争历史，如今1941年10月纪念馆便是为纪念这一历史事件而设立。
              </p>
              <p>
                1991年北马其顿独立后，政府对普里莱普老城进行了系统性的修复与保护，严格遵循"修旧如旧"的原则，重点修复了查理什清真寺、普里莱普钟楼、老城集市等历史遗迹，保留了老城的核心格局与建筑风貌。如今，普里莱普老城不仅是北马其顿重要的旅游胜地，更是当地民族文化的载体，每一条街巷、每一座建筑，都镌刻着巴尔干地区千年的历史变迁，承载着北马其顿人民的集体记忆。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                普里莱普老城核心区域直径约1.5公里，依山而建，地势略有起伏，建议安排1天时间深度游览，以下为经典步行游览路线，可全面领略老城的历史底蕴与民俗风情，路线全程约4.5公里，耗时5-6小时，中途可在街边咖啡馆、特色商铺休息，感受当地慢生活。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：普里莱普汽车站</strong>→步行15分钟抵达亚历山大广场（欣赏马尔科国王骑马雕像、亚历山大大帝金色雕像，感受市中心的活力）</p>
                  
                  <p><strong>第一站：普里莱普老城入口</strong>（标志性的石拱门，可在此打卡拍照，感受老城的古朴气息）</p>
                  
                  <p><strong>第二站：老城集市</strong>（奥斯曼时期的传统集市，漫步其中，逛逛当地手工艺品店、香料铺，品尝特色小吃，感受烟火气）</p>
                  
                  <p><strong>第三站：普里莱普钟楼</strong>（老城的制高点，登顶可俯瞰老城全景，欣赏错落有致的奥斯曼风格建筑，感受老城的布局之美）</p>
                  
                  <p><strong>第四站：查理什清真寺</strong>（老城最古老的奥斯曼建筑，参观清真寺内部的精美装饰，了解当地宗教文化，注意保持安静，遵守宗教礼仪）</p>
                  
                  <p><strong>第五站：土耳其浴室遗址</strong>（位于集市北侧，虽已近损毁，但仍能看到当年的建筑格局，感受奥斯曼时期的生活气息）</p>
                  
                  <p><strong>第六站：1941年10月纪念馆</strong>（了解二战期间北马其顿反法西斯起义的历史，感受当地人民的抗争精神）</p>
                  
                  <p><strong>第七站：老城小巷探秘</strong>（穿梭在狭窄的鹅卵石小巷中，发现隐藏的小众建筑、特色民宿和街头艺术）</p>
                  
                  <p><strong>终点：马尔科塔楼山脚下</strong>（远眺马尔科塔楼，感受中世纪军事要塞的雄伟，结束一天的游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>游览时需注意脚下的鹅卵石路面，穿舒适的步行鞋；老城地势起伏较大，可根据自身体力调整游览节奏，避免过度劳累。若对历史文化感兴趣，可重点参观1941年10月纪念馆和查理什清真寺，建议提前了解相关历史背景，提升游览体验。此外，老城的小众小巷中藏着许多惊喜，不妨放慢脚步，随意漫步，感受老城的静谧与美好。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                普里莱普老城依山而建，建筑风格独特，色彩浓郁，既有奥斯曼建筑的厚重，又有本地传统建筑的灵动，街巷蜿蜒曲折，光影层次丰富，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、人文风情等不同风格，无论是手机还是相机，都能拍出高质量照片。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 普里莱普钟楼顶端：</strong>这是拍摄老城全景的最佳机位，登顶后可360度俯瞰老城全貌，蜿蜒的鹅卵石街巷像脉络一样穿梭在彩色的奥斯曼建筑之间，远处的马尔科塔楼与近处的集市、清真寺相映成趣，清晨光线柔和时，可拍出老城的静谧古朴；傍晚夕阳西下时，建筑被镀上一层金边，氛围感拉满，建议避开正午强光时段。</p>
                    
                    <p><strong>2. 老城集市中央：</strong>作为老城的核心区域，这里是拍摄人文风情与建筑细节的绝佳场景，奥斯曼风格的集市建筑错落排列，木质门窗、雕花装饰极具特色，可拍摄集市的全景，捕捉当地商贩叫卖、游客漫步的动态瞬间，充满烟火气；也可近距离拍摄建筑的雕花、彩绘等细节，展现奥斯曼建筑的工艺之美。</p>
                    
                    <p><strong>3. 查理什清真寺正门：</strong>清真寺的穹顶、尖塔极具标志性，正门的雕花拱门的是拍照的核心元素，可采用对称构图，拍摄清真寺的全貌，展现其庄严大气的气质；也可蹲在门前的石阶上，以拱门为框架，拍摄寺内的庭院，虚实结合，更具层次感。注意进入清真寺拍摄需遵守宗教礼仪，避免拍摄禁忌区域。</p>
                    
                    <p><strong>4. 老城鹅卵石小巷：</strong>避开主街的人群，走进老城的小巷深处，狭窄的街巷、斑驳的墙壁、挂着绿植的窗台，都是绝佳的拍照场景。可利用光影对比，拍摄小巷的纵深感，或漫步时抓拍动态瞬间，搭配纯色衣物，与彩色的建筑形成对比，更出片；偶尔遇到当地居民晾晒衣物、闲聊，抓拍下来，更具生活气息。</p>
                    
                    <p><strong>5. 马尔科塔楼山脚下观景台：</strong>从山脚下的观景台可拍摄马尔科塔楼与老城的同框画面，塔楼矗立在山顶，雄伟壮观，下方是错落有致的老城建筑，远处是普里莱普市的全景，可采用远景构图，展现自然与人文的融合之美；清晨有薄雾时拍摄，更具朦胧感和故事感。</p>
                    
                    <p><strong>6. 亚历山大广场街角：</strong>广场与老城入口相邻，可拍摄老城石拱门与广场雕像的同框画面，一边是古朴的老城，一边是充满现代活力的广场，古今对比，极具视觉冲击力；也可拍摄广场上的雕像与老城建筑的呼应，展现普里莱普的历史与当下。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（8:00-10:00）和傍晚（17:00-19:00），光线柔和，光影层次丰富；建议穿着纯色衣物，避免过于花哨，与老城的彩色建筑形成对比，更出片；尊重当地居民的生活和宗教习俗，拍摄人文场景时尽量提前征得同意，拍摄清真寺内部需遵守现场规定，禁止拍摄的区域切勿违规拍摄。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                普里莱普老城周边景点丰富，距离较近，游览完老城后，可根据自身时间安排前往，既能丰富行程，也能更全面地了解普里莱普的历史文化与自然风光，以下推荐几个距离老城较近、值得一去的景点，均可通过步行或短途公交抵达。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 马尔科塔楼</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约1.5公里，可步行20分钟或乘坐3路公交直达，是普里莱普的标志性建筑，建于14世纪，是中世纪军事要塞的重要组成部分，塔楼高约30米，登顶可俯瞰整个普里莱普市的全景，感受中世纪军事建筑的雄伟。开放时间为9:00-17:00，周一闭馆，成人门票250北马其顿第纳尔，学生、老人半价。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 特雷斯卡韦茨修道院</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约8公里，可乘坐公交10路转专线大巴前往，车程约30分钟，始建于12世纪，是北马其顿最古老的修道院之一，融合了拜占庭与塞尔维亚建筑风格，修道院坐落在山间，周边植被茂盛，风景优美，内部收藏了大量中世纪壁画和宗教文物，是感受当地宗教文化的绝佳去处。开放时间为8:00-18:00，免费开放，建议自愿捐赠。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 1941年10月纪念馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">紧邻老城东侧，步行5分钟即可抵达，是为纪念1941年10月普里莱普反法西斯起义而设立的博物馆，馆内展示了大量二战期间的历史遗物、照片和文献资料，详细介绍了当地人民的反法西斯抗争历史，具有重要的历史教育意义。开放时间为9:00-17:00，周一闭馆，成人门票150北马其顿第纳尔，学生免费。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 斯泰贝拉古城遗址</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约10公里，可乘坐出租车或包车前往，车程约20分钟，是古希腊时期培拉戈尼亚地区的重要城市遗址，始建于公元前4世纪，曾是古希腊马其顿王国的重要城镇，如今遗址内仍能看到城墙、神庙、剧院等遗迹，是考古爱好者的必去之地。开放时间为9:00-16:30，周一闭馆，成人门票300北马其顿第纳尔，学生半价。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 普里莱普烟草博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离老城约1公里，可步行15分钟抵达，普里莱普是北马其顿重要的烟草产区，烟草产业历史悠久，博物馆内展示了烟草的种植、加工过程，以及当地烟草产业的发展历程，还可品尝当地特色烟草制品，感受当地的产业文化。开放时间为10:00-18:00，周末闭馆，门票100北马其顿第纳尔，学生免费。</p>
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
                    <p>优先选择老城内部或老城周边500米范围内的住宿，出行便利，可随时漫步老城，感受夜晚的老城氛围；老城内部多为特色民宿，多由奥斯曼时期的历史建筑改造而成，建筑风格独特，充满古朴气息，适合喜欢人文体验的游客；老城周边则有更多精品酒店和连锁酒店，设施齐全，性价比更高，适合家庭出行或预算有限的游客。需要注意的是，老城内部街巷狭窄，部分区域无法停车，若自驾出行，可选择带免费停车位的住宿。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品酒店：</strong>可选择位于老城周边的特色精品酒店，这类酒店通常融合了奥斯曼建筑元素与现代设施，装修精致，部分酒店设有露台，可欣赏老城或城市景观，服务周到，价格约120-200欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>老城内部有很多由历史建筑改造的民宿，装修简约古朴，保留了传统建筑的特色，部分带有小庭院，步行可达老城主要景点，价格约70-110欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约50-90欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>老城周边有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约40-70欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>普里莱普旅游旺季为5-9月，尤其是7-8月，游客较多，住宿紧张，建议提前1-2个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，老城周边街道停车费用较高（8-15欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分民宿不提供一次性牙刷和牙膏，建议提前自备；老城内部部分住宿为老式建筑，没有电梯，若携带大件行李，建议预订时有电梯的住宿；住宿周边多有餐厅和超市，购买生活用品和就餐便利，当地餐厅以巴尔干风味为主，可品尝特色美食；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>普里莱普当地住宿整体价格适中，比首都斯科普里更具性价比，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点和特色美食，获取更地道的游览体验。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="4月至6月和9月至10月，避开盛夏高温；春季野花盛开时山丘景色最为动人" />
              <InfoRow label="建议时长" value="半天至1天（核心区域步行游览约需5-6小时）" />
              <InfoRow label="注意事项" value="攀登城堡遗址路段无正式步道，需穿适合徒步的鞋子；山上无遮阳和饮水设施，请提前准备；当地旅游配套设施有限，建议自备补给" />
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