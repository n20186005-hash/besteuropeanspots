import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗日姆贝尔克城堡深度旅游攻略：探索白衣贵妇传说的河湾要塞',
  description: '探索捷克Rožmberk Castle罗日姆贝尔克城堡的深度游攻略，揭秘伏尔塔瓦河畔的“白衣贵妇”幽灵传说，提供完整的门票、交通与一日游路线指南。',
}

export default function RozmberkCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗日姆贝尔克城堡', href: '/attractions/rozmberk-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗日姆贝尔克城堡・Rožmberk Castle・捷克・南波希米亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你正计划一场逃离布拉格人潮的南波希米亚之旅，那今天这份 罗日姆贝尔克城堡私藏旅游攻略 ，你一定要收好。想象一下：伏尔塔瓦河在这里温柔地拐了一个大弯，一座灰白色的古老城堡就矗立在陡峭的山岩上，像是从童话书里直接搬出来的场景。这里没有克鲁姆洛夫那么汹涌的人流，却有着更浓烈的中世纪神秘感和一段家喻户晓的“白衣贵妇”幽灵传说。作为你的专属向导，这份 自由行指南 将带你穿过吊桥，走进布满铠甲和古老壁画的房间，告诉你什么时候来能拍到最美的河湾城堡倒影，以及如何避开那些旅游团的小坑。准备好了吗？我们这就出发，去揭开这座河湾要塞的面纱。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你正计划一场逃离布拉格人潮的南波希米亚之旅，那今天这份 罗日姆贝尔克城堡私藏旅游攻略 ，你一定要收好。想象一下：伏尔塔瓦河在这里温柔地拐了一个大弯，一座灰白色的古老城堡就矗立在陡峭的山岩上，像是从童话书里直接搬出来的场景。这里没有克鲁姆洛夫那么汹涌的人流，却有着更浓烈的中世纪神秘感和一段家喻户晓的“白衣贵妇”幽灵传说。作为你的专属向导，这份 自由行指南 将带你穿过吊桥，走进布满铠甲和古老壁画的房间，告诉你什么时候来能拍到最美的河湾城堡倒影，以及如何避开那些旅游团的小坑。准备好了吗？我们这就出发，去揭开这座河湾要塞的面纱。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗日姆贝尔克城堡`} />
                <InfoRow label="英文名称" value={`Rožmberk Castle`} />
                <InfoRow label="正式名称" value={`Rožmberk Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南波希米亚州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`罗日姆贝尔克城堡可不是一座简单的风景城堡，它在捷克，乃至中欧历史上都扮演着举足轻重的角色。它建于13世纪上半叶，是强大的罗森伯格家族最早和最重要的据点之一。这个家族堪称波希米亚的“无冕之王”，在数百年间影响着整个地区的政治与经济。城堡扼守着伏尔塔瓦河上游的重要贸易与军事路线，是南波希米亚边境防御体系的关键一环。在胡斯战争期间，它曾是坚固的天主教保皇派堡垒。后来，城堡几经易手，包括著名的哈布斯堡王朝将军华伦斯坦也曾是它的主人。更传奇的是，它曾作为监狱关押过一些“特殊人物”，比如17世纪反抗哈布斯堡统治的捷克贵族领袖。可以说，城堡的石头里垒砌的不仅是建筑，更是波希米亚数百年权力博弈与沧桑变迁的史诗。它的存在，是理解南波希米亚为何如此独特的一把历史钥匙。`} />
                <InfoRow label="建筑特色" value={`走近城堡，第一眼就会被它的两种色调所吸引：下部较老的“上城堡”遗址是粗犷的深灰色石材，而后来重建的“下城堡”主体则是文艺复兴时期增添的温暖浅米色，像奶油和巧克力的层叠。城堡完美地依附着岩石地形，塔楼和高墙的轮廓线崎岖而有力。最标志性的就是那座高高的圆柱形塔楼——“雅各布卡塔”，它挺拔地刺向天空，是远处辨认城堡的最佳坐标。建筑的窗户狭长，带有明显的早期哥特式尖拱特征，而某些后期加建的部分，窗框上则有精致的石刻花纹。墙壁厚实得惊人，你用手触摸，能感到岩石的冰冷与粗砺。当阳光斜照时，浅色的墙面会被染成蜜糖般的金色，与脚下墨绿色的伏尔塔瓦河水和远山形成一幅层次分明的油画。`} />
                <InfoRow label="建筑风格" value={`罗日姆贝尔克城堡是 早期哥特式 与后期 文艺复兴风格 融合的典范。早期的哥特式风格体现在它的核心防御结构上：看看那些高耸、厚重的墙壁，狭窄的射击孔，以及尖锐的拱门和肋状拱顶（尤其是在城堡的小礼拜堂里），这种风格追求垂直向上的线条和坚固的防御性，充满了中世纪冷峻的军事美学。而16世纪改造增建的部分，则带来了文艺复兴的春风。这体现在内部庭院优雅的连拱廊上，那些弧形拱门和规整的立柱，以及室内装饰开始出现更多关于人文、神话的壁画和浮雕，而不仅仅是宗教主题。例如，骑士大厅的木质天花板和墙面的装饰，就显露出对古典对称与和谐之美的追求。这种风格的融合，生动地记录了城堡从单纯的军事堡垒向更宜居的贵族宅邸转变的历史过程。`} />
                <InfoRow label="文化价值" value={`对于捷克人，尤其是南波希米亚人而言，罗日姆贝尔克城堡远不止是一个旅游景点。它是地方身份认同的重要象征。“白衣贵妇”佩尔赫塔·罗森伯格的故事，经过几个世纪的口耳相传和文学艺术加工，已经成为捷克国民级传说的一部分。这个善良却因政治婚姻而悲剧一生的女性幽灵形象，被赋予了守护家族、预示吉凶的象征意义，甚至出现在许多电影、戏剧和儿童读物中。城堡本身也是捷克民族遗产保护的里程碑。在20世纪经过精心的修复，它向公众开放，展示了从中世纪到19世纪浪漫主义时期的生活风貌和艺术收藏。它让现代人得以触碰历史，也持续滋养着本地的文化艺术活动，如夏季的古堡音乐会、中世纪市集等，让古老的石墙在现代生活中继续跳动。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 罗日姆贝尔克城堡一日游打卡路线攻略：从河畔漫步到幽灵传说`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，跟着这份 一日游路线，我们高效又深度地玩转城堡。上午，别急着冲进城堡！先沿着伏尔塔瓦河边的小径走一走，从对岸或下游仰视城堡全貌，那个河湾倒影的角度是摄影黄金位。大约10点，过桥穿过小镇，买票进入城堡。中午，参观重点放在下城堡的室内展览，跟着导览（有英文的）聆听“白衣贵妇”房间的故事，在骑士大厅感受震撼。然后可以在城堡内的咖啡馆简单午餐，或在山下小镇找家河畔餐厅，尝尝捷克传统炖牛肉。下午，精力充沛的话，爬上古堡遗址（上城堡），这里视野无敌。然后回到下城堡，仔细看看兵器库和刑具展览，绝对让你脊背发凉。如果时间充裕，一定要参加“夜间游览”特别项目（需提前预约），在摇曳的烛光中听导游讲幽灵故事，体验感拉满。傍晚，下山在小镇逛逛工艺品店，买点本地蜂蜜酒，然后心满意足地结束这趟中世纪时光之旅。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  “白衣贵妇”的画像与房间：在城堡的一个房间里，悬挂着佩尔赫塔·罗森伯格的肖像。静静看一会儿，画中贵妇的眼神并非哀怨，反而有种超越时空的平静与深邃。据说她的幽灵常穿着一身白衣，手持一串钥匙。房间的窗户外，正好对着伏尔塔瓦河湾，光影透过古老的菱形玻璃窗格，在地板上投下斑驳陆离的光影，那一刻，你真的会觉得历史有了具体的形状和呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  骑士大厅的星穹木顶：抬头看！骑士大厅的文艺复兴式木质天花板令人叹为观止。它被精心雕刻成装饰性的藻井图案，深色的木梁与浅色的镶板构成复杂的几何图形，犹如一个木制的星空穹顶。阳光从高窗射入，灰尘在光柱中舞蹈，你能清晰看到木材的纹理和数百年前工匠雕凿的每一道痕迹，仿佛能听到昔日盛宴上酒杯碰撞的余响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  塔楼顶的360度全景：爬上“雅各布卡塔”的螺旋石梯，脚步在狭窄空间里发出回响。当你气喘吁吁地登上顶端，推开小门，整个世界豁然开朗。伏尔塔瓦河像一条翡翠色的缎带，在脚下画出一个完美的“Ω”形弯道，森林、田野、红色屋顶的小镇尽收眼底。风很大，吹动着头发，这一刻你会明白，为何罗森伯格家族要在此建立霸权——这视野本身就是权力的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  阴森的地下监狱与刑具：地下的空间光线昏暗，气温骤降。这里展示着中世纪和近代早期的刑具，从铁处女到耻辱面具。冰冷的金属器械在射灯下泛着幽光，墙面上似乎还残留着绝望的气息。这个细节或许令人不适，但它毫无保留地揭示了城堡作为要塞和监狱的另一面，是那段残酷历史最直接的物证，提醒我们和平与法治的珍贵。`}</p>
            </div>
          </Section>

          <Section title={`5. 罗日姆贝尔克城堡自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间与交通避坑：城堡内部参观主要靠导览团（通常为捷克语，但有固定场次的英语或德语团）。务必提前在官网查好当天英语团的时刻表并规划到达时间，否则可能要在门口空等一两小时。公共交通从捷克克鲁姆洛夫（CK小镇）出发最方便，有固定班次巴士，但班次不多，一定要查好往返时刻表，错过末班车会很麻烦。自驾是最佳选择，小镇有停车场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与体力准备：城堡建在山上，从停车场到入口就需要爬一段坡，内部更是有无数的螺旋石阶和 uneven 的石板路。请务必穿一双绝对舒适防滑的鞋子，高跟鞋或凉鞋简直是自讨苦吃。参观路线不短，室内部分可能较阴凉，而塔楼爬上去又会热，建议采用洋葱式穿衣法。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  避开人流与防盗：旅游团大多在上午10点至下午2点间涌入。想获得清净体验，要么赶在开门第一批进入，要么选择下午较晚的时间（注意闭馆时间）。小镇和城堡内总体治安很好，但在游客密集处，仍需看管好随身钱包和手机。自驾的话，不要在车内留任何显眼的行李。`}</p>
            </div>
          </Section>

          <Section title={`6. 罗日姆贝尔克周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`强烈推荐在城堡山脚下的罗日姆贝尔克小镇住一晚！这里的民宿大多由传统木结构房屋改造，推开窗就能看到山顶的城堡，夜晚格外宁静。可以尝试预订一家名为“Penzión Rožmberk”的家庭旅馆，主人热情，房间充满波希米亚风情，早餐的自制果酱是一绝。美食方面，镇上的河畔餐厅“Restaurace U Janů”不容错过。一定要点经典的 捷克炖牛肉（Guláš） ，配以蓬松的馒头片（Knedlíky），肉质酥烂，酱汁浓郁。别忘了配一杯本地的南波希米亚啤酒，或者尝试一下略带甜味的草药利口酒“Becherovka”。饭后甜点可以试试“Trdelník”（烟囱卷），但我要说，这里的比布拉格街头卖的更地道、不那么甜腻。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从城堡出发，捷克克鲁姆洛夫（Český Krumlov） 是毋庸置疑的下一站，巴士约半小时车程。这座被联合国教科文组织列为世界遗产的“童话小镇”拥有更大的城堡和迷人的文艺复兴老城区，但请做好人山人海的心理准备。如果你想继续小众探索，那么可以向东驱车约40分钟，前往霍拉肖维采（Holašovice） 村庄。这个宁静的小村子保存了完好的南波希米亚“巴洛克式民间建筑”，一排排色彩柔美的农舍围着巨大的绿色村庄绿地，宛如一个鲜活的露天建筑博物馆，时间在这里仿佛静止，与罗日姆贝尔克的威严形成了绝妙的互补。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`罗日姆贝尔克城堡的灵魂，在于那股从坚硬岩石与冰冷河水中生长出来的、混合着权力史诗与凄美传说的独特气息。它不像一座宫殿，而更像一位沉默的守护者，看尽了河水的奔流、家族的兴衰，并将所有故事都沉淀为石头上的纹路和风中低语的故事，等着有心人来倾听。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pravcicka-brana-natural-arch" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉夫奇采拱门</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pravcicka Gate</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/karlovy-vary-colonnades" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡罗维发利温泉回廊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlovy Vrum Colonnades</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hradec-nad-moravici-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫拉德茨-纳德莫拉维齐城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hradec nad Moravicí Castle</p>
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
