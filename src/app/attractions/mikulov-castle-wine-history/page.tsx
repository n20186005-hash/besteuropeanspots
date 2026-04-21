import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '南摩拉维亚州历史溯源｜米库洛夫的前世今生，一座由城堡、信仰与葡萄酒雕琢的边境传奇',
  description: '探秘捷克边境隐秘的“葡萄酒之都”。穿越八百年，看城堡如何在哈布斯堡、宗教改革与犹太智慧的激荡中，酿造出独一无二的醇厚人文。',
}

export default function MikulovCastleWineHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '米库洛夫城堡及葡萄园', href: '/attractions/mikulov-castle-wine-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米库洛夫城堡及葡萄园・Mikulov・捷克・南摩拉维亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克东南角，与奥地利接壤的丘陵地带，藏着一座被时间温柔以待的小城——米库洛夫。它不像布拉格那样喧嚣，却拥有同等厚重的叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事，由三样东西铸就：山巅的城堡、山腰的犹太街区，以及漫山遍野的葡萄藤。这里是权力的边疆，信仰的避风港，更是葡萄酒的灵魂产地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>哈布斯堡王朝</strong>的贵族、<strong>摩拉维亚兄弟会</strong>的信徒、<strong>犹太拉比</strong>的智慧，共同在这片土地上留下了深刻的烙印。抛开游玩攻略，走进米库洛夫的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米库洛夫城堡及葡萄园`} />
                <InfoRow label="英文名称" value={`Mikulov`} />
                <InfoRow label="正式名称" value={`Mikulov`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南摩拉维亚州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米库洛夫的故事，始于边境的警觉与战略。它的最初轮廓，并非为了诗意的生活，而是出于冷峻的军事防御需求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在 <strong>1219年</strong> 的历史文献中，这片土地已有了模糊的记载。当时，它被称为“尼可尔斯堡”，这个名字暗示了其最初的守护者或领主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其捷克语名“Mikulov”，很可能源于“Mikuláš”（尼古拉斯），印证了这段起源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市诞生的核心逻辑，在于其无可替代的地理位置。它坐落在帕拉瓦丘陵的一座显眼石山上，恰好扼守着历史上<strong>摩拉维亚</strong>与<strong>奥地利</strong>之间的古老商路与军事通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，最初的定居点与城堡，天然就是一座<strong>边疆要塞</strong>。它像一颗楔子，钉在了波希米亚王国（后来的捷克王国）的南部边境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山巅的城堡，俯瞰着脚下肥沃的平原与起伏的葡萄园，其首要职能是监视、预警与抵御来自南方的潜在威胁。这种与生俱来的“边境基因”，深刻影响了它此后八百年的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论是王朝更迭，还是宗教流徙，米库洛夫都因其“之间”的位置，成为了各种力量与文化的交汇点与缓冲带。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米库洛夫的历史，并非线性的平缓发展，而是被几个决定性时刻深刻镌刻，每一次都重塑了它的面貌与灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，是<strong>1560年</strong>的 <strong>“城堡易主”</strong> 。统治此地数个世纪的列支敦士登家族，将城堡与领地出售给了野心勃勃的<strong>迪特里希施泰因家族</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个来自奥地利的显赫天主教家族，将米库洛夫带入了它的黄金时代。他们不仅是领主，更是<strong>哈布斯堡王朝</strong>在摩拉维亚推行<strong>反宗教改革</strong>的坚定旗手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在宗教斗争激烈的时代，迪特里希施泰因家族将米库洛夫城堡打造成了一个强大的天主教中心。但颇具戏剧性的是，他们也对被驱逐的犹太社区展现了相对宽容。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "家族允许犹太人在城堡山脚下建立定居点，这无意中孕育了后来繁荣的犹太社区。一次政治与宗教的收购，却为城市播下了多元文化的种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，是 <strong>“围城与火”的循环”</strong>。<strong>1645年</strong>，三十年战争席卷至此，瑞典军队兵临城下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡经历了惨烈的围困。传说，就在即将陷落之际，守军孤注一掷的炮击奇迹般地击中了瑞典军的火药库，引发巨大爆炸，迫使敌军撤退。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次“奇迹”般的幸存，被归功于神圣的庇护，更强化了城堡不可征服的神话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，火既是拯救者，也是毁灭者。<strong>1719年</strong>，一场灾难性的大火几乎吞噬了整个城镇，包括壮丽的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的巴洛克式城堡外观，正是迪特里希施泰因家族在灰烬上重建的辉煌。最近的一次创伤在<strong>1945年</strong>，撤退的德军点燃了城堡，使其内部化为废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今的城堡是战后精心修复的成果。这种毁灭与重生的循环，构成了米库洛夫坚韧的底色。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米库洛夫的传奇，离不开两个与它命运交织的名字：一位是权倾一时的红衣主教，另一位是流亡至此的犹太智者。他们的故事，分别定义了这座城市的信仰高度与思想深度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>一、 红衣主教与葡萄酒圣徒：弗朗茨·冯·迪特里希施泰因</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>弗朗茨·冯·迪特里希施泰因</strong>，是迪特里希施泰因家族最显赫的人物。他被任命为<strong>奥洛穆茨</strong>主教，并在 <strong>1604年</strong> 成为摩拉维亚的统治者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>反宗教改革</strong>的激烈时期，他是<strong>哈布斯堡王朝</strong>最锋利的一把剑。他的使命明确而强硬：让信奉新教的摩拉维亚重归天主教怀抱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他以米库洛夫城堡为权力基地，手段包括建立耶稣会学校、邀请天主教修会入驻，并运用政治权力施加压力。他的统治严厉，却在混乱的时代重新确立了秩序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这位铁腕主教对米库洛夫乃至整个摩拉维亚，还有一个极为浪漫与持久的贡献——葡萄酒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位极具远见的葡萄种植者与酿酒技术的推动者。据说，正是他从家乡奥地利引入了<strong>雷司令</strong>等优质葡萄品种到摩拉维亚地区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他颁布法令，鼓励并规范葡萄种植，修建大型酒窖。在城堡地下，至今保存着巨大的“圣瓦茨拉夫酒窖”，其中一个可容纳10万升葡萄酒的橡木桶，堪称传奇。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“主教大人不仅关心我们的灵魂，更关心我们土地的果实。他让我们知道，除了祈祷，辛勤照料葡萄藤也是一种侍奉。”——当地编年史中的农民记述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，弗朗茨主教被当地人尊为“摩拉维亚葡萄酒之父”。他的双重身份——精神上的严苛改革者与物质上的风土培育者，完美诠释了米库洛夫“信仰与葡萄园”并存的独特气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>二、 流亡的智者：拉比·大卫·奥本海默</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说迪特里希施泰因家族塑造了城市的天际线，那么犹太社区则赋予其深厚的灵魂。而其中最重要的灵魂人物，是拉比<strong>大卫·奥本海默</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥本海默生于<strong>1664年</strong>，来自德国一个拉比世家。他学识渊博，是当时欧洲最受尊敬的<strong>犹太律法</strong>学者之一。<strong>1713年</strong>，他受邀来到米库洛夫，成为这里的首席拉比。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的到来，将米库洛夫犹太社区推向了知识和精神的顶峰。他个人出资建立了一所著名的<strong>塔木德学院</strong>，吸引了整个中欧的犹太学子前来深造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米库洛夫一度成为与布拉格、克拉科夫齐名的犹太学术中心。但奥本海默最不朽的遗产，是他的藏书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位痴迷的书籍收藏家，毕生致力于搜集希伯来语和犹太主题的珍贵手稿与印刷品。他的私人图书馆规模惊人，收藏了超过7000册书籍和1000份手稿，是当时世界上最重要的犹太文献收藏之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，由于当地审查制度，这批无价之宝在他生前未能公开。他去世后，藏书几经辗转，最终在<strong>1829年</strong>被<strong>牛津大学博德利图书馆</strong>收购，成为该馆的镇馆之宝。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当我走进他在米库洛夫的书房，空气中弥漫着羊皮纸与智慧的气息。每一本书都不是静止的，它们是一个个等待被唤醒的灵魂。”——一位拜访过他的学生后来回忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥本海姆本人则长眠于米库洛夫古老的犹太墓园。他的故事，是一个关于流亡、学识传承与文化坚守的缩影。他证明，即便在边缘之地，智慧的火焰也能熊熊燃烧，照亮后世。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在米库洛夫，历史与传说如同葡萄酒的醇香，弥漫在城堡的每个石缝间。最著名的传说，关乎城堡地窖中那位神秘的“白夫人”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，迪特里希施泰因家族的一位女祖先，因其美德与悲剧命运，化身为守护城堡宝藏的幽灵。她总是一身白衣，在深夜的走廊与巨大的酒窖间悄然飘过。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人口耳相传，这位“白夫人”并非可怕的幽灵，而是城堡仁慈的守护灵。她会在家族成员遭遇危难或城堡面临威胁时显形，发出预警。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最生动的版本与城堡下那庞大的酒窖有关。传说中，当有外敌意图入侵或灾难将至时，那些静卧在黑暗中、容量惊人的橡木酒桶，会自发地发出沉闷的隆隆响声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这响声并非源于葡萄酒，而是沉睡于桶中的“白夫人”在敲击桶壁，向世人示警。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“老人们都说，别怕地窖里的声响。那是好心的白夫人在说话。她爱这座城堡，也爱这片土地产出的琼浆。她用桶声告诉我们，要珍惜眼前的和平与丰收。”——当地酿酒世家的口述传统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说巧妙地交织了城堡的贵族历史、对灾难的记忆（尤其是火灾），以及本地赖以生存的葡萄酒文化。它将恐惧转化为一种温暖的守护，让冰冷的历史建筑充满了人性化的灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，一些来参观酒窖的游客，仍会侧耳倾听，希望能捕捉到那传说中的、充满预示的桶壁回响。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在米库洛夫，你踏出的每一步，都踩在层层叠叠的历史回响之上。这里没有宏大到令人窒息的国家叙事，有的是一卷生动细腻的“边境剧本”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它告诉你，历史如何在战略要冲的刀锋上起舞，信仰如何在压迫与宽容的缝隙中求生，智慧又如何借由书籍与葡萄藤得以传承和发酵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂米库洛夫，便是读懂一种欧洲的“边缘智慧”。它从未处于舞台的绝对中央，却总能在时代的夹缝中，找到自己存续与繁荣的方式——无论是作为要塞、避难所，还是葡萄酒的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，不在于单一的景观，而在于那种复合的、醇厚的“人文风土”。城堡的石墙、犹太墓园的碑文、修道院的回廊，以及阳光下连绵到天际的葡萄园，共同酿成了一杯值得细细品味的岁月佳酿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是博物馆里的标本，而是依然在呼吸的日常，是酒农照料藤蔓时触碰的同一片土壤，是地窖中恒定的凉意与幽香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>石头、羊皮纸与葡萄藤</strong>，这三重奏奏响了米库洛夫独一无二的遗产。它提醒我们，有些地方，其最珍贵的宝藏并非惊世骇俗的风景，而是时光沉淀下来的、充满韧性的生活诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jindrichuv-hradec-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因德日赫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jindřichův Hradec</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kokorin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科科日恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kokořín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brno-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno Old Town</p>
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
