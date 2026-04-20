import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '祖特坎普Zoutkamp深度旅游攻略：荷兰静谧渔村的一日漫游与避坑指南',
  description: '探索荷兰格罗宁根的宝藏渔村祖特坎普（Zoutkamp）深度游攻略。揭秘彩色木屋、古老水闸与北海往事，这份自由行指南带你逃离人潮，捕捉油画般的夕阳。',
}

export default function ZoutkampPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '祖特坎普', href: '/attractions/zoutkamp' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`祖特坎普・Zoutkamp・荷兰・格罗宁根省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了阿姆斯特丹运河边的人声鼎沸，想找一处连时间都放慢了脚步的荷兰角落，那今天这份**祖特坎普私藏旅游攻略**，你可要收好了。它藏在格罗宁根省的北端，劳沃斯湖（Lauwersmeer）汇入北海的咽喉处。这里没有鼎沸的旅游团，只有风的声音、海鸥的鸣叫，以及一排排像被彩虹亲吻过的木制渔屋。作为你的专属向导，这份**Zoutkamp自由行指南**，就是要带你远离套路，走进一个关于盐、渔网与坚守的静谧故事里。你会感觉，自己不是游客，而是偶然闯入了某位荷兰画家未完成的、最温暖的那幅油画中央。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你厌倦了阿姆斯特丹运河边的人声鼎沸，想找一处连时间都放慢了脚步的荷兰角落，那今天这份<strong>祖特坎普私藏旅游攻略</strong>，你可要收好了。它藏在格罗宁根省的北端，劳沃斯湖（Lauwersmeer）汇入北海的咽喉处。这里没有鼎沸的旅游团，只有风的声音、海鸥的鸣叫，以及一排排像被彩虹亲吻过的木制渔屋。作为你的专属向导，这份<strong>Zoutkamp自由行指南</strong>，就是要带你远离套路，走进一个关于盐、渔网与坚守的静谧故事里。你会感觉，自己不是游客，而是偶然闯入了某位荷兰画家未完成的、最温暖的那幅油画中央。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`祖特坎普`} />
                <InfoRow label="英文名称" value={`Zoutkamp`} />
                <InfoRow label="正式名称" value={`Zoutkamp`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`格罗宁根省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看现在祖特坎普安静得像世外桃源，它的历史可一点也不平淡。它的名字“Zoutkamp”（盐之营地）就泄露了天机——这里曾是格罗宁根与弗里斯兰两个地区争夺的盐税征收前哨。更关键的是，在劳沃斯湖还是一片开阔海域（劳沃斯海）的年代，祖特坎普是重要的渔港和海军据点。19世纪，它为防御法国入侵而修建的堡垒遗迹，至今仍静静诉说着往事。真正改变它命运的是1969年，那道横跨劳沃斯海的拦海大坝合龙，汹涌的海湾变成了平静的湖泊，祖特坎普一夜之间从“沿海渔港”变成了“湖畔村庄”，轰轰烈烈的捕鱼时代逐渐落幕。因此，游览祖特坎普，你踩着的不仅是鹅卵石，更是一部微缩的荷兰治水史与渔业转型史，它从一个军事经济要地，化身为一段活态记忆的守护者，这种身份转变本身，就充满了历史的厚重感。`} />
                <InfoRow label="建筑特色" value={`祖特坎普的美，百分之七十要归功于它那些可爱到骨子里的木制渔屋。它们绝非整齐划一，而是像一群性格各异的老朋友，紧紧依偎在河道两旁。墙面是饱和度极高的宝蓝、砖红、鹅黄、草绿，历经风雨后，色彩沉淀出柔和的颗粒感，仿佛阳光都能在上面留下痕迹。仔细看，每块木板的纹理都清晰可辨，有些地方漆皮微微翘起，露出底下更深沉的木色，非但不显破败，反而增添了时光的勋章。屋顶是典型的荷兰样式，铺着深灰色的瓦片，许多屋脊上还保留着用来吊运货物的原始滑轮装置。这些房子的大门往往窄小，但窗户宽大，窗台上必定放着盛开的天空葵或郁金香，红艳艳的花朵与彩色的墙面撞色，充满了生机勃勃的烟火气。它们的倒影在水中被揉碎，随着波纹荡漾，真是一刻也看不够。`} />
                <InfoRow label="建筑风格" value={`这里的建筑谈不上恢弘的“主义”，却是最地道、最鲜活的**荷兰传统北部渔村风格**的教科书。它本质上是**实用主义**与**生活美学**的完美结合。结构上，是经典的木框架结构，轻盈、经济，适应湿润的土壤。其“风格”体现在几个方面：一是**高坡度屋顶**，利于快速排走雨水，阁楼空间大，历史上常用于风干渔网或储存物资。二是**鲜明的色彩编码**，这不仅仅是美观。在过去，颜色通常代表船只的归属或家族标识，是一种无声的行业语言。三是**面向水道的直接开口**，许多房屋底层曾直接作为鱼类的处理车间或仓库，方便从停靠的渔船上卸货。走在村里，你会看到建筑与水道、小桥、船只构成了一个有机整体，功能决定形式，形式又升华了生活，这就是祖特坎普建筑风格最迷人的地方——它的一切设计，都是为了曾经那段与海共舞的鲜活日子。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，祖特坎普不仅仅是一个地名，它是父辈的渔号、是童年空气里弥漫的咸腥气、是社区凝聚力的象征。当大型捕鱼业成为过去，小镇的文化价值反而在沉淀中愈发凸显。它成为了一个**活态的记忆博物馆**。老人们坐在长椅上，看着游艇取代了渔船，他们会向好奇的访客讲述“大坝合龙那天”的故事。每年的“渔夫节”依然热闹，人们庆祝的是一种身份认同。更重要的是，它为高速运转的现代社会提供了一种“可贵的停顿”。游客来到这里，学习的不再是“消费”，而是“观察”和“理解”：一种曾经的主流产业（渔业）如何优雅退场，转化为宁静的遗产；一个社区如何面对变迁而不失其魂。它教会人们欣赏平凡中的坚韧与色彩，这是一种深刻的情感与文化疗愈。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 祖特坎普一日游完美打卡路线攻略：从古老水闸到油画夕阳`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，我的专属路线向导上线！我们的**祖特坎普一日游**就从它的心脏——**老水闸（Oude Sluis）**开始。上午，先站在水闸桥上，看阳光如何唤醒彩色的房屋倒影。随后，沿着主河道 **“Kadedijk”** 向北慢慢溜达，右手是水，左手是五彩小屋，记得随时拐进小巷子探索惊喜。中午前，抵达**渔业博物馆（Visserijmuseum）**，在这里花上一个小时，让老渔船和老照片为你补上小镇的前世今生。午餐就在博物馆附近找家看得见水景的小餐馆，尝尝鲜。下午，穿过小镇，走向**劳沃斯湖方向**，那里视野开阔，风车、草甸、湖泊共谱一曲田园交响。傍晚，**请务必回到老水闸附近**，这是全天的高潮。找一家河畔咖啡馆的露天座位，或者就靠在桥栏上，看着夕阳的金辉将木屋、帆船和水面熔化成一片流动的暖金色，直到最后一缕光消失在天际。这才是完整的祖特坎普。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>老水闸的金属肌理与倒影</strong>：别只是匆匆走过那座老水闸。蹲下来，仔细看看那些巨大的、锈迹斑斑的闸门齿轮和轨道。铁锈呈现出丰富的红褐色层次，摸上去粗糙厚重，是力与时间凝结的雕塑。当水面平静时，闸门和旁边红色小屋的倒影会完美地复制在水面上，形成一幅上下对称的绝妙构图。偶尔一艘小船划过，倒影碎成万点金光，又缓缓聚拢，这个动态的过程充满了禅意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>一扇藏着故事的蓝色小门</strong>：在Kadedijk街道中段，留心一栋宝蓝色木屋的侧面，有一扇极其低矮的、纯白色的小门。它矮到成年人必须深深弯腰才能进入。这很可能不是正门，而是过去渔民直接通往自家小船停泊处或地下储藏室的“工作通道”。想象一下，百年前的清晨，一位渔夫弯腰钻出这扇门，手里提着渔网，带着一身寒气，开始一天的工作。这扇门是通往往日生活的秘密入口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>渔业博物馆里的“KW102”渔船</strong>：走进略显朴素的渔业博物馆，展厅中央那艘巨大的旧渔船会瞬间抓住你。凑近看，船身的木板拼接处，黑色的沥青填缝剂依然清晰；甲板上磨损的痕迹，记录着无数次收网、踩踏；驾驶舱里简单的仪表盘，诉说着没有GPS年代的航海智慧。站在它旁边，你几乎能听到引擎的轰鸣、闻到浓烈的鱼腥味，感受到在北海风浪中颠簸的艰辛。它是整个小镇灵魂的实体化身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>夕阳下的色彩魔法时刻</strong>：这并非一个固定的细节，而是一场每天上演的奇迹。当日落时分，西斜的阳光不再是刺眼的白色，而是变成浓郁的蜜糖色，它以极低的角度扫过整个村庄。这一刻，原本鲜明的房屋色彩仿佛被罩上了一层柔光滤镜，变得更加温暖、深沉且统一。橙色房子像在燃烧，蓝色房子泛着紫晕，玻璃窗则反射着最后的火红。整个村庄从明信片变成了古典油画，光影的戏剧在此达到顶峰。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>最佳时间与天气防御</strong>：祖特坎普的<strong>最佳游览时间</strong>是春末到初秋（5月-9月），此时日照长，花草繁盛。但请务必牢记，这里是荷兰北部，天气说变就变，<strong>防风外套</strong>是一年四季的标配！即使夏天，湖畔风也很大。想拍最美的彩色房子，<strong>晴朗的上午（顺光）和日落前两小时（黄金光线）</strong>是最佳摄影时段。真正的“避坑”在于别在阴雨大风天来，否则体验大打折扣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>完美避开“人潮”</strong>：这里所谓的“人潮”无法与大城市相比，但周末和夏季午后，荷兰本地家庭游客会增多。<strong>完美策略</strong>是：<strong>工作日来访</strong>，并在<strong>上午10点前</strong>抵达。此时小镇刚刚苏醒，街道安静，光影柔和，你能独享最美的河道景色。午餐后，本地游客增多时，你可以按我们的路线前往更开阔的湖边区域，完美错峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>交通与设施须知</strong>：祖特坎普没有火车站，<strong>最方便的方式是自驾</strong>。如果乘坐公共交通，需从格罗宁根市中央车站搭乘巴士（如线路309），班次有限，<strong>务必提前查好往返时刻表</strong>，以免长时间等待。小镇非常小，所有景点步行可达，无需任何交通工具。另外，这里不是商业中心，餐馆、厕所数量有限，博物馆等设施下午关门较早（常为17点），请合理安排。" }} />
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正沉浸，建议在<strong>格罗宁根市</strong>住宿，选择多且交通便利，坐巴士来祖特坎普一日游很轻松。但如果追求极致体验，祖特坎普本地及紧邻的<strong>劳沃斯奥宫（Lauwersoog）渔港</strong>有几家特色民宿，让你在游客散尽后，独享渔村的静谧星空。餐饮方面，一定要试试当地特色 <strong>“gerookte paling”（烟熏鳗鱼）</strong>。推荐去村里那家看起来不起眼但本地人络绎不绝的<strong>鱼铺或小餐厅</strong>，点一份现切的烟熏鳗鱼三明治，鱼肉油脂丰腴，带着果木熏烤的香气，口感细腻至极，是来自北海的顶级馈赠。坐在水边，就着美景享用，这才是地道的“深度游”体验。小镇咖啡馆的苹果派也通常水准很高，配一杯咖啡，就是完美的午后歇脚。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从祖特坎普出发，有两个方向不容错过：一是向北仅<strong>10分钟车程</strong>的<strong>劳沃斯奥宫（Lauwersoog）</strong>，这是一个仍在运作的现代渔港，可以看到大型渔船进出港，气氛更加粗犷鲜活，港口的海鲜餐厅能吃到最新捕捞上来的鱼。二是探索整个<strong>劳沃斯湖国家公园（Lauwersmeer National Park）</strong>，这里被誉为“荷兰的黑暗天空公园”，光污染极少。你可以租辆自行车，沿着湖岸骑行，进入广阔的芦苇荡和湿地，观测数以万计的候鸟（尤其是观鸟季节）。从热闹的渔村到寂静的自然保护区，这种对比强烈的体验，能让你的荷兰北部之旅层次更加丰富。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "祖特坎普就像一块被时光精心保存的琥珀，将北海的咸风、渔夫的号子、木屋的色彩，全都凝固在了拦海大坝合拢的那一瞬间。它告诉你，历史的转折不总是废墟与遗忘，也可以如此宁静、绚丽，且充满生活气。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/brandaris-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布兰达里斯灯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brandaris Lighthouse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hanseatic-old-town-deventer" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    代
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">代芬特尔汉萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Deventer Hanseatic Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schokland-island" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯霍克兰</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schokland</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
