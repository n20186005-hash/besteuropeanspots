import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "奥赫里德古城 (Ohrid Old Town)",
  description: "奥赫里德古城详细游览指南 - 北马其顿最负盛名的历史文化古城，联合国教科文组织双重世界遗产",
  openGraph: {
    title: "奥赫里德古城 — Ohrid Old Town",
    description: "奥赫里德古城详细游览指南 - 北马其顿最负盛名的历史文化古城",
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
        奥赫里德古城
      </span>
    </nav>
  );
}

export default function OhridOldTownPage() {
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
              奥赫里德古城
            </h1>
            <p className="text-lg text-white/80">
              Ohrid Old Town · 北马其顿 · 奥赫里德
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              奥赫里德古城坐落于北马其顿西南部奥赫里德湖畔，依山傍水而建，是北马其顿最负盛名的历史文化古城，也是联合国教科文组织认定的双重世界遗产（文化遗产与自然遗产）。古城融合了拜占庭、奥斯曼、斯拉夫等多种建筑风格，鹅卵石街巷纵横交错，串联起古老教堂、中世纪堡垒、传统集市等遗迹，兼具湖光山色的自然之美与千年沉淀的人文底蕴，被誉为"巴尔干的耶路撒冷"和"湖光中的珍珠"。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="奥赫里德古城整体全天免费开放，无统一闭园时间；街区内商铺、餐厅、咖啡馆通常9:00-21:00营业，周末及旅游旺季（5-9月）部分商铺会延长至22:00。古城内部景点（教堂、博物馆、堡垒等）开放时间各异，一般为9:00-17:30，周一部分景点闭馆，具体以现场公示或官方通知为准，冬季（11-次年3月）部分景点会缩短开放时间。" 
              />
              <InfoRow 
                label="门票价格" 
                value="古城街区本身无门票，免费对外开放；内部景点单独收费，萨穆伊尔要塞成人门票300北马其顿第纳尔（约合4.5欧元），学生、老人半价；圣索菲亚教堂成人门票200北马其顿第纳尔，学生免费；圣约翰·卡尼奥教堂成人门票150北马其顿第纳尔，儿童免费；奥赫里德考古博物馆成人门票250北马其顿第纳尔，学生半价；其他小型教堂、民俗展馆多为免费或低价（50-100北马其顿第纳尔），部分教堂可自愿捐赠。" 
              />
              <InfoRow 
                label="详细地址" 
                value="Ohrid Old Town, Ohrid 6000, North Macedonia（核心区域围绕古城中心广场展开，地处奥赫里德湖西岸山坡，北邻萨穆伊尔要塞，南接湖滨长廊，西侧与新城区相连，地理位置优越，可俯瞰整个奥赫里德湖）。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达北马其顿首都斯科普里国际机场，机场有长途大巴直达奥赫里德汽车站，车程约2.5小时；北马其顿国内可乘坐长途大巴往返奥赫里德与斯科普里、普里莱普等城市，大巴站距离古城约10分钟步行路程。市内交通方面，古城内部适合步行游览，街巷狭窄且多为步行街，禁止机动车通行；周边可乘坐2路、4路、6路公交抵达古城入口，也可租用当地共享自行车或打车前往，打车从市中心到老城入口约400北马其顿第纳尔，从汽车站打车到老城约600北马其顿第纳尔。此外，可乘坐游船从奥赫里德湖东岸抵达古城湖滨入口，感受湖光山色与古城风貌的完美融合。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                奥赫里德古城的历史渊源可追溯至公元前4世纪，其所在区域曾是古希腊伊利里亚部落的聚居地，当时被称为"林奇多斯"，是古希腊文明与巴尔干本土文化交融的重要节点。考古发现表明，这里早在公元前3世纪就已形成城镇，周边的古城遗址中出土了大量古希腊陶器、钱币和建筑遗迹，见证了当时的繁荣景象。"奥赫里德"一词源于古斯拉夫语，意为"在山丘之上"，精准描述了古城依山而建、俯瞰湖泊的地理特征。
              </p>
              <p>
                公元1世纪，罗马帝国征服此地，将其纳入马其顿行省管辖，奥赫里德成为罗马帝国重要的交通枢纽和贸易中转站，依托奥赫里德湖的水运优势，推动了商业和文化的发展，期间修建了剧院、浴场等罗马风格建筑，部分遗迹至今仍可寻觅。公元4世纪，基督教传入奥赫里德，这里逐渐成为巴尔干地区重要的基督教中心，大量教堂开始兴建，奠定了其"宗教圣地"的地位。
              </p>
              <p>
                公元9世纪，奥赫里德成为保加利亚第一帝国的重要城市，也是西里尔字母的诞生地之一，当时的奥赫里德大主教区是巴尔干地区最具影响力的宗教机构之一，推动了基督教文化的传播和西里尔字母的普及，期间兴建的圣索菲亚教堂成为当时巴尔干地区最大的教堂之一，内部留存的中世纪壁画堪称艺术瑰宝。11世纪，奥赫里德被拜占庭帝国征服，拜占庭文化与当地文化深度融合，进一步丰富了古城的建筑风格和文化内涵，此时的奥赫里德已成为巴尔干地区文化、宗教和艺术的中心，据17世纪土耳其作家的记载，当时的奥赫里德曾拥有365座教堂，一座对应一天，因此被誉为"巴尔干的耶路撒冷"。
              </p>
              <p>
                14世纪末，奥赫里德被奥斯曼帝国征服，此后的数百年间，老城在奥斯曼统治下逐渐融入奥斯曼文化元素，大量清真寺、土耳其浴室、传统集市等建筑拔地而起，与原有拜占庭风格的教堂交相辉映，形成了独特的多元建筑风貌。这一时期，奥赫里德依托湖泊资源和便利的交通，成为奥斯曼帝国在巴尔干地区的重要贸易据点，丝绸、香料、鱼类等商品在此集散，推动了古城的经济繁荣。
              </p>
              <p>
                19世纪后期，随着奥斯曼帝国的衰落，奥赫里德成为塞尔维亚、黑山等国争夺的焦点，1913年巴尔干战争后，奥赫里德被划入塞尔维亚控制范围，一战后成为南斯拉夫王国的一部分，古城的部分奥斯曼建筑被改造，新增了新古典主义风格的建筑，进一步丰富了古城的建筑风貌。二战期间，奥赫里德成为北马其顿反法西斯起义的重要据点，见证了当地人民的抗争历史。
              </p>
              <p>
                1991年北马其顿独立后，政府对奥赫里德古城进行了系统性的修复与保护，严格遵循"修旧如旧"的原则，重点修复了萨穆伊尔要塞、圣索菲亚教堂、圣约翰·卡尼奥教堂等历史遗迹，保留了古城的核心格局与建筑风貌。1979年，奥赫里德古城与奥赫里德湖一同被联合国教科文组织列入世界遗产名录，成为北马其顿最具代表性的旅游胜地和文化符号，每一条街巷、每一座建筑，都镌刻着巴尔干地区千年的历史变迁，承载着北马其顿人民的集体记忆。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                奥赫里德古城核心区域直径约1.2公里，依山傍湖而建，地势起伏较大，建议安排1天时间深度游览，以下为经典步行游览路线，可全面领略古城的历史底蕴、宗教文化与湖光山色，路线全程约4公里，耗时5-6小时，中途可在湖滨咖啡馆、特色商铺休息，感受当地慢生活与湖景风情。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：奥赫里德汽车站</strong>→步行10分钟抵达古城南门（标志性的石砌拱门，可在此打卡拍照，感受古城的古朴气息）</p>
                  
                  <p><strong>第一站：古城中心广场</strong>（奥赫里德古城的核心地带，周边环绕着传统商铺、咖啡馆和历史建筑，可感受当地烟火气，购买特色手工艺品）</p>
                  
                  <p><strong>第二站：圣索菲亚教堂</strong>（巴尔干地区最古老的教堂之一，参观教堂内部的中世纪壁画和宗教文物，了解当地基督教文化）</p>
                  
                  <p><strong>第三站：奥赫里德考古博物馆</strong>（位于中心广场北侧，馆内展示了古城从古希腊、罗马时期到中世纪的历史遗物，感受千年文明的积淀）</p>
                  
                  <p><strong>第四站：萨穆伊尔要塞</strong>（古城的制高点，登顶可俯瞰整个奥赫里德古城和奥赫里德湖全景，感受中世纪军事要塞的雄伟）</p>
                  
                  <p><strong>第五站：古城小巷探秘</strong>（穿梭在狭窄的鹅卵石小巷中，发现隐藏的小众教堂、特色民宿和街头艺术，感受古城的静谧与美好）</p>
                  
                  <p><strong>第六站：圣约翰·卡尼奥教堂</strong>（坐落于湖畔悬崖边，是奥赫里德的标志性建筑，参观教堂的同时，欣赏湖光山色的绝美风景）</p>
                  
                  <p><strong>第七站：湖滨长廊</strong>（沿着奥赫里德湖漫步，欣赏湖水清澈、群山环绕的自然美景，可乘坐游船游览湖泊，感受湖光中的古城风貌）</p>
                  
                  <p><strong>终点：古城北门</strong>（周边有众多当地餐厅，可品尝特色美食，结束一天的游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>游览时需注意脚下的鹅卵石路面，穿舒适的步行鞋；古城地势起伏较大，部分路段较陡，可根据自身体力调整游览节奏，避免过度劳累。若对宗教文化感兴趣，可重点参观圣索菲亚教堂和圣约翰·卡尼奥教堂，建议提前了解相关历史背景，提升游览体验。此外，旅游旺季（5-9月）游客较多，建议避开正午人流高峰，清晨或傍晚游览体验更佳。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                奥赫里德古城依山傍湖，建筑风格多元，既有拜占庭教堂的庄严典雅，又有奥斯曼建筑的古朴厚重，搭配奥赫里德湖的湛蓝湖水和周边的青山绿树，光影层次丰富，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、湖景融合等不同风格，无论是手机还是相机，都能拍出高质量照片，展现古城的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 萨穆伊尔要塞顶端：</strong>这是拍摄古城全景的最佳机位，登顶后可360度俯瞰整个奥赫里德古城和奥赫里德湖，错落有致的彩色建筑、蜿蜒的鹅卵石街巷与湛蓝的湖水、远处的青山相映成趣，清晨光线柔和时，可拍出古城的静谧古朴；傍晚夕阳西下时，湖水泛着金光，建筑被镀上一层暖色调，氛围感拉满，建议避开正午强光时段，可携带广角镜头拍摄全景。</p>
                    
                    <p><strong>2. 圣约翰·卡尼奥教堂周边：</strong>作为奥赫里德的标志性建筑，教堂矗立在湖畔悬崖边，是拍摄湖景与建筑融合的绝佳场景。可站在教堂下方的石阶上，以教堂为主体，搭配湛蓝的湖水和远处的群山，采用对称构图，拍出教堂的庄严与湖景的柔美；也可蹲在湖畔，以湖水为前景，拍摄教堂的倒影，虚实结合，更具层次感。最佳拍摄时间为日落时分，夕阳洒在教堂和湖面上，画面极具感染力。</p>
                    
                    <p><strong>3. 古城中心广场：</strong>这里是拍摄人文风情与建筑细节的核心场景，广场周边的拜占庭风格建筑、奥斯曼式商铺、彩色门窗和雕花装饰极具特色，可拍摄广场的全景，捕捉当地商贩叫卖、游客漫步、居民闲聊的动态瞬间，充满烟火气；也可近距离拍摄建筑的雕花、彩绘、木质门窗等细节，展现多元建筑的工艺之美，适合拍摄人文纪实类照片。</p>
                    
                    <p><strong>4. 湖滨长廊：</strong>沿着长廊漫步，可拍摄古城与湖景的同框画面，一边是古朴的古城建筑，一边是湛蓝的奥赫里德湖，可采用远景构图，展现自然与人文的融合之美；也可拍摄湖面的游船、湖边的绿植，搭配古城的建筑轮廓，营造出清新自然的氛围。清晨时分，湖面有薄雾，拍摄出的照片更具朦胧感和故事感。</p>
                    
                    <p><strong>5. 古城鹅卵石小巷：</strong>避开主街的人群，走进老城的小巷深处，狭窄的街巷、斑驳的墙壁、挂着绿植的窗台、彩色的房屋，都是绝佳的拍照场景。可利用光影对比，拍摄小巷的纵深感，或漫步时抓拍动态瞬间，搭配纯色衣物，与彩色的建筑形成对比，更出片；偶尔遇到当地居民晾晒衣物、打理庭院，抓拍下来，更具生活气息。</p>
                    
                    <p><strong>6. 圣索菲亚教堂正门：</strong>教堂的穹顶、尖塔和雕花拱门极具标志性，可采用对称构图，拍摄教堂的全貌，展现其庄严大气的气质；也可站在教堂门前的台阶上，以拱门为框架，拍摄教堂内部的庭院和祭坛，虚实结合，突出教堂的宗教氛围。注意进入教堂拍摄需遵守宗教礼仪，避免拍摄禁忌区域，禁止使用闪光灯。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（7:30-10:00）和傍晚（17:00-19:30），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色衣物，避免过于花哨，与古城的彩色建筑和湛蓝湖水形成对比，更出片；尊重当地居民的生活和宗教习俗，拍摄人文场景时尽量提前征得同意，拍摄教堂内部需遵守现场规定；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节和湖景特写，效果更佳。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                奥赫里德古城周边景点丰富，距离较近，游览完古城后，可根据自身时间安排前往，既能丰富行程，也能更全面地了解奥赫里德的历史文化与自然风光，以下推荐几个距离古城较近、值得一去的景点，均可通过步行或短途公交、游船抵达。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 奥赫里德湖</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">紧邻古城南侧，步行5分钟即可抵达，是欧洲最古老、最深的湖泊之一，湖水清澈见底，周边群山环绕，自然风光秀丽，被联合国教科文组织列入世界自然遗产名录。可乘坐游船游览湖泊，欣赏湖光山色，也可在湖滨沙滩漫步、戏水，感受自然之美；湖边还有众多餐厅和咖啡馆，可一边品尝美食，一边欣赏湖景。全天免费开放，游船票价约500北马其顿第纳尔/人，游览时间约1小时。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 圣克莱门特教堂</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古城约1公里，可步行15分钟或乘坐2路公交直达，始建于9世纪，是为纪念西里尔字母的创造者之一圣克莱门特而修建，是北马其顿重要的宗教圣地。教堂融合了拜占庭与斯拉夫建筑风格，内部留存着大量中世纪壁画和宗教文物，氛围庄严静谧，开放时间为9:00-17:00，周一闭馆，成人门票150北马其顿第纳尔，学生免费。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 奥赫里德民俗博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古城约800米，可步行10分钟抵达，位于一座18世纪的奥斯曼风格建筑内，馆内展示了奥赫里德当地的民俗文化、传统服饰、生活用品、手工艺品等，详细介绍了当地人民的生活习俗和历史变迁，是了解奥赫里德民俗风情的绝佳去处。开放时间为9:00-17:30，周末闭馆，成人门票100北马其顿第纳尔，学生半价。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 卡列城堡遗址</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古城约2公里，可乘坐4路公交或打车前往，车程约5分钟，始建于古罗马时期，是中世纪奥赫里德的重要军事要塞，如今虽已损毁，但仍能看到当年的城墙、塔楼等遗迹，登顶可俯瞰奥赫里德湖和周边乡村风光，感受历史的沧桑。开放时间为9:00-16:30，周一闭馆，免费开放，建议自愿捐赠。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 奥赫里德植物园</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离古城约1.5公里，可步行20分钟或乘坐6路公交直达，始建于20世纪初，园内种植了大量北马其顿本土植物和珍稀花卉，植被茂盛，环境清幽，是游览古城间隙休闲放松的绝佳去处，可漫步园内，感受自然与生机，还能远眺奥赫里德湖的美景。开放时间为9:00-18:00，门票50北马其顿第纳尔，学生免费。</p>
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
                    <p>优先选择老城内部或老城周边500米范围内的住宿，出行便利，可随时漫步老城，感受夜晚的古城氛围和湖景夜景；老城内部多为特色民宿，多由拜占庭或奥斯曼时期的历史建筑改造而成，建筑风格独特，充满古朴气息，部分民宿可俯瞰奥赫里德湖，适合喜欢人文体验和湖景风光的游客；老城周边则有更多精品酒店和连锁酒店，设施齐全，性价比更高，适合家庭出行或预算有限的游客。需要注意的是，老城内部街巷狭窄，部分区域无法停车，若自驾出行，可选择带免费停车位的住宿。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品酒店：</strong>可选择位于老城周边或湖滨的特色精品酒店，这类酒店通常融合了当地建筑元素与现代设施，装修精致，部分酒店设有露台或湖景房，可欣赏古城或奥赫里德湖美景，服务周到，价格约130-220欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>老城内部有很多由历史建筑改造的民宿，装修简约古朴，保留了传统建筑的特色，部分带有小庭院或阳台，步行可达老城主要景点，价格约80-120欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约60-100欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>老城周边有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约50-80欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>奥赫里德旅游旺季为5-9月，尤其是7-8月，作为西欧游客钟爱的避暑胜地，此时游客较多，住宿紧张，建议提前1-2个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，老城周边街道停车费用较高（10-18欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分民宿不提供一次性牙刷和牙膏，建议提前自备；老城内部部分住宿为老式建筑，没有电梯，若携带大件行李，建议预订时有电梯的住宿；住宿周边多有餐厅和超市，购买生活用品和就餐便利，当地餐厅以巴尔干风味和湖鲜为主，可品尝烤虹鳟鱼等特色美食；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>奥赫里德当地住宿整体价格略高于北马其顿其他城市，但性价比适中，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和出行建议，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，适合喜欢静谧氛围的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="6月至9月，夏季可同时享受湖滨休闲与古城观光；7月至8月举办奥赫里德夏季音乐节" />
              <InfoRow label="建议时长" value="1.5–2天（核心区域步行游览约需5-6小时）" />
              <InfoRow label="注意事项" value="古城街道狭窄且多为石板路和台阶，建议穿防滑鞋；参观教堂需着装得体，遮盖肩膀和膝盖；旺季住宿紧张，建议提前预订" />
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