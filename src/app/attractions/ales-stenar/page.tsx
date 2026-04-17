import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿莱石阵 Ale‘s Stones | 波罗的海悬崖上的神秘维京石船 - 最佳欧洲景点',
  description: '车子停在那个小小的、带着咸腥味的渔港边，海鸥的叫声比导航更先告诉你到了。去往阿莱石阵的路，是一条需要你用双脚虔诚丈量的朝圣之路。顺着渔村旁那条被无数人踩踏过的泥土小径往上走，风毫无遮挡地从波罗的海吹来，带着刺骨却清新的凉意，卷起你的衣角和头发。两旁是低矮的灌木和在风中顽强摇曳的野草，你能闻到那种混合',
}

export default function AlesStenarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿莱石阵', href: '/attractions/ales-stenar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿莱石阵・Ale's Stones・瑞典・Kåseberga渔村，斯科讷省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子停在那个小小的、带着咸腥味的渔港边，海鸥的叫声比导航更先告诉你到了。去往阿莱石阵的路，是一条需要你用双脚虔诚丈量的朝圣之路。顺着渔村旁那条被无数人踩踏过的泥土小径往上走，风毫无遮挡地从波罗的海吹来，带着刺骨却清新的凉意，卷起你的衣角和头发。两旁是低矮的灌木和在风中顽强摇曳的野草，你能闻到那种混合了泥土、青草和海盐的独特气味。随着坡度升高，身后的红色小木屋和蓝色渔船变得越来越像玩具，而前方，只有广阔无垠、灰蓝色的天空。
然后，在一个不经意的转角，它就这样毫无预警地撞进你的视野里。没有围墙，没有售票亭，没有喧哗的游客中心。五十九块灰褐色的巨石，沉默而庄严地卧在翠绿的高地草甸之上，背对着更为深沉的、墨蓝色的波罗的海。它们排列成的形状是如此清晰——一艘巨大的、指向大海的石头船。那一刻，时间仿佛“嗡”地一声静止了。耳畔只剩下呼啸的风声，和远处海浪拍打悬崖基底传来的、永恒而低沉的轰鸣。你不由自主地放轻脚步，屏住呼吸，仿佛怕惊扰了某个沉睡千年的巨人的梦。这不是一个被精心裱框起来的“景点”，它就是这片土地本身，是风、海、石头与古老灵魂的直接对话。
走近了看，每一块石头都有独特的性格。有的表面光滑，被千年的雨水和海风打磨出了温润的包浆；有的则粗糙嶙峋，布满苔藓和地衣的斑驳痕迹。你可以伸手触摸它们，掌心传来的是一种冰凉而坚实的触感，一种超越了人类寿命的恒久。偶尔，你会看到当地人牵着狗在这里散步，或者一对情侣静静地坐在某块巨石旁看海。它早已融入当地生活的肌理，是晨跑的背景，是沉思的角落，是仲夏节庆祝时眺望日出的圣地。它的核心魅力，就在于这种极致的反差：既宏伟到令人心生敬畏，又朴素到仿佛自然生长于此；既充满了未解的神秘，又给人一种奇异的、宁静的归属感。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子停在那个小小的、带着咸腥味的渔港边，海鸥的叫声比导航更先告诉你到了。去往阿莱石阵的路，是一条需要你用双脚虔诚丈量的朝圣之路。顺着渔村旁那条被无数人踩踏过的泥土小径往上走，风毫无遮挡地从波罗的海吹来，带着刺骨却清新的凉意，卷起你的衣角和头发。两旁是低矮的灌木和在风中顽强摇曳的野草，你能闻到那种混合了泥土、青草和海盐的独特气味。随着坡度升高，身后的红色小木屋和蓝色渔船变得越来越像玩具，而前方，只有广阔无垠、灰蓝色的天空。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，在一个不经意的转角，它就这样毫无预警地撞进你的视野里。没有围墙，没有售票亭，没有喧哗的游客中心。五十九块灰褐色的巨石，沉默而庄严地卧在翠绿的高地草甸之上，背对着更为深沉的、墨蓝色的波罗的海。它们排列成的形状是如此清晰——一艘巨大的、指向大海的石头船。那一刻，时间仿佛“嗡”地一声静止了。耳畔只剩下呼啸的风声，和远处海浪拍打悬崖基底传来的、永恒而低沉的轰鸣。你不由自主地放轻脚步，屏住呼吸，仿佛怕惊扰了某个沉睡千年的巨人的梦。这不是一个被精心裱框起来的“景点”，它就是这片土地本身，是风、海、石头与古老灵魂的直接对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，每一块石头都有独特的性格。有的表面光滑，被千年的雨水和海风打磨出了温润的包浆；有的则粗糙嶙峋，布满苔藓和地衣的斑驳痕迹。你可以伸手触摸它们，掌心传来的是一种冰凉而坚实的触感，一种超越了人类寿命的恒久。偶尔，你会看到当地人牵着狗在这里散步，或者一对情侣静静地坐在某块巨石旁看海。它早已融入当地生活的肌理，是晨跑的背景，是沉思的角落，是仲夏节庆祝时眺望日出的圣地。它的核心魅力，就在于这种极致的反差：既宏伟到令人心生敬畏，又朴素到仿佛自然生长于此；既充满了未解的神秘，又给人一种奇异的、宁静的归属感。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿莱石阵`} />
                <InfoRow label="英文名称" value={`Ale's Stones`} />
                <InfoRow label="正式名称" value={`Ale's Stones`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`Kåseberga渔村，斯科讷省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯堪的纳维亚半岛保存最完好、最著名的船形石阵之一，是北欧铁器时代晚期的重要遗迹。`} />
                <InfoRow label="建筑特色" value={`五十九块巨大的硅质砂岩巨石，排列成一条轮廓分明的巨型石船，船首船尾指向特定天文方向。`} />
                <InfoRow label="建筑风格" value={`史前巨石建筑，船形墓冢或仪式场所的典型形制。`} />
                <InfoRow label="文化价值" value={`其精确的排列可能具有天文观测功能，是理解前基督教时代斯堪的纳维亚人宇宙观、丧葬传统和航海文化的一把关键钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年24小时开放。但强烈建议在白天光线充足时前往，冬季日照时间短，需提前规划。无任何围栏或限制区域。`} />
              <InfoRow label="门票价格" value={`完全免费。这是一个露天公共遗迹，没有任何售票处或闸机。`} />
              <InfoRow label="地址" value={`Ales stenar, Kåseberga, 271 78 Ystad, 瑞典`} />
              <InfoRow label="交通方式" value={`从马尔默中央车站乘坐Pågatågen列车前往于斯塔德（Ystad），车程约1小时，班次频繁。抵达于斯塔德后，在火车站外的巴士总站换乘当地巴士571路（方向：Kåseberga），在终点站下车，车程约25分钟。巴士班次有限（尤其是周末和冬季），务必提前查询时刻表。最灵活的方式是从马尔默或哥本哈根机场自驾，沿E65公路南行，拐向Kåseberga渔村的指示牌，车程约1-1.5小时。停车场（收费）在渔村港口旁，之后需沿一条清晰但略有坡度的徒步小径步行约15分钟上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于是谁，在什么时候，为什么建造了阿莱石阵，至今没有一个确切的答案。这正是它所有魅力的源泉——一片留给了想象力和学术争论的空白画布。主流考古学认为，这艘石头船大约诞生于公元600年左右的北欧铁器时代晚期，也就是维京时代拉开序幕的前夜。想象一下那个画面：一群穿着皮革和羊毛、可能刚刚掌握高超航海技术的人，聚集在这处俯瞰大海的制高点上。他们没有起重机，没有现代工具，全靠人力、滚木和绳索，从数公里外拖来这些每块重达数吨的巨石。这本身就是一个无声的宣言，宣告着这里发生的事，对于当时的社群而言，重要到值得付出如此惊人的努力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那么，它到底是为了什么而建？最浪漫也最广为流传的理论，认为这是一座宏伟的船冢。在维京文化中，船是通往死后世界的载具。一位伟大的酋长或英雄死后，他的躯体或骨灰被安放在一艘真正的船中，或者，像这里一样，用石头为他建造一艘不朽的船，让他的灵魂能永远航行。考古学家确实在石阵中心区域的地下探测到异常的磁力信号，暗示那里可能曾有火葬的痕迹，甚至可能埋藏着骨灰罐。站在这艘石船的中央，你会感到一种肃穆的仪式感，风穿过巨石仿佛呜咽，那是为一位早已被遗忘名字的王者奏响的永恒安魂曲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但另一个同样迷人的理论，则把它指向了星空。石阵的船头指向西南（冬至日落方向），船尾指向东北（夏至日出方向）。这种精确的排列绝非偶然。它很可能是一个巨型的天文日历或观测台，用来标记至关重要的冬至和夏至，指导播种、收获和祭祀的时间。对于依赖海洋和季节的社群而言，掌握太阳运行的秘密，就是掌握了生存的钥匙。在这个解读里，阿莱石阵不是死亡的纪念碑，而是生命的导航仪，是古代人类试图理解并顺应宇宙秩序的宏伟尝试。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，也少不了民间传说的添彩。当地人会说，这是一个名叫“阿莱”的巨人国王为自己和他的战士们建造的。或者，这些石头是被诅咒的士兵，因为亵渎神明而被永远凝固在此。这些故事没有考古依据，却赋予了石阵血肉和温度。它不再是一堆冷冰冰的石头，而是一个承载了恐惧、敬畏和英雄叙事的故事场。历经一千四百多年的风吹雨打、战争变迁，它奇迹般地基本保持了原貌。没有在宗教更迭中被摧毁，没有在现代开发中被移走，只是静静地待在这里，看波罗的海潮起潮落，看渔村从无到有，看世界天翻地覆。它的沉默，本身就是一部最深邃的历史书。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受阿莱石阵的灵魂，请务必安排一个完整的清晨或黄昏。我强烈推荐在日出后一小时内或日落前两小时抵达。这两个时段不仅光线最为魔幻——金色的晨光或暖黄的夕照会为巨石镀上神性的光辉，而且游客最少，你能获得近乎独享的宁静。整体游览建议留出2-3小时，这包括了从停车场步行上山的时间。节奏一定要慢，这不是打卡点，而是一次冥想式的漫步。先远观整体气势，再近触巨石细节，最后找一个背风的角落坐下，什么也不做，只是感受。这样的安排能让你从物理空间和精神层面，都逐步沉浸到这片场域独特的能量之中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`这里风极大，无论什么季节，都必须穿上防风防雨的外套并戴好帽子，体感温度通常比预报低很多。
务必穿一双结实防滑的鞋子，上山的泥土小径在雨后可能变得泥泞，悬崖边也需注意安全。
全程没有任何商业设施（连自动售货机都没有），请自带饮用水和小零食，并记得将所有垃圾带走。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从Kåseberga渔港的停车场出发，沿着清晰的海岸小径开始缓坡向上步行，让身体逐渐适应海风与高度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在路径的第一个开阔处停下，回头俯瞰那如积木般可爱的红顶渔村和蜿蜒的防波堤，完成从尘世到秘境的过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当巨石阵的全貌第一次跃入眼帘时，不要急于走近，站在外侧的高坡上，静静凝视这艘巨大的“石船”与浩瀚海洋构成的史诗画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着石阵外围顺时针慢慢行走，从不同角度观察每块巨石的形态和它们之间的相互关系，你会发现有些石头像卧兽，有些像船帆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一块看起来最“友好”的巨石，用手掌贴紧它粗糙冰凉的表面，闭上眼睛，感受风穿过石阵的呼啸，尝试与一千四百年的时光建立连接。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到石阵的“船头”或“船尾”位置，顺着巨石的指向望向海平线，想象古代建造者在此观测日出日落的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果天气允许，在石阵中央被保护的草地上坐下，打开简单的野餐，或者只是读几页书，让这份孤独的壮丽慢慢渗入心底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，绕到高地另一侧的悬崖边，看看那些被海浪千年侵蚀形成的奇特岩柱，完成一场从人类遗迹到自然奇观的对话。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`渔港仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`从Kåseberga渔港刚走上小径约50米处回望，可以用长焦镜头压缩空间，将渔船、小屋与远方高地上的石阵同框，构成一幅生动的古今生活对照图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`船形侧影与海`}</h4>
                  <p className="text-sm text-gray-700">{`站在石阵东南侧（即“船”的右侧）约30米外的草地上，在日落前半小时，低角度的阳光会将石阵拉出长长的影子，以波澜壮阔的大海为背景，拍下它最具雕塑感的完整侧影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`人物互动与巨石特写`}</h4>
                  <p className="text-sm text-gray-700">{`让同伴站在某一块纹理特别丰富的巨石旁，利用广角镜头贴近石头底部向上拍摄，既能捕捉巨石的雄伟质感，又能将人物、石阵线条与天空一同纳入，极具故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`中心低角度仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`躺在石阵中心区域的草地上（注意爱护草皮），用超广角镜头向上拍摄，以巨石为画框，捕捉流云飞速掠过天空的动态，表现时间的流逝与遗迹的永恒。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`悬崖边远景`}</h4>
                  <p className="text-sm text-gray-700">{`游览结束后，走到东面的悬崖边缘（注意安全！），可以拍摄到石阵背靠大陆、面朝大海的孤寂全景，尤其在雾气缭绕的清晨，氛围感绝佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`保护设备，海风带来的细沙和水汽对相机和无人机是巨大威胁，务必做好防护，更换镜头时务必背风。`}</li>
                <li>• {`无人机飞行在瑞典法规相对宽松，但在此历史遗迹上空飞行需极度谨慎，保持尊重的高度和距离，并注意强风影响。`}</li>
                <li>• {`尝试长时间曝光拍摄流云或夜间的星空（如果在此停留至深夜），石阵作为前景会得到令人震撼的作品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济渔村风情`}</h4>
                  <p className="text-sm text-blue-800">{`住在Kåseberga渔村自家的民宿里，通常是主人居住的红色木屋腾出的温馨房间，早晨能被真正的海鸥叫醒，步行五分钟就能开始上山之路。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经典瑞典设计`}</h4>
                  <p className="text-sm text-green-800">{`选择位于附近小镇于斯塔德（Ystad）市中心的精品酒店，由老建筑改造，拥有北欧风格的极简内饰，逛完石头阵回来可以享受热闹的城镇生活和美味的餐厅。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐秘乡村庄园`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时入住斯科讷乡间一座18世纪的宁静庄园酒店，周围是麦田与森林，在壁炉旁享用完晚餐后，夜空清澈得足以让你回想白天石阵的星空指向。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特海岸灯塔`}</h4>
                  <p className="text-sm text-purple-800">{`预订一座由古老灯塔改造的独特住宿，通常距离石阵车程不远，独占一小片海岸，体验被360度海景与历史感包围的夜晚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是斯科讷省的旅游旺季，务必提前数月预订，尤其是渔村和灯塔这类独特房源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在Kåseberga渔村虽然氛围绝佳，但晚餐选择非常有限（可能只有一两家餐馆），且夜间极为安静，喜欢热闹夜生活的人更适合以于斯塔德为基地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果计划拍摄日出或星空，住在附近是最佳选择，否则需要深夜在黑暗的乡村道路上驾车，需格外小心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿莱石阵很久之后，那幅画面依然会在某个安静的瞬间浮现在脑海：灰色的巨石，绿色的草甸，无尽的风和更无尽的海。它没有巴黎的精致，没有罗马的辉煌，它给你的甚至不是一种通常意义上的“美”。它给你的，是一种空旷的、略带寒意的清醒。在现代社会，我们被信息淹没，被日程驱赶，习惯了各种意义的直接投喂。但在这里，意义是悬置的。没有人告诉你答案，只有石头、风和海向你提出最原始的问题：你是谁？你从哪来？时间是什么？永恒又是什么？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是阿莱石阵不可替代的价值。它不是一个被完全解读、包装好的旅游产品，它是一片依然活着的谜题。它强迫你停下，思考，感受，并最终与自己的内心对话。在这个快得令人眩晕的世界里，它能给你一种珍贵的“缓慢”和“失语”。当你触摸那些石头，你触摸的不是景点，而是时间的实体。你会意识到，在人类所有的喧嚣、战争、创造与遗忘之前与之后，有些东西就这样静静地存在着。它提醒着我们自身的渺小，也奇妙地赋予我们一种深层的宁静与连接感——与自然，与历史，与那些跨越千年的、试图在星海中寻找位置的人类同胞。这趟旅程，最终会成为一次面向内心的朝圣。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/karlskrona-naval-port-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔斯克鲁纳（军港古城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlskrona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ystad-medieval-town-sweden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于斯塔德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ystad</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/visby" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯比老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Visby</p>
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
