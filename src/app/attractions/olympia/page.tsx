import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥林匹亚旅游攻略：古代奥林匹克运动会发源地深度自由行指南',
  description: '探索希腊Olympia深度游攻略：在松林与神庙遗迹间，寻找古代奥林匹克运动会的精神源头与实用旅行贴士。',
}

export default function OlympiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '奥林匹亚', href: '/attractions/olympia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥林匹亚・Olympia・希腊・西希腊大区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：脚下是粗糙的沙土跑道，四周环绕着起伏的绿色山丘，空气里弥漫着松脂和干草的清香，而你的眼前，是断壁残垣勾勒出的、跨越了两千多年的神圣轮廓。这里就是奥林匹亚，一切开始的地方。今天这份奥林匹亚私藏旅游攻略，就带你躲开人潮与炙热，像穿越时空的朝圣者一样，去触摸那根植于人类基因中对力量、美与和平的渴望。它不仅仅是一堆石头，这是一份活着的“自由行指南”，带你走进一段关于荣耀、信仰与人类共同梦想的故事。准备好了吗？我们出发。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下：脚下是粗糙的沙土跑道，四周环绕着起伏的绿色山丘，空气里弥漫着松脂和干草的清香，而你的眼前，是断壁残垣勾勒出的、跨越了两千多年的神圣轮廓。这里就是奥林匹亚，一切开始的地方。今天这份奥林匹亚私藏旅游攻略，就带你躲开人潮与炙热，像穿越时空的朝圣者一样，去触摸那根植于人类基因中对力量、美与和平的渴望。它不仅仅是一堆石头，这是一份活着的“自由行指南”，带你走进一段关于荣耀、信仰与人类共同梦想的故事。准备好了吗？我们出发。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥林匹亚`} />
                <InfoRow label="英文名称" value={`Olympia`} />
                <InfoRow label="正式名称" value={`Olympia`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`西希腊大区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`如果说有一个地方能被称为古希腊，乃至整个西方体育与精神世界的“子宫”，那一定是奥林匹亚。从公元前776年有记载的第一届古代奥运会开始，这片位于伯罗奔尼撒半岛西部的圣地，在长达一千多年的时间里，每四年一次，让整个希腊世界放下兵戈，实行“神圣休战”。各城邦的运动员与观众跋山涉水汇聚于此，进行赤身裸体的竞技，荣誉高于一切，胜者只有一顶橄榄枝编成的头冠。它远不止是运动会，它是希腊宗教（主要崇拜宙斯）、政治外交、文化艺术与体育的最高盛会。在这里，哲学家辩论，诗人朗诵，艺术家展示作品，它成为了泛希腊主义的象征，是凝聚分散城邦的文化粘合剂。直到公元393年，罗马皇帝狄奥多西一世以异教活动为由将其废止，辉煌才逐渐湮没在洪水和淤泥之下。它的历史地位，在于它定义了一种超越战争、追求卓越（Arete）的普世理想，这理想穿越尘封岁月，直接点燃了1896年现代奥运会的圣火。`} />
                <InfoRow label="建筑特色" value={`踏入遗址区，首先征服感官的不是某座完好的建筑，而是一种宏大的、被时间精心解构的“废墟美学”。巨大的多利克式石柱或横躺在地，如同巨人的肋骨，或孤独矗立，顶着湛蓝的天空。阳光穿过石缝，在长满野花的草地上投下锐利的光影。宙斯神庙的基座规模惊人，你能想象当年它曾容纳那座用黄金象牙制成的、世界七大奇迹之一的宙斯神像。如今，只有散落的鼓状柱段，表面被风雨打磨得光滑，石头的肌理在午后呈现出蜂蜜般的暖黄色。赫拉神庙是遗址中最古老的神庙之一，它的柱子风格不一，清晰地展示了从木质到石质的过渡痕迹。走近了，你会看到石头上细微的凿痕，那是古代石匠留下的永恒签名。体育场入口的拱门低矮而原始，提醒你即将进入最核心的圣地。整个遗址与自然浑然一体，松树从废墟中生长出来，蜥蜴在滚烫的石头上倏忽而过，那种粗糙、原始、充满力量感的材质与色彩，构成了最动人的风景。`} />
                <InfoRow label="建筑风格" value={`奥林匹亚的建筑是古典时期多利克风格的典范，尤其在鼎盛的公元前5世纪。这种风格怎么理解呢？你可以把它想象成一位古希腊的男性运动员：简洁、雄浑、有力，充满阳刚之美，没有丝毫多余的装饰。在多利克式神庙上，你看不到后来科林斯式那种华丽卷曲的柱头。它的柱头就是一个简单的圆盘（顶板）和方石（柱冠），柱子直接立在基座上，没有柱础，显得特别稳重有力。柱身通常有20条尖锐的纵向凹槽，在希腊强烈的阳光下，能产生鲜明而富有节奏感的光影效果，就像运动员紧绷的肌肉线条。山形墙（屋顶三角区域）上则布满了精美的大理石浮雕，讲述神话故事，比如宙斯神庙西山墙上刻着拉庇泰人与半人马怪兽战斗的场景，象征着文明对野蛮的征服——这本身就是奥运精神的隐喻。在这里，建筑风格与功能完美统一：为供奉至高神宙斯和举办神圣竞技，需要的就是这种庄重、威严、纪念性的形式。`} />
                <InfoRow label="文化价值" value={`奥林匹亚的文化价值早已超越了地理界限，成为一种全球性的精神符号。对现代社会而言，它首先是现代奥林匹克精神的物理源头与灵感基石。“更快、更高、更强——更团结”的口号，以及通过体育促进世界和平的理想，直接根植于此。每届现代奥运会前，圣火都在赫拉神庙前的仪式台，用凹面镜聚焦阳光采集，这一仪式将古今神圣地连接起来。对希腊人来说，这里更是民族自豪感的支柱。它代表着希腊文明最辉煌、最富创造力的黄金时代，是向世界输出“希腊性”的核心场所。即便在今天，当地的孩子仍会在学校学习这段历史，游客的到来也让这片相对宁静的地区保持着活力。更重要的是，它持续地向全人类提问：在竞争日益激烈的现代社会，我们能否像古希腊人一样，在追求胜利的同时，保持对规则（Nomos）的敬畏、对对手的尊重，并最终将竞赛升华为一种对共同人性与和平的庆典？奥林匹亚的石头沉默不语，但提出的问题却振聋发聩。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 奥林匹亚一日游打卡路线攻略：穿越千年的朝圣之旅`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线：从博物馆到赛场的完整体验`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份自由行指南请收好！我们的目标是用一天时间，不疾不徐地完成这场深度游。上午（9:00-12:30）：从故事开始。 强烈建议你先去奥林匹亚考古博物馆（就在遗址对面）。别急着看石头，先看珍宝！这里收藏了从遗址出土的顶级文物，尤其是宙斯神庙山墙上的雕塑和普拉克西特列斯创作的《赫尔墨斯与小酒神》雕像。在空调房里了解背景故事，你等会儿看废墟会“看见”完全不同的东西。中午（12:30-14:00）： 在博物馆旁或现代奥林匹亚小镇找家小餐馆，享受希腊沙拉、穆萨卡和冰咖啡，为下午的徒步储备能量。下午（14:00-17:30）：沉浸式遗址漫步。 从遗址主入口进入，按逆时针方向：先参观体育馆和摔跤场，想象运动员在此训练；然后走向核心区，瞻仰巨大的宙斯神庙遗址和更古老的赫拉神庙（圣火采集处）；接着穿过那个低矮的拱门，进入激动人心的古代体育场，一定要在起跑线上站一站，跑一跑！最后参观工作坊（包括菲迪亚斯曾制作宙斯神像的地方）和浴场。傍晚的光线最适合拍照，金色的阳光会让废墟变得无比温柔。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  赫尔墨斯那抹神秘的微笑（考古博物馆内）： 在博物馆静谧的展厅里，你会与普拉克西特列斯的《赫尔墨斯与小酒神》面对面。抛开艺术史术语，仔细看赫尔墨斯的脸。他的微笑不同于后来蒙娜丽莎的含蓄，而是一种介于慵懒、戏谑与神性之间的微妙表情。他身体呈经典的S形曲线，肌肉平滑如流水，怀抱中的小酒神伸手去够他可能原本举着的葡萄（部分已缺失）。大理石仿佛有了体温和弹性，你会瞬间理解什么是“希腊艺术的黄金时代”。这个细节，是连接神话美学与人间情感的桥梁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  宙斯神庙的“倒塌巨柱”： 在遗址现场，找一根横躺在地的宙斯神庙柱身（鼓形石）。蹲下来，用手触摸它表面的纵向凹槽。这些凹槽在制作时需要极高的精准度，才能让每一段鼓形石完美对接。想象一下，一根完整的柱子需要十几段这样的巨石垒成，高达10米以上。而如今，它像被推倒的多米诺骨牌，静静地躺在草地上，周围野花盛开。这个细节充满了史诗般的悲剧美感与时间的绝对力量，是拍照和冥想的绝佳地点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  古代体育场的起跑线： 走进体育场，你会看到两端各有一条长长的石条，上面有凹槽，这就是起跑线！运动员不是蹲踞式起跑，而是直立着，脚趾抵在凹槽里。站上其中一条，望向另一端的终点（距离约192米，一个“斯塔德”）。此刻，松风掠过耳畔，仿佛能听到两千年前观众山呼海啸般的呐喊。试着跑几步吧，脚下的沙土依然坚硬，这个简单的动作能让你完成与古代运动员最直接、最身体的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  赫拉神庙前的圣火坛： 在赫拉神庙遗址前，有一片不起眼的圆形区域，用现代石材标识出来。这就是现代奥运会圣火采集仪式的举办地。无论你是否在仪式期间到来，站在这里，想象一下身着白衣的女祭司，用凹面镜聚集阳光点燃火炬的场景。这个细节将古代的祭祀火焰与现代的全球盛典紧密相连，是奥林匹亚精神生生不息的最生动证明。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间与气候是王道： 最佳游览时间是春季（4-5月）和秋季（9-10月），天气温和，花草繁茂，游客相对较少。绝对要避开7-8月盛夏，中午遗址毫无遮阴，地表温度可达40℃以上，体验极差。尽量在早上开门或下午三四点后进入遗址，光线美且避开一团团的旅行团大巴。作为你的避坑指南，必须强调：早到或晚到，是获得宁静体验的关键。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  着装与装备“实用至上”： 穿绝对舒适、防滑的步行鞋！遗址内全是凹凸不平的土路、碎石和草地，高跟鞋或凉鞋是自讨苦吃。戴宽檐帽、太阳镜，涂抹高倍数防晒霜。带足饮用水，遗址内只有入口处有售。一个小背包比手提袋方便得多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  组合购票与避开人流： 购买遗址与考古博物馆的联票更划算。抵达后，如果看到停车场大巴云集，果断先去博物馆，等大队人马进入遗址后再过去，完美错峰。参观遗址时，大部分人会直奔体育场，你可以反其道而行之，先看西面的健身房和浴场区域，享受片刻清净。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  交通与住宿贴士： 如果自由行，从雅典乘火车或巴士到皮尔戈斯（Pyrgos），再转当地巴士前往奥林匹亚，班次有限，务必提前查好时刻表。自驾是最方便的选择。住宿不必非要住在现代奥林匹亚小镇，它比较旅游化。可以考虑周边更安静的村庄民宿，体验更地道的希腊乡村夜晚，仰望无比清澈的星空。`}</p>
            </div>
          </Section>

          <Section title={`6. 奥林匹亚周边住宿与美食攻略：沉浸在历史与田园之间`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`现代奥林匹亚小镇（与遗址相隔约1公里）是主要的服务区，餐厅和旅馆集中。想体验更地道的氛围，推荐去稍远一点的Archea Olympia（古奥林匹亚村）或周边的乡村民宿。美食方面，一定要试试当地的“奥林匹亚烤肉”，用本地草药腌制的羊肉或猪肉，风味独特。镇上的Taverna “To Mouragio” 或 “Aegean” 都是口碑不错的选择，坐在户外的葡萄藤架下，品尝新鲜的烤鱼、羊乳酪（Feta）和用附近庄园产的橄榄油调制的沙拉，惬意十足。住宿推荐“Olympia Palace Hotel”，它拥有一个俯瞰山谷绿地的漂亮泳池，或者在Booking上找一家评分高的家庭式民宿（Pension），主人通常会热情地为你提供地图和内部攻略，并端上自制的果酱早餐。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间充裕，强烈建议你用半天时间探索这两个小众景点：`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  Foloi森林（Foloï Oak Forest）： 驾车约30分钟。这是欧洲现存最大的低地橡树林之一，传说中是半人马兽的家园。林中有标记清晰的徒步小径，参天古树郁郁葱葱，空气清新得醉人，与遗址的苍茫感形成奇妙互补。这里是当地人周末野餐的秘密花园，绝对的小众景点推荐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  Kaiafas湖与温泉： 驾车约40分钟。这是一个由泻湖形成的美丽湖泊，湖边有天然的硫磺温泉从沙滩流入海中。你可以先在温暖的淡水湖中游泳，再去泡泡免费的露天温泉（设施简陋但自然野趣），最后在地中海里畅游一番。这种“历史-森林-海洋”的三重奏，能让你的伯罗奔尼撒之旅丰富到极致。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥林匹亚的灵魂，不在于它曾有多么辉煌的建筑，而在于它作为一个“理念”的容器，历经千年，从未干涸。当你离开时，带走的不是几张废墟的照片，而是一种清晰的回响：在那条简单的起跑线上，人类第一次有组织地、神圣地庆祝自身的速度、力量与美，并试图用这种庆典来替代战争。这里的每一缕松风，每一块温热的石头，都在低语着一个古老的梦想——对卓越的追求，可以，也应该成为连接全人类的纽带。这，才是我们穿越千里，来此寻找的真正宝藏。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/epidaurus-ancient-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Epidaurus Theatre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔塔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arta</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora-monasteries-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅黛奥拉（天空之城修道院）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
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
