import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱切巴洛克老城 Lecce | 南意‘纸浆石’上的阳光巴洛克盛宴 - 最佳欧洲景点',
  description: '穿过那不起眼的古城门，仿佛一脚踏进了被阳光浸泡了数百年的蜜罐。第一印象不是宏伟，而是一种温暖的、流动的辉煌。空气里弥漫着一种混合气味：老石墙被正午太阳烘烤后散发的矿物暖香，街角面包店飘来的黄油与杏仁甜腻，还有从隐秘庭院里钻出来的、柠檬树和九重葛的清新。脚下的石板路被无数人的脚步磨得光滑如镜，映着两旁...',
}

export default function LecceBaroqueOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '莱切', href: '/destinations/italy' },
            { label: '莱切巴洛克老城', href: '/attractions/lecce-baroque-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱切巴洛克老城・Lecce・意大利・莱切`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过那不起眼的古城门，仿佛一脚踏进了被阳光浸泡了数百年的蜜罐。第一印象不是宏伟，而是一种温暖的、流动的辉煌。空气里弥漫着一种混合气味：老石墙被正午太阳烘烤后散发的矿物暖香，街角面包店飘来的黄油与杏仁甜腻，还有从隐秘庭院里钻出来的、柠檬树和九重葛的清新。脚下的石板路被无数人的脚步磨得光滑如镜，映着两旁建筑那种独特的、蜂蜜般的金黄色泽。这就是莱切石，一种柔软到能让工匠像处理纸浆一样随心雕刻的石头。
这里最打动人心的，是那种“ Baroque in the sun ”（阳光下的巴洛克）的独特气质。与北方巴洛克追求的冷峻崇高感不同，莱切的巴洛克是热烈的、世俗的、甚至有点俏皮的。你看那些教堂立面上缠绕的葡萄藤、怒放的花朵、嬉戏的小天使，还有从枝叶间探出头来的奇异动物，它们不像神谕，更像一场盛大而欢快的丰收庆典。当地人就在这些建筑的阴影下生活，老太太们坐在台阶上闲聊，孩子们追逐着足球从圣殿前跑过，咖啡馆的椅子一直摆到了教堂的墙根下。艺术不是被供奉在神坛上的，而是他们日常生活呼吸的一部分。
最核心的魅力，在于那种极致的“繁复”所带来的眩晕与宁静的矛盾统一。当你站在圣十字教堂（Basilica di Santa Croce）那令人瞠目结舌的立面下，视线会彻底迷失。上百个人物、动物、植物图案层层叠叠，覆盖了每一寸空间，仿佛整座建筑都在蓬勃生长、自我繁殖。那种视觉上的“信息过载”最初让人有些不知所措。但奇怪的是，看久了，在南方慵懒的阳光和悠长的钟声里，这种极致的繁华反而沉淀出一种奇异的平和。你会意识到，这种疯狂雕刻的背后，不是炫技，而是一种对生命本身丰饶与喜悦的、近乎虔诚的礼赞。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那不起眼的古城门，仿佛一脚踏进了被阳光浸泡了数百年的蜜罐。第一印象不是宏伟，而是一种温暖的、流动的辉煌。空气里弥漫着一种混合气味：老石墙被正午太阳烘烤后散发的矿物暖香，街角面包店飘来的黄油与杏仁甜腻，还有从隐秘庭院里钻出来的、柠檬树和九重葛的清新。脚下的石板路被无数人的脚步磨得光滑如镜，映着两旁建筑那种独特的、蜂蜜般的金黄色泽。这就是莱切石，一种柔软到能让工匠像处理纸浆一样随心雕刻的石头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是那种“ Baroque in the sun ”（阳光下的巴洛克）的独特气质。与北方巴洛克追求的冷峻崇高感不同，莱切的巴洛克是热烈的、世俗的、甚至有点俏皮的。你看那些教堂立面上缠绕的葡萄藤、怒放的花朵、嬉戏的小天使，还有从枝叶间探出头来的奇异动物，它们不像神谕，更像一场盛大而欢快的丰收庆典。当地人就在这些建筑的阴影下生活，老太太们坐在台阶上闲聊，孩子们追逐着足球从圣殿前跑过，咖啡馆的椅子一直摆到了教堂的墙根下。艺术不是被供奉在神坛上的，而是他们日常生活呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最核心的魅力，在于那种极致的“繁复”所带来的眩晕与宁静的矛盾统一。当你站在圣十字教堂（Basilica di Santa Croce）那令人瞠目结舌的立面下，视线会彻底迷失。上百个人物、动物、植物图案层层叠叠，覆盖了每一寸空间，仿佛整座建筑都在蓬勃生长、自我繁殖。那种视觉上的“信息过载”最初让人有些不知所措。但奇怪的是，看久了，在南方慵懒的阳光和悠长的钟声里，这种极致的繁华反而沉淀出一种奇异的平和。你会意识到，这种疯狂雕刻的背后，不是炫技，而是一种对生命本身丰饶与喜悦的、近乎虔诚的礼赞。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱切巴洛克老城`} />
                <InfoRow label="英文名称" value={`Lecce`} />
                <InfoRow label="正式名称" value={`Historic Centre of Lecce`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`莱切`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`南意大利巴洛克艺术的巅峰代表与“露天博物馆”，被誉为“南方的佛罗伦萨”。`} />
                <InfoRow label="建筑特色" value={`大量使用当地出产、质地柔软细腻的金黄色“莱切石”（Pietra Leccese），使得建筑装饰繁复、精雕细琢到令人窒息的程度。`} />
                <InfoRow label="建筑风格" value={`阳光巴洛克风格（Barocco Leccese）`} />
                <InfoRow label="文化价值" value={`一座由本地石材、民间信仰与贵族梦想共同雕琢的“活态”文化遗产，展现了普利亚大地上独特的艺术创造力与生活哲学。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区街道及广场全天开放。核心建筑（如圣十字教堂、莱切大教堂）开放时间通常为周一至周六上午9:00至下午1:00，下午4:00至晚上7:00；周日上午开放时间较短，主要为礼拜服务时间。具体时间随季节（夏季可能延长）及宗教活动微调，部分博物馆周一闭馆。建议行前查询最新信息。`} />
              <InfoRow label="门票价格" value={`漫步老城区街道免费。进入主要教堂免费，但圣十字教堂的正面回廊（Chiostro）及部分展厅需购票，票价约8欧元。莱切省考古博物馆门票约5欧元。通常有学生、老人及团体优惠票，欧盟18岁以下公民常免费。`} />
              <InfoRow label="地址" value={`Piazza del Duomo, 73100 Lecce LE, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是布林迪西机场（BRI），距莱切约40公里。从机场可乘坐直达的火车专线（Airport Shuttle Train）或巴士到达莱切火车站（Lecce Railway Station），耗时约30-40分钟，班次频繁。从巴里（Bari）或意大利其他主要城市也有直达火车。莱切火车站位于老城边缘，出站后步行5-10分钟即可踏入巴洛克迷宫的核心区域，这是最推荐的抵达方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`莱切的故事，远比它的巴洛克外衣要古老得多。早在古希腊时代，这里就有梅萨皮人定居。后来罗马人来了，留下了那座至今仍在使用、深藏在老城地下的罗马剧场（Anfiteatro Romano）。你还能在考古博物馆里看到那些精美的马赛克，诉说着两千年前的繁华。中世纪时，莱切在诺曼人、霍亨斯陶芬王朝的统治下，建立了最初的罗马式大教堂和城堡，但城市的性格还比较内敛。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的戏剧性转折发生在16世纪末到18世纪。这要归功于两股力量的交汇：一是来自西班牙的哈布斯堡王朝统治者，他们带来了反宗教改革的思想和大量资金，急于用最华丽、最具感染力的宗教建筑来巩固信仰；二是本地贵族和教士集团的崛起，他们积累了巨大的财富，渴望通过修建家族教堂和宫殿来彰显荣耀。而莱切本地出产的那种神奇的“莱切石”，为这场艺术狂欢提供了完美的画布。这种石头刚开采出来时柔软如泥，易于雕刻出最精细的细节，暴露在空气中后会逐渐硬化，并氧化成温暖的金黄色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场持续了将近两百年的“雕刻竞赛”开始了。本地天才的建筑师和石匠们，如朱塞佩·津巴罗（Giuseppe Zimbalo）、弗朗切斯科·安东尼奥·津巴罗（Francesco Antonio Zimbalo，两人并非直系亲属）和朱塞佩·奇诺（Giuseppe Cino），成了这座城市的总设计师。他们几乎没有离开过故乡，却创造了一种独一无二的地域风格。圣十字教堂的立面成了津巴罗的“签名作品”，他花了将近半个世纪的时间来雕琢它，上面充满了象征性的元素：石榴代表教会，棕榈叶代表殉道，而缠绕的葡萄藤则暗指圣餐礼。这不仅仅是一座建筑，更是一部用石头写成的神学百科全书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`有趣的是，尽管主题严肃，但工匠们却忍不住在其中注入了浓烈的世俗生活气息。你会在涡卷装饰里发现农夫的草帽，在天使的面容上看到邻家姑娘的微笑，在怪兽嘴里找到本地的水果。这是一种深植于土地的巴洛克，是地中海阳光、丰收的喜悦与虔诚信仰的奇异混合体。18世纪后，随着经济重心转移，疯狂的建造逐渐平息，莱切仿佛凝固在了它最辉煌的一刻。幸运的是，它躲过了两次世界大战的严重破坏，这座“石头蕾丝之城”得以近乎完整地保存下来，等待每一个走入其中的人，去触摸那段用刻刀与阳光写就的黄金岁月。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味莱切，你需要整整一天，并把自己调频到“南方慢时间”。建议清晨九点前抵达，这时阳光角度最佳，能将建筑物的浮雕阴影拉得修长动人，游客也尚未涌入。从老城北端的圣奥龙佐广场（Piazza Sant‘Oronzo）开始，这里是古罗马心脏与巴洛克文明的交汇点，能快速感知城市的历史层次。然后以顺时针方向，深度探访三大核心广场（圣奥龙佐、人民、大教堂）及连接它们的迷人小巷。中午最热时，可以安排室内活动，比如考古博物馆或找个地窖餐厅午餐。下午光影变得柔和，是细细欣赏建筑立面和寻找隐秘庭院的最佳时机。把黄昏留给大教堂广场和罗马剧场遗址，看金黄的光线如何为石头披上最魔幻的衣裳。整体节奏宜慢，多停下来坐在广场上观察，让眼睛慢慢适应并消化那无处不在的华丽细节。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多商店和小型博物馆有漫长的午休（下午1点到4点甚至5点），规划室内行程时要避开这个时段。
进入教堂时着装需得体（遮住肩膀和膝盖），尽管气氛轻松，但这仍是重要的宗教场所。
警惕老城里一些主动提供“免费导览”然后索要高额小费的人，官方旅游信息中心（通常在圣奥龙佐广场）提供的服务可靠且价格透明。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从圣奥龙佐广场的罗马圆柱和沉睡着的地下剧场遗址开始，感受古今地层在脚下交错的神奇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱门钻进老城腹地，让圣十字教堂那令人震撼到失语的华丽立面毫无预警地闯入你的眼帘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂旁的“Celeste”咖啡馆点一杯冰咖啡，坐下来花至少二十分钟，什么也不做，只是盯着立面，看那些雕刻如何在移动的阳光下“活”过来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着Via Umberto I这条主干道溜达到人民广场（Piazza del People），看看更为沉稳的市政厅和圣马可教堂，感受公共空间的市民气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进任何一条看起来最窄、最不起眼的小巷，比如Via Augusto Imperatore，去发现那些私人宫殿紧闭的大门上同样精彩绝伦的门楣雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在考古博物馆（Museo Sigismondo Castromediano）凉爽的展厅里，透过古罗马马赛克和陶器，理解这片土地早在巴洛克之前就已深植的艺术基因。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在黄昏时分踏入杜莫广场（Piazza del Duomo），这个被高墙围合的封闭广场在夕照下会变成一个温暖的金色剧场，大教堂、钟楼和主教宫共同上演光与影的默剧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐前回到罗马剧场遗址，坐在古老的石阶上，看现代城市的灯火如何一点点亮起，与两千年前的残垣断壁对话。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣十字教堂正面仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光最为理想，阳光从西面打来，能让立面上错综复杂的浮雕产生强烈的立体感，使用广角镜头尽可能收全那令人屏息的繁华。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`杜莫广场钟楼视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在广场中央，背对大教堂主立面，将高耸的钟楼作为画面的主导，等待一束光穿过周围建筑的缝隙照亮钟楼墙面，捕捉那种神圣的静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`罗马剧场拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`从地面层的拱门向内拍摄，用古老的石拱作为画框，框住剧场内残存的石阶和远处巴洛克建筑的圆顶，形成跨越两千年的时空对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Via Palmieri小巷纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧皆是金黄色石壁的小巷，在正午阳光直射头顶时拍摄，此时巷子底部往往处于阴影中，形成明暗交替的强烈纵深引导线，充满戏剧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`黄昏全景瞭望点`}</h4>
                  <p className="text-sm text-gray-700">{`登上莱切城堡（Castello di Carlo V）的城墙或寻找一处有露台的屋顶酒吧，在日落前后半小时，拍摄整个老城区在暖色调光线中连绵起伏的金色屋顶和教堂圆顶的魔幻时刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`莱切石的暖黄色在“黄金时刻”（日出后和日落前一小时）会达到极致，但正午的强光也能拍出浮雕锐利的细节，不同时间有不同美感。`}</li>
                <li>• {`教堂内部通常允许不使用闪光灯的静音拍摄，但举行弥撒时应绝对避免拍照，以示尊重。`}</li>
                <li>• {`尝试拍摄一些细节特写，如门把手、滴水兽、破损天使的脸，这些往往比全景更能传递石雕的质感与情感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城墙边缘由古老公寓改造的B&B，房间有高高的彩绘天花，女主人早晨会端来自制的普利亚式早餐，包括那令人难忘的“烤饼卷”。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻一座17世纪贵族宫殿改造的精品酒店，睡在拥有原始壁画和石拱顶的房间里，庭院里有一棵百年老橄榄树，早餐就在树下进行。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择大教堂广场一侧的五星级酒店，房间的阳台正对莱切大教堂的穹顶，夜晚当游客散去，整个广场仿佛是你的私人庭院，只听得到钟声和风声。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史宫殿`}</h4>
                  <p className="text-sm text-purple-800">{`入住一栋被列为国家古迹的私人宅邸，里面摆满了家族传承的古董家具，主人会和你分享关于建筑上每个家族纹章的故事，如同住在活的历史里。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`强烈推荐住在老城墙范围内，这样才能体验入夜和清晨游客潮水退去后，莱切最为真实、宁静的样貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是旺季，住宿紧张且价格高昂，提前数月预订是明智之举，春秋两季气候宜人，体验更佳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城街道多为石板路，拖着大行李箱行走会比较吃力，选择提供接送服务的住宿或轻装简行。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莱切许久，闭上眼睛，脑海里浮现的不是某座具体的教堂，而是一种感觉——一种被温暖的金色和繁复的曲线温柔包裹的感觉。它不像那些令人望而生畏的宏大古迹，需要你仰视和敬畏。相反，它邀请你靠近、触摸、甚至迷失在它那过于慷慨的华丽之中。在这里，艺术从神坛走下，融进了面包的香气、咖啡馆的喧闹和老人倚着门廊的闲谈里。它告诉你，美可以不是孤高的，它可以是丰盛的、喜悦的、甚至有点吵闹的，就像地中海夏天的阳光，毫无保留地洒在每一个人身上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求极简和效率的时代，莱切像一首冗长而华丽的巴洛克赋格曲，固执地提醒着我们另一种价值：对细节的无限痴迷，对时间的慷慨挥霍，以及对“无用的美”的纯粹信仰。那些花费数十年、由无数无名石匠刻出的、或许永远无人会看清的叶片与花瓣，究竟是为了什么？我想，就是为了证明人类灵魂中那份永不枯竭的、想要创造、想要赞美、想要将瞬间凝固为永恒的冲动。来到莱切，你不仅仅是在参观一个景点，你是在体验一种截然不同的生活节奏和美学浓度。它会温柔地磨钝你对“简洁”的偏好，然后在你心里，悄悄种下一小块永远闪耀着阳光的金色石头。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gerace-calabria-byzantine-pearl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰拉切</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gerace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/narni-sotterranea" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni Sotterranea</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/teatro-olimpico-vicenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico Vicenza</p>
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
