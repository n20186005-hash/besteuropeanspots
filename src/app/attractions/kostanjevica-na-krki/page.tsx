import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克尔卡河畔科斯塔涅维察 Kostanjevica na Krki｜探秘斯洛文尼亚唯一的河心岛古镇与露天艺术殿堂 - 最佳欧洲景点',
  description: '车子穿过斯洛文尼亚东南部一片宁静的、绿意盎然的丘陵后，忽然，一片开阔的水域和树林出现在眼前。克尔卡河在这里变得格外温柔宽广，而就在水中央，一个长满了绿树、点缀着红瓦屋顶的小岛，像一颗精心雕琢的翡翠，安然躺在绸缎般的河面上。这就是你的第一眼——科斯塔涅维察。没有喧闹的旅游大巴，没有密集的商店招牌，只有',
}

export default function KostanjevicaNaKrkiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛文尼亚', href: '/destinations/europe' },
            { label: '克尔卡河畔科斯塔涅维察（城镇）', href: '/destinations/europe' },
            { label: '克尔卡河畔科斯塔涅维察', href: '/attractions/kostanjevica-na-krki' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克尔卡河畔科斯塔涅维察・Kostanjevica na Krki・斯洛文尼亚・克尔卡河畔科斯塔涅维察（城镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子穿过斯洛文尼亚东南部一片宁静的、绿意盎然的丘陵后，忽然，一片开阔的水域和树林出现在眼前。克尔卡河在这里变得格外温柔宽广，而就在水中央，一个长满了绿树、点缀着红瓦屋顶的小岛，像一颗精心雕琢的翡翠，安然躺在绸缎般的河面上。这就是你的第一眼——科斯塔涅维察。没有喧闹的旅游大巴，没有密集的商店招牌，只有一座安静的桥连接着岛屿与大陆。当你走过桥，脚下木板发出轻微的吱呀声，时间立刻慢了下来。
登上岛，你首先感受到的是一种被水环绕的、湿漉漉的宁静。空气里有河水的清冽、青草的芬芳，还有老房子石墙上淡淡的苔藓气息。小镇只有两条主要的卵石路，形成一个温柔的“8”字，串联起不过百户人家。路很窄，阳光透过路旁菩提树茂密的枝叶，在斑驳的粉彩墙面上洒下晃动的光斑。你会看到老爷爷在自家门廊下打理盆栽，窗台上放着空牛奶瓶，自行车随意靠在墙边。这里不像威尼斯那样充满戏剧性的华丽，而是一种内敛的、田园诗般的栖息感。小镇的存在本身，就是一件与环境完美融合的艺术品。
但科斯塔涅维察最打动我的，是它那奇妙的双重灵魂。一方面，它是沉睡的、历史的。街道尽头，古老的圣雅各布教堂钟楼静静矗立。而当你穿过另一座小桥，走向岛屿对岸的绿地，巨大而略带残破的科斯塔涅维察修道院赫然出现，厚重的石墙诉说着近八百年的风雨。另一方面，这里又充满了鲜活的艺术气息。就在修道院的回廊和房间里，藏着一个顶尖的现代美术馆。更妙的是，在修道院后方广阔的草地上，散布着数十件来自世界各地的巨大木雕作品——这就是著名的Forma Viva公园。古老的石墙下，是充满想象力的当代雕塑，历史与当下在此进行着一场无声而有力的对话。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子穿过斯洛文尼亚东南部一片宁静的、绿意盎然的丘陵后，忽然，一片开阔的水域和树林出现在眼前。克尔卡河在这里变得格外温柔宽广，而就在水中央，一个长满了绿树、点缀着红瓦屋顶的小岛，像一颗精心雕琢的翡翠，安然躺在绸缎般的河面上。这就是你的第一眼——科斯塔涅维察。没有喧闹的旅游大巴，没有密集的商店招牌，只有一座安静的桥连接着岛屿与大陆。当你走过桥，脚下木板发出轻微的吱呀声，时间立刻慢了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "登上岛，你首先感受到的是一种被水环绕的、湿漉漉的宁静。空气里有河水的清冽、青草的芬芳，还有老房子石墙上淡淡的苔藓气息。小镇只有两条主要的卵石路，形成一个温柔的“8”字，串联起不过百户人家。路很窄，阳光透过路旁菩提树茂密的枝叶，在斑驳的粉彩墙面上洒下晃动的光斑。你会看到老爷爷在自家门廊下打理盆栽，窗台上放着空牛奶瓶，自行车随意靠在墙边。这里不像威尼斯那样充满戏剧性的华丽，而是一种内敛的、田园诗般的栖息感。小镇的存在本身，就是一件与环境完美融合的艺术品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但科斯塔涅维察最打动我的，是它那奇妙的双重灵魂。一方面，它是沉睡的、历史的。街道尽头，古老的圣雅各布教堂钟楼静静矗立。而当你穿过另一座小桥，走向岛屿对岸的绿地，巨大而略带残破的科斯塔涅维察修道院赫然出现，厚重的石墙诉说着近八百年的风雨。另一方面，这里又充满了鲜活的艺术气息。就在修道院的回廊和房间里，藏着一个顶尖的现代美术馆。更妙的是，在修道院后方广阔的草地上，散布着数十件来自世界各地的巨大木雕作品——这就是著名的Forma Viva公园。古老的石墙下，是充满想象力的当代雕塑，历史与当下在此进行着一场无声而有力的对话。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克尔卡河畔科斯塔涅维察`} />
                <InfoRow label="英文名称" value={`Kostanjevica na Krki`} />
                <InfoRow label="正式名称" value={`Kostanjevica na Krki`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`克尔卡河畔科斯塔涅维察（城镇）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛文尼亚唯一一座建于河心岛屿上的古镇，是中世纪西多会精神与现代艺术生命力的交汇点。`} />
                <InfoRow label="建筑特色" value={`独特的卵形岛屿城镇布局，环绕的克尔卡河成为天然护城河，镇内遍布朴素的巴洛克风格民居与宏伟的修道院遗址。`} />
                <InfoRow label="建筑风格" value={`中世纪城镇规划与巴洛克风格民居的迷人交融，修道院建筑则体现了从罗马式到晚期哥特式的过渡。`} />
                <InfoRow label="文化价值" value={`从西多会修道院的静修之地，成功蜕变为享誉欧洲的当代艺术与雕塑露天博物馆，见证了历史遗迹的创造性重生。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。科斯塔涅维察修道院建筑群（现为博哈克美术馆）开放时间通常为周二至周日10:00-18:00，周一闭馆，冬季（11月至3月）开放时间可能缩短，具体需查询官网。Forma Viva木雕公园为露天场地，24小时可进入，但建议白天游览。部分小型画廊和咖啡馆有各自的营业时间，夏季延长。`} />
              <InfoRow label="门票价格" value={`进入古镇本身免费。博哈克美术馆（修道院）门票约6-8欧元，学生、老人及团体有折扣，具体票价随展览变化。Forma Viva木雕公园免费参观。乘坐传统平底船（pletna）游河费用约5-10欧元/人，视行程而定。`} />
              <InfoRow label="地址" value={`Kostanjevica na Krki, 8311 Kostanjevica na Krki, Slovenia`} />
              <InfoRow label="交通方式" value={`从斯洛文尼亚首都卢布尔雅那的约热·普奇尼克机场出发，最方便的方式是租车自驾。沿A2高速公路向东，转入地方道路前往新梅斯托，再沿指示牌前往克尔卡河畔科斯塔涅维察，全程约1小时15分钟。如果乘坐公共交通，先从卢布尔雅那中央巴士站乘坐前往“Novo Mesto”的巴士（约1.5小时，班次较多），在Novo Mesto巴士总站换乘前往“Kostanjevica na Krki”的本地巴士（约25分钟，班次较少，工作日约每小时一班，周末大幅减少）。务必提前查询并衔接好时刻表。小镇本身很小，所有景点均可步行到达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从1234年说起。当时，西多会的修士们正在为他们的新修道院寻找一个理想的、远离尘嚣的静修之所。他们看中了克尔卡河中央这个狭长的岛屿。这里被水流环绕，天然与世隔绝，正是践行他们清规、专注祈祷与劳作的完美地点。于是，“圣玛利亚修道院”在此奠基。修士们排干部分沼泽，加固岛屿，建立了自给自足的社区。这座修道院迅速成为下卡尼奥拉地区重要的精神和文化中心，拥有大量的抄经室和藏书，吸引着学者和虔诚的信徒。岛屿小镇也围绕着修道院逐渐发展起来，获得了城镇特权，依靠河运和农业维持着平静的生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静在15世纪末被打破。奥斯曼帝国的铁骑横扫巴尔干半岛，并多次侵袭斯洛文尼亚地区。科斯塔涅维察这座河心岛，从宁静的避世之所变成了易守难攻的堡垒，但也成为了攻击的目标。修道院和城镇在战火中遭受了严重的破坏。烽烟散去后，人们开始重建家园。到了17、18世纪，小镇呈现出我们今天看到的巴洛克风貌。那些色彩柔和、线条简洁的民居被修建起来，修道院的部分建筑也得到了巴洛克风格的改造。小镇依旧宁静，但已从纯粹的宗教中心，转变为一座风景如画的河畔农业小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在20世纪。第二次世界大战的炮火再次重创了修道院建筑群，战后它一度沦为废墟，仿佛要被历史遗忘。但就在此时，艺术的力量登场了。上世纪60年代，一群富有远见的斯洛文尼亚艺术家发起了“Forma Viva”国际雕塑研讨会。他们看中了修道院旁这片废弃的草地和古老的氛围，邀请世界各地的雕塑家前来，以当地的橡木为材料，进行现场创作。年复一年，一件件充满生命力的木雕作品在这片历史遗迹旁诞生、伫立。古老的废墟与现代艺术产生了不可思议的化学反应，废墟被赋予了新的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与此同时，修道院的主体建筑没有被简单修复成原样，而是经过精心设计，改造成为“博哈克美术馆”，以纪念斯洛文尼亚现代艺术大师博哈克·博古米尔。如今，里面收藏并轮换展出着20世纪斯洛文尼亚最杰出的绘画和雕塑作品。于是，科斯塔涅维察完成了一次华丽的蜕变：从一个濒临消失的中世纪遗迹，变成了一个活着的、呼吸着的艺术圣地。历史没有死去，它成为了当代创作的基石和背景。每年夏天，艺术活动、音乐会和工作坊让这里充满活力，而平时，它又回归那种令人心安的沉思般的宁静。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间，充分感受这座岛屿小镇的晨昏之美。最好在上午九点左右抵达，这时阳光正好，游客稀少，你能捕捉到小镇最宁静的模样。整个游览节奏应该是悠闲的、散步式的。上午专注于探索河心岛古镇本身，沿着卵石路慢慢走，感受当地生活气息，参观镇中心的小教堂。中午在河畔找家咖啡馆或餐馆享用一顿慢午餐。下午的精华则留给河对岸的修道院建筑群和Forma Viva木雕公园，先在美术馆里欣赏艺术，然后步入广阔的雕塑公园，让身心在自然与艺术的交融中放松。傍晚时分，可以乘坐一次传统的平底船，从河上回望小镇，看夕阳为红瓦屋顶和古老石墙镀上金色。这样的安排能让你由内到外、由古至今，立体地体验科斯塔涅维察的全部魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双舒适耐走的鞋，因为小镇是卵石路，雕塑公园也是自然的草地和土路。夏季来访记得携带驱蚊水，河畔和公园绿地蚊虫较多。如果计划乘坐巴士，务必在前一天晚上仔细核对从新梅斯托返回的末班车时间，错过班次可能会很麻烦。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从连接大陆与岛屿的主桥登上科斯塔涅维察，感受脚下木板的声音和第一缕照在河面上的阳光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着岛屿中央的卵石主路慢行，经过那些刷着淡黄、浅粉和薄荷绿色的巴洛克民居，留心观察精美的门廊和窗台上的小花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到小镇中心的三角形广场，在古老的圣雅各布教堂前停留，听一听可能响起的钟声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家临河的老屋改造的咖啡馆，点一杯本地咖啡，坐在户外看鸭子悠然划过如镜的水面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过小镇另一侧的小桥，走向对岸那片开阔的绿地，宏伟的科斯塔涅维察修道院遗址和现代美术馆建筑逐渐展现全貌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个半小时沉浸在博哈克美术馆里，不仅在展厅看画，更要留意阳光透过高窗在古老回廊石地上移动的光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入修道院后方广阔的Forma Viva木雕公园，像寻宝一样在树林和草地间发现那些形态各异的巨大橡木雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，回到河畔，跳上一艘船夫用长竿撑动的传统平底船，让船缓缓绕岛半周，从最佳角度欣赏这座“岛屿小镇”的全景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主桥中段全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在连接大陆与岛屿的木质主桥中央，用广角镜头拍摄小镇红瓦屋顶鳞次栉比、教堂钟楼高耸、河水倒映天光的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`修道院拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，阳光直射时，进入修道院回廊，寻找阳光穿过拱廊在对面石墙和地面上投下强烈几何光影的位置，拍摄极简而富有韵律感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`木雕公园的对话`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光偏西时，在Forma Viva公园里，寻找一个角度，将一件现代木雕作为前景，将古老的修道院石墙或塔楼作为背景，构成历史与当代的视觉对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`河畔倒影与平底船`}</h4>
                  <p className="text-sm text-gray-700">{`无风的晴天，在岛屿南侧河岸边，蹲下放低机位，拍摄巴洛克民居和绿树在水中的完美倒影，如果能等到一艘传统的平底船划过画面中心就更妙了。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`隐秘小巷与门廊细节`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，钻进小镇某条安静的侧巷，聚焦于一扇斑驳的彩色木门、一个生锈的门环、或者一个爬满藤蔓的巴洛克式窗框，捕捉小镇生活的细腻质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除河面及树叶的反光，让照片色彩更饱和，倒影更清晰。拍摄民居和居民生活时请保持尊重，如需拍摄人物特写，最好先微笑示意并获得同意。无人机飞行在理论上允许，但必须远离人群，并注意小镇面积小，避免干扰居民，最好在公园开阔地起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔静谧民宿`}</h4>
                  <p className="text-sm text-blue-800">{`岛屿对岸大陆一侧的私人家庭民宿，房间不多但异常温馨，主人会准备丰盛的 homemade 早餐，从后院花园就能直接散步到河边，看对岸小镇灯火。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院艺术之家`}</h4>
                  <p className="text-sm text-green-800">{`由修道院附属建筑改造的简约风格客房，位置无与伦比，夜晚和清晨独享整个艺术公园的宁静，仿佛住在露天博物馆和历史的怀抱里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡村庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`距离小镇几分钟车程的一座19世纪庄园改造的精品酒店，拥有大片葡萄园和花园，房间宽敞复古，提供斯洛文尼亚传统美食和本地葡萄酒，享受田园贵族的慵懒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`新梅斯托便捷酒店`}</h4>
                  <p className="text-sm text-purple-800">{`若追求交通便利或预算有限，可选择住在附近的城市新梅斯托，有更多现代酒店选择，白天乘短途巴士来小镇游览，晚上享受城市的餐饮便利。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇内的住宿选择非常有限，尤其是旺季，务必提前数月预订。如果选择住在岛对岸或附近乡村，请确认是否有接送服务或租车，因为夜间可能没有公共交通。无论住在哪里，请珍惜这里的宁静，晚上10点后避免喧哗。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开科斯塔涅维察很久以后，我时常会想起那里水波流动的声音，和阳光下木雕温暖的纹理。这个地方教会我的，是一种“柔软的韧性”。你看那河流，千年如一日地环绕冲刷，岛屿却未曾消失，反而被滋养得绿意葱茏。你看那修道院，历经战火沦为废墟，却没有成为博物馆里死去的标本，反而在艺术的浸润下获得了全新的、更蓬勃的生命。它不像那些宏伟到令人敬畏的大教堂或城堡，它很小，很安静，但它完美地诠释了如何与历史共存，如何让过去成为未来的养分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求快速和炫目的时代，科斯塔涅维察是一种温柔的抵抗。它邀请你停下脚步，坐在河岸边发一会儿呆，在雕塑公园里迷一次路，去感受时间既可以凝固在石头里，也可以流动在艺术家的刻刀下。它告诉我们，真正的深度不在于景点的数量，而在于你是否愿意让一个地方的气息进入你的记忆。对于每一位厌倦了打卡、渴望在旅途中找到内心共鸣的旅行者来说，这座斯洛文尼亚的河心岛小镇，不仅仅是一个目的地，更是一个关于沉淀、重生与宁静的生动寓言。来这里，不只是看一个景点，而是体验一种可能的生活方式。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/idrija-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊德里亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Idrija</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piran-salt-pans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰盐田与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran Salt Pans & Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/celje-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采列城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Celje Castle</p>
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
