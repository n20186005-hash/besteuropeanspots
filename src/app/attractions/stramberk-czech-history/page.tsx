import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Štramberk历史溯源｜摩拉维亚“伯利恒”的中世纪传奇与“耳朵”传说',
  description: '探秘捷克“摩拉维亚的伯利恒”——什特兰贝克。走进中世纪塔楼“Trúba”守护的童话小镇，揭开独特“耳朵”饼干背后的残酷战争传说与人文风情。',
}

export default function StramberkCzechHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '摩拉维亚-西里西亚州', href: '/destinations/europe' },
            { label: '什特兰贝克', href: '/attractions/stramberk-czech-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`什特兰贝克・Štramberk・捷克・摩拉维亚-西里西亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克摩拉维亚的葱郁山谷中，藏着一座时间仿佛凝固于中世纪的“木构建筑露天博物馆”——什特兰贝克。它被诗意地称为“摩拉维亚的伯利恒”，不仅因其错落有致的山城景观神似圣城，更因一段关于“耳朵”的古老传说而闻名遐迩。这里的一砖一瓦，都镌刻着从防御要塞到宁静山城的跌宕史诗。抛开游玩攻略，走进什特兰贝克的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`什特兰贝克`} />
                <InfoRow label="英文名称" value={`Štramberk`} />
                <InfoRow label="正式名称" value={`Štramberk`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`摩拉维亚-西里西亚州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "什特兰贝克的起源，深植于<strong>13世纪</strong>中欧的殖民浪潮与贵族拓疆史中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其历史核心，是一座耸立在石灰岩山丘上的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居点便依城堡而生，服务于其军事与行政功能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于其建立者，历史指向了强大的<strong>奥洛穆茨主教布鲁诺</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位来自<strong>沙姆堡的布鲁诺</strong>，不仅是主教，也是一位杰出的殖民者和政治家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>约在1350年</strong>，他授予山脚下聚居的居民以城市权利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这标志着什特兰贝克正式登上历史舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的名字“Štramberk”本身就是一个语言化石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它很可能源自古德语“Strallenberg”或“Stralenberg”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "意为“闪耀之山”或“箭之山”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这形象地描绘了阳光下白色石灰岩山体的耀眼，或象征其战略地位如箭般突出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一种理论则将其与捷克语“štramp”联系起来，有“高大、笨拙”之意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "或许描述了那座孤峭山丘的形态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论语源为何，这个名字都印证了其日耳曼殖民的背景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡居高临下，俯瞰着通往西里西亚和波兰的古老商道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的建立，绝非为了诗意，而是赤裸裸的权力与疆域宣言。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的命运，与山顶那座城堡的兴衰紧紧捆绑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，便是城堡的建立与传奇的“Trúba”塔楼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最初是木结构，在<strong>14世纪末</strong>被重建成坚固的石堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它属于摩拉维亚的豪门<strong>克拉列克家族</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天小镇最具标志性的建筑——<strong>Trúba塔楼</strong>，正是那段辉煌的残余。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座高达40米的圆柱形塔楼，曾是城堡主塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于它，有一个充满戏剧性的传说。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间相传，在遥远的过去，一位领主因妻子不忠而震怒。他将情敌处死，并命人将其耳朵割下，盐腌后呈给妻子作为“纪念”。这个残酷的故事，为后来小镇独特的“耳朵”饼干埋下了骇人的伏笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管传说血腥，塔楼本身却是坚韧的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它历经战火，在<strong>1783年</strong>一场风暴导致城堡部分坍塌后，依然屹立不倒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪末</strong>，当地俱乐部将其改造为观景塔，并加盖了独特的锥形屋顶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，它从军事堡垒转变为凝视风景的诗意之眼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，来自<strong>15世纪</strong>席卷波西米亚的<strong>胡斯战争</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场宗教战争彻底改变了小镇的信仰与人口结构。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "什特兰贝克的领主最初支持天主教阵营。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但在<strong>1421年</strong>，传奇的胡斯派将军<strong>杨·杰士卡</strong>的军队攻占了城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇从此改信胡斯派。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争带来的不仅是信仰更迭，还有持续的不安全感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这段动荡的历史，催生了小镇最著名的符号——<strong>Štramberk ears</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种用蜂蜜和香料制成的空心圆锥形饼干，其起源传说直接指向胡斯战争。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是小镇从军事前哨到宁静山城的蜕变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>三十年战争（1618-1648）</strong> 后，城堡彻底荒废，战略意义不再。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "什特兰贝克逐渐褪去铠甲，发展为以手工业，特别是酿酒和纺织为主的小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪</strong>，民族复兴的浪潮唤醒了人们对历史的兴趣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "浪漫主义的艺术家和建筑师们发现了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们被那些未经现代化改造、保存完好的<strong>木结构民宅</strong>所震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，小镇被精心保护起来，避免了大规模改建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终形成了我们今天看到的、宛如童话插图的独特风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一栋彩色的木屋，都是一枚活的历史印章。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在什特兰贝克的历史星图中，<strong>阿道夫·哈斯尼尔</strong>是一颗虽不耀眼却至关重要的星辰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非王侯将相，而是一位医生、博物学家和热忱的爱国者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是他，在关键时刻扮演了小镇“守护神”的角色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈斯尼尔于<strong>1866年</strong>出生在什特兰贝克的一个德裔家庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管母语是德语，他却深深热爱着这片摩拉维亚土地及其捷克文化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的人生轨迹与小镇的存亡紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪末20世纪初</strong>，工业化浪潮席卷欧洲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "什特兰贝克因其丰富的石灰岩资源，面临着被大规模开采、自然与历史景观毁于一旦的致命威胁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采石场的扩张，直逼那标志性的城堡山。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此时，已成为知名医生和市议员的哈斯尼尔站了出来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他利用自己的学识与声望，发起了一场轰轰烈烈的保护运动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非空喊口号，而是用科学数据说话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈斯尼尔是一位狂热的博物学家，尤其专注于<strong>软体动物化石</strong>的研究。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡山及其周边地区，是研究古生代海洋生物的绝佳地点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在学术刊物上发表文章，向政府机构提交报告。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "tirelessly地论证这片地区无与伦比的<strong>古生物学与地质学价值</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的核心论点是：这不只是一处风景，更是一部打开的地球史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "毁掉它，将是科学与文化的双重犯罪。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的日记或通信中，可能留下过这样的心声：“每当我用锤子敲开一块石灰岩，看到亿万年前的海贝封印其中，我就感到一种战栗。我们脚下不只是石头，是时间的深渊。我们不能让商业的铁锤，砸碎这部自然写就的史诗。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的努力没有白费。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1903年</strong>，政府终于颁布法令，将城堡山及其周边区域划为<strong>自然保护区</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是整个奥匈帝国范围内，最早受到法律保护的自然区域之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈斯尼尔的胜利，不仅保住了小镇的脊梁与灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "也为后世的世界闻名的“耳朵”饼干传说，保住了最关键的场景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "某种意义上，哈斯尼尔本人就是小镇传奇的续写者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他保护了传说赖以附着的山川。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于<strong>1934年</strong>去世，安葬在可以永远凝望城堡山的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，小镇的博物馆里珍藏着他的收藏与研究手稿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那条环绕城堡山的自然教育小径，便是对他无声的致敬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位医生，用他对科学与故乡的爱，为一整个中世纪小镇把脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "并开出了一剂流传百世的“保护药方”。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在什特兰贝克，历史与传说在烤箱的香气中融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最核心的民间传说，无疑围绕着那独一无二的<strong>Štramberk ears（Štramberské uši）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说将我们带回<strong>1421年</strong>那个血腥的夏天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，围攻城堡的胡斯派军队久攻不下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是他们向圣母玛利亚祈祷，许诺如果获胜，将以某种独特方式纪念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "恰在此时，风暴来袭，雷电击毁了部分城墙，守军意志崩溃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "胡斯战士们趁势攻入城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在清理战场时，他们发现了大量可怕的战利品——被守军割下的胡斯派俘虏的<strong>耳朵</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了铭记这场惨烈而神圣的胜利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "也为了永远警示敌人，他们发明了一种用面粉、蜂蜜和香料烤制的<strong>空心圆锥形饼干</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "并将其命名为“耳朵”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说的另一个版本更直接：胡斯派领袖下令，每个战士都必须吃掉一只象征敌人耳朵的饼干，以铭记仇恨与胜利。于是，这种食物成了活生生的记忆载体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论细节如何，这个传说将战争的残酷与食物的甜美诡异结合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赋予了普通饼干深沉的历史重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自<strong>19世纪</strong>这种饼干被商业化生产以来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它就成了什特兰贝克不可分割的身份符号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年，小镇都会庆祝与“耳朵”相关的节日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说不再是书本上的故事，而是人们可以品尝、可以分享的日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒着人们，和平的甜蜜是多么来之不易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而历史，有时会以最意想不到的形状。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "留在人间。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "什特兰贝克的价值，远不止于明信片般的风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座<strong>活生生的历史层积博物馆</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从山顶城堡的军事遗迹，到山腰中世纪街区的木构民宅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "再到山脚下19世纪的工业痕迹（旧酿酒厂、纺织作坊）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不同时代的地层在这里清晰可辨，且和谐共存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它证明了，一个地方的价值不仅在于诞生过伟大人物或发生惊天大事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更在于其<strong>社区在时间长河中形成的独特记忆与身份韧性</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那个关于“耳朵”的传说，无论是史实还是附会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "都已深深融入本地文化基因，成为连接过去与现在的味觉纽带。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂什特兰贝克，便是读懂一个小镇如何将创伤传说转化为文化财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如何在中世纪堡垒的废墟上，培育出如木构建筑花朵般甜美的生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，每一步都是与历史的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一块“耳朵”饼干，都是一则可以咀嚼的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hluboka-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫卢博卡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hluboká Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/boskovice-jewish-quarter-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博斯科维采</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Boskovice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/krivoklat-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克日沃克拉特城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Křivoklát Castle</p>
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
