import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿玛苏斯古城深度旅游攻略：地中海畔失落的古希腊神话宝藏指南',
  description: '探索塞浦路斯利马索尔的阿玛苏斯（Amathus）古城遗址深度游攻略。揭秘海滨梯田神庙废墟，规划一日游路线与避坑指南，寻找爱神维纳斯传说中的圣地。',
}

export default function AmathusCyprusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '塞浦路斯', href: '/destinations/cyprus' },
            { label: '阿玛苏斯', href: '/attractions/amathus-cyprus' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿玛苏斯・Amathus・塞浦路斯・利马索尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，今天这份阿玛苏斯私藏旅游攻略，可能和你想象的古迹游览完全不同。这里没有拥挤的旅游团，没有过度修缮的崭新“古董”，只有你、猛烈的地中海阳光、永不停歇的海浪声，以及一片沿着陡峭山坡层层铺开、直接“生长”进碧蓝海水里的巨石废墟。作为你的专属向导，这份自由行指南请收好——阿玛苏斯不是一座“博物馆”，而是一次时空折叠的体验。站在那些被盐分和海风侵蚀了三千年的巨大石阶上，你会瞬间明白，为什么古希腊人相信爱神阿芙洛狄忒（维纳斯）曾青睐此地。今天，就让我们一起躲开利马索尔主海滩的人潮，钻进这片被橄榄树与野花包围的失落世界，进行一次真正的深度游。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，今天这份阿玛苏斯私藏旅游攻略，可能和你想象的古迹游览完全不同。这里没有拥挤的旅游团，没有过度修缮的崭新“古董”，只有你、猛烈的地中海阳光、永不停歇的海浪声，以及一片沿着陡峭山坡层层铺开、直接“生长”进碧蓝海水里的巨石废墟。作为你的专属向导，这份自由行指南请收好——阿玛苏斯不是一座“博物馆”，而是一次时空折叠的体验。站在那些被盐分和海风侵蚀了三千年的巨大石阶上，你会瞬间明白，为什么古希腊人相信爱神阿芙洛狄忒（维纳斯）曾青睐此地。今天，就让我们一起躲开利马索尔主海滩的人潮，钻进这片被橄榄树与野花包围的失落世界，进行一次真正的深度游。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿玛苏斯`} />
                <InfoRow label="英文名称" value={`Amathus`} />
                <InfoRow label="正式名称" value={`Amathus`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`利马索尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿玛苏斯在古希腊神话和真实历史中，都占据着一个极其独特且近乎传奇的地位。传说这里是爱神阿芙洛狄忒的圣地之一，也是她心爱的凡人情人、英俊猎人阿多尼斯的重要崇拜中心。在神话滤镜之下，是它作为塞浦路斯岛上最古老且曾经最强大的城邦之一的坚实历史。它的起源可以追溯到公元前1100年左右的铁器时代，由本土的塞浦路斯-希腊人建立，并迅速凭借其优良的港口和丰富的铜矿资源变得极其繁荣。在历史长河中，它先后被亚述、埃及、波斯和托勒密王朝统治，却始终保持着自己的文化和宗教特性。最有趣的是，当罗马人接管塞浦路斯时，阿玛苏斯曾激烈反抗，最终在公元前1世纪被罗马将军摧毁，其辉煌戛然而止。这种从神话巅峰到突然陨落的轨迹，赋予了它一种悲剧英雄般的史诗感，与其他平稳发展的古迹截然不同。`} />
                <InfoRow label="建筑特色" value={`想象一下，一座巨大的城市不是平铺开来，而是像瀑布一样，从高高的山顶倾泻向地中海。阿玛苏斯的建筑特色正是这种震撼的“梯田式”布局。最引人注目的是那些用本地石灰岩和大理石垒成的、巨大无比的平台和石阶。它们不是为了美观，而是为了在陡峭的山坡上创造出可用的平地，用于建造神庙、宫殿和市场。石材表面粗糙，泛着经年累月的象牙白和土黄色，裂缝中长满了顽强的刺山柑和野茴香。当你走近中央神庙区，会看到散落一地的多立克柱鼓和柱础，有些直径超过一米，静静地躺在那里，无声地诉说着当年建筑的宏伟尺度。阳光穿透这些残骸，投下错综复杂、不断移动的锐利阴影，而背景永远是那一抹无边无际的、蓝得令人心醉的地中海。`} />
                <InfoRow label="建筑风格" value={`阿玛苏斯遗址主要体现了经典的古希腊建筑风格，并带有强烈的塞浦路斯本土特色。核心是多立克柱式的广泛应用，你在废墟中看到的那些粗壮、简洁、没有柱基的柱鼓就是典型代表。这种风格在这里显得格外雄浑有力，与崎岖的海岸地形和开阔的海景形成了完美呼应。此外，你还能看到一些早期古典时期的建筑元素。通俗点说，这里的风格不像雅典卫城那样追求极致的优雅和谐，而是更粗犷、更实用，充满了海岛城邦的原始力量感。建筑布局严格遵循古希腊城市的规划思想：山顶（卫城）是宗教和政治中心，山坡是贵族居住区和重要公共建筑，靠近港口的下城是市场和平民区。这种层次分明的布局，本身就是一部立体的建筑教科书。`} />
                <InfoRow label="文化价值" value={`对于现代塞浦路斯人乃至全世界，阿玛苏斯的文化价值远远超出了一堆石头。它是民族记忆的根脉，是连接神话时代与现实的物理桥梁。在当地文化中，这里仍然是爱与美的象征地，吸引着不少新人来此附近拍摄婚纱照，延续着古老的浪漫传说。从更广的视角看，阿玛苏斯是研究古代地中海世界贸易、宗教融合和城市发展的关键考古遗址。它的兴衰是塞浦路斯复杂历史的缩影——这座岛屿一直是东西方文明的交汇点与争夺场。站在废墟上，你能真切感受到一种“逝去的伟大”，这种感受促使人们反思文明的生命周期、人与环境的关系，以及什么是永恒。它不提供简单的答案，只提供无尽的沉思空间，这本身就是一种强大的文化力量。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 阿玛苏斯一日游打卡路线攻略：从山顶卫城到海滨神庙的时空漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行深度游览路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的私人向导，我建议你这样玩转阿玛苏斯。上午（9:00-12:00）：从制高点开始。 一定要从位于山顶的入口进入，先游览卫城（Acropolis）区域。这里风大，视野无敌，可以俯瞰整个遗址和利马索尔海湾，先建立空间感。然后沿着清晰的主路向下，探索宫殿遗址和早期的城墙遗迹。上午的光线适合拍照，石头的纹理特别清晰。中午（12:00-13:30）：在神话中休息。 走到半山腰的中央神庙区，这里相对平坦，有很多阴凉处（自带水和零食，遗址内无商店）。坐在一块千年石头上，面对地中海午餐，想象当年祭祀阿芙洛狄忒的盛大场景。下午（13:30-16:00）：深入城市的“心脏”。 继续向下，探索下城区（Lower City）的民居废墟、古代港口的残留码头（现已在水下，但岸边痕迹可辨），以及庞大的公共建筑地基。最后，一定要去看那个著名的巨型石碗（原为神庙器物），它是阿玛苏斯的标志。全程慢逛加拍照，大约需要4-5小时，请穿一双绝对舒适的徒步鞋！`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  皇家宫殿的巨型柱础：在山顶卫城附近，留意那些孤零零矗立的巨大方形石基。它们是宫殿门廊柱子的基础。把手放上去，感受石头的冰凉和粗糙的质感。试着想象一根需要如此庞然基座的多立克石柱该有多么宏伟，而支撑它的整座宫殿又是何等的威严。阳光在这里移动得很快，柱础的阴影在荒草中拉长又缩短，仿佛在为你演示千年的时光流逝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  中央神庙的仪式石阶：通往主神庙的宽阔石阶保存得相对完好。别急着走上去，先站在底部仰望。石阶的尺度非为凡人设计，而是为了营造走向神祇的崇高感。台阶表面被无数古代信徒的脚步磨得微微发亮，缝隙里开着小小的黄花。试着一步一步慢慢向上走，海风从背后吹来，那一刻，你不再是游客，仿佛能听见身后虚拟人群的喧嚣与祭祀的乐声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  下城区的民居“切片”：在下城区，你会看到一些用矮墙标示出的方形或矩形地基，那是普通市民的家。其中一个区域，考古学家清晰地揭示了不同时期的地面层。蹲下来看，你能分辨出不同颜色和质地的土层，就像一块巨大的历史千层蛋糕。最动人的是墙角一个可能是灶台遗迹的小石圈，瞬间把宏大的历史拉回到炊烟袅袅的日常生活画面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  标志性的巨型石灰岩石碗：这是阿玛苏斯的“明星文物”（原物在博物馆，此处为复制品）。它庞大得超乎想象，直径约两米，由整块石头雕成。表面刻有古老的铭文。试着环绕它走一圈，触摸其边缘。它最初用于宗教仪式，可能是盛放祭品或圣水。它的存在直观地告诉你，这座城市的宗教活动规模是何等惊人，其工艺水平又是如何高超。`}</p>
            </div>
          </Section>

          <Section title={`5. 阿玛苏斯自由行避坑指南与行前重要须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  防晒与补水是头等大事：这不是普通的城市公园！阿玛苏斯遗址几乎没有树木遮荫，完全暴露在地中海烈日下。务必涂抹高倍数防晒霜，戴宽檐帽和太阳镜。随身携带至少1升水，因为遗址内没有任何售卖点。最佳游览季节是春季（4-5月）和秋季（9-10月），夏季请务必在清晨或傍晚前往，避开正午酷热。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备：舒适胜过美观：地面是原始的土路、碎石和不平整的石基。绝对不要穿凉鞋、拖鞋或高跟鞋！强烈推荐穿抓地力好的徒步鞋或运动鞋。衣服也以轻便、透气、便于活动的为宜。带一个轻便的双肩包解放双手，方便攀爬和拍照。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  避开人流与规划交通：这里本身就算小众，但偶尔会有学校团体或邮轮客。尽量工作日早上前往，体验最佳。遗址位于利马索尔以东约11公里，公共交通不便，班次很少。最可靠的方式是自驾（有停车场）或乘坐出租车（与司机商量好回程接送时间）。使用谷歌地图定位“Amathus Archaeological Site”即可准确到达。`}</p>
            </div>
          </Section>

          <Section title={`6. 阿玛苏斯周边住宿与利马索尔美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`遗址本身周围是安静的沿海道路和少量高端酒店。对于自由行者，我强烈建议以利马索尔老港（Old Port）或市中心为住宿基地。那里选择丰富，从设计酒店到温馨民宿都有，生活设施便利，晚上可以逛老街，感受现代塞浦路斯的活力。餐饮方面，一定要在利马索尔品尝海鲜。推荐去老港附近的传统酒馆（Taverna），比如“港口鱼市”周边的餐馆。点一份烤章鱼（Grilled Octopus），搭配当地特色的“哈罗米”奶酪沙拉和一杯塞浦路斯咖啡。如果参观完遗址想就近解决，可以开车5分钟到附近的Potamos Yermasoyias小河口区域，那里有几家不错的、当地人光顾的海景餐厅，能吃到新鲜的鱼汤和炸小鱼拼盘。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从阿玛苏斯沿海岸线向东驱车约15分钟，就能到达另一个重磅考古遗址——库里翁（Kourion）。如果说阿玛苏斯是荒凉壮美的史诗，库里翁就是精致恢弘的戏剧。它的古希腊罗马剧场完好地坐落在悬崖之上，面朝大海，至今仍在使用。你还可以看到装饰着精美马赛克的尤斯托利奥斯之家和早期的基督教巴西利卡。将阿玛苏斯与库里翁安排在连续的两天或一天内（如果体力充沛）参观，会形成强烈的对比和补充，让你对塞浦路斯古代文明的不同侧面有一个立体的、震撼的理解。这绝对是深度游玩家的首选延伸路线。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿玛苏斯的灵魂，就镌刻在海风与时光的对决之中。它教会我们的不是征服，而是接纳——接纳辉煌终会归于静默，而静默之中，海依然在拍打，阳光依然在雕刻，野花依然在每个春天，从古老的石缝里倔强地探出头来。这是一首用石头写成的、关于“存在”本身的诗。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kolossi-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科洛西城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kolossi Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/famagusta-walled-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法马古斯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Famagusta</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/choirokoitia-neolithic-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乔伊鲁科蒂亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Choirokoitia</p>
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
