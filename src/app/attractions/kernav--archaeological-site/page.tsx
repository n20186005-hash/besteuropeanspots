import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克尔纳韦 Kernavė｜探访隐没在绿色丘陵中的“立陶宛特洛伊”，触摸立陶宛大公国的起源心跳 - 最佳欧洲景点',
  description: '开车离开维尔纽斯，窗外的风景很快从城市的规整切换成东欧平原那种开阔的、略带忧郁的绿。农田、森林和低矮的丘陵交替出现，直到路边出现一块不起眼的棕色牌子，写着“Kernavė”。拐进去，世界瞬间安静下来。首先迎接你的不是什么恢弘的遗迹，而是一条安静的乡村道路，两旁是刷着浅色油漆的木屋，院子里种着土豆和向...',
}

export default function KernavArchaeologicalSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '立陶宛', href: '/destinations/lithuania' },
            { label: '希尔温托斯区', href: '/destinations/lithuania' },
            { label: '克尔纳韦', href: '/attractions/kernav--archaeological-site' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克尔纳韦・Kernavė・立陶宛・希尔温托斯区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`开车离开维尔纽斯，窗外的风景很快从城市的规整切换成东欧平原那种开阔的、略带忧郁的绿。农田、森林和低矮的丘陵交替出现，直到路边出现一块不起眼的棕色牌子，写着“Kernavė”。拐进去，世界瞬间安静下来。首先迎接你的不是什么恢弘的遗迹，而是一条安静的乡村道路，两旁是刷着浅色油漆的木屋，院子里种着土豆和向日葵，空气里是青草、泥土和一点野花的混合气味，纯粹的乡村立陶宛。然后，你停好车，步行穿过一片山毛榉林，光线透过树叶洒下斑驳的光点。走出树林的刹那，你会不由自主地“啊”出声来——眼前，是一片巨大、平缓、绿得不可思议的河谷，而在河谷边缘，五座如同绿色巨象背脊般的山丘，静静地、威严地一字排开，沉睡在涅里斯河的臂弯里。那种震撼，不是来自精美的人工雕琢，而是来自时间和自然共同完成的、一种浑厚无言的力量感。
站在其中一座被称为“王座山”的丘顶，风毫无遮挡地吹过，你能听到远处树林的沙沙声，和近处草丛里昆虫的鸣叫。视线所及，是蜿蜒的河流、更远处的森林，以及天际线。此刻，你脚下踩着的，不仅仅是泥土和草根，而是层层叠叠的历史。最上层，是中世纪教堂的地基痕迹；往下，是13-14世纪木质城堡的炭化木桩；再往下，是异教时代祭祀的火塘与手工艺品；最深的地方，甚至还有石器时代猎人的燧石工具。这里没有罗马大理石柱的辉煌，也没有哥特尖塔的凌厉，它的魅力是内向的、需要你用心去“听”的。你会看到本地老人慢悠悠地牵着狗从山丘小径走过，对他们而言，这不是景点，而是家园后院的一部分，是夏至节时点燃篝火、唱着古老歌谣的地方。
这就是克尔纳韦最打动人心的核心：它不是一座死去的废墟，而是一个依然在呼吸的历史现场。你能清晰感受到，国家的宏大叙事与个人生活的细密针脚，是如何在这片土地上交织了上万年。那五座山丘，就像大地母亲伸出的五根手指，温柔地捧起了立陶宛民族的童年记忆。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`开车离开维尔纽斯，窗外的风景很快从城市的规整切换成东欧平原那种开阔的、略带忧郁的绿。农田、森林和低矮的丘陵交替出现，直到路边出现一块不起眼的棕色牌子，写着“Kernavė”。拐进去，世界瞬间安静下来。首先迎接你的不是什么恢弘的遗迹，而是一条安静的乡村道路，两旁是刷着浅色油漆的木屋，院子里种着土豆和向日葵，空气里是青草、泥土和一点野花的混合气味，纯粹的乡村立陶宛。然后，你停好车，步行穿过一片山毛榉林，光线透过树叶洒下斑驳的光点。走出树林的刹那，你会不由自主地“啊”出声来——眼前，是一片巨大、平缓、绿得不可思议的河谷，而在河谷边缘，五座如同绿色巨象背脊般的山丘，静静地、威严地一字排开，沉睡在涅里斯河的臂弯里。那种震撼，不是来自精美的人工雕琢，而是来自时间和自然共同完成的、一种浑厚无言的力量感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站在其中一座被称为“王座山”的丘顶，风毫无遮挡地吹过，你能听到远处树林的沙沙声，和近处草丛里昆虫的鸣叫。视线所及，是蜿蜒的河流、更远处的森林，以及天际线。此刻，你脚下踩着的，不仅仅是泥土和草根，而是层层叠叠的历史。最上层，是中世纪教堂的地基痕迹；往下，是13-14世纪木质城堡的炭化木桩；再往下，是异教时代祭祀的火塘与手工艺品；最深的地方，甚至还有石器时代猎人的燧石工具。这里没有罗马大理石柱的辉煌，也没有哥特尖塔的凌厉，它的魅力是内向的、需要你用心去“听”的。你会看到本地老人慢悠悠地牵着狗从山丘小径走过，对他们而言，这不是景点，而是家园后院的一部分，是夏至节时点燃篝火、唱着古老歌谣的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是克尔纳韦最打动人心的核心：它不是一座死去的废墟，而是一个依然在呼吸的历史现场。你能清晰感受到，国家的宏大叙事与个人生活的细密针脚，是如何在这片土地上交织了上万年。那五座山丘，就像大地母亲伸出的五根手指，温柔地捧起了立陶宛民族的童年记忆。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克尔纳韦`} />
                <InfoRow label="英文名称" value={`Kernavė`} />
                <InfoRow label="正式名称" value={`克尔纳韦考古遗址（立陶宛国家文化保护区）`} />
                <InfoRow label="国家" value={`立陶宛`} />
                <InfoRow label="城市" value={`希尔温托斯区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是立陶宛大公国的第一个文字记载的首都，是立陶宛国家诞生与早期政治、宗教生活的核心，被称为“立陶宛的特洛伊”。`} />
                <InfoRow label="建筑特色" value={`并非单体建筑，而是一片由五座巨大山丘堡垒、大片未发掘的定居点遗址、中世纪城镇遗迹和防御工事共同构成的、与自然地貌完美融合的考古文化景观。`} />
                <InfoRow label="建筑风格" value={`展现了从史前原住民聚落、到早期立陶宛异教城堡、再到中世纪基督教城镇的连续演变层次，是欧洲北部罕见的大型层叠式考古遗址。`} />
                <InfoRow label="文化价值" value={`其地下完好保存了超过一万年的人类活动连续层（从旧石器时代晚期到中世纪晚期），是研究波罗的海地区历史、异教信仰与基督教化进程的无价宝库。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`考古遗址公园全年全天24小时免费开放。克尔纳韦考古与历史博物馆开放时间为：5月至9月，周二至周日 10:00-18:00；10月至次年4月，周三至周日 10:00-17:00，周一闭馆。冬夏时间略有微调，具体需查看官网公告。每年的夏至节（6月23-24日）及立陶宛国家重建日（7月6日）期间，遗址会举行大型传统庆典活动，博物馆开放时间会延长。`} />
              <InfoRow label="门票价格" value={`遗址本身无门票。考古与历史博物馆门票：成人票6欧元，学生及长者票3欧元。每周三下午对所有访客免费开放。提供英语、立陶宛语导览服务，需提前在官网或访客中心预约，费用另计。`} />
              <InfoRow label="地址" value={`Kerniaus g. 4a, Kernavė 19172, Širvintų raj., Lithuania`} />
              <InfoRow label="交通方式" value={`从立陶宛首都维尔纽斯出发最为便捷。自驾：沿A2/A14公路向东北方向行驶约35公里，车程约40分钟，沿途有清晰的棕色旅游路标指引。公共交通：从维尔纽斯中央汽车站乘坐开往Širvintos或Kernavė方向的长途巴士，班次约每小时一班，车程约1小时，在Kernavė村中心下车，步行5分钟即可到达遗址访客中心。建议使用当地交通APP “Trafi” 查询实时班次。若非自驾，最好预留半天至一天时间，因为巴士班次在傍晚后较为稀疏。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从很久很久以前说起，远在“立陶宛”这个名称出现之前。最后的冰川从这片土地退去，留下了蜿蜒的涅里斯河和肥沃的河谷台地。大约在公元前8000年，第一批狩猎采集者就相中了这里，他们留下了一些简单的工具，像是历史书最模糊的扉页。时间快进到公元后第一个千年，波罗的海部落在这里定居，那些高大的山丘，最初可能就是天然的瞭望点。真正的传奇始于13世纪。那时，立陶宛各部落在面对来自西方条顿骑士团的巨大压力下，正逐步走向联合。文献中第一次出现“克尔纳韦”这个名字，是在1279年的编年史里，它被描述为一个重要的堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而让克尔纳韦登上历史巅峰的，是那位传奇的明道加斯大公的继承人。尽管明道加斯本人在维尔纽斯加冕为国王，但在他遇刺后（1263年），立陶宛的大公权力似乎又回到了更传统、更异教的中心。许多历史学家相信，在13世纪末至14世纪初，克尔纳韦就是立陶宛大公国的实际首都，是大公的驻跸地和权力中心。想象一下那个画面：山丘顶上矗立着强大的木质堡垒，山坡和河谷中遍布着工匠的作坊、商人的摊位和居民的木屋，空气中弥漫着铁匠铺的烟火味、烤面包的香气，以及异教祭司在神圣橡树下吟唱的古老咒语。这里是一个生机勃勃的、信奉着多神教的立陶宛军事强国的跳动心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，它的辉煌与它的毁灭紧密相连。14世纪末，立陶宛大公国与波兰联姻结盟，并逐步接受基督教，政治中心也向西转移到了维尔纽斯和特拉凯。克尔纳韦的重要性开始下降。而最终的毁灭性一击，来自它古老的敌人。1390年，条顿骑士团发动了一次猛烈的十字军东征，目标直指这个依然象征着异教过往的“老巢”。骑士团的军队摧毁了木质城堡，并纵火焚烧了整个城镇。大火是如此猛烈，以至于将许多木质结构炭化并封存在泥土之下，这反而为后世奇迹般地保存了那一刻的城市样貌。从此，克尔纳韦被遗忘了，它从历史的前台彻底隐退，变成了一片被农田和牧草覆盖的寂静丘陵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几个世纪，农民们在耕作时偶尔会翻出一些古币或箭头，本地流传着关于“巨人坟墓”和“黄金宝藏”的传说。19世纪，立陶宛民族复兴运动的诗人和作家们重新发现了它，将其奉为民族精神的圣地。但真正的科学重生，是在20世纪下半叶。系统性的考古发掘展开了，结果震惊了世界。考古学家们像翻阅一本巨书的书页一样，一层一层地揭示了从石器时代直到中世纪晚期的连续文化层，几乎没有中断。那些被火焚毁的屋舍、街道、工坊，甚至居民仓皇逃离时散落的物品，都被定格在1390年的那一天。1994年，立陶宛政府将这里设立为国家文化保护区。2004年，就在立陶宛加入欧盟的同一年，克尔纳韦考古遗址被列入联合国教科文组织世界遗产名录，这被视为对这个新生国家古老根源的最高认可。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间（至少6-8小时）进行深度探访。最佳抵达时间是上午9点左右，先在访客中心（博物馆）建立整体认知，然后趁上午光线好、体力佳时攀爬主要山丘。中午在河谷边野餐或返回村里简单用餐，下午参观博物馆内部和山丘下的教堂遗址，傍晚时分则留给河谷散步和感受日落时分的宁静氛围。这样的节奏张弛有度，既能覆盖所有重要节点，又留出了足够的时间去感受此地的“气场”，而非匆忙打卡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`山丘上的小路多为土路或草径，雨天会非常湿滑泥泞，务必穿着防滑、耐脏的户外鞋或徒步鞋。
遗址范围广阔且遮荫处不多，夏季阳光强烈，务必携带充足的饮用水、防晒霜和帽子，冬季则要穿足防风保暖衣物。
博物馆内的展品说明牌主要使用立陶宛语和英语，可租用语音导览器或提前在官网查看虚拟展览做功课。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先把车停在访客中心旁的免费停车场，走进去在接待处看一部15分钟的简短介绍影片，让那些沉默的山丘在你脑海中先活起来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后推开博物馆的后门，直接走向那片开阔地，第一眼就直面那五座一字排开的山丘堡垒的全景，定下神，感受最初的视觉冲击力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着清晰的木质栈道和台阶，先攀登最核心也最高的“Pilies山丘”（城堡山），站在顶端的瞭望台上，顺时针环视一周，辨认涅里斯河、远处的现代村庄以及其他四座兄弟山丘的位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡山下来，沿着标识走向“Lizdeika山丘”，这里是传说中异教高级祭司Lizdeika解读梦见铁狼预言的地方，试着在风中聆听那些古老神话的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过山丘群脚下那片平坦区域，那里有中世纪石质教堂的清晰地基遗迹和后来的天主教木教堂，静静坐在旁边的长椅上，想象信仰在这片土地上的变迁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到博物馆内，花上一两个小时，细细观看那些从你脚下泥土中出土的珍宝：异教女神的银制小雕像、精美的琥珀首饰、战斗留下的箭头，以及被火烧焦的粮粒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，一定要沿着涅里斯河边的自然小径走一走，从河谷向上仰望那些山丘，你会理解它们作为防御要塞的地理优势，并享受属于你自己的、与历史独处的宁静时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果是在夏至日前后来，不妨向村民打听傍晚庆典的地点，和当地人一起点燃篝火，编织橡树叶花环，体验一个活着的传统如何在这古老的圣地延续。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河谷仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是晴朗的下午，阳光从西侧照射山丘。站在河谷底部、靠近涅里斯河边的草地上，用广角镜头仰拍，将五座翠绿的山丘与天空中的云朵一同纳入画面，气势恢宏。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡山顶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，站在Pilies山丘的瞭望台，拍摄蜿蜒的涅里斯河、如绿色地毯般的河谷，以及散落其间的教堂尖顶和红色屋顶，构成一幅历史与现世交融的画卷。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`教堂遗址框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`利用中世纪石教堂遗留的地基矮墙作为前景框架，将对面的Aukuro山丘（祭坛山）作为背景焦点拍摄，形成强烈的古今对话感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆宝藏特写`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆内，利用自然光或柔和的展柜灯光，近距离拍摄那些精美的琥珀项链或带有独特符号的陶器，注意调整角度避免玻璃反光，捕捉千年手工艺的细腻质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`林间小径光影`}</h4>
                  <p className="text-sm text-gray-700">{`在通往山丘的山毛榉林栈道上，等待阳光穿透树叶形成一道道光柱的时刻，以漫步其间的旅人（可以是你的同伴）为背影焦点，营造出探索秘境的电影感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必查阅立陶宛民航局最新规定并避开博物馆及人群上空，尊重遗址的庄严氛围。`}</li>
                <li>• {`拍摄当地居民或参与传统活动的村民时，请先微笑示意并获得对方同意，保持礼貌距离。`}</li>
                <li>• {`黄昏是拍摄遗址魔法时刻的黄金期，但日落后天色暗得很快，建议带上三脚架以便进行长曝光拍摄，捕捉蓝调时刻山丘的静谧轮廓。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村民宿体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在克尔纳韦村庄里的传统木屋民宿，主人通常会端上自家做的土豆饺子“塞拜基”和新鲜蜂蜜，夜晚安静得只能听到虫鸣，推开窗就能看见星幕下的山丘剪影。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林隐居小屋`}</h4>
                  <p className="text-sm text-green-800">{`在遗址公园外围的松树林中，有几处隐蔽的生态小木屋，配备桑拿房，白天徒步探索历史，晚上在星空下蒸桑拿，体验立陶宛人最爱的放松方式。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`维尔纽斯往返之选`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求更多餐饮娱乐选择，可以下榻在维尔纽斯老城或市中心，选择一家设计酒店或优雅公寓，白天驱车来克尔纳韦深度游，晚上享受首都的繁华与便利。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园酒店奢华`}</h4>
                  <p className="text-sm text-purple-800">{`驱车约20-30分钟，在附近的乡村地区寻找由古老贵族庄园改造的精品酒店，体验在百年公园中散步，在复古餐厅享用现代立陶宛美食的惬意时光。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`克尔纳韦村内住宿数量有限且非常原生态，夏季和节庆期间非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在维尔纽斯，务必计算好往返交通时间，并注意租车或查询末班巴士时间，避免夜间滞留。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`立陶宛乡村治安普遍良好，但夜间缺乏路灯，如果住在村里，建议自备一个小手电用于晚间散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克尔纳韦的时候，我的鞋底沾着那里特有的、微湿的黄土，手指间似乎还残留着触摸博物馆里那块被千年前篝火烧黑的石头时的凉意。回望那一片在暮色中愈发深沉静谧的绿色丘陵，我突然觉得，它不像那些用大理石和黄金堆砌起来的宫殿城堡，急于向你证明什么。它只是在那里，坦然、平静，甚至有些谦卑地，展示着时间的层次和生命的韧性。它告诉你，伟大文明的起点，可能就是这样一片朴素的、易守难攻的河畔高地；辉煌的历史，也是由无数平凡人的炊烟、祈祷、战斗与遗忘层层累积而成。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求瞬间刺激和视觉奇观的世界里，克尔纳韦提供了一种截然不同的旅行价值。它不给你即时的震撼，而是给你一种缓慢的、渗透内心的平静与思索。它邀请你做的，不是拍照打卡，而是真正地行走、触摸、想象和聆听。聆听风穿过丘陵讲述的古老传说，聆听脚下土地里封存的无声史诗。对于任何想要超越肤浅观光，去探寻一个民族灵魂最深处的根脉，去理解历史如何像一棵树那样从泥土中生长出来的人而言，克尔纳韦都是一堂无法替代的必修课。它或许没有名字响亮的“欧洲必去”标签，但正是这份低调与深厚，让它成为真正旅行者心目中，一颗隐藏的宝石，一个能让你忘记时间、也找到时间的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vilnius-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔纽斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vilnius Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hill-of-crosses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希奥利艾十字架山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hill of Crosses</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kaunas-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考纳斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaunas Old Town</p>
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
