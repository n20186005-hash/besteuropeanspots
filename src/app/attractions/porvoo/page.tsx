import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "波尔沃古镇 (Porvoo Old Town)",
  description: "波尔沃古镇详细游览指南 - 芬兰历史第二悠久的城镇，保存最完好的中世纪古镇之一",
  openGraph: {
    title: "波尔沃古镇 — Porvoo Old Town",
    description: "波尔沃古镇详细游览指南 - 芬兰历史第二悠久的城镇，保存最完好的中世纪古镇之一",
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
        波尔沃古镇
      </span>
    </nav>
  );
}

export default function PorvooOldTownPage() {
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
                Old Town
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                北欧
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              波尔沃古镇
            </h1>
            <p className="text-lg text-white/80">
              Porvoo Old Town · 芬兰 · 波尔沃
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              波尔沃古镇坐落于芬兰南芬兰省，濒临波尔沃河，距离首都赫尔辛基仅40公里，是芬兰历史第二悠久的城镇，也是芬兰保存最完好的中世纪古镇之一。古镇以错落有致的彩色木屋、红褐色河滨仓库、蜿蜒的石板街巷和静谧的河畔风光为特色，融合了中世纪建筑风貌与芬兰民俗风情，兼具静谧与灵动，是感受芬兰中世纪历史、体验北欧田园生活的必访之地。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="波尔沃古镇整体全天开放，无统一闭馆时间，可24小时自由进出，感受不同时段的古镇韵味；古镇内部景点（博物馆、教堂等）开放时间分季节调整，夏季（5月-9月）10:00-18:00，冬季（10月-次年4月）10:00-16:00，每周一部分景点闭馆（具体以现场公示为准）。建议游览时间为3-4小时，清晨可邂逅薄雾中的静谧古镇，傍晚能欣赏河畔落日与木屋相映的美景，避开正午人流高峰，体验感更佳。" 
              />
              <InfoRow 
                label="门票价格" 
                value="古镇整体免费开放，无需购买大门票，可自由漫步街巷、河畔，感受古镇的自然与人文氛围；内部独立景点单独收费，波尔沃大教堂门票8欧元/人，波尔沃历史博物馆门票6欧元/人，学生、65岁以上老人凭有效证件半价，12岁以下儿童免费；部分民俗展馆免费开放，讲解服务10欧元/人，支持现金与信用卡支付，部分景点可现场扫码购票，便捷高效。" 
              />
              <InfoRow 
                label="详细地址" 
                value="古镇核心地址（Porvoo Old Town, 06100 Porvoo, Finland），位于波尔沃市中心，濒临波尔沃河，核心区域为古镇广场，周边辐射多条古街巷与河畔步道，距离波尔沃火车站约1公里，步行可达周边餐饮、购物区，远眺可欣赏波尔沃河的蜿蜒风光与周边的田园景致。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达赫尔辛基万塔国际机场（距离波尔沃约50公里），打车前往约40分钟，费用约80欧元；也可从赫尔辛基市中心乘坐火车直达波尔沃火车站，车程约30分钟，票价约10欧元，火车站距离古镇入口约1公里，步行15分钟即可抵达，也可乘坐当地1路公交直达，公交票价2欧元/人。市内交通方面，波尔沃市区公交网络便捷，1路、3路公交均可直达古镇周边；市区打车前往古镇，费用约10-15欧元；古镇内部街巷狭窄，禁止机动车通行，仅可步行游览，沉浸式感受中世纪街巷的静谧氛围。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                波尔沃古镇的历史渊源可追溯至公元13世纪，早在1229年，这里就已形成小型聚居地，当时的居民以捕鱼、农耕和手工业为生，依托波尔沃河的水运优势，逐渐发展为区域性的商贸小枢纽。1346年，波尔沃获得城市特权，成为芬兰中世纪时期重要的商业城镇，也是当时芬兰与瑞典、俄罗斯进行贸易往来的重要港口，波尔沃河沿岸的红褐色仓库，便是当时商贸繁荣的直接见证。
              </p>
              <p>
                中世纪时期，波尔沃是芬兰重要的宗教中心，13世纪末修建的波尔沃大教堂，成为当时芬兰东部地区的宗教圣地，吸引着周边的信徒前来朝拜。这一时期，古镇逐渐形成了以教堂为核心、街巷环绕的格局，彩色木屋、石板街巷、河畔仓库等建筑陆续建成，形成了如今古镇的基本风貌。当时的波尔沃受瑞典统治，建筑风格融合了瑞典中世纪风格与芬兰本土特色，彩色木屋的设计的便是瑞典文化与芬兰民俗交融的体现。
              </p>
              <p>
                历史上，波尔沃历经多次变迁，16世纪至19世纪初，始终处于瑞典的统治之下，期间经历了多次战争与火灾的洗礼，1708年的大火烧毁了古镇的部分建筑，此后当地居民在废墟上重建，严格保留了原有建筑的格局与风格，如今我们看到的古镇风貌，大多是当时重建后的模样。1809年，芬兰成为俄罗斯帝国的大公国，波尔沃作为芬兰东部的重要城镇，依然保持着繁荣的商贸活动，波尔沃河的水运优势进一步凸显，成为俄罗斯与北欧地区贸易往来的重要中转站。
              </p>
              <p>
                19世纪中期，随着芬兰民族意识的觉醒，波尔沃成为芬兰民族文化的重要发源地之一，这里诞生了芬兰著名的诗人、作家，许多芬兰民族文化运动都在此发起，古镇也成为芬兰民族精神的象征。20世纪以来，芬兰独立后，政府多次对波尔沃古镇进行修复与保护，严格遵循"修旧如旧"的原则，妥善保护古镇的建筑遗迹、街巷格局与民俗文化，避免现代化建设对古镇风貌的破坏。
              </p>
              <p>
                如今，波尔沃古镇不仅是芬兰重要的历史文化载体，也是芬兰最受欢迎的旅游景点之一，每年吸引着来自世界各地的游客。古镇的每一处建筑、每一条街巷都承载着厚重的历史，波尔沃大教堂见证着宗教文化的变迁，河畔仓库留存着商贸繁荣的印记，彩色木屋承载着芬兰人的生活智慧，这些历史遗迹共同构成了波尔沃古镇的独特魅力，也让这里成为感受芬兰中世纪历史、体验北欧民俗文化的重要窗口。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                波尔沃古镇以古镇广场为核心，濒临波尔沃河，景点密集且布局紧凑，建筑风格独特，民俗氛围浓厚，建议安排3-4小时游览。以下为经典步行游览路线，可全面领略古镇的中世纪建筑特色、历史遗迹与河畔风光，路线全程约1.5公里，节奏舒缓，适合沉浸式感受古镇的静谧与浪漫，兼顾打卡与体验感，同时可体验当地的民俗风情。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：古镇入口</strong>（设有景区简介牌与导览图，可在此领取导览手册，打卡古老的石质城门，城门上的雕刻记录着古镇的历史变迁，感受中世纪防御工事的简约威严）</p>
                  
                  <p><strong>第一站：古镇广场</strong>（距离入口约200米，古镇核心区域，广场中央有古老的雕塑与休闲座椅，周边环绕着彩色木屋、商铺与咖啡馆，可在广场休息片刻，欣赏周边的木屋建筑，感受古镇的人文氛围，购买当地特色手工艺品）</p>
                  
                  <p><strong>第二站：波尔沃大教堂</strong>（位于广场北侧，步行2分钟可达，中世纪哥特式风格建筑，外观简约庄重，内部留存着精美的壁画与宗教文物，可进入内部参观，感受教堂的庄严与静谧，登顶教堂塔楼，可俯瞰古镇局部风貌）</p>
                  
                  <p><strong>第三站：河畔仓库群</strong>（从大教堂步行5分钟可达，濒临波尔沃河，是古镇的标志性景观，红褐色的仓库错落排列，墙体上的斑驳痕迹记录着商贸繁荣的历史，可漫步河畔，欣赏仓库与河水相映的美景，打卡拍照）</p>
                  
                  <p><strong>第四站：古镇古街巷</strong>（从仓库群步行3分钟可达，街巷狭窄蜿蜒，石板路面光滑温润，两侧是色彩各异的木屋，屋顶覆盖着红瓦，门窗装饰精致，可漫步窄巷，感受当地居民的生活气息，探访小众民俗小店与咖啡馆）</p>
                  
                  <p><strong>第五站：波尔沃历史博物馆</strong>（距离古街巷约300米，设于一座18世纪的古老木屋中，馆内展示了古镇的历史遗物、民俗文化展品、传统手工艺，可深入了解古镇的发展历程与芬兰民俗风情）</p>
                  
                  <p><strong>第六站：河畔步道</strong>（从博物馆步行10分钟可达，沿波尔沃河蜿蜒，周边植被繁茂，设有休闲座椅，可漫步步道，欣赏河畔的田园风光，感受古镇的静谧与自然之美）</p>
                  
                  <p><strong>终点：古镇出口周边</strong>（周边有当地特色餐厅、纪念品商店，可品尝芬兰特色美食，购买手工艺品，结束游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>古镇内部街巷多为石板路面，雨后易滑，建议穿舒适的步行鞋；部分景点内部禁止大声喧哗、随意触摸文物，大教堂内部禁止使用闪光灯拍照；夏季古镇气候凉爽，早晚温差较大，可携带薄外套与饮用水；冬季气温较低，多雪，路面可能结冰，注意防滑，可携带保暖衣物；旅游旺季（6-8月）游客较多，建议避开正午人流高峰，错峰游览；古镇内部商铺多为当地特色小店，可理性消费，感受当地人文气息。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                波尔沃古镇融合了中世纪哥特式建筑与芬兰本土木屋风格，彩色木屋、红褐色仓库、蜿蜒的石板街巷与静谧的波尔沃河相映成趣，光影层次丰富，既有中世纪的庄重厚重，又有北欧小镇的清新灵动，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、街巷氛围等不同风格，无论是手机还是相机，都能拍出高质量照片，展现古镇的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 波尔沃大教堂塔楼：</strong>这是拍摄古镇全景的最佳机位，登顶塔楼后可360度俯瞰整个波尔沃古镇，彩色木屋错落有致，红瓦屋顶与彩色墙体相映成趣，波尔沃河蜿蜒穿过古镇，远处的田园风光尽收眼底，山水与人文景观完美融合，画面清新而有层次感。最佳拍摄时间为清晨（8:00-9:30），光线柔和，可更好地呈现古镇的建筑细节与整体风貌，避开人流高峰，拍摄效果更佳，建议携带广角镜头，捕捉全景美景。</p>
                    
                    <p><strong>2. 河畔仓库群旁：</strong>作为古镇的标志性景观，河畔仓库群是网红拍照点。可站在河畔步道上，以红褐色仓库为主体，搭配波尔沃河的流水与岸边的绿植，采用对称构图或对角线构图，拍摄仓库的全貌与河畔风光，斑驳的墙体与清澈的河水形成鲜明对比，画面极具氛围感；也可坐在河畔的石阶上，以仓库为背景，拍摄人物与建筑的同框照片，凸显古镇的静谧与浪漫。最佳拍摄时间为下午2:00-4:00，阳光斜照，可营造出柔和的光影效果，避免正午强光直射。</p>
                    
                    <p><strong>3. 古镇广场中央：</strong>广场是古镇的核心，也是拍摄古镇人文氛围的绝佳机位。可以广场中央的雕塑为前景，拍摄周边的彩色木屋、咖啡馆与行人，彩色的建筑搭配悠闲的人群，氛围感拉满，适合拍摄人文风、清新风照片。最佳拍摄时间为上午10:00-11:30，阳光柔和，可捕捉到建筑的光影细节，也能拍到行人的灵动画面，展现古镇的烟火气息。</p>
                    
                    <p><strong>4. 古街巷拐角：</strong>古镇的古街巷纵横交错，拐角处往往能拍出极具氛围感的照片。可选择两侧是彩色木屋、石板路面的街巷拐角，采用侧拍构图，捕捉街巷的延伸感与建筑的细节，搭配光影变化，营造出中世纪的静谧与北欧的清新。最佳拍摄时间为清晨或傍晚，光线柔和，可避免人流干扰，适合拍摄复古风、氛围感照片，也可搭配简约服饰，提升画面的代入感。</p>
                    
                    <p><strong>5. 河畔步道远眺：</strong>沿河畔步道漫步，可找到绝佳的远眺机位，以波尔沃河为前景，拍摄对岸的彩色木屋与古镇全貌，河水清澈，建筑错落，远处的田园风光点缀其间，画面清新自然，适合拍摄风景类照片。最佳拍摄时间为傍晚（18:00-19:00），夕阳洒在河面上，波光粼粼，木屋被镀上一层温暖的金色，画面极具感染力，建议携带长焦镜头，拍摄建筑细节与河面光影。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（8:00-9:30）和傍晚（18:00-19:00），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色、简约风格的衣物，避免过于花哨，与古镇的彩色木屋、石板路面形成对比，更出片；部分景点内部禁止拍照，需遵守景区规定，拍摄时避免影响其他游客；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与人文特写，效果更佳；若想拍摄复古风照片，可搭配长裙、针织外套等服饰，与古镇的中世纪氛围更契合。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                波尔沃古镇位于波尔沃市中心，周边景点丰富，多以历史建筑、自然景观与民俗景点为主，游览完古镇后，可根据自身时间安排前往，既能丰富行程，也能更全面地感受波尔沃的历史文化与自然之美。以下推荐几个距离古镇较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 波尔沃城堡遗址</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离波尔沃古镇约1.2公里，步行15分钟即可抵达，或乘坐1路公交直达，车程约5分钟，票价2欧元。城堡建于14世纪，是中世纪时期的防御工事，如今仅留存部分城墙与瞭望塔，遗址周边植被繁茂，可登顶瞭望塔，俯瞰波尔沃市全景与古镇风貌，免费开放，适合喜欢历史遗迹与登高望远的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 波尔沃民俗博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古镇约800米，步行10分钟即可抵达，设于一座18世纪的芬兰传统木屋中，馆内展示了波尔沃地区的民俗文化、传统手工艺、服饰与生活用具，可深入了解当地的人文风情，开放时间为10:00-17:00，周二闭馆，成人门票6欧元，学生半价，适合喜欢民俗文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 波尔沃河游船码头</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古镇约500米，步行7分钟即可抵达，可乘坐游船沿波尔沃河游览，欣赏河畔的田园风光、古老建筑与自然景致，游船票价15欧元/人，全程约1小时，夏季（5-9月）运营，适合喜欢自然景观与休闲体验的游客，沿途可欣赏到古镇未被商业化的原始风貌。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 赫尔辛基乡村庄园</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古镇约3公里，可乘坐3路公交直达，车程约15分钟，或打车前往，费用约12欧元。庄园建于19世纪，是芬兰传统的乡村庄园，园内有大片的草坪、花园、古老的木屋，可漫步庄园，感受芬兰乡村的田园生活，体验采摘、垂钓等休闲活动，开放时间为9:00-18:00，门票8欧元/人，适合家庭出行或喜欢休闲放松的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 波尔沃艺术博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离古镇约1公里，步行15分钟即可抵达，设于一座20世纪的欧式建筑内，馆内展示了芬兰本土艺术家的作品，涵盖绘画、雕塑、手工艺等多种类型，可感受芬兰的艺术氛围，开放时间为11:00-18:00，周三闭馆，成人门票7欧元，学生半价，适合喜欢艺术文化的游客。</p>
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
                    <p>优先选择波尔沃古镇内部或周边500米范围内的住宿，出行便利，可随时漫步古镇街巷、河畔，感受中世纪氛围与北欧田园风情，部分住宿为老式木屋改造，自带复古韵味，可沉浸式体验当地生活；古镇周边多为特色民宿与精品酒店，距离核心景点近，步行可达古镇广场、河畔仓库等景点；波尔沃市中心距离古镇约1公里，这里有更多连锁酒店与经济型酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。自驾出行的游客可选择带免费停车位的住宿，古镇周边街道狭窄，停车不便，提前确认停车事宜。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品度假酒店：</strong>可选择位于古镇内部的特色度假酒店，这类酒店多由中世纪木屋改造，装修融合了北欧简约元素与现代舒适设施，部分设有露台、观景台，可欣赏古镇全景或河畔风光，服务周到，价格约80-150欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>古镇周边有很多小众民宿，装修简约清新，保留了芬兰传统木屋的特色，部分带有小庭院或阳台，房东多为当地人，可提供地道的出行建议，价格约45-90欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约35-65欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约30-55欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>波尔沃旅游旺季为6-8月，此时气候凉爽，风光优美，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，古镇周边街道停车费用较高（5-9欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住；古镇内部部分住宿为老式木屋，无电梯，预订时可确认是否有电梯，便于携带大件行李。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分小众民宿不提供一次性牙刷和牙膏，建议提前自备；古镇周边多为石板路面，夜间照明较好，但部分小巷较为僻静，晚归时注意安全；住宿周边有很多当地特色餐厅，可品尝三文鱼、驯鹿肉、芬兰馅饼等芬兰特色美食，部分餐厅提供户外座位，可边就餐边欣赏古镇夜景；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>波尔沃当地住宿整体价格适中，性价比高于首都赫尔辛基，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和休闲路线，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，此时古镇被白雪覆盖，彩色木屋与白雪相映成趣，河畔结冰，呈现出独特的北欧冬日风光，适合喜欢静谧氛围与雪景风光的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="5月至9月，夏季鲜花盛开、日照充足；12月圣诞季老城灯饰氛围温馨" />
              <InfoRow label="建议时长" value="半天至1天" />
              <InfoRow label="注意事项" value="波尔沃古镇是一座融合历史、文化、艺术与自然的独特景区，这里既有中世纪建筑的庄重厚重，又有北欧小镇的清新灵动，既有芬兰民俗的独特魅力，又有河畔风光的静谧柔美。无论是独自旅行、结伴出行，还是家庭出游，都能在这里找到属于自己的游览乐趣，感受芬兰中世纪历史与北欧田园生活的魅力。希望这份详细的游览指南，能帮助你更好地领略波尔沃古镇的风采，度过一段愉快的旅程。" />
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