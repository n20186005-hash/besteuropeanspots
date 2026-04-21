import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁赫努岛深度游攻略：探秘波罗的海孤岛上的木板教堂与钢铁灯塔',
  description: '这份详尽的鲁赫努岛（Ruhnu）自由行指南，带你深度游波罗的海最偏远的秘境，探索17世纪极地木板教堂与埃菲尔铁塔同款设计师的灯塔，获取独家打卡攻略与避坑指南。',
}

export default function RuhnuIslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '爱沙尼亚', href: '/destinations/europe' },
            { label: '萨雷县', href: '/destinations/europe' },
            { label: '鲁赫努岛', href: '/attractions/ruhnu-island' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`鲁赫努岛・Ruhnu・爱沙尼亚・萨雷县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你正在地图上寻找一个真正“与世隔绝”的目的地，那波罗的海深处的鲁赫努岛，绝对能击中你的心脏。今天这份私藏旅游攻略，就为你揭开这个爱沙尼亚袖珍岛屿的神秘面纱。想象一下，当你踏上这片土地，目之所及是海天一色，耳畔只有风声与海鸥鸣叫，常住居民不过百人。这里没有套路化的景点，只有一部活着的历史书：一座扛过三个世纪风霜的北欧木板教堂，和一座由设计埃菲尔铁塔的工程师打造的钢铁灯塔。作为你的专属向导，这份自由行指南请收好，我将带你绕过所有不便，直抵这片净土最动人的核心。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你正在地图上寻找一个真正“与世隔绝”的目的地，那波罗的海深处的鲁赫努岛，绝对能击中你的心脏。今天这份私藏旅游攻略，就为你揭开这个爱沙尼亚袖珍岛屿的神秘面纱。想象一下，当你踏上这片土地，目之所及是海天一色，耳畔只有风声与海鸥鸣叫，常住居民不过百人。这里没有套路化的景点，只有一部活着的历史书：一座扛过三个世纪风霜的北欧木板教堂，和一座由设计埃菲尔铁塔的工程师打造的钢铁灯塔。作为你的专属向导，这份自由行指南请收好，我将带你绕过所有不便，直抵这片净土最动人的核心。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`鲁赫努岛`} />
                <InfoRow label="英文名称" value={`Ruhnu`} />
                <InfoRow label="正式名称" value={`Ruhnu`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`萨雷县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`鲁赫努岛的历史，是一部关于生存、信仰与孤独的史诗。由于地理位置极其偏远，它长期处于各种强权势力的边缘地带，反而意外地保存了极其纯粹的文化切片。中世纪时期，它主要受瑞典的影响，岛民是讲瑞典语的渔民和农民，这种文化延续了数百年。17世纪建成的圣玛格丽特教堂，正是这段瑞典时期的活化石，也是整个波罗的海地区现存最古老的全木结构建筑之一，其建筑工艺与北欧传统一脉相承。后来，岛屿主权在瑞典、沙俄、苏联和独立的爱沙尼亚之间几经易手，但岛民的生活方式始终坚韧地延续着。它就像一个被遗忘在时间之外的时间胶囊，每一阵海风里，都夹杂着关于坚守与融合的故事。这份独特的历史层次感，让它在欧洲历史版图中，占据了一个小而耀眼的位置。`} />
                <InfoRow label="建筑特色" value={`岛上的两大标志性建筑，形成了跨越时代的绝妙对话。**圣玛格丽特木板教堂**的外观质朴到令人感动。它通体由粗壮的松木和云杉木搭建而成，木材经过数百年的海风侵蚀与日照，呈现出一种深沉而温暖的银灰色，表面纹理如老人的手掌般清晰可辨。教堂的屋顶陡峭，覆盖着深色的木瓦，这是为了应对北欧严酷多雪的气候。最引人注目的是其独立的钟楼，像一位沉默的守望者，与主殿分立。走近触摸外墙，你能感受到木材的粗砺与历史的厚重。而**鲁赫努灯塔**则完全是另一种美学语言。它是一座高达40米的纤细钢铁结构，通体漆成醒目的红白相间。仔细看，它的骨架由无数铆接的钢铁桁架构成，呈现出精确的几何美感，在海天之间划出利落的线条。当阳光穿透其镂空的钢铁身躯，会在沙地上投下变幻莫测的光影网格，现代工业的理性与海岛的自然野性在此碰撞。`} />
                <InfoRow label="建筑风格" value={`鲁赫努岛的建筑风格是一场跨越两百年的“二人转”。**木板教堂**是典型的北欧传统木构建筑风格，特别是瑞典乡村教堂的范式。这种风格的核心是纯粹的功能性与材料真实性。没有繁复的石雕或彩绘，一切美感源于木材本身的质感、严谨的榫卯结构和适应极端气候的实用设计（如陡峭屋顶）。它代表了前工业时代，人类利用本地材料与自然共处的智慧。而**钢铁灯塔**则是19世纪末**历史主义与早期现代工程**结合的典范。它由埃菲尔铁塔的设计者之一——古斯塔夫·埃菲尔的工程公司设计，带有鲜明的“埃菲尔风格”：暴露结构、使用当时最先进的锻铁材料、通过数学计算实现既稳固又轻盈的形态。它象征着工业革命的力量如何抵达世界最偏远的角落。这两种风格并置，直观地讲述了鲁赫努从依赖自然到接纳现代文明的历史轨迹。`} />
                <InfoRow label="文化价值" value={`对于仅存的几十位岛民而言，这两座建筑远非景点，而是他们身份认同与社区生活的精神坐标。木板教堂至今仍是举行婚礼、葬礼和节日礼拜的场所，钟声在每个周日依然会响起，召集分散在岛上各处的人们。它是岛民共同记忆的容器，墙上可能还刻着祖先的名字。而灯塔，则从过去的导航守护者，变成了孤岛与广阔世界连接的象征。它提醒着人们，即便再偏远，也仍是这世界网络中的一部分。对现代社会而言，鲁赫努岛及其建筑是一种“慢生活”和“文化韧性”的珍贵样本。它向所有来访者提问：在全球化浪潮中，一个社区如何保有独特的文化根脉？它的存在本身，就是一种强大的文化价值，提醒我们多样性之美与坚守的意义。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 鲁赫努岛一日游打卡路线攻略：从中世纪教堂到钢铁灯塔的时空漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，跟着我的路线，咱们把一天的时间用到极致。**上午（9点-12点）：历史的凝望**。从岛上的中心区出发，步行前往圣玛格丽特教堂。清晨的光线柔和，最适合感受木教堂的沧桑质感。别急着进去，先绕建筑走一圈，摸摸那些被岁月打磨的木头，听听风吹过钟楼的声音。进入内部，让眼睛适应昏暗的光线，静静体会那个时代的虔诚。**中午（12点-13点30）：岛民的滋味**。去村里唯一的小餐馆或咖啡屋（通常是民宿兼营），尝尝用当天捕捞的波罗的海鲱鱼做的简餐，和店主聊聊天，他们是活的历史书。**下午（14点-17点）：登高与逐海**。饭后散步走向岛屿西端的灯塔。这段路本身就是享受，穿过宁静的松林和开阔的牧场。登上灯塔顶端，360度环视无垠的波罗的海，这是属于你的“世界尽头”时刻。之后，可以沿着灯塔下的沙滩散步，寻找琥珀（几率虽小，但乐趣无穷）。**傍晚（17点后）：静默的告别**。回到教堂附近，在夕阳的余晖中，再看一眼这座被染成金红色的木屋。这时游客已散，你能听到最纯粹的海岛之声，为这一天画上圆满句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>教堂木门上的刻痕</strong>：走进圣玛格丽特教堂，请务必低头仔细查看那扇厚重的木门内侧。上面布满了各种模糊的刻痕、日期和缩写字母。这不是破坏，而是几个世纪以来，岛民、水手、访客留下的“签名”。想象一下，在暴风雨来临前，一位水手在此刻下祈祷的记号；或是一对新婚夫妇刻下他们的名字和婚期。这些无声的铭文，是数百个生命故事与这座建筑最私密、最动人的连接。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>灯塔内的螺旋铁梯</strong>：攀登灯塔时，请感受脚下。狭窄的螺旋楼梯完全由镂空的钢铁网格构成，每踩一步都有轻微的回响。阳光从塔身的镂空处射入，在阶梯上投下不断移动的光斑，仿佛在攀登一个巨大的、正在呼吸的钢铁生物腹腔。当你抬头向上望，楼梯无限盘旋上升的几何透视感，极具视觉冲击力，这是古斯塔夫·埃菲尔公司工程美学的经典体现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>教堂内朴素的圣像与烛光</strong>：教堂内部昏暗，祭坛上方挂着古老的木质圣像，彩绘已因年代久远而变得深沉内敛。最打动人的是圣像前，几支小小的蜂蜡蜡烛正在安静地燃烧，散发出温暖的、略带甜腻的香气。烛泪层层堆积，形成了独特而柔软的形态。这微弱的、跳动着的火光，是几个世纪以来从未间断的信仰与希望的象征，在这孤寂的海岛上，显得格外有力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>从灯塔顶端俯瞰的“双世界”</strong>：登上灯塔顶层，扶栏远眺。你会发现视野被清晰地一分为二：一边是岛屿东侧，绿色牧场、红色农舍和深色木教堂组成的宁静田园画卷；另一边则是岛屿西侧，无尽的湛蓝大海，以及海浪在沙滩上划出的白色弧线。这个视角完美地 encapsulate了鲁赫努岛的本质——一个在自然之力（海）与人文坚守（陆）之间取得微妙平衡的脆弱而美丽的世界。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁赫努岛的“坑”主要在于其与生俱来的偏远属性，做好准备就能化险为夷。<strong>第一，交通是最大变数</strong>。上岛完全依赖小型飞机或渡轮，且<strong>极度受天气影响</strong>。务必在行前反复确认航班/船期（可从库雷萨雷或帕尔努出发），并预留至少一天的灵活时间，因为大风大雾可能导致行程取消。强烈建议购买包含行程变更的旅行保险。<strong>第二，岛上服务极其有限</strong>。没有ATM机，只有一家小杂货店，商品种类很少。请务必携带足够的现金（欧元），并提前准备一些零食和饮用水。餐厅可能需要提前预定。<strong>第三，尊重与融入</strong>。这里不是主题公园，是岛民的家园。请保持安静，尤其在教堂和民居附近。所有道路都可自由行走，但若经过牧场，请轻声关门，不要惊扰牲畜。穿着舒适的徒步鞋，因为“景点”之间都需要步行，且道路原始。" }} />
            </div>
          </Section>

          <Section title={`6. 鲁赫努岛住宿与美食攻略：住在岛民家，尝最鲜海味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "岛上没有酒店，只有几家由岛民经营的<strong>家庭民宿（Guesthouse）</strong>。这反而是最大的特色。推荐选择一家离教堂或港口不远的民宿，例如“Ruhnu Külastuskeskus”或直接联系名为“Ruhnu Maja”的住处。入住这些刷着传统红色油漆的木屋，你就能体验到真正的岛民生活：清晨在咖啡香中醒来，主人可能会跟你分享自家做的果酱。晚餐通常需要提前向民宿主人预订，他们会用当天收获的食材烹饪——可能是煎波罗的海鲱鱼、简单的土豆肉丸，或是森林里采摘的莓子做的甜点。味道质朴，却是在任何米其林餐厅都尝不到的“风土之味”。岛上有一家小咖啡馆，是白天歇脚的好去处。住宿环境简单、干净、温暖，关键是可以获得最地道的旅行情报和故事。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在鲁赫努岛，所谓的“周边”其实就是岛屿本身的不同面向。但如果你意犹未尽，可以在返回时，选择在<strong>萨雷马岛（Saaremaa）</strong> 停留。从鲁赫努岛过来的飞机或渡轮大多经停或始发于萨雷马岛的库雷萨雷（Kuressaare）。萨雷马岛是爱沙尼亚最大的岛屿，拥有保存完好的中世纪库雷萨雷城堡、独特的卡利陨石坑和浪漫的乡村风光。你可以把它看作是鲁赫努岛的“大陆版本”，体验更丰富的基础设施和景点，同时感受爱沙尼亚海岛文化的另一种风貌。从极致的孤寂到相对热闹的岛城，这种过渡会让你的旅程层次更加丰富。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁赫努岛的魂，是两种声音的交响：一种是圣玛格丽特教堂古老木头发出的、在风中的低沉嗡鸣，诉说着坚守与传承；另一种是钢铁灯塔结构在海风中传来的、清脆而现代的金属振动声，吟唱着连接与远眺。这座岛教会你的，正是在无尽的孤独中，发现内在的丰盛与韧性。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/parnu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    派
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">派尔努老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pärnu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-university-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu University City</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hiiumaa-kopu-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希乌马岛（凯普灯塔）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hiiumaa (Kõpu Lighthouse)</p>
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
