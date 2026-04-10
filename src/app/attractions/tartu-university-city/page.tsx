import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "塔尔图大学城 (Tartu University City)",
  description: "塔尔图大学城详细游览指南 - 爱沙尼亚的知识之都与文化地标，始建于1632年的百年学府与巴洛克建筑群",
  openGraph: {
    title: "塔尔图大学城 — Tartu University City",
    description: "塔尔图大学城详细游览指南 - 爱沙尼亚的知识之都与文化地标",
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
        塔尔图大学城
      </span>
    </nav>
  );
}

export default function TartuUniversityCityPage() {
  const color = "#4682b4"; // Balkans & Eastern Europe color

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
                University City
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                巴尔干・东欧
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              塔尔图大学城
            </h1>
            <p className="text-lg text-white/80">
              Tartu University City · 爱沙尼亚 · 塔尔图
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              塔尔图大学城坐落于爱沙尼亚第二大城市塔尔图，以始建于1632年的塔尔图大学为核心，是爱沙尼亚的"知识之都"与文化地标。这里融合了巴洛克式古建筑与现代学术氛围，鹅卵石街巷串联起百年学府、人文景观与活力街区，学生群体的存在让这座老城充满朝气，2024年作为欧洲文化之都，更成为承载爱沙尼亚历史与学术精神的核心游览地，是感受 Baltic 人文底蕴的必访之处。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="塔尔图大学城整体为开放式区域，无统一开放时间，核心区域及相关场所开放时间如下：塔尔图大学主楼及公共区域每日8:00-20:00开放，大学博物馆10:00-18:00（每周一闭馆）；天使桥、魔鬼桥等户外景观全天24小时开放；老城区街巷及周边配套设施随商铺、咖啡馆营业时间开放，通常为9:00-22:00，周末部分商铺会延迟至10:00开门。夏季（6-8月）部分景点会延长开放至21:00，冬季（11-次年2月）部分博物馆会提前至17:00闭馆，建议出行前查询具体景点官网确认。" 
              />
              <InfoRow 
                label="门票价格" 
                value="大学城整体游览免费，无需购买门票；部分内部场馆及体验项目收费：塔尔图大学博物馆门票成人8欧元，学生（凭有效学生证）4欧元，12岁以下儿童免费；大学主楼内部分历史礼堂及特色展厅需提前预约，预约免费，讲解服务（英语、爱沙尼亚语）收费10欧元/组（最多20人）；圣约翰教堂门票3欧元，学生及老人优惠价1.5欧元，教堂内壁画讲解额外收费5欧元/人。所有收费项目均支持现金、信用卡及移动支付，部分景点可购买联票，包含大学博物馆、圣约翰教堂等核心场馆，成人联票10欧元，学生联票5欧元，有效期3天。" 
              />
              <InfoRow 
                label="详细地址" 
                value="核心区域地址：Ülikooli 18, 51003 Tartu, Estonia（塔尔图大学主楼地址），整个大学城分布于塔尔图老城区及周边区域，以Ülikooli街、Raatuse街为核心，沿埃马约吉河（Ema jõgi）两岸延伸，北至市政厅广场，南至塔尔图机场方向，覆盖面积约3平方公里，是塔尔图市的核心城区。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通：前往塔尔图大学城，需先抵达塔尔图市。距离塔尔图最近的主要机场为塔林机场（Tallinn Airport），距离塔尔图约185公里，机场有直达塔尔图的大巴和火车，大巴每小时一班，车程2.5-3小时，票价2-10欧元，凭国际学生证可享受折扣；火车每日6班，车程3小时左右，票价8-15欧元。此外，里加机场（Riga Airport）距离塔尔图250公里，有Lux Express运营的大巴直达，每日4班，车程3.5小时。塔尔图本地有小型机场（Tartu Airport），位于市中心以南10公里，每日有一班芬兰航空航班往返赫尔辛基，机场有免费穿梭巴士连接市中心及大学城。内部交通：塔尔图大学城区域不大，核心景点步行均可抵达，从大学主楼步行至老城区核心街巷仅需5分钟，至天使桥、魔鬼桥约10分钟。市内公共交通以巴士为主，有多条线路途经大学城，票价2欧元/次，可购买日票（6欧元）或周票（20欧元），适合长时间游览。此外，市内可租赁自行车，租赁点遍布大学城周边，每日租金5-8欧元，部分酒店及民宿可提供免费自行车。出租车起步价3欧元，每公里1.2欧元，从市中心到大学城任意景点车程均不超过10分钟，适合短途出行。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                塔尔图大学城的历史与塔尔图市的发展深度绑定，其根源可追溯至1030年，当时塔尔图首次被记载于历史文献中，最初名为"Tar Batu"，后在德语中被称为"Dorpat"，直至19世纪末才正式定名为"Tartu"。作为爱沙尼亚最古老的城市，塔尔图早在5世纪就有人类定居，1262年获得城市权，曾是汉萨同盟的重要成员，凭借埃马约吉河的航运优势，成为波罗的海地区的贸易与文化枢纽。
              </p>
              <p>
                塔尔图大学城的核心——塔尔图大学，始建于1632年6月30日，由瑞典国王古斯塔夫二世·阿道夫签署法令创立，最初名为"Academia Dorpatensis"（多尔帕特学院），同年10月15日正式开学，设立哲学、法律、神学、医学四个学院，以乌普萨拉大学为蓝本运营，开启了爱沙尼亚的高等教育历史。1631年，学院的前身塔尔图中学设立印刷厂，标志着爱沙尼亚印刷时代的开端，期间共出版约1300卷书籍，为区域文化传播奠定了基础。
              </p>
              <p>
                17世纪中后期，受俄瑞战争影响，大学于1656年迁至塔林，1665年暂停学术活动；1690年，塔尔图再次成为大学城，但因反瑞典联盟的打击及1695-1697年的大饥荒，大学于1699年迁至派尔努，更名为"Academia Gustavocarolina"，1710年因大北方战争中塔尔图向俄军投降，大学再次关闭。这一时期，多位杰出学者曾在此求学或任教，包括瑞典科学家乌尔班·希尔内、数学家斯文·丁伯格（世界上首位基于牛顿理论授课的学者）、医学家拉尔斯·米克兰德（浴疗学创始人）等。
              </p>
              <p>
                1802年4月21-22日，在俄罗斯中央政府与波罗的海德国精英的共同推动下，大学在塔尔图重新开放，更名为"Kaiserliche Universität zu Dorpat"（多尔帕特帝国大学），由沙皇亚历山大一世于12月12日确认法令，赋予其俄罗斯国立大学的法律地位，以德语为教学语言。1803年，学校设立爱沙尼亚语讲座，1838年成立学术爱沙尼亚学会，推动了爱沙尼亚民族语言与文化的发展；1828-1838年，学校设立教授学院，为俄罗斯各地大学培养师资，成为当时东欧重要的学术中心。
              </p>
              <p>
                1918年爱沙尼亚独立后，大学更名为塔尔图大学，将爱沙尼亚语定为教学语言，成为爱沙尼亚民族文化与学术独立的象征。二战期间，塔尔图大部分城区遭到破坏，大学建筑也受到不同程度损毁，但核心学术资源得以保存。战后，大学逐步恢复发展，不断扩建校区，吸纳国际学生与学者，逐渐形成了以大学为核心，涵盖教学、科研、文化、生活的综合性大学城。
              </p>
              <p>
                如今，塔尔图大学城不仅是塔尔图大学的所在地，更是爱沙尼亚的"知识首都"，承载着国家的学术传承与文化记忆。2024年，塔尔图被评为欧洲文化之都，大学城作为核心区域，举办了一系列文化、学术活动，进一步彰显了其在波罗的海地区的文化影响力。这里的每一座建筑、每一条街巷，都镌刻着百年的历史印记，既有中世纪的古朴韵味，又有现代学术的活力气息，成为连接爱沙尼亚过去与未来的重要纽带。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线建议">
            <div className="space-y-6">
              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-3">一日游核心路线（约8小时，适合时间紧张的游客）</h3>
                <div className="space-y-4 text-sm text-foreground leading-relaxed">
                  <p><strong>09:00-10:30</strong> 塔尔图大学主楼 → 大学博物馆：从大学城核心入口出发，首先抵达塔尔图大学主楼，这座巴洛克风格的建筑始建于1632年，是大学城的标志性建筑，外观庄重典雅，内部有华丽的礼堂、古老的图书馆和历史展厅，可免费参观公共区域，感受百年学府的学术氛围。随后前往主楼旁的大学博物馆，在这里可以了解塔尔图大学的百年发展史，观赏珍贵的校史藏品、古籍文献和历史文物，聆听专业讲解，深入了解爱沙尼亚的高等教育历程。</p>
                  <p><strong>10:30-12:00</strong> 大学周边街巷 → 学生街区：从博物馆出来后，漫步在Ülikooli街和Raatuse街，这里是大学城的核心街巷，鹅卵石路面两旁是色彩柔和的18-19世纪建筑，随处可见咖啡馆、书店、文具店和学生用品店，充满了青春活力。可以走进一家当地的咖啡馆，点一杯热饮和一份当地甜点，感受塔尔图的慢生活节奏，也可以逛逛特色小店，挑选具有当地特色的纪念品。</p>
                  <p><strong>12:00-13:30</strong> 午餐：推荐在学生街区选择一家当地餐厅，品尝爱沙尼亚传统美食，如黑面包、熏鱼、土豆泥和浆果布丁，人均消费15-25欧元，既能体验当地风味，又能感受学生日常的饮食文化。</p>
                  <p><strong>13:30-15:30</strong> 天使桥 → 魔鬼桥 → 埃马约吉河畔：餐后前往大学旁的天使桥与魔鬼桥，这两座石桥连接着老城区的不同区域，有着悠久的历史和动人的传说，桥面雕刻精美，是塔尔图的标志性景观之一。站在桥上，可以俯瞰埃马约吉河的美景，河水清澈，两岸绿树成荫，尤其是阴雨天，雨滴落在河面，更具浪漫氛围。随后沿着河畔漫步，欣赏河岸风光，感受自然与人文的交融。</p>
                  <p><strong>15:30-17:30</strong> 塔尔图老城区 → 圣约翰教堂：从河畔前往老城区，这里是塔尔图最具历史韵味的区域，狭窄的街巷、古老的建筑、哥特式的教堂，处处都充满了中世纪的气息。重点参观圣约翰教堂，这座哥特式教堂的尖顶在城市任何位置都能看到，内部的15世纪壁画是最大的看点，教堂前的广场也是当地人最爱的聚集地，可在此拍照留念，感受当地的人文氛围。</p>
                  <p><strong>17:30-18:30</strong> 市政厅广场 → 结束游览：前往老城区的市政厅广场，这里是塔尔图的市中心，广场上有市政厅大楼、雕塑和喷泉，周边是商铺和咖啡馆，傍晚时分，当地人会在此休闲散步、聊天聚会，氛围十分热闹。可以在广场上稍作休息，感受塔尔图的城市活力，随后结束一天的游览。</p>
                </div>
              </div>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-3">两日游深度路线（约16小时，适合深度体验的游客）</h3>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  <strong>第一天：</strong>学术历史线（同一日游核心路线），重点感受塔尔图大学的百年学术底蕴和老城区的历史韵味，晚上可在老城区或学生街区享用晚餐，餐后漫步河畔，欣赏塔尔图的夜景，也可以走进一家酒吧，体验当地的夜生活。
                </p>
                <p className="text-sm font-semibold text-primary mb-3">第二天：文化体验+自然休闲线</p>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>09:00-11:00</strong> 爱沙尼亚国家博物馆（塔尔图分馆）：位于大学城南部，距离大学主楼约15分钟步行路程，馆内收藏了大量爱沙尼亚的历史文物、民俗展品和艺术作品，详细展示了爱沙尼亚的民族文化、历史发展和民俗风情，可在此深入了解爱沙尼亚的国家历史与文化。</p>
                  <p><strong>11:00-12:30</strong> 图门玛基公园（Toomemägi Park）：位于老城区东侧，是塔尔图最大的城市公园，园内绿树成荫、草坪开阔，还有古老的城堡遗迹和观景台，站在观景台上可以俯瞰整个大学城和老城区的全景，景色十分优美。可以在园内漫步、休闲，感受自然气息，也可以在草坪上野餐，享受惬意时光。</p>
                  <p><strong>12:30-14:00</strong> 午餐：在公园附近选择一家景观餐厅，一边品尝美食，一边欣赏公园景色，人均消费20-30欧元。</p>
                  <p><strong>14:00-16:00</strong> 塔尔图大学图书馆 → 学术展厅：前往塔尔图大学图书馆，这座图书馆始建于1632年，是爱沙尼亚最古老的图书馆，收藏了大量古籍文献和珍贵书籍，建筑风格庄重典雅，内部环境安静舒适，可免费参观（需遵守图书馆规定）。随后参观大学内的学术展厅，了解学校的科研成果和学术活动，感受现代学术的活力。</p>
                  <p><strong>16:00-18:00</strong> 学生宿舍区 → 当地市场：前往Raatuse 22学生宿舍区，这里是塔尔图最具国际化的学生居住区，居住着来自世界各地的学生，周边有超市、餐厅和休闲设施，可感受学生的日常生活氛围。随后前往附近的当地市场，购买新鲜的水果、蔬菜和当地特色食品，体验当地的市井生活。</p>
                  <p><strong>18:00-19:30</strong> 晚餐：在市场附近选择一家特色餐厅，品尝当地的特色美食，结束两天的深度游览。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="最佳拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                塔尔图大学城融合了古建筑、自然景观和人文气息，拍照机位丰富，无论是复古风、文艺风还是自然风，都能找到合适的拍摄角度，以下为核心拍照机位推荐，涵盖不同风格，适合各类游客拍摄。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">复古人文机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 塔尔图大学主楼正门：</strong>这里是大学城的标志性机位，巴洛克风格的建筑庄重典雅，正门的立柱、浮雕和雕塑都极具特色，适合拍摄全身照和建筑全景，建议选择上午9-10点拍摄，光线柔和，能更好地展现建筑的细节和质感，可搭配学生证、书籍等道具，营造学术复古氛围。</p>
                    <p><strong>2. 大学博物馆门口台阶：</strong>台阶两侧有古老的雕塑，背景是博物馆的复古建筑，适合拍摄半身照和氛围感照片，可坐在台阶上，手持古籍或相机，营造安静文艺的氛围，下午3-4点光线斜射，能拍出柔和的光影效果。</p>
                    <p><strong>3. 老城区狭窄街巷：</strong>老城区的鹅卵石街巷狭窄而幽深，两旁是色彩柔和的18-19世纪建筑，墙面爬满藤蔓，适合拍摄复古文艺风照片，建议采用侧身行走、回眸等姿势，搭配当地的咖啡馆招牌、古老的门窗作为背景，能拍出电影感十足的画面，阴雨天拍摄更具韵味。</p>
                    <p><strong>4. 圣约翰教堂尖顶及广场：</strong>教堂的哥特式尖顶是塔尔图的标志性景观，可在教堂广场拍摄尖顶全景，也可站在广场的雕塑旁，以尖顶为背景拍摄半身照，教堂的彩色玻璃窗和墙面浮雕也是绝佳的拍摄背景，适合拍摄复古宗教风照片。</p>
                  </div>
                </div>

                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">自然风光机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 天使桥桥面：</strong>站在天使桥上，可拍摄埃马约吉河的全景，河水清澈，两岸绿树成荫，远处是老城区的建筑，适合拍摄风景照和人物与自然融合的照片，建议选择清晨或傍晚拍摄，清晨河面有薄雾，傍晚有落日余晖，氛围感十足。</p>
                    <p><strong>2. 埃马约吉河畔步道：</strong>河畔步道旁有垂柳、草坪和长椅，适合拍摄休闲自然风照片，可坐在长椅上，望向河面，或沿着步道漫步，抓拍动态画面，春夏季节草木茂盛，秋冬季节落叶纷飞，不同季节有不同的拍摄效果。</p>
                    <p><strong>3. 图门玛基公园观景台：</strong>这里是俯瞰整个大学城和老城区的最佳机位，可拍摄全景照，远处的塔尔图大学主楼、圣约翰教堂、埃马约吉河尽收眼底，适合拍摄风景全景和人物剪影，建议选择晴天上午拍摄，视野开阔，光线充足。</p>
                  </div>
                </div>

                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">文艺清新机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 学生街区咖啡馆窗边：</strong>学生街区的咖啡馆装修简约文艺，窗边有绿植和书籍，适合拍摄文艺清新风照片，可坐在窗边，手持咖啡杯，望向窗外的街巷，抓拍自然的表情，下午2-3点的阳光透过窗户，能拍出柔和的光斑效果。</p>
                    <p><strong>2. 大学图书馆窗边：</strong>图书馆内的窗边摆放着桌椅，背景是书架和古籍，适合拍摄安静文艺的照片，可手持书籍，坐在窗边阅读，抓拍静态画面，营造书香气息，注意拍摄时遵守图书馆规定，不要影响他人。</p>
                    <p><strong>3. 魔鬼桥侧面：</strong>魔鬼桥的桥面雕刻精美，侧面有弧形的桥拱，适合拍摄文艺氛围感照片，可站在桥拱旁，以桥拱为框架，拍摄人物或风景，傍晚时分，夕阳洒在桥面上，光影效果极佳。</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-light rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-3">拍摄小贴士</h3>
                <div className="space-y-2 text-sm text-foreground leading-relaxed">
                  <p><strong>1. 最佳拍摄时间：</strong>上午9-11点和下午3-5点，光线柔和，光影效果好，适合拍摄建筑和人物；傍晚18-19点，可拍摄落日和夜景，埃马约吉河畔的落日的十分美丽，老城区的夜景灯光柔和，氛围感十足。</p>
                  <p><strong>2. 穿搭建议：</strong>可选择简约的休闲装、文艺风服饰，如衬衫、连衣裙、针织衫等，颜色以浅色系、莫兰迪色系为主，搭配复古配饰，如眼镜、围巾、帆布包等，更贴合大学城的氛围。</p>
                  <p><strong>3. 注意事项：</strong>拍摄教堂内部时，需遵守教堂规定，不要大声喧哗，部分区域禁止拍照；拍摄学生宿舍区时，需尊重学生的隐私，不要拍摄宿舍内部；户外拍摄时，注意爱护环境，不要随意踩踏草坪、攀折花木。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近可逛景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                塔尔图大学城位于塔尔图市核心区域，周边景点丰富，涵盖历史、文化、自然等多种类型，距离较近，可在游览大学城的同时一并参观，以下为核心附近景点推荐，均距离大学城核心区域1-3公里范围内，步行或乘坐短途公交即可抵达。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 塔尔图市政厅广场</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离大学城核心区域约800米，步行10分钟即可抵达，是塔尔图的市中心，广场上有市政厅大楼、雕塑和喷泉，市政厅大楼始建于18世纪，建筑风格为巴洛克式，外观华丽，内部有市政厅博物馆，可免费参观。广场周边是商铺、咖啡馆和餐厅，是当地人休闲聚会的主要场所，傍晚时分十分热闹，可在此感受塔尔图的城市活力。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 爱沙尼亚国家博物馆（塔尔图分馆）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离大学城核心区域约1.5公里，步行15分钟或乘坐1路公交2站即可抵达，馆内收藏了大量爱沙尼亚的历史文物、民俗展品和艺术作品，详细展示了爱沙尼亚的民族文化、历史发展和民俗风情，门票成人6欧元，学生3欧元，开放时间10:00-18:00（每周一闭馆），适合喜欢历史文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 图门玛基公园（Toomemägi Park）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离大学城核心区域约1.2公里，步行12分钟即可抵达，是塔尔图最大的城市公园，园内绿树成荫、草坪开阔，还有古老的城堡遗迹和观景台，站在观景台上可以俯瞰整个大学城和老城区的全景，景色十分优美。公园内还有儿童游乐设施和休闲长椅，适合休闲散步、野餐和放松，免费开放，全天24小时可进入。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 塔尔图大教堂遗迹</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离大学城核心区域约1公里，步行10分钟即可抵达，始建于13世纪，是塔尔图最古老的教堂之一，曾在二战中遭到损毁，如今仅存遗迹，但依然能看出其当年的宏伟气势。遗迹周边有草坪和雕塑，适合拍照留念，免费开放，全天24小时可参观，傍晚时分，夕阳洒在遗迹上，氛围感十足。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 塔尔图艺术博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离大学城核心区域约2公里，乘坐2路公交3站即可抵达，馆内收藏了大量爱沙尼亚及国际艺术家的作品，涵盖绘画、雕塑、摄影等多种类型，展示了不同时期的艺术风格，门票成人7欧元，学生3.5欧元，开放时间10:00-19:00（每周二闭馆），适合艺术爱好者参观。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">6. 埃马约吉河游船码头</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离大学城核心区域约1.3公里，步行13分钟即可抵达，可乘坐游船游览埃马约吉河，欣赏河岸风光，游船分为短途（30分钟）和长途（1小时），票价分别为8欧元和15欧元，夏季（6-8月）每日有多个班次，冬季因河面结冰暂停运营，适合喜欢自然风光的游客。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="7" title="周边住宿推荐">
            <div className="space-y-4">
              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">住宿小贴士</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>1. 预订建议：</strong>塔尔图旅游旺季为6-8月（夏季）和12月（圣诞季），此时住宿需求量大，建议提前1-2个月在线预订，可享受优惠价格；淡季（11-次年2月）住宿价格较低，可提前1周预订。</p>
                  <p><strong>2. 位置选择：</strong>优先选择距离大学城核心区域1公里范围内的住宿，步行即可抵达主要景点，交通便利；如果喜欢安静，可选择距离老城区稍远的民宿，环境更安静，价格也更实惠。</p>
                  <p><strong>3. 注意事项：</strong>入住时需携带有效身份证件（护照），部分住宿需要缴纳押金（50-100欧元），退房时无损坏则全额退还；大部分住宿提供免费WiFi，部分住宿提供免费早餐，预订时可留意相关信息；塔尔图冬季气温较低，住宿均有供暖设施，可放心入住。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="5月至9月，夏季阳光充足，大学城氛围最为活跃，各类文化活动丰富" />
              <InfoRow label="建议时长" value="1-2天（一日游可覆盖核心景点，两日游可深度体验文化历史）" />
              <InfoRow label="注意事项" value="塔尔图大学城是一座集历史、学术、文化、自然于一体的独特景区，这里既有百年学府的厚重底蕴，又有青春活力的学生气息，既有中世纪的古朴韵味，又有现代都市的舒适便捷。无论是独自旅行、结伴出行，还是家庭出游，都能在这里找到属于自己的游览乐趣，感受爱沙尼亚的人文魅力与自然之美。希望这份详细的游览指南，能帮助你更好地领略塔尔图大学城的风采，度过一段愉快的旅程。" />
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