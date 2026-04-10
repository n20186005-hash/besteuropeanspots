import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "卑尔根鱼市附近古建 (Bryggen Wharf)",
  description: "卑尔根鱼市附近古建详细游览指南 - 联合国教科文组织认定的世界文化遗产，挪威最具代表性的中世纪古建群之一",
  openGraph: {
    title: "卑尔根鱼市附近古建 — Bryggen Wharf",
    description: "卑尔根鱼市附近古建详细游览指南 - 联合国教科文组织认定的世界文化遗产",
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
        卑尔根鱼市附近古建
      </span>
    </nav>
  );
}

export default function BryggenWharfPage() {
  const color = "#4A90E2"; // Nordic color - blue for Norway/Nordic regions

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
                Historic Wharf
              </span>
              <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-primary">
                北欧
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              卑尔根鱼市附近古建
            </h1>
            <p className="text-lg text-white/80">
              Bryggen Wharf · 挪威 · 卑尔根
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              卑尔根鱼市附近古建即布吕根码头古建群，坐落于卑尔根市中心西海岸，紧邻著名的卑尔根鱼市，是联合国教科文组织认定的世界文化遗产，也是挪威最具代表性的中世纪古建群之一。古建以色彩绚丽的木质结构为主，呈狭长排列，融合了德国汉莎风格与挪威本土建筑特色，承载着卑尔根中世纪的商贸历史与民俗文化，是感受北欧古建魅力、体验市井烟火与历史底蕴的核心景点。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="古建群整体全天免费开放，可随时漫步游览；古建内的博物馆、民俗展馆等室内区域开放时间分季节调整，夏季（5月-9月）9:00-18:00，冬季（10月-次年4月）10:00-16:00，每周一闭馆（节假日除外，具体以现场公示为准）。建议游览时间为3-4小时，清晨可避开人流，感受古建与鱼市的静谧交融，傍晚可欣赏夕阳洒在彩色木屋上的绝美光影，沉浸式体验中世纪港口古建的独特氛围。" 
              />
              <InfoRow 
                label="门票价格" 
                value="古建群外部游览免费；汉萨博物馆（位于古建群内）成人120挪威克朗/人，学生、65岁以上老人凭有效证件半价（60挪威克朗/人），12岁以下儿童免费；布吕根斯博物馆成人100挪威克朗/人，学生及老人半价（50挪威克朗/人）；讲解服务（含英文、挪威文）150挪威克朗/人，可现场预约，支持现金、信用卡及移动支付，部分线上平台可提前购票，享受10-20挪威克朗优惠。" 
              />
              <InfoRow 
                label="详细地址" 
                value="古建群核心地址（Bryggen Wharf, 5003 Bergen, Norway），位于卑尔根市中心西海岸，紧邻卑尔根鱼市（Fisketorget），距离卑尔根市中心广场约800米，濒临卑尔根峡湾，周边环绕着休闲步道与海滨景观，配套有当地特色餐厅、手工艺品商店，出行便捷，步行即可抵达鱼市与周边核心景点。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达卑尔根机场（距离古建群约20公里），打车前往约30分钟，费用约300挪威克朗；也可从挪威首都奥斯陆乘坐火车直达卑尔根中央火车站，车程约7小时，票价约500挪威克朗，火车站距离古建群约1公里，步行15分钟即可抵达，也可乘坐当地1路、5路公交直达古建群入口，公交票价30挪威克朗/人。市内交通方面，卑尔根市区公交1路、5路、8路均可直达古建群周边；市区打车前往古建群，费用约80-120挪威克朗；古建群内部仅可步行游览，全程为鹅卵石路面，部分区域设有无障碍通道，方便老人及儿童出行。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                卑尔根鱼市附近古建（布吕根码头古建群）的历史渊源可追溯至公元14世纪，其发展与卑尔根的港口商贸、汉莎同盟的活动紧密相关。一千多年前，卑尔根便是在这一区域的基础上建立起来的，而布吕根作为港口码头，依托卑尔根峡湾的地理优势，逐渐成为北欧地区重要的商贸枢纽，也是汉莎同盟的海外四大总部之一。
              </p>
              <p>
                14至16世纪，汉莎同盟进入繁荣时期，这一由德国北部商人组成的商业和政治联盟，垄断了当时北欧地区的商业活动。由于挪威政府需要收入和外来商品，便积极扶持汉莎同盟，甚至授予其挪威北部鱼类贸易的独家经营权，布吕根的木质建筑也逐渐被汉莎商人接管，用于储存中转货物，尤其是来自挪威北部的鳕鱼干和来自欧洲各地的谷物，成为汉莎商人在北欧的重要据点，这一时期的布吕根也被称为"德国岸壁"（Tyskebryggen），形成了独特的汉莎文化聚居区。
              </p>
              <p>
                历史上，布吕根古建群历经多次火灾与重建，由于建筑多为木质结构，每50至100年便会遭遇一次大火，如今留存的古建多为18世纪重建后的模样，虽不复最初的原貌，但严格保留了中世纪的建筑格局与风格。这些建筑因建在港口有限的土地上，正面入口狭窄深长，紧密排列在街道两侧，由幽深狭长的巷道相隔，形成了独特的街巷风貌。
              </p>
              <p>
                1669年，汉莎同盟宣告解体，布吕根的商贸地位有所下降，但古建群得以保留，逐渐成为卑尔根市民生活与文化活动的重要区域。20世纪以来，挪威政府将布吕根古建群列为国家级历史遗迹，同时申报成为联合国教科文组织世界文化遗产，持续投入资金进行保护与修缮，严格遵循"修旧如旧"的原则，保留了木质建筑的原始风貌与街巷格局。
              </p>
              <p>
                如今，布吕根古建群不仅是卑尔根重要的历史文化载体，也是挪威最受欢迎的旅游景点之一，每年吸引约60万人前来参观。风化的木材和焦油的特殊气味赋予古建独特的氛围，走在鹅卵石铺就的街道上，仿佛能感受到几百年前汉莎商人往来的繁忙景象，古建与紧邻的卑尔根鱼市相映成趣，既有历史的厚重感，又有浓郁的市井烟火气，成为感受挪威中世纪历史、领略北欧古建风情的重要窗口。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                卑尔根鱼市附近古建（布吕根古建群）以狭长的木质街巷为脉络，核心区域分为古建风貌区、博物馆区、民俗体验区，紧邻卑尔根鱼市，景点布局紧凑，建筑特色鲜明，历史氛围与市井气息交融，建议安排3-4小时游览。以下为经典步行游览路线，可全面领略古建的建筑风貌、历史底蕴与鱼市烟火气，路线全程约1.2公里，节奏舒缓，兼顾打卡与体验感，同时可深入了解汉莎文化与挪威民俗。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：卑尔根鱼市（Fisketorget）</strong>（古建群入口旁，可先感受鱼市的热闹氛围，这里清晨5点便开始摆摊，能买到刚上岸的三文鱼、帝王蟹等新鲜海鲜，入口处有超过二十国语言的标识，充满国际化气息）</p>
                  
                  <p><strong>第一站：古建群入口</strong>（从鱼市步行2分钟可达，打卡标志性的彩色木质建筑，这些建筑漆以红黄蓝等高饱和颜色，锥形屋顶、瘦长窗户，极具德国汉莎风格，可拍摄古建全景，感受其独特的建筑风貌）</p>
                  
                  <p><strong>第二站：汉萨博物馆</strong>（从入口步行3分钟可达，设于古建群并排木屋的最前方，建于1702年，是市内最老的建筑物之一，曾是16世纪汉莎商人的仓库、住屋与办公室，馆内展示着与商业、文化和日常生活相关的物品，可深入了解汉莎同盟在卑尔根的历史）</p>
                  
                  <p><strong>第三站：布吕根斯博物馆</strong>（从汉萨博物馆步行4分钟可达，位于考古发掘现场，展示着12世纪的建筑遗址和各类历史展品，详细介绍布吕根古建群的发展历程与重建历史）</p>
                  
                  <p><strong>第四站：古建街巷</strong>（从博物馆步行5分钟可达，幽深狭长的巷道两侧，木质建筑紧密排列，门窗装饰精美，街巷内设有手工艺品商店与小众咖啡馆，可漫步街巷，感受中世纪的静谧氛围，挑选当地特色手工艺品）</p>
                  
                  <p><strong>第五站：布吕根观景台</strong>（从街巷步行6分钟可达，位于古建群高处，可俯瞰整个古建群、卑尔根鱼市与卑尔根峡湾的全景，感受山海与古建交融的绝美风光）</p>
                  
                  <p><strong>第六站：峡湾步道</strong>（从观景台步行8分钟可达，沿卑尔根峡湾蜿蜒，周边植被繁茂，设有休闲座椅，可漫步步道，欣赏峡湾的辽阔风光，感受海风的清新）</p>
                  
                  <p><strong>终点：古建群出口</strong>（周边有停车场与公交站点，可乘坐公交或打车前往市区，结束游览）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>古建群内多为鹅卵石路面，雨后易滑，建议穿舒适的步行鞋；古建内的博物馆禁止大声喧哗、随意触摸文物，禁止使用闪光灯拍照；夏季卑尔根气候凉爽，多阴雨天气，可携带薄外套与雨伞；冬季气温较低，多雪，路面可能结冰，注意防滑，可携带保暖衣物；旅游旺季（6-8月）游客较多，建议避开正午人流高峰，错峰游览；古建群内禁止吸烟，禁止携带易燃易爆物品，遵守景区相关规定；鱼市购物时可理性消费，品尝海鲜时可选择新鲜现做的品类，感受当地特色。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                卑尔根鱼市附近古建（布吕根古建群）以色彩绚丽的木质建筑为核心，融合了汉莎风格与挪威本土特色，彩色木屋、幽深巷道、峡湾风光与鱼市烟火气相映成趣，光影层次丰富，既有中世纪的古朴厚重，又有北欧的清新灵动，是拍照出片的绝佳之地。以下推荐几个经典拍照机位，涵盖全景、建筑细节、氛围大片等不同风格，无论是手机还是相机，都能拍出高质量照片，展现古建的独特魅力。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 古建群入口街角：</strong>这是拍摄古建全景的绝佳机位，站在街角，可捕捉到一排色彩鲜艳的木质建筑，红黄蓝等高饱和颜色相互映衬，锥形屋顶与瘦长窗户的细节清晰可见，背景可搭配卑尔根峡湾的海面，画面清新灵动，极具北欧风情。最佳拍摄时间为上午10:00-11:30，阳光斜照，可营造出柔和的光影效果，突出建筑的色彩与细节，避开鱼市的人流高峰。</p>
                    
                    <p><strong>2. 卑尔根鱼市旁：</strong>鱼市与古建群紧密相连，是拍摄人文与古建融合的绝佳机位。可以鱼市的海鲜摊位为前景，拍摄后方的彩色古建，鱼市的热闹烟火气与古建的静谧古朴形成鲜明对比，画面极具生活气息；也可在鱼市入口处，以多语言标识牌为前景，拍摄古建全景，凸显古建的国际化氛围。最佳拍摄时间为上午9:00-10:00，此时鱼市摊位齐全，人流适中，可捕捉到鲜活的市井画面。</p>
                    
                    <p><strong>3. 古建幽深巷道：</strong>古建群内的巷道狭窄幽深，两侧的木质建筑紧密排列，墙体上的纹理与斑驳痕迹记录着岁月的沧桑，是拍摄氛围感大片的绝佳机位。可选择巷道的拐角处，采用侧拍构图，捕捉巷道的延伸感与建筑的细节，搭配光影变化，营造出中世纪的神秘与静谧，适合拍摄复古风、氛围感照片，也可搭配简约服饰，提升画面的代入感。最佳拍摄时间为下午2:00-4:00，阳光透过巷道缝隙洒下，光影斑驳，画面极具感染力。</p>
                    
                    <p><strong>4. 布吕根观景台：</strong>这是拍摄古建群与峡湾全景的最佳机位，登顶观景台后，可360度俯瞰整个布吕根古建群、卑尔根鱼市与卑尔根峡湾，彩色木屋错落有致，峡湾海面波光粼粼，山海与古建完美融合，画面恢弘而有层次感。最佳拍摄时间为傍晚（17:00-18:00），夕阳洒在海面与古建上，镀上一层温暖的金色，画面极具诗意，建议携带广角镜头，捕捉全景美景。</p>
                    
                    <p><strong>5. 汉萨博物馆门前：</strong>汉萨博物馆作为古建群内最具代表性的建筑之一，门前的木质结构与装饰细节精美，是拍摄建筑细节的绝佳机位。可近距离拍摄博物馆的木质墙体、门窗装饰与屋顶旗帜，展现汉莎风格的建筑特色；也可坐在博物馆门前的石阶上，以博物馆为背景，拍摄人物与古建的同框照片，凸显古建的历史厚重感。最佳拍摄时间为上午11:00-12:00，阳光柔和，可清晰捕捉建筑的细节与纹理。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（9:00-10:00）和傍晚（17:00-18:00），光线柔和，光影层次丰富，且游客较少，便于拍摄；建议穿着纯色、简约风格的衣物，如白色、米色、浅蓝色，避免过于花哨，与古建的高饱和色彩形成对比，更出片；部分博物馆内部禁止拍照，需遵守景区规定，拍摄时避免影响其他游客；携带广角镜头拍摄全景，长焦镜头拍摄建筑细节与人文特写，效果更佳；若想拍摄复古风照片，可搭配长裙、针织外套等服饰，与古建的中世纪氛围更契合。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                卑尔根鱼市附近古建（布吕根古建群）位于卑尔根市中心西海岸，周边景点丰富，多以历史遗迹、艺术场馆与自然景观为主，紧邻卑尔根鱼市，游览完古建后，可根据自身时间安排前往，既能丰富行程，也能更全面地感受卑尔根的历史文化与自然之美。以下推荐几个距离古建群较近、值得一去的景点，均可通过步行或短途公交、打车抵达，出行十分便利。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 卑尔根鱼市（Fisketorget）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古建群约100米，步行2分钟即可抵达，是卑尔根最具代表性的市井景点，也是全欧洲知名的海鲜市场。这里每天清晨开始营业，摊主需保证每年280天以上的营业时间，可购买新鲜的三文鱼、帝王蟹、龙虾等海鲜，也可在小吃摊品尝现做的海鲜美食，感受浓郁的市井烟火气，免费开放，适合所有游客前往。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 罗森克兰茨塔（Rosenkrantz Tower）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古建群约800米，步行10分钟即可抵达，是挪威最重要的文艺复兴纪念碑之一，建于16世纪，曾是卑尔根的军事防御塔楼，如今作为历史遗迹对外开放。塔身高耸，外观宏伟，内部保留着中世纪的军事设施与历史展品，登顶后可俯瞰卑尔根市区、峡湾与古建群全景，开放时间为10:00-17:00，周三闭馆，成人门票80挪威克朗，学生及老人半价，适合喜欢历史遗迹与登高望远的游客。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. KODE艺术博物馆（KODE Art museums and Composer Homes）</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古建群约1.2公里，步行15分钟即可抵达，或乘坐1路公交直达，车程约5分钟，票价30挪威克朗。博物馆前身为卑尔根艺术博物馆，展览着从文艺复兴时期到当代的艺术作品，置身于市中心湖边的四座建筑中，分为四个展馆，藏品丰富，适合喜欢艺术文化的游客，开放时间为10:00-18:00，周四闭馆，成人门票150挪威克朗，学生及老人半价。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 卑尔根峡湾游船码头</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离古建群约500米，步行7分钟即可抵达，可乘坐游船沿卑尔根峡湾游览，欣赏峡湾的辽阔风光、沿岸的古建与自然景致，游船票价200挪威克朗/人，全程约1小时，夏季（5-9月）运营，适合喜欢自然景观与休闲体验的游客，沿途可欣赏到布吕根古建群的水上视角，感受不一样的古建魅力。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 卑尔根市政厅</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离古建群约1公里，步行12分钟即可抵达，建于20世纪初，采用新艺术风格建筑，外观宏伟，内部装饰精美，设有观景台，登顶后可俯瞰卑尔根市区风貌、古建群与峡湾风光，开放时间为9:00-16:00，周六日闭馆，免费开放，适合喜欢建筑与城市风光的游客。</p>
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
                    <p>优先选择布吕根古建群周边500米范围内的住宿，出行便利，可随时漫步古建街巷、前往鱼市，部分住宿为老式木质建筑改造，自带复古韵味，可沉浸式感受当地的历史氛围与市井气息；古建群周边多为特色民宿与精品酒店，距离核心景点近，步行可达鱼市、博物馆等景点；卑尔根市中心距离古建群约1公里，这里有更多连锁酒店与经济型酒店，设施齐全，交通便利，周边商圈发达，购物、就餐十分便捷，适合家庭出行或预算有限的游客。自驾出行的游客可选择带免费停车位的住宿，古建群周边街道狭窄，停车不便，提前确认停车事宜。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品复古酒店：</strong>可选择位于古建群周边的特色复古酒店，这类酒店多由17至18世纪的木质古建改造，装修融合了北欧简约元素与中世纪复古风格，部分设有露台、观景台，可欣赏古建全景或峡湾风光，服务周到，价格约1200-2000挪威克朗/晚。</p>
                    
                    <p><strong>特色民宿：</strong>古建群周边有很多小众民宿，装修简约清新，部分保留了挪威传统木质建筑的特色，带有小庭院或阳台，房东多为当地人，可提供地道的出行建议，价格约600-1200挪威克朗/晚；还有自助入住的公寓式民宿，设施齐全，适合家庭或多人出行，价格约500-800挪威克朗/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>市中心有多家性价比高的连锁酒店，设施标准化，干净整洁，价格约400-700挪威克朗/晚，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>卑尔根旅游旺季为6-8月，此时气候凉爽，风光优美，游客较多，住宿紧张，建议提前1个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，古建群周边街道停车费用较高（50-80挪威克朗/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住；古建群周边部分住宿为老式木质建筑，无电梯，预订时可确认是否有电梯，便于携带大件行李。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分小众民宿不提供一次性牙刷和牙膏，建议提前自备；古建群周边多为鹅卵石路面，夜间照明较好，但部分小巷较为僻静，晚归时注意安全；住宿周边有很多当地特色餐厅，可品尝三文鱼、帝王蟹、挪威传统肉汤等特色美食，部分餐厅提供户外座位，可边就餐边欣赏古建夜景与峡湾风光；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>卑尔根当地住宿整体价格偏高，提前预订可获得更优惠的价格；部分民宿房东为当地人，可主动向房东咨询当地小众景点、特色美食和休闲路线，获取更地道的游览体验。冬季（11-次年3月）为旅游淡季，住宿价格会有所下降，此时古建群被白雪覆盖，彩色木屋与白雪、峡湾相映成趣，呈现出独特的北欧冬日风光，适合喜欢静谧氛围与雪景风光的游客前往。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="5月至9月，日照充足且气候温和；6月夏至前后日照最长" />
              <InfoRow label="建议时长" value="3-4小时（含博物馆参观）" />
              <InfoRow label="注意事项" value="木质建筑区域严禁吸烟和明火；卑尔根多雨，即使夏季也建议携带防水外套；鱼市海鲜价格较高，可在周边餐厅寻找更实惠的选择" />
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