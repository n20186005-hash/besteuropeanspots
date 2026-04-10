import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "奥尔胡斯老城 (Den Gamle By)",
  description: "奥尔胡斯老城详细游览指南 - 丹麦最具代表性的露天历史博物馆，北欧保存最完整的中世纪老城之一",
  openGraph: {
    title: "奥尔胡斯老城 — Den Gamle By",
    description: "奥尔胡斯老城详细游览指南 - 丹麦最具代表性的露天历史博物馆",
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
        奥尔胡斯老城
      </span>
    </nav>
  );
}

export default function AarhusOldTownPage() {
  const color = "#4A90E2"; // Nordic color - blue for Denmark/Nordic regions

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
              奥尔胡斯老城
            </h1>
            <p className="text-lg text-white/80">
              Den Gamle By · 丹麦 · 奥尔胡斯
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              奥尔胡斯老城是丹麦最具代表性的露天历史博物馆，也是北欧保存最完整的中世纪老城之一，坐落于奥尔胡斯市中心，占地约7.5万平方米。老城以16至19世纪的丹麦传统建筑为核心，复刻了当时的街巷格局、民居商铺与生活场景，融合了丹麦中世纪哥特式、文艺复兴式建筑风格，是感受丹麦民俗文化、追溯中世纪市井生活的核心景点，也是奥尔胡斯市重要的历史文化地标。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="奥尔胡斯老城开放时间分季节调整，夏季（5月-9月）9:00-18:00，冬季（10月-次年4月）10:00-16:00，每周一闭馆（节假日除外，具体以现场公示为准）；老城内的民俗展馆、手工艺作坊等室内区域开放时间为夏季9:30-17:30，冬季10:30-15:30。建议游览时间为3-4小时，清晨可避开人流，感受老城的静谧与古朴，傍晚可欣赏夕阳洒在红瓦屋顶上的绝美光影，沉浸式体验中世纪市井氛围。" 
              />
              <InfoRow 
                label="门票价格" 
                value="老城大门票成人14欧元/人，学生、65岁以上老人凭有效证件半价（7欧元/人），12岁以下儿童免费；讲解服务（含英文、丹麦文）15欧元/人，可现场预约，支持现金、信用卡及移动支付，部分线上平台可提前购票，享受1-2欧元优惠；老城内部分手工艺体验项目需单独收费，价格5-10欧元/项不等。" 
              />
              <InfoRow 
                label="详细地址" 
                value="老城核心地址（Den Gamle By, Viborgvej 2, 8000 Aarhus C, Denmark），位于奥尔胡斯市中心东北部，距离奥尔胡斯市中心广场约1公里，周边环绕着城市公园与休闲步道，远眺可欣赏奥尔胡斯湾的风光，周边配套有餐饮、纪念品商店，出行便捷。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达奥尔胡斯机场（距离老城约40公里），打车前往约40分钟，费用约50欧元；也可从丹麦首都哥本哈根乘坐火车直达奥尔胡斯中央火车站，车程约2小时，票价约40欧元，火车站距离老城约800米，步行12分钟即可抵达，也可乘坐当地1路、5路公交直达老城入口，公交票价2欧元/人。市内交通方面，奥尔胡斯市区公交1路、5路、8路均可直达老城周边；市区打车前往老城，费用约8-12欧元；老城内部仅可步行游览，全程为石板路面，部分区域设有无障碍通道，方便老人及儿童出行。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                奥尔胡斯老城的历史渊源可追溯至公元8世纪，作为丹麦中日德兰大区的核心城市，奥尔胡斯自中世纪起便是重要的商贸枢纽，当时的老城街区已形成雏形，依托奥尔胡斯湾的港口优势，成为北欧地区货物交易、文化交流的重要场所。最初的老城以木质建筑为主，街巷狭窄，商铺林立，涵盖了铁匠铺、面包房、杂货店等各类业态，是当时奥尔胡斯市民生活、劳作、交易的核心区域。
              </p>
              <p>
                16至19世纪，奥尔胡斯老城进入繁荣时期，随着商贸往来的日益频繁，老城的建筑逐渐由木质结构改为石质与红砖结构，建筑风格也融合了中世纪哥特式、文艺复兴式与丹麦本土建筑特色，形成了如今我们看到的红瓦石墙、错落有致的街巷格局。这一时期，老城不仅是商贸中心，也是丹麦中部的文化中心，各类手工作坊、教堂、行会纷纷在此设立，孕育了独特的丹麦民俗文化与手工艺传统。
              </p>
              <p>
                历史上，奥尔胡斯老城历经多次火灾与重建，18世纪末的一场大火烧毁了老城的大部分木质建筑，此后当地政府投入大量人力物力进行修复，严格遵循"修旧如旧"的原则，保留了原有街巷格局与建筑风貌，同时将周边地区即将拆除的16至19世纪古建筑迁移至老城范围内，逐步扩建为如今的露天历史博物馆。20世纪以来，丹麦政府将奥尔胡斯老城列为国家级历史遗迹，持续投入资金进行保护与修缮，完善配套设施，让老城既保留了中世纪的古朴风貌，又具备了现代旅游的便捷性。
              </p>
              <p>
                1914年，奥尔胡斯老城正式作为露天博物馆对外开放，成为丹麦第一座露天历史博物馆，馆内不仅保留了大量历史建筑，还通过复原当时的生活场景、展示民俗文物、开展手工艺体验等方式，让游客直观感受16至19世纪丹麦人的生活状态。如今，奥尔胡斯老城不仅是丹麦重要的历史文化载体，也是北欧最受欢迎的旅游景点之一，每年吸引着来自世界各地的游客，成为感受丹麦中世纪历史、领略北欧民俗风情的重要窗口。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                奥尔胡斯老城以中世纪街巷为脉络，核心区域分为民俗区、手工艺区、商业区与宗教区，景点布局紧凑，建筑特色鲜明，历史氛围浓厚，建议安排3-4小时游览。以下为经典步行游览路线，可全面领略老城的建筑风貌、民俗文化与历史底蕴，路线全程约1.5公里，节奏舒缓，兼顾打卡与体验感，同时可深入了解丹麦中世纪的市井生活。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：老城入口</strong>（设有景区简介牌与导览图，可在此领取导览手册，打卡古老的石质城门，城门上的雕刻记录着老城的发展历史与商贸文化，感受中世纪市井的烟火气息）</p>
                  
                  <p><strong>第一站：老城广场</strong>（距离入口约100米，老城核心区域，广场中央有中世纪喷泉，周边环绕着红砖民居与古老商铺，可在广场休息片刻，欣赏老城的整体风貌，拍摄复古全景照片）</p>
                  
                  <p><strong>第二站：手工艺作坊区</strong>（从广场步行3分钟可达，这里聚集了铁匠铺、面包房、陶器作坊等各类传统手工艺作坊，可现场观看手工艺人制作传统丹麦手工艺品，还可参与陶器制作、面包烘焙等体验项目，感受丹麦手工艺的独特魅力）</p>
                  
                  <p><strong>第三站：民俗展馆</strong>（从手工艺作坊区步行5分钟可达，设于一座17世纪的红砖建筑中，馆内展示了16至19世纪丹麦人的生活用具、服饰、家具与民俗展品，通过图文、实物结合的方式，详细介绍丹麦中世纪的民俗文化与生活场景）</p>
                  
                  <p><strong>第四站：中世纪教堂</strong>（从民俗展馆步行4分钟可达，建于16世纪，是老城的标志性建筑，采用哥特式建筑风格，教堂内的彩绘玻璃、木雕装饰精美，可感受中世纪宗教文化的庄严与肃穆）</p>
                  
                  <p><strong>第五站：老城商业区</strong>（从教堂步行6分钟可达，街巷两侧林立着复古商铺，售卖丹麦传统手工艺品、特色美食与纪念品，可漫步街巷，挑选特色商品，品尝丹麦酥、曲奇等当地美食）</p>
                  
                  <p><strong>第六站：老城公园</strong>（从商业区步行10分钟可达，环绕老城而建，园内有大片的草坪、古树与花卉，设有休闲座椅与木质步道，可漫步公园，感受老城与自然景观的完美融合，欣赏远处的奥尔胡斯湾风光）</p>
                  
                  <p><strong>终点：老城出口</strong>（周边有停车场与公交站点，可乘坐公交或打车前往市区，结束游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>老城内多为石板路面，雨后易滑，建议穿舒适的步行鞋；老城内部分区域（如民俗展馆、教堂）禁止大声喧哗、随意触摸文物，禁止使用闪光灯拍照；夏季老城内气候凉爽，早晚温差较大，可携带薄外套与饮用水；冬季气温较低，多雪，路面可能结冰，注意防滑，可携带保暖衣物；旅游旺季（6-8月）游客较多，建议避开正午人流高峰，错峰游览；老城内禁止吸烟，禁止携带易燃易爆物品，遵守景区相关规定。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                奥尔胡斯老城融合了中世纪哥特式、文艺复兴式与丹麦本土建筑风格，红瓦石墙、狭窄街巷、复古商铺与静谧庭院相映成趣，光影层次丰富，既有中世纪的古朴厚重，又有北欧的清新灵动，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、氛围大片等不同风格，无论是手机还是相机，都能拍出高质量照片，展现老城的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 老城入口石质城门：</strong>这是拍摄老城全景的绝佳机位，站在城门外侧，以城门为框架，拍摄城门后方的红瓦街巷与建筑，石质城门的古朴与红砖建筑的厚重形成鲜明对比，画面极具历史氛围感；也可坐在城门旁的石阶上，以城门为背景，拍摄人物与老城的同框照片，凸显老城的静谧与复古。最佳拍摄时间为上午10:00-11:30，阳光斜照，可营造出柔和的光影效果，突出建筑细节。</p>
                    
                    <p><strong>2. 老城广场喷泉旁：</strong>广场中央的中世纪喷泉是老城的标志性景观之一，也是拍摄复古风照片的绝佳机位。可以喷泉为前景，拍摄周边的红砖民居与复古商铺，喷泉的灵动与建筑的古朴相得益彰，适合拍摄人文风、复古风照片；也可与喷泉同框，捕捉人物与中世纪景观的融合画面，展现老城的市井气息。最佳拍摄时间为上午9:30-10:30，阳光柔和，可清晰捕捉喷泉的细节与建筑的光影。</p>
                    
                    <p><strong>3. 手工艺作坊区街巷：</strong>手工艺作坊区的街巷狭窄而幽深，两侧的红砖建筑错落有致，门窗上装饰着复古花纹，是拍摄氛围感大片的绝佳机位。可选择街巷的拐角处，采用侧拍构图，捕捉街巷的延伸感与建筑的细节，搭配光影变化，营造出中世纪的神秘与静谧，适合拍摄复古风、氛围感照片，也可搭配简约服饰，提升画面的代入感。最佳拍摄时间为下午2:00-4:00，阳光柔和，避免正午强光直射，可拍摄出街巷的层次感。</p>
                    
                    <p><strong>4. 中世纪教堂门前：</strong>教堂采用哥特式建筑风格，尖顶高耸，墙体雕刻精美，门前的石阶与雕塑极具特色，是拍摄建筑细节的绝佳机位。可近距离拍摄教堂的尖顶、彩绘玻璃与墙体雕刻，展现哥特式建筑的精致与庄严；也可站在教堂门前的广场上，以教堂为主体，拍摄建筑全景，凸显教堂的宏伟与肃穆。最佳拍摄时间为傍晚（17:00-18:00），夕阳洒在教堂的尖顶上，镀上一层温暖的金色，画面极具感染力。</p>
                    
                    <p><strong>5. 老城公园河畔步道：</strong>沿河畔步道漫步，可找到绝佳的拍摄机位，以奥尔胡斯湾支流为前景，拍摄对岸的老城建筑，河水清澈，老城的红瓦倒影映在水中，搭配岸边的绿植，画面清新自然，极具诗意。最佳拍摄时间为清晨（8:30-9:30），光线柔和，可更好地呈现老城的建筑风貌与水面倒影，避开人流高峰，拍摄效果更佳，建议携带广角镜头，捕捉全景美景。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（8:30-9:30）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色、简约风格的衣物，如白色、米色、卡其色，避免过于花哨，与老城的红瓦石墙形成对比，更出片；部分区域禁止拍照，需遵守景区规定，拍摄时避免影响其他游客；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与人文特写，效果更佳；若想拍摄复古风照片，可搭配长裙、复古衬衫等服饰，与老城的中世纪氛围更契合。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                奥尔胡斯老城位于奥尔胡斯市中心东北部，周边景点丰富，多以历史遗迹、艺术场馆与自然景观为主，游览完老城后，可根据自身时间安排前往，既能丰富行程，也能更全面地感受奥尔胡斯的历史文化与自然之美。以下推荐几个距离老城较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 奥尔胡斯城市公园</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约500米，步行7分钟即可抵达，是奥尔胡斯市最大的城市公园，园内有大片的草坪、古树、花卉与湖泊，设有休闲座椅、木质步道与儿童游乐设施，可漫步公园，感受自然与人文的融合，免费开放，适合休闲放松、拍照打卡，夏季可在草坪上野餐，冬季可欣赏公园雪景。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 奥尔胡斯艺术博物馆（ARoS）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约1.2公里，步行15分钟即可抵达，或乘坐1路公交直达，车程约5分钟，票价2欧元。博物馆是丹麦除哥本哈根以外最大的艺术品收藏馆，馆内拥有五个展厅和一整层沉浸式装置，藏品包括国内外艺术家的8000多件杰作，最具代表性的是永久性艺术作品《你的彩虹全景》，可漫步环形玻璃走廊，俯瞰整座城市与海湾风光，开放时间为10:00-17:00，周三闭馆，成人门票16欧元，学生及老人半价，适合喜欢艺术文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 奥尔胡斯湾海滩</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约1.5公里，步行20分钟即可抵达，或打车前往，费用约7欧元。海滩沙质细腻，海水清澈，周边设有休闲步道、遮阳伞与海滨餐厅，可漫步海滩，欣赏奥尔胡斯湾的辽阔风光，夏季可游泳、晒太阳，冬季可欣赏海滨雪景，免费开放，适合休闲放松、拍照打卡。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 奥尔胡斯历史博物馆</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约1公里，步行12分钟即可抵达，设于一座18世纪的红砖建筑中，馆内展示了奥尔胡斯市的历史遗物、民俗文化、传统手工艺与军事装备，可深入了解当地的人文风情与历史发展，开放时间为10:00-17:00，周四闭馆，成人门票8欧元，学生及老人半价，适合喜欢历史文化的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 奥尔胡斯市政厅</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离老城约1.1公里，步行14分钟即可抵达，建于20世纪初，采用新艺术风格建筑，市政厅外观宏伟，内部装饰精美，设有观景台，登顶后可俯瞰奥尔胡斯市区风貌与老城全景，开放时间为9:00-16:00，周六日闭馆，免费开放，适合喜欢建筑与城市风光的游客。</p>
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
                    <p>优先选择奥尔胡斯老城周边500米范围内的住宿，出行便利，可随时前往老城游览，部分住宿为老式红砖建筑改造，自带复古韵味，可沉浸式感受当地的历史氛围；老城周边多为特色民宿与精品酒店，距离核心景点近，步行可达老城入口、城市公园等景点；奥尔胡斯市中心距离老城约1公里，这里有更多连锁酒店与经济型酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。自驾出行的游客可选择带免费停车位的住宿，老城周边街道狭窄，停车不便，提前确认停车事宜。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品复古酒店：</strong>可选择位于老城周边的特色复古酒店，这类酒店多由17至19世纪的红砖建筑改造，装修融合了北欧简约元素与中世纪复古风格，部分设有露台、观景台，可欣赏老城全景或城市风光，服务周到，价格约100-180欧元/晚。</p>
                    
                    <p><strong>特色民宿：</strong>老城周边有很多小众民宿，装修简约清新，部分保留了丹麦传统建筑的特色，带有小庭院或阳台，房东多为当地人，可提供地道的出行建议，价格约60-120欧元/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约50-80欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约40-70欧元/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>奥尔胡斯旅游旺季为6-8月，此时气候凉爽，风光优美，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，老城周边街道停车费用较高（5-9欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住；老城周边部分住宿为老式红砖建筑，无电梯，预订时可确认是否有电梯，便于携带大件行李。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分小众民宿不提供一次性牙刷和牙膏，建议提前自备；老城周边多为石板路面，夜间照明较好，但部分小巷较为僻静，晚归时注意安全；住宿周边有很多当地特色餐厅，可品尝丹麦酥、曲奇、三文鱼等丹麦特色美食，部分餐厅提供户外座位，可边就餐边欣赏老城夜景；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>奥尔胡斯当地住宿整体价格适中，性价比高于丹麦首都哥本哈根，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和休闲路线，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，此时老城被白雪覆盖，红瓦与白雪相映成趣，呈现出独特的北欧冬日复古风光，适合喜欢静谧氛围与雪景风光的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="7月至8月全区开放且活动最丰富；11月下旬至12月圣诞集市氛围极佳" />
              <InfoRow label="建议时长" value="3-4小时" />
              <InfoRow label="注意事项" value="馆区面积较大且多为户外，雨天建议穿防水鞋并带伞；圣诞季门票需提前在线预订；园内有多家历史风格餐厅和咖啡馆可用餐休息" />
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