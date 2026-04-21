import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃多莱城堡旅游攻略：探秘拉脱维亚“闹鬼”骑士要塞的自由行指南',
  description: '探索拉脱维亚库尔泽梅的Ēdole Castle深度游攻略。揭秘红砖骑士要塞的幽灵传说与中世纪历史，提供门票、交通及一日游路线等实用信息。',
}

export default function EdoleCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉脱维亚', href: '/destinations/latvia' },
            { label: '库尔泽梅', href: '/destinations/latvia' },
            { label: '埃多莱城堡', href: '/attractions/edole-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃多莱城堡・Ēdole Castle・拉脱维亚・库尔泽梅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经厌倦了那些挤满游客的欧洲大城堡，今天这份埃多莱城堡私藏旅游攻略，就是为你准备的。它静静藏在拉脱维亚西部的库尔泽梅森林与湖泊之间，像一位被时光遗忘的骑士。车子拐下主路，穿过一片高大的松林，当你第一眼看到那座由暗红色砖块与冷灰色石头交错砌成的庞大建筑时，时间仿佛瞬间倒流700年。这里没有熙攘的旅行团，只有风声、乌鸦的叫声，或许……还有传说中的低语。作为你的专属向导，这份自由行指南不只是带你看看风景，更是带你深入一段混合着骑士荣耀、家族兴衰与灵异传说的立体历史。准备好，我们要推开那扇厚重的木门了。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你已经厌倦了那些挤满游客的欧洲大城堡，今天这份埃多莱城堡私藏旅游攻略，就是为你准备的。它静静藏在拉脱维亚西部的库尔泽梅森林与湖泊之间，像一位被时光遗忘的骑士。车子拐下主路，穿过一片高大的松林，当你第一眼看到那座由暗红色砖块与冷灰色石头交错砌成的庞大建筑时，时间仿佛瞬间倒流700年。这里没有熙攘的旅行团，只有风声、乌鸦的叫声，或许……还有传说中的低语。作为你的专属向导，这份自由行指南不只是带你看看风景，更是带你深入一段混合着骑士荣耀、家族兴衰与灵异传说的立体历史。准备好，我们要推开那扇厚重的木门了。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃多莱城堡`} />
                <InfoRow label="英文名称" value={`Ēdole Castle`} />
                <InfoRow label="正式名称" value={`Ēdole Castle`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`库尔泽梅`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`埃多莱城堡可不是什么后来仿建的“迪士尼”城堡，它是拉脱维亚保存最完好的中世纪骑士要塞之一，是波罗的海地区历史动荡的活化石。它的故事始于13世纪，最初是利沃尼亚骑士团（一个声名显赫的德意志十字军军事修会）为了巩固在库尔泽梅地区的统治而建立的石头要塞。在漫长的岁月里，它目睹了十字军东征的余波、中世纪领主间的纷争，以及后来波兰-立陶宛联邦与瑞典王国对这片土地的争夺。城堡在16世纪转变为贵族宅邸，被著名的冯·伯赫（von Behr）家族拥有并改建了数百年，这个家族的命运与城堡紧紧缠绕。二战和苏联时期，它经历了仓库、学校等身份，险些衰败，却又奇迹般地留存下来。可以说，城堡的每一块红砖都压着一页波罗的海的历史，它不仅仅是建筑，更是拉脱维亚民族坚韧性的象征——屡遭侵占，内核不倒。`} />
                <InfoRow label="建筑特色" value={`走近它，你才会真正被那种粗粝而威严的美震撼。城堡的主体是用一种温暖的、褪色般的暗红色砖块砌成，但在墙角、窗沿和防御塔的基座，则大量使用了来自当地的冷灰色石灰岩。这种红与灰的碰撞，在阴天显得肃穆孤傲，在夕阳下却会燃烧起一种史诗般的橘红色光辉。建筑整体是不规则的四边形，四角矗立着高低错落的防御塔楼，其中主塔最为高大厚重。仔细观察墙壁，你会发现无数修补的痕迹，不同年代、略有色差的砖石像补丁一样拼贴在一起，这本身就是一部无声的编年史。窗户多是狭长的拱形窗，显然是后期文艺复兴式改建时扩大的，但底层仍保留着仅供射箭的窄小箭窗。最吸引人的是屋顶——覆盖着暗红色的陶瓦，无数个尖顶、山形墙和烟囱组成了复杂如迷宫般的天际线，每当日落时分，光影在这些起伏的线条上跳舞，城堡仿佛有了呼吸。`} />
                <InfoRow label="建筑风格" value={`埃多莱城堡是建筑风格的“混血儿”，完美展示了从严格的军事哥特式向优雅的文艺复兴式过渡的历程。早期的核心部分是典型的哥特式：你看那些厚重的墙壁、狭窄的箭窗、幽深莫测的入口拱券，以及地下储藏室和监狱的拱顶，一切都是为了防御和实用，充满禁欲和冷峻的力量感。而16世纪以后的改建，则注入了文艺复兴甚至早期巴洛克的血液。这体现在那些装饰性的山形墙（城堡正面顶部那些像楼梯一样的三角形装饰）、相对宽敞的矩形窗框，以及内部庭院立面上出现的古典柱式图案和浅浮雕。最有趣的是，这种混合毫无违和感。文艺复兴的优雅并没有完全抹去哥特式的强悍，而是像给一位老骑士披上了一件精致的礼服，内在的筋骨依然铮铮。这种风格融合，恰恰是波罗的海地区贵族在接纳中欧文化时，又牢牢扎根于本地传统的直观体现。`} />
                <InfoRow label="文化价值" value={`对今天的拉脱维亚人而言，埃多莱城堡远不止是一个旅游景点。它是一座活着的社区文化中心，是本地人骄傲的源泉。经过精心修复，城堡内部设有地方历史博物馆、艺术画廊，常年举办古典音乐会、中世纪市集和文化工作坊。当地学校的孩子会来这里上课，了解脚下土地的故事；艺术家被其独特的光线和氛围吸引，前来驻留创作。而它那些广为流传的“幽灵传说”——比如白衣女士的游魂、无头骑士的脚步声——早已成为拉脱维亚丰富民间传说的一部分，吸引着无数灵异现象爱好者前来“探秘”。这些传说，在某种程度上，也是一种文化记忆的另类保存方式，将历史上的悲剧、爱情与失落，以最富有生命力的民间叙事传承下来。城堡，因此从冰冷的石头，变成了一个有温度、有故事、能与现代人产生情感联结的文化符号。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 埃多莱城堡一日游打卡路线与深度探索攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`从幽灵地窖到文艺复兴厅堂的完美自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条一日游路线，能让你由外到内、由浅入深地吃透这座城堡。上午（10:00-12:30）：别急着进去！先在城堡外围的护城河（现已成花园）漫步一圈，从各个角度欣赏红砖灰石的交响乐，特别在南侧花园拍摄城堡全景。然后进入主庭院，感受被四方建筑包围的静谧。首先参观西翼的历史博物馆，用半小时快速了解城堡的“生平简历”，这样你看实物会更有感觉。中午（12:30-14:00）：就在城堡内的餐厅或咖啡厅（如果开放）用个简餐，尝尝拉脱维亚传统的黑麦面包和炖菜，想象自己是个中世纪宾客。下午（14:00-17:00）：深度探索开始。重点参观主塔楼，爬上螺旋石阶，感受墙壁的冰凉，在顶层眺望无边的库尔泽梅森林。接着探索二楼的骑士大厅和文艺复兴风格的宴会厅，注意看天花板上的纹章和壁画。最后，如果胆量够大，一定要在傍晚光线渐暗时，参加导览或自行探访地窖和地下通道，这里是幽灵传说的核心区。傍晚（17:00后）：离开城堡，开车几分钟到附近的埃多莱小镇中心走走，在宁静的乡村教堂前结束这一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  主塔螺旋楼梯的触感：当你手扶墙壁，攀登主塔那狭窄的螺旋石阶时，请停下来摸摸身边的砖石。那不是光滑的，而是布满细微的凹凸与刻痕，有些可能是几个世纪前工匠的指甲印，有些或许是士兵匆忙上下时武器磕碰的痕迹。光线从高层的小窗斜射下来，在旋转的楼梯井中形成一道道光柱，灰尘在其中飞舞。你向上看，楼梯仿佛没有尽头，深深吸一口气，能闻到石头特有的、混合着千年潮气的凉涩味道。这一刻，你触摸的就是凝固的时间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  骑士大厅的盔甲与光影：步入二楼最大的骑士大厅，你的目光一定会被一套立在墙角的16世纪板甲吸引。它并非崭新发亮，而是带着暗沉的金属色泽和细微的磨损。巧妙的是，下午的阳光会从西面的高窗射入，恰好将一道光斑投射在盔甲的胸甲上，让它看起来像是拥有了微弱的心跳。站在对面，你可以看到光影在盔甲弧面上缓慢移动，仿佛里面真的有一个沉睡的骑士灵魂，正随着日光呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  玫瑰园拱廊下的回声：城堡南侧的文艺复兴式花园里，有一段短短的砖砌拱廊。走进去，轻轻拍一下手或低声说句话，你会听到异常清晰、带着轻微嗡鸣的回声。据说，这是因为特殊的拱形结构和厚重的砖墙形成了天然的声学装置。试着在这里哼一段简单的旋律，声音会被温柔地放大和包裹，仿佛在与城堡本身进行一场私密的对话。许多当地恋人喜欢在此许下誓言，因为他们相信，这里的回声会让誓言被城堡记住，直至永远。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  地窖入口的“寒意”：通向传说的地下区域，入口往往是一扇低矮、包着铁皮的橡木门。推开它的瞬间，你会先感觉到一股与地上截然不同的空气涌出——那不是简单的凉爽，而是一种沉静的、带着土腥味和淡淡霉味的“寒意”，瞬间让你胳膊起鸡皮疙瘩。门内的石阶向下隐入黑暗，只有几盏昏黄的灯泡照明。仔细听，除了自己的心跳和呼吸，或许还能听到远处滴水的声音，或是通风口传来的、像叹息一样的风声。这种强烈的感官体验，比任何鬼故事都更能让你理解，为何传说会在这里生根。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  最佳时间与交通避坑：拉脱维亚的夏季（6-8月）短暂而美好，是游览旺季，但埃多莱城堡仍算小众，上午10点前或下午4点后抵达能享受更多清净。关键是交通：这里没有直达公共交通，必须自驾！用“Ēdoles pils”导航，从里加出发约1.5小时车程。冬季（11-3月）城堡开放时间大幅缩短甚至可能部分关闭，行前务必在其官网或当地旅游网站再三确认，否则可能吃闭门羹。春秋季多雨，道路湿滑，驾驶需格外小心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与探索建议：城堡内部石阶陡峭、地面不平，绝对要穿一双防滑、支撑好的徒步鞋或运动鞋，高跟鞋在这里是“自杀行为”。即使夏天，地下部分和石砌房间也非常阴冷，带一件轻薄防风外套或披肩至关重要。部分区域照明昏暗，手机电筒功能很实用。如果你对幽灵传说敏感或带孩子，可以酌情避开单独深入地下室的行程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  避开“无声”的坑：门票可以在入口处购买，但最好准备一些拉脱维亚拉特（欧元）现金，虽然可能刷卡，但乡村地方网络有时不稳定。城堡内纪念品商店较小，别指望买到琳琅满目的商品，但可以关注手绘明信片或本地蜂蜜等特色小物。最重要的一点：尊重这里宁静的氛围，不要大声喧哗，许多角落值得你静静聆听——听历史的声音，或许还有别的什么。`}</p>
            </div>
          </Section>

          <Section title={`6. 埃多莱城堡周边住宿与地道美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想在库尔泽梅地区沉浸式体验，建议在附近住一晚。城堡本身不提供住宿，但埃多莱小镇或邻近的坎达瓦（Kandava） 有非常棒的乡村民宿（如“Edole Manor”或“Kandava Old Town Hostel”），多是木质结构的老房子改建，主人热情好客，晚上可以看到绝美的星空。餐饮方面，如果城堡内的餐厅开放（通常是季节性），一定要试试。他们的菜单常以本地食材为主，比如用森林蘑菇和酸奶油炖煮的鸡肉，或者煎得焦香的波罗的海鲱鱼配土豆和莳萝酱。如果在镇上找餐厅，寻找那些提供“拉脱维亚家庭风味”的小馆子，必点“灰豌豆配培根”和“黑麦面包布丁”这样的传统 comfort food。配上一杯本地黑啤或药草利口酒“Riga Black Balsam”，一顿饭就能让你吃懂拉脱维亚乡土的淳朴与浓烈。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  坎达瓦古镇（Kandava）：驱车约15分钟即可到达。这个坐落在小山上的古镇拥有拉脱维亚最古老的石桥之一（建于1873年）和迷人的、铺着鹅卵石的旧城区。镇上的坎达瓦城堡山（Kandavas pilskalns） 是一个古老的利沃尼亚骑士团城堡遗址，如今只剩下土丘和残垣，但视野极佳，可以俯瞰阿巴瓦河蜿蜒的河谷。比起修葺一新的埃多莱，这里的荒凉感更能引发思古幽情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  波罗的海沙滩（Jurkalne海岸悬崖）：如果你愿意多开30-40分钟车，强烈推荐前往尤尔卡尔内。这里不是普通的沙滩，而是壮观的、被森林覆盖的砂质悬崖海岸线。海风凛冽，波涛汹涌，景色野性而原始。沿着海岸步道散步，看白色的海浪不断侵蚀着悬崖底部，与宁静的内陆城堡形成震撼的对比。这是自然之力塑造的库尔泽梅，与人文历史的埃多莱相映成趣。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`埃多莱城堡的魅力，在于它毫不掩饰自己的复杂与矛盾——它既是防御要塞又是温馨家园，既是历史丰碑又是传说温床，红砖的暖与灰石的冷在身上共存。它教会旅人的是，真正的深度游不是收集打卡照，而是去感受一种“多重时间的叠加”，并在那种略带灵异的寂静中，听见自己与遥远过去产生的、微弱却真实的共鸣。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kuldiga-old-town-waterfall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔迪加</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kuldīga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aglona-basilica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿格洛纳大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aglona Basilica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riga-art-nouveau-architecture" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里加新艺术建筑群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Art Nouveau architecture in Riga</p>
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
