import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦尔登贝格 Werdenberg｜探访欧洲最小的木结构小镇，走进一本活着的童话书 - 最佳欧洲景点',
  description: '朋友，想象一下，你穿过一片宁静的瑞士田园，突然，一个像是从童话绘本里直接剪下来、然后轻轻放在山丘下、湖水边的小镇跳入眼帘。那就是韦尔登贝格给你的第一眼震撼。它不是“很大”，而是“很小”，小到超乎想象——整个核心区大概只有一个足球场那么大，几十栋糖果色的木屋肩并肩、脸贴脸地挤在一起，像个怕冷的孩子紧紧...',
}

export default function WerdenbergVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '韦尔登贝格', href: '/attractions/werdenberg-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦尔登贝格・Werdenberg・瑞士・圣加仑州（具体为韦尔登贝格镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你穿过一片宁静的瑞士田园，突然，一个像是从童话绘本里直接剪下来、然后轻轻放在山丘下、湖水边的小镇跳入眼帘。那就是韦尔登贝格给你的第一眼震撼。它不是“很大”，而是“很小”，小到超乎想象——整个核心区大概只有一个足球场那么大，几十栋糖果色的木屋肩并肩、脸贴脸地挤在一起，像个怕冷的孩子紧紧簇拥着中央的广场和喷泉。你的第一感觉不是壮观，而是无比的亲切和可爱。
走近了，感官的细节才扑面而来。空气里有老木头在阳光下散发出的、混合着苔藓和岁月的气息，淡淡的，很温暖。脚下是凹凸不平的鹅卵石小路，走上去发出好听的“嗒嗒”声，因为实在太安静了，这声音显得格外清晰。你几乎能听到隔壁窗台上天竺葵被微风拂过的沙沙响，能闻到某扇虚掩的门后飘出的新鲜咖啡香。这里的色彩是明快的——姜黄色的外墙、赭红色的窗棂、翠绿色的百叶窗，还有每家每户窗台上怒放的鲜花，红的天竺葵、粉的矮牵牛，像给这些古老的木屋戴上了永不凋零的花环。时间在这里不是流逝，而是沉淀，一层层地包裹着这些房子，让它们看起来像裹着糖霜的姜饼屋，甜蜜又坚实。
你会发现，这不仅仅是一个景点，它至今依然是一个“活着”的社区。虽然只有百来位居民，但你会看到老爷爷在自家门廊下读报，主妇在窗前擦拭玻璃，邮差骑着自行车慢悠悠地穿过小巷。那座守护着小镇的城堡，如今一部分是博物馆，一部分是私人住所。这里的居民既是历史遗产的守护者，也是日常生活的实践者。这种“活态”感，是韦尔登贝格最动人的魅力。它没有变成冰冷的博物馆展区，而是一个被精心呵护着的、关于“家园”的古老梦想。
所以，来到韦尔登贝格，你不是来“看”一个古镇，而是来“进入”一个童话的尺度。在这里，你会重新发现“小”的美好和“慢”的奢侈。它像一颗被时光遗忘的琥珀，里面凝固着中世纪欧洲小镇最纯粹、最完整的样子。你会不自觉地放轻脚步，压低声音，生怕惊扰了这份持续了八百年的宁静梦境。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你穿过一片宁静的瑞士田园，突然，一个像是从童话绘本里直接剪下来、然后轻轻放在山丘下、湖水边的小镇跳入眼帘。那就是韦尔登贝格给你的第一眼震撼。它不是“很大”，而是“很小”，小到超乎想象——整个核心区大概只有一个足球场那么大，几十栋糖果色的木屋肩并肩、脸贴脸地挤在一起，像个怕冷的孩子紧紧簇拥着中央的广场和喷泉。你的第一感觉不是壮观，而是无比的亲切和可爱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，感官的细节才扑面而来。空气里有老木头在阳光下散发出的、混合着苔藓和岁月的气息，淡淡的，很温暖。脚下是凹凸不平的鹅卵石小路，走上去发出好听的“嗒嗒”声，因为实在太安静了，这声音显得格外清晰。你几乎能听到隔壁窗台上天竺葵被微风拂过的沙沙响，能闻到某扇虚掩的门后飘出的新鲜咖啡香。这里的色彩是明快的——姜黄色的外墙、赭红色的窗棂、翠绿色的百叶窗，还有每家每户窗台上怒放的鲜花，红的天竺葵、粉的矮牵牛，像给这些古老的木屋戴上了永不凋零的花环。时间在这里不是流逝，而是沉淀，一层层地包裹着这些房子，让它们看起来像裹着糖霜的姜饼屋，甜蜜又坚实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这不仅仅是一个景点，它至今依然是一个“活着”的社区。虽然只有百来位居民，但你会看到老爷爷在自家门廊下读报，主妇在窗前擦拭玻璃，邮差骑着自行车慢悠悠地穿过小巷。那座守护着小镇的城堡，如今一部分是博物馆，一部分是私人住所。这里的居民既是历史遗产的守护者，也是日常生活的实践者。这种“活态”感，是韦尔登贝格最动人的魅力。它没有变成冰冷的博物馆展区，而是一个被精心呵护着的、关于“家园”的古老梦想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，来到韦尔登贝格，你不是来“看”一个古镇，而是来“进入”一个童话的尺度。在这里，你会重新发现“小”的美好和“慢”的奢侈。它像一颗被时光遗忘的琥珀，里面凝固着中世纪欧洲小镇最纯粹、最完整的样子。你会不自觉地放轻脚步，压低声音，生怕惊扰了这份持续了八百年的宁静梦境。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦尔登贝格`} />
                <InfoRow label="英文名称" value={`Werdenberg`} />
                <InfoRow label="正式名称" value={`Werdenberg`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`圣加仑州（具体为韦尔登贝格镇）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座自13世纪建立以来，基本保持原貌、从未被战争彻底摧毁的微型中世纪城镇典范。`} />
                <InfoRow label="建筑特色" value={`紧凑至极的棋盘格布局，围绕一个小广场密集排列着数十栋颜色鲜艳、保存完好的中世纪木结构房屋。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪晚期至文艺复兴时期的瑞士木结构建筑风格，部分带有巴洛克时期的装饰元素。`} />
                <InfoRow label="文化价值" value={`它是欧洲城市化进程中的一个“活化石”，展现了前工业时代社区生活的原始尺度和人与建筑的亲密关系。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。核心景点韦尔登贝格城堡的开放时间一般为每年4月至10月，周二至周日 10:00-17:00；11月至次年3月开放时间缩短或仅周末开放，行前务必查询官网确认。小镇内的私人博物馆和部分木屋参观需提前预约或随缘开放。`} />
              <InfoRow label="门票价格" value={`进入小镇本身免费。韦尔登贝格城堡门票约8瑞士法郎（成人），持有瑞士旅行通票可能享受折扣。小镇内的微型博物馆捐赠入场。所有价格仅供参考，请以现场为准。`} />
              <InfoRow label="地址" value={`Werdenberg, 9470 Werdenberg, Switzerland`} />
              <InfoRow label="交通方式" value={`最近的国际机场是苏黎世机场（ZRH）。从苏黎世机场或苏黎世中央火车站出发，乘坐开往“Sargans”的火车（约1小时车程，班次频繁）。在Sargans火车站下车后，在站前广场换乘511路邮政巴士（PostBus），约5-10分钟即可抵达“Werdenberg, Dorf”站。巴士班次约每小时1-2班，可使用瑞士旅行通票。更诗意的抵达方式是：从Sargans火车站步行约20分钟，穿过田园，远远看见那片童话木屋群坐落在山丘与湖泊之间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲韦尔登贝格的故事，我们得回到13世纪。那时，控制这片区域的贵族们发现，在瓦伦湖（Lake Walen）尽头、被山丘环抱的这片冲积平原上，是个设立关卡、收取过路费的好地方。于是，大约在1228年左右，哈布斯堡王朝的藩侯们下令，在此修建一座城堡和一个为其服务的小镇。从诞生之初，韦尔登贝格的命运就和它头顶上那座石砌城堡紧紧绑在了一起。它的建立不是为了扩张，而是为了控制和经营这一小片战略要地。因此，它的规划极其紧凑高效，仿佛是用尺子精心丈量过，在最小的面积内容纳下守卫、工匠、仆役等所有城堡运转所需的人员。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几百年，韦尔登贝格像欧洲无数小镇一样，在领主权杖的阴影下缓慢生长。它幸运地避开了席卷欧洲的诸多大规模战火，但也经历过几乎所有木结构城镇的噩梦——火灾。历史记录中最大的一场火发生在1556年，几乎将小镇夷为平地。但你看今天这些色彩鲜艳的房子，它们正是那次浴火重生后的见证。灾后重建遵循了原有的街道格局和建筑方式，人们用熟悉的技艺和材料，在原址上重建家园。正是这种“重建”而非“新建”，让它保留了最原始的中世纪肌理。火灾的教训也被刻入建筑——你会注意到一些房子外墙上的古老日期铭文和象征防火的图案，那是先民们对无常命运最朴素的祈祷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮转到18、19世纪，当欧洲各大城市因工业革命而疯狂膨胀时，韦尔登贝格却因为地理空间的极端局限（三面环山一面临湖）和交通地位的改变，完全错过了现代化的浪潮。它仿佛被飞速前进的时代列车遗忘在了站台上。这听起来像是一种不幸，但今天看来，却是最大的幸运。因为没有空间建造新式工厂和宽阔马路，它被迫保持了原样。当别的古镇被拆改得面目全非时，韦尔登贝格却因为“太小”和“太不重要”，意外地成了一枚时间胶囊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在20世纪。人们开始意识到这种“未变”的珍贵。1956年，瑞士著名的文化遗产保护先驱、艺术史学家约翰内斯·杜斐博士发起了一场声势浩大的“拯救韦尔登贝格”运动。他和他领导的基金会，没有选择将居民迁走、把小镇做成空壳博物馆，而是开创性地提出了“活态保护”理念。他们从私人手中逐步收购濒危的木屋，进行精心的、修旧如旧的结构加固和修复，然后再以附带保护条款的方式，出售或出租给愿意在此生活并承诺维护遗产的居民。这一模式成为世界遗产保护的典范。今天的韦尔登贝格，每一片木板、每一块彩绘墙面背后，都是现代保护理念与古老生活智慧结合的成果。它不是凝固的标本，而是在严格保护规则下，依然呼吸、依然跳动着的古老心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，漫步在韦尔登贝格的巷弄里，你走过的不仅是13世纪的石板路，也是20世纪一场伟大文化遗产保卫战的胜利战场。这里的一砖一木，都诉说着关于守护、关于选择、关于在剧变的世界里如何安放一段脆弱历史的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的上午，最好是工作日，抵达韦尔登贝格。整个深度游览大约需要3-4小时，节奏务必放慢，因为这里的美妙在于细节和氛围，而非打卡点的数量。上午光线柔和，适合拍照，而且游客相对稀少，你能独享小镇的宁静。游览从外围开始，先建立整体印象，再深入核心区细细品味，最后登上城堡俯瞰全局，这样的顺序能让你对这座微型小镇的空间魔法有最深刻的体会。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇巷道狭窄且多为凹凸不平的原始石路，请务必穿一双舒适防滑的平底鞋。参观居民私人院落和花园时，请保持礼貌距离，未经允许不要进入或拍照。城堡内的楼梯可能较为陡峭昏暗，上下时请注意安全。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从湖边的步道开始，远远地欣赏小镇全景，看那些彩色的木屋像精致的模型般镶嵌在青山绿水之间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石拱城门，正式踏入小镇内部，立刻被鹅卵石铺就的、只有几步宽的主巷和两旁倾斜的古屋墙面所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在小镇中心的迷你广场驻足，听一听古老的喷泉汩汩的水声，观察广场周边木屋上百花争艳的窗台和绘有图案的湿壁画外墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意选一条岔开的小巷钻进去，用指尖轻轻触摸那些历经风雨、纹理深刻的深色木梁，仰头看看二楼悬挑的窗户几乎要与对街的屋檐碰在一起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访镇上的微型民俗博物馆（如果开放），看看在一个橱窗里就能展现完毕的、关于小镇居民几个世纪生活方式的浓缩展览。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓坡走上山丘，参观那座石砌的韦尔登贝格城堡，在城堡的庭院和展厅里了解这片土地的领主史和保护史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上城堡的塔楼或露台，从这里俯瞰整个小镇的棋盘格布局，看红色屋顶如鱼鳞般紧密排列，远眺湖泊和阿尔卑斯山峦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，不妨在湖边找张长椅坐下，什么都不做，只是看着天鹅游过，倒影中的小镇微微荡漾，让这份宁静彻底浸透你。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡露台全景俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前或下午四点后，阳光斜射时最佳，将整个小镇的彩色屋顶、棋盘街道和远处的湖泊、山峦一同纳入镜头，构图尽量宽广。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中心广场仰拍巷弄`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射进狭窄巷弄时，站在广场喷泉边，用广角镜头仰拍两侧木屋夹着的一线天，捕捉木梁、鲜花与蓝天形成的几何构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`湖边倒影对称拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨无风或傍晚日落时分，在瓦伦湖靠近小镇的这一侧，寻找能将城堡和小镇建筑群完整倒映在水面的位置，拍出如梦似幻的对称画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`木屋门廊细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午的柔光下，聚焦任意一栋木屋的门廊、古老的黄铜门环、手绘的门牌号、或是布满岁月痕迹的木板纹理，讲述一栋房子的故事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从城外田园远眺`}</h4>
                  <p className="text-sm text-gray-700">{`日落前金色的“魔幻时刻”，从小镇南侧的田园或小径回望，将小镇、城堡、山丘一同收入画面，营造一幅古典的田园风景画。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尽量使用自然光，避免使用闪光灯，特别是拍摄木屋内景或湿壁画时，强光可能对脆弱的颜料造成损害。尊重居民隐私，避免将镜头直接对准屋内或正在休息的居民。多尝试不同的角度，低角度可以突出木屋的高耸和巷弄的深邃。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔宁静民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在小镇里或紧邻湖畔的百年木屋民宿，晚上游客散去后，你就能独享整个中世纪世界的寂静，枕着湖水的微澜入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山丘上庄园酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在附近山丘上的传统瑞士庄园酒店，房间拥有俯瞰整个韦尔登贝格盆地和湖泊的无敌视野，在露台上用早餐仿佛在欣赏一幅巨幅油画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`萨甘斯现代便利酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果追求交通和生活的便利，可以住在仅5分钟车程外的萨甘斯（Sargans）镇上，那里有更多现代化的酒店和餐厅选择，性价比更高。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`阿尔卑山间小屋`}</h4>
                  <p className="text-sm text-purple-800">{`对于自驾者，可以选择稍远一些的、位于附近阿尔卑斯山麓的温馨家庭旅馆，体验纯正的瑞士山居生活，清晨在牛铃声中醒来。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`韦尔登贝格小镇内的住宿极其有限且非常抢手，务必提前数月预订。萨甘斯作为交通枢纽，住宿选择多，且利用瑞士高效的公共交通，往返小镇非常方便。无论住在哪里，这里的夜晚都非常安静安全，是远离城市光污染的观星好地方。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开韦尔登贝格许久后，我常常想起的，不是某栋具体的房子，而是那种被“微小”和“完整”所包裹的奇异安全感。在这个一切都在追求更大、更快、更复杂的时代，韦尔登贝格像一个温柔而坚定的反驳。它告诉我们，一种美好的生活，可以只需要几十栋房子、一片广场、一口喷泉、一座守护的城堡，和一片倒映着一切的湖。它的价值不在于宏伟，而在于“幸存”的完整；它的魅力不在于展示权力，而在于诠释家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来一次韦尔登贝格。它是一次对感官和心灵的温柔校准。在这里，你会重新学会用脚步丈量空间，用眼睛捕捉色彩，用耳朵聆听寂静。你会感受到，历史不是教科书上冰冷的名字，而是门环上的铜绿、窗台上的鲜花、和邻居间抬头不见低头见的温度。它是一本打开的、依然在书写的生活之书，邀请每一个路过的人，读一读关于“小而美”的永恒诗篇。在这个浮躁的世界里，这样一个地方的存在本身，就是一种慰藉，一种希望。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chur-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/switzerland-birthplace-schwyz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施维茨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwyz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/murten-morat" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    穆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">穆尔滕（环湖古城墙）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Murten (Morat)</p>
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
