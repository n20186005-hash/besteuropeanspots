import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "考纳斯老城 (Kaunas Old Town)",
  description: "考纳斯老城详细游览指南 - 立陶宛现存最完整、规模最大的中世纪老城，波罗的海地区重要的历史文化地标",
  openGraph: {
    title: "考纳斯老城 — Kaunas Old Town",
    description: "考纳斯老城详细游览指南 - 立陶宛现存最完整、规模最大的中世纪老城",
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
        考纳斯老城
      </span>
    </nav>
  );
}

export default function KaunasOldTownPage() {
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
              考纳斯老城
            </h1>
            <p className="text-lg text-white/80">
              Kaunas Old Town · 立陶宛 · 考纳斯
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />

        <div className="mt-8">
          <Section number="1" title="景点简介">
            <p className="text-base leading-relaxed text-foreground/90">
              考纳斯老城坐落于立陶宛第二大城市考纳斯，地处涅里斯河与涅曼河交汇处，是立陶宛现存最完整、规模最大的中世纪老城，也是波罗的海地区重要的历史文化地标。老城以鹅卵石街巷为脉络，遍布哥特式、巴洛克式等多种风格的历史建筑，融合了千年历史底蕴与现代生活气息，漫步其中，仿佛能穿越时光，感受立陶宛的过往与当下，是体验当地人文风情的核心之地。
            </p>
          </Section>

          <Section number="2" title="基本信息">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow 
                label="开放时间" 
                value="考纳斯老城整体全天免费开放，无统一闭园时间，街区内的商铺、餐厅通常9:00-21:00营业；老城内部景点（教堂、博物馆、城堡等）开放时间各异，具体以现场公示或官方网站为准。" 
              />
              <InfoRow 
                label="门票价格" 
                value="老城街区本身无门票，免费对外开放；内部景点单独收费，考纳斯城堡成人2.5欧元，学生、老人1.2欧元；魔鬼博物馆成人3欧元，学生半价，9月1日-次年6月1日每周三免费；圣彼得和圣保罗大教堂免费开放，建议自愿捐赠；其他小型博物馆、教堂多为免费或低价（1-2欧元）。" 
              />
              <InfoRow 
                label="详细地址" 
                value="Kaunas Old Town, Kaunas 44239, Lithuania（核心区域围绕维尔纽斯街Vilniaus g.展开，地处涅里斯河与涅曼河交汇处，毗邻桑塔卡公园Santaka Park）。" 
              />
              <InfoRow 
                label="交通方式" 
                value="外部交通方面，可乘坐飞机抵达考纳斯国际机场，机场有大巴直达老城附近，车程约30分钟；乘坐火车可抵达考纳斯中央火车站，步行15-20分钟即可进入老城；立陶宛国内可乘坐长途大巴往返考纳斯与维尔纽斯等城市，大巴站距离老城约10分钟步行路程。市内交通方面，老城内部适合步行游览，街巷狭窄且多为步行街，禁止机动车通行；周边可乘坐2路复古电车、公交1、2、5等线路抵达老城入口，也可租用Voi共享滑板车便捷出行。" 
              />
            </div>
          </Section>

          <Section number="3" title="历史背景">
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                考纳斯老城的历史可追溯至公元10世纪，最初是作为军事要塞兴起于涅里斯河与涅曼河的交汇处，凭借得天独厚的地理位置，成为当时立陶宛东部重要的交通枢纽和军事据点。1317年，考纳斯正式获得城市地位，1408年获得自治宪章，此后逐渐发展成为立陶宛的政治、经济和文化中心，也是波罗的海地区重要的贸易中转站，频繁的贸易往来让老城融合了多种文化元素，建筑风格也逐渐丰富起来。
              </p>
              <p>
                中世纪时期，考纳斯老城是立陶宛抵御外敌的重要屏障，考纳斯城堡作为核心防御设施，见证了无数次战争与纷争，尤其是与条顿骑士团的多次交锋，城堡的高耸塔楼和深深沟堑，都是当时军事防御需求的直接体现。1569年，立陶宛与波兰合并后，考纳斯老城迎来了一段繁荣时期，贸易的兴盛带动了建筑、艺术的发展，大量哥特式、巴洛克式建筑拔地而起，包括圣彼得和圣保罗大教堂在内的诸多标志性建筑均建于这一时期。
              </p>
              <p>
                1795年，随着波兰第三次瓜分，考纳斯被并入俄罗斯帝国，老城的发展受到一定影响，1812年拿破仑大军入侵时，老城遭到严重破坏，许多历史建筑受损。19世纪后期，随着铁路的修建，考纳斯重新崛起，成为立陶宛重要的工业和商业中心，老城也逐渐恢复生机，部分受损建筑得到修复。1920年至1940年，考纳斯成为立陶宛的临时首都，这一时期，老城不仅是政治中心，更是立陶宛民族文化的聚集地，承载着民族复兴的希望，许多文化机构、博物馆在此设立。
              </p>
              <p>
                二战期间，考纳斯老城再次遭受重创，大量历史文物被损毁，建筑也受到不同程度的破坏。苏联统治时期，老城的部分建筑被改造，但其核心格局和主要历史建筑得以保留，成为立陶宛民族文化的重要载体。1990年立陶宛独立后，政府对考纳斯老城进行了大规模的修复和保护，严格遵循"修旧如旧"的原则，恢复了老城的中世纪风貌，如今，考纳斯老城已成为立陶宛重要的旅游胜地，吸引着来自世界各地的游客，每一座建筑、每一条街巷，都镌刻着立陶宛千年的历史记忆。
              </p>
            </div>
          </Section>

          <Section number="4" title="游览路线">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                考纳斯老城面积不大，核心区域直径约2公里，建议安排1天时间深度游览，以下为经典步行游览路线，可全面感受老城的历史底蕴与人文风情，路线全程约5公里，耗时6-7小时，中途可随时在街边餐厅、咖啡馆休息。
              </p>

              <div className="bg-surface rounded-lg p-5">
                <h3 className="text-lg font-semibold text-primary mb-4">经典步行游览路线</h3>
                <div className="space-y-3 text-sm text-foreground leading-relaxed">
                  <p><strong>起点：考纳斯中央火车站</strong>→步行15分钟抵达老城入口（维尔纽斯街起点）</p>
                  
                  <p><strong>第一站：考纳斯市政厅</strong>（俗称"白天鹅"，巴洛克式建筑，可参观内部陶艺博物馆，登顶塔楼俯瞰老城全景）</p>
                  
                  <p><strong>第二站：圣彼得和圣保罗大教堂</strong>（立陶宛最大的哥特式教堂，内部为文艺复兴巴洛克式装饰，感受宗教艺术的魅力）</p>
                  
                  <p><strong>第三站：维尔纽斯街漫步</strong>（老城主干道，鹅卵石铺路，两侧是色彩鲜艳的中世纪建筑，途经各类商铺、咖啡馆和小型博物馆）</p>
                  
                  <p><strong>第四站：考纳斯城堡</strong>（老城最古老的建筑，参观城堡博物馆，欣赏涅里斯河与涅曼河交汇处的风景，建议在城堡外围公园稍作休息）</p>
                  
                  <p><strong>第五站：桑塔卡公园</strong>（双河交汇处的休闲公园，可漫步河边，感受老城的自然之美）</p>
                  
                  <p><strong>第六站：魔鬼博物馆</strong>（世界上唯一以魔鬼为主题的博物馆，收藏了3000余件相关藏品，感受独特的民俗文化）</p>
                  
                  <p><strong>第七站：迈罗尼斯立陶宛文学博物馆</strong>（了解立陶宛文学发展史，感受当地文化底蕴）</p>
                  
                  <p><strong>终点：维陶塔斯大桥</strong>（老桥，感受"跨越13天"的历史趣闻，远眺老城全景）。</p>
                </div>
                
                <div className="mt-4 p-3 bg-primary-light rounded-lg">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>温馨提示：</strong>游览时可根据自身兴趣调整节奏，若喜欢安静，可在桑塔卡公园多停留片刻，欣赏双河交汇的静谧风光；若对历史文物感兴趣，可重点参观考纳斯城堡和魔鬼博物馆，建议提前查询各景点开放时间，避免错过参观机会。此外，老城街巷错综复杂，偶尔迷路也是一种惊喜，不经意间就能发现隐藏的小众建筑和特色商铺。
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section number="5" title="拍照机位">
            <div className="space-y-6">
              <p className="text-sm text-foreground leading-relaxed">
                考纳斯老城建筑风格多样，色彩丰富，街巷错落有致，是拍照出片的绝佳之地，以下推荐几个经典拍照机位，涵盖全景、建筑细节、人文风情等不同风格，无论是手机还是相机，都能拍出高质量照片。
              </p>

              <div className="grid gap-6">
                <div className="bg-surface rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">经典拍照机位</h3>
                  <div className="space-y-3 text-sm text-foreground leading-relaxed">
                    <p><strong>1. 考纳斯市政厅塔楼：</strong>这是拍摄老城全景的最佳机位，登顶塔楼后，可360度俯瞰老城的全貌，鹅卵石街巷纵横交错，彩色的中世纪建筑错落排列，远处的涅里斯河蜿蜒流淌，尤其是清晨或傍晚，光线柔和，能拍出老城的静谧与古朴，建议避开正午强光时段。</p>
                    
                    <p><strong>2. 考纳斯城堡护城河旁：</strong>城堡的红砖墙与护城河、周边的蒲公英草地构成了极具童话感的画面，蹲下用广角镜头拍摄，可突出城堡的雄伟与草地的柔美，搭配蓝天或晚霞，氛围感拉满；也可拍摄城堡塔楼的特写，捕捉建筑的细节纹理，展现中世纪军事建筑的厚重感。</p>
                    
                    <p><strong>3. 维尔纽斯街中段：</strong>作为老城的主干道，这里的鹅卵石街道、色彩鲜艳的巴洛克式建筑的是拍照的核心场景，可选择街道中间的位置，拍摄建筑的对称画面，或漫步时抓拍动态瞬间，搭配街边的鲜花、路灯，充满生活气息；也可拍摄建筑的门窗细节，雕花、彩绘等元素都极具特色。</p>
                    
                    <p><strong>4. 维陶塔斯大桥观景台：</strong>从大桥上可拍摄老城的侧景，远处的教堂尖顶、城堡塔楼与涅里斯河相映成趣，尤其是傍晚时分，夕阳洒在河面上，波光粼粼，老城建筑被镀上一层金边，氛围感十足；也可拍摄大桥本身，搭配"跨越13天"的历史背景，更具故事感。</p>
                    
                    <p><strong>5. Aleksotas索道观景台：</strong>乘坐索道上山后，这里是全考纳斯视线最好的观景台，坐南朝北，除正午外光线都很适宜，可拍摄老城的全景，左侧是密集的老城建筑，右侧是宽阔的涅曼河，建议早上去拍摄，光线柔和，还能捕捉到老城的晨雾，氛围感更佳。</p>
                    
                    <p><strong>6. 老城小众街巷：</strong>避开主街的人群，走进老城的小巷深处，狭窄的街巷、斑驳的墙壁、挂着鲜花的窗台，都是绝佳的拍照场景，可拍摄人文特写，或利用光影对比，拍出文艺感十足的照片；偶尔遇到当地居民散步、孩童玩耍，抓拍下来，更具生活气息。</p>
                  </div>
                </div>

                <div className="bg-primary-light rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-primary mb-3">拍照小贴士</h3>
                  <div className="space-y-2 text-sm text-foreground leading-relaxed">
                    <p><strong>最佳拍摄时间：</strong>最佳拍摄时间为清晨（9点前）和傍晚（17点后），光线柔和，避免正午强光；建议穿着纯色衣物，与彩色的建筑形成对比，更出片；尊重当地居民的生活，拍摄人文场景时尽量提前征得同意；部分教堂内部禁止拍照，需注意现场标识。</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="6" title="附近景点">
            <div className="space-y-4">
              <p className="text-sm text-foreground leading-relaxed">
                考纳斯老城周边景点丰富，距离较近，游览完老城后，可根据自身时间安排前往，既能丰富行程，也能更全面地了解考纳斯的历史文化与自然风光，以下推荐几个距离老城较近、值得一去的景点，均可通过步行或短途公交抵达。
              </p>

              <div className="grid gap-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">1. 帕塞斯利斯修道院</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约7公里，可乘坐公交5号转9号前往，是立陶宛最大的教堂修道院综合体，也是立陶宛最具代表性的意大利式巴洛克建筑，坐落在考纳斯水库岸边，建筑壮观，周边风景优美，修道院外的沙滩是当地居民周末度假的好去处，可融入当地，感受休闲氛围，开放时间为6月1日-9月1日周二至周五10:00-18:00，周六10:00-16:00；9月2日-次年5月31日周二至周五10:00-17:00，周六10:00-16:00，成人门票4欧元，学生、老人半价。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">2. 第九要塞</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约8公里，可乘坐公交23路、35路直达，是考纳斯最重要的爱国主义教育基地，曾是二战期间纳粹的死亡集中营，如今作为博物馆开放，展示了二战期间的历史遗物和受害者事迹，参观过程虽令人沉重，但能让人更深刻地理解立陶宛的历史，开放时间为4月至10月周一、周三至周日10:00-18:00，11月至3月周三至周日10:00-16:00，成人门票5立特，学生、老人3立特，7岁以下免费。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">3. 圣米迦勒总领天使教堂及寝陵</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">距离老城约1.5公里，可步行或乘坐公交抵达，是一座雄伟的新拜占庭风格教堂，由俄国沙皇亚历山大三世下令修建，教堂下方有地下陵墓，可向看守提出参观请求，教堂形象频繁出现在考纳斯的画册和明信片上，是打卡必去之地，弥撒时间为周一至周五12:00，周六10:00，周日10:00、12:00，免费开放，建议自愿捐赠。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">4. 桑塔卡公园</h4>
                  <p className="text-sm text-foreground leading-relaxed mb-2">紧邻老城，步行即可抵达，位于涅里斯河与涅曼河的交汇处，是考纳斯最古老的公园之一，园内植被茂盛，有蜿蜒的步道、雕塑和休息座椅，是游览老城间隙休闲放松的绝佳去处，可漫步河边，欣赏双河交汇的美景，感受自然与历史的融合，全天免费开放。</p>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">5. 考纳斯歌剧院</h4>
                  <p className="text-sm text-foreground leading-relaxed">距离老城约1公里，可步行抵达，是考纳斯中城区的标志性现代主义建筑，外观简洁大气，内部装修精致，若有时间，可观看一场歌剧或音乐会，感受当地的艺术氛围，具体演出时间和门票价格可查询官方网站。</p>
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
                    <p>优先选择老城内部或老城周边500米范围内的住宿，出行便利，可随时漫步老城，感受夜晚的老城氛围；老城内部多为特色民宿和小型精品酒店，建筑风格独特，充满中世纪气息，适合喜欢人文体验的游客；老城周边则有更多连锁酒店和大型公寓，性价比更高，适合家庭出行或预算有限的游客。需要注意的是，老城内部街巷狭窄，部分区域无法停车，若自驾出行，可选择带免费停车位的住宿。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">2. 住宿类型推荐</h4>
                    <p><strong>精品酒店：</strong>可选择位于老城核心区域的特色精品酒店，这类酒店通常拥有复古装修风格，配备特色设施，部分酒店顶楼设有露台，可欣赏老城建筑景观，装修精致且服务周到，价格约150-250欧元/晚，部分由历史建筑改造而成的精品酒店，还能感受到浓厚的中世纪与宗教氛围。</p>
                    
                    <p><strong>特色民宿：</strong>老城内部有很多由中世纪建筑改造的民宿，部分带有免费停车位，装修简约舒适，步行可达老城主要景点，价格约80-120欧元/晚；还有自助入住的Loft型公寓，多位于翻新的历史建筑内，安静舒适，周边5分钟步行范围内有商铺和餐厅，价格约60-100欧元/晚。</p>
                    
                    <p><strong>连锁酒店：</strong>老城周边有多家性价比高的连锁酒店，价格约50-80欧元/晚，设施齐全，适合预算有限的游客。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">3. 预订注意事项</h4>
                    <p>考纳斯旅游旺季为5-9月，尤其是7-8月，游客较多，住宿紧张，建议提前1-2个月预订，避免无房或价格上涨；预订时注意查看住宿的取消政策，尽量选择可免费取消的房源，以便灵活调整行程；若自驾出行，需提前确认住宿是否提供免费停车位，老城周边街道停车费用较高（12-30欧元/天），提前沟通可节省开支；部分民宿为自助入住，预订后会收到入住指南和密码，需提前查看，避免抵达后无法入住。</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">4. 其他注意事项</h4>
                    <p>住宿内部通常提供基本的洗漱用品，但部分民宿不提供一次性牙刷和牙膏，建议提前自备；考纳斯老城内部分住宿没有电梯，若携带大件行李，建议预订时有电梯的住宿；住宿周边多有餐厅和超市，购买生活用品和就餐便利，但夜间较为安静，需注意保持安静，避免影响他人；大部分住宿提供免费WiFi，预订时可确认WiFi信号情况，方便出行时查询信息；当地电压为230V，插头为Type F型，若需要，可提前准备转换插头。</p>
                  </div>

                  <div className="bg-primary-light p-3 rounded-lg mt-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      <strong>特别提示：</strong>考纳斯当地没有青年旅舍，住宿整体价格相对偏高，提前预订可获得更优惠的价格；部分住宿会提供当地旅游攻略和出行建议，可主动向房东或前台咨询，获取更地道的游览体验。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section number="8" title="实用小贴士">
            <div className="bg-surface rounded-lg p-5">
              <InfoRow label="最佳季节" value="5月至9月，夏季日照时间长且气候温和；每年6月举办考纳斯城市日庆典" />
              <InfoRow label="建议时长" value="半天至1天（核心区域步行游览约需6-7小时）" />
              <InfoRow label="注意事项" value="立陶宛使用欧元，消费水平在欧盟中偏低；冬季日照短且寒冷，需注意保暖；自由大道是老城延伸的步行购物街，适合傍晚散步" />
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