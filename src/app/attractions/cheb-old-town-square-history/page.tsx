import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '海布历史溯源｜德捷边境的半木奇迹，瓦伦斯坦遇刺地的铁血往事与前世今生',
  description: '探秘捷克“被遗忘的角落”海布。这里藏着中欧最完好的德裔波西米亚老城，是三十年战争转折点，瓦伦斯坦公爵在此陨落。走进一座城的千年撕裂与共生。',
}

export default function ChebOldTownSquareHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '海布', href: '/attractions/cheb-old-town-square-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`海布・Cheb・捷克・海布`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克西部，与德国巴伐利亚接壤的边境，静卧着一座气质截然不同的老城——海布。它的广场布满色彩斑斓的“半木结构”民居，洋溢着典型的德意志风情，却归属于捷克共和国的版图。这座城是历史的“混血儿”，是波西米亚王国与神圣罗马帝国角力的前沿，更因一场改变欧洲格局的刺杀而被永久铭刻。抛开游玩攻略，走进海布的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`海布`} />
                <InfoRow label="英文名称" value={`Cheb`} />
                <InfoRow label="正式名称" value={`Cheb`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`海布`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "海布的起源，深深扎根于中欧早期的贸易路线与殖民史。约在<strong>9世纪</strong>，斯拉夫部落在此定居，因其位于<strong>埃格尔河</strong>的一处浅滩，获得了最初的斯拉夫语名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正塑造城市雏形的是<strong>12世纪</strong>的德意志殖民浪潮。<strong>1167年</strong>，神圣罗马帝国皇帝<strong>腓特烈一世</strong>在此设立边境城堡与市场，并授予其城市权利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的德语名“<strong>埃格尔</strong>”由此确立，意为“埃格尔河畔的定居点”。这一举动意义深远，它标志着德意志商人、工匠和矿工开始大规模涌入，彻底改变了此地的人口结构与文化底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在随后的几个世纪里，海布一直是<strong>波西米亚王国</strong>的一部分，但其居民主体与核心文化却是德意志的。这种政治归属与文化认同的分离，构成了海布独特身份的基石，也预示了其未来数百年的复杂命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的捷克语名“<strong>海布</strong>”则是从德语名音译简化而来。一座城，两个名字，两种灵魂，从诞生之初就已注定。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "海布的历史，是一部浓缩的中欧边境冲突与权力更迭史。其老城中心那些倾斜的桁架房屋，见证过数次决定性的瞬间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个关键印记是<strong>三十年战争</strong>。这场席卷欧洲的宗教与霸权战争，将海布推向了风暴眼。<strong>1621年</strong>，天主教联盟军队在此击败了新教起义军，波西米亚的命运由此转向。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争期间，这座城市被交给了帝国名将<strong>阿尔布雷赫特·冯·瓦伦斯坦</strong>，成为其公爵领地的核心。他在此大兴土木，加固城堡，将海布变成了其军事与政治权力的重要堡垒。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位当时的编年史家写道：“埃格尔（海布）的城堡从未如此坚固，仓库里堆满了来自整个波西米亚的财富，它成了公爵野心的基石。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，无疑是<strong>瓦伦斯坦公爵在此遇刺</strong>。<strong>1634年2月25日</strong>的夜晚，这座他经营已久的城堡变成了他的葬身之地。这场刺杀并非简单的谋杀，而是皇帝斐迪南二世清除权臣的政治清算。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它直接导致瑞典-新教联盟与天主教帝国阵营的力量平衡被打破，深刻影响了三十年战争的后续进程。城堡的墙壁，至今仿佛回荡着那个血腥夜晚的密谋与刀剑声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记则来到了<strong>19世纪初</strong>的拿破仑时代。<strong>1813年</strong>，在著名的莱比锡民族会战前夕，反法同盟的君主们——奥地利皇帝、俄国沙皇和普鲁士国王——在海布市政厅会晤，协调最终对抗拿破仑的战略。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座边境小城，再次成为欧洲大国政治棋盘上的一颗关键棋子。从宗教战争到帝国争霸，海布总是被动或主动地，站在历史的十字路口。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要为海布选择一位灵魂人物，非<strong>阿尔布雷赫特·冯·瓦伦斯坦</strong>莫属。他并非海布本地人，但他的人生巅峰与戏剧性终结，却与这座城市死死绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦伦斯坦是波西米亚的贵族，一位军事与政治天才。在三十年战争中，他凭借卓越的军事才能，为神圣罗马帝国皇帝斐迪南二世组建了一支庞大的私人军队，屡立战功。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为回报，他被封为<strong>弗里德兰公爵</strong>，并获得了包括海布在内的大片波西米亚领土。他将海布作为其公爵领地的行政中心之一，投入巨资修缮和扩建城堡与防御工事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，功高震主。瓦伦斯坦日益膨胀的权势和与敌营暧昧的和谈意向，引起了皇帝的极度不安与猜忌。<strong>1634年1月</strong>，皇帝下令解除其兵权，并宣布其为叛国者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦伦斯坦逃往他自认为忠诚的海布城堡寻求庇护。但他错了。他最信任的军官们已在暗中接到了皇帝的密令。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在刺杀前夕，瓦伦斯坦似乎已有预感。据侍从回忆，他晚餐时沉默寡言，反复提及不祥的梦境，并叹息道：“信任已死。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1634年2月25日晚</strong>，一场精心策划的刺杀在城堡内上演。以沃尔特·巴特勒、沃尔特·莱斯利和约翰·格登为首的军官们，带领一队士兵冲进了瓦伦斯坦的卧室。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，这位身患痛风、已卸甲卧床的公爵毫无反抗之力。雇佣兵<strong>沃尔特·迪弗罗</strong>用戟刺穿了他的胸膛。一代枭雄，殒命于自己权力的堡垒之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的尸体最初被草草埋葬于海布，后迁至他处。如今，在海布城堡的博物馆里，依然陈列着据说是他遇刺时所穿衬衫的残片，以及那把著名的凶器——戟尖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦伦斯坦之死，让海布从一个强大的地区中心迅速衰落，但也因此被永恒地写进了欧洲每一本历史教科书。他的名字，成了海布无法撕去的历史标签。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与海布紧密相连的名人，是德国浪漫主义诗人<strong>约翰·沃尔夫冈·冯·歌德</strong>。歌德曾多次到访海布，对这里的建筑、历史乃至地质都表现出浓厚兴趣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅游览瓦伦斯坦遇刺的城堡，详细考察记录，还热衷于在海布周边的<strong>索普拉纳火山</strong>地区收集矿物标本。海布的悲剧历史与独特地理，为这位文学巨匠提供了丰富的灵感养分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "可以说，瓦伦斯坦赋予了海布历史的重量与血色，而歌德这样的访客，则开始为它涂抹上浪漫与思古的文学色彩。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了信史，海布的砖木之间也缠绕着挥之不去的民间传说。这些传说大多围绕着<strong>瓦伦斯坦之死</strong>展开，为其增添了浓厚的超自然色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说关乎他遇刺的官邸。当地人坚信，在每年<strong>2月25日</strong>的午夜，城堡附近会出现一支幽灵马车队。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那是瓦伦斯坦灵魂的徘徊。马车无声地驶过碎石街道，最终消失在城堡的阴影中，仿佛永远在重复着那个逃亡与背叛的夜晚。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们会低声讲述：“如果你在冬夜靠近城堡，听到风声中的叹息，那不是风，是公爵在质问他的命运。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则聚焦于刺杀现场。据说，瓦伦斯坦鲜血喷涌而出，浸透了地板。无论后来人们如何擦洗、甚至更换地板，那片深褐色的血迹总会重新显现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这被解释为冤屈与罪行的印记无法被抹除，是对背叛行为的永恒控诉。尽管这很可能是木材氧化的自然现象，但在传说中，它成了历史真相的“自证”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，与许多中欧古城一样，海布的老房子里也住着“家灵”的传说。这些善良的小精灵被认为居住在半木结构房屋的木梁之间，会保护家庭的安宁，并在夜晚帮助勤劳的主妇完成家务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "只需在角落留下一小碗牛奶或面包屑，就能得到它们的庇佑。这些温馨的传说，与瓦伦斯坦的悲壮传奇交织在一起，构成了海布民间记忆的一体两面——既有宏大的历史创伤，也有细微的日常生活信念。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在海布老城广场，你所见的不仅是明信片般的风景。每一栋倾斜的桁架屋，都是德意志工匠技艺的活化石；脚下的碎石路，曾碾过帝国军队、雇佣兵与国王的车轮；而远方山丘上城堡的剪影，则凝固了一个震惊欧洲的背叛之夜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "海布的魅力，正在于这种多重性的张力。它是波西米亚的，也是德意志的；是童话般的小镇，也是铁血的战场。它不曾是布拉格那样的王权中心，却因历史的偶然，被推到了决定大陆命运的关键节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂海布，便是读懂中欧边境地区一部微缩的共生与撕裂史。它提醒我们，欧洲的文化地图从来不是单一色彩的，而是在不断的流动、碰撞与融合中形成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，你不仅是在参观一个景点，更是在翻阅一册立体的、由石头、木头与记忆写就的史书。它的每一个细节，都在诉说着关于权力、信仰、身份与遗忘的复杂故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bouzov-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博乌佐夫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bouzov Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trebic-jewish-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特热比奇犹太区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jewish Quarter of Třebíč</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dolni-kounice-rosa-coeli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    下
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">下库尼采罗莎·科利女子修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolní Kounice (Rosa Coeli)</p>
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
