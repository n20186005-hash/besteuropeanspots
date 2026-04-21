import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡尔维什历史溯源｜葡萄牙“阿尔加维王冠”的前世今生与摩尔人传奇',
  description: '探秘葡萄牙阿尔加维的红色心脏。穿越千年，从摩尔人的繁华都城到骑士王的征服，锡尔维什城堡的每一块红砂岩都在诉说失落的黄金时代。',
}

export default function SilvesCastleMoorishHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '锡尔维什', href: '/destinations/europe' },
            { label: '锡尔维什城堡', href: '/attractions/silves-castle-moorish-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡尔维什城堡・Silves Castle・葡萄牙・锡尔维什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙阳光明媚的阿尔加维，有一座城市的心脏不是海滩，而是火焰般赤红的砂岩。<strong>锡尔维什</strong>，这个今日宁静的内陆小镇，曾有一个响彻伊比利亚的名字——<strong>“阿尔-沙尔布”</strong>，意为“西方之地”，是摩尔人统治下阿尔加维地区光芒万丈的首府与文化之都。它的城堡，并非浪漫的童话造物，而是一座历经血火、见证文明碰撞的坚实堡垒。抛开游玩攻略，走进锡尔维什的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡尔维什城堡`} />
                <InfoRow label="英文名称" value={`Silves Castle`} />
                <InfoRow label="正式名称" value={`Silves Castle`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`锡尔维什`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡尔维什的根源深埋在历史的岩层中。罗马人最早在此设防，称其为“Cilpes”。但真正赋予其城市灵魂与不朽形貌的，是来自北非的<strong>摩尔人</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元8世纪，摩尔人跨越直布罗陀海峡，征服了伊比利亚半岛大部。他们敏锐地发现了这座位于奥德莱蒂河畔的山丘的战略价值。约公元9-10世纪，一座宏伟的城堡开始在此兴建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市得名于阿拉伯语 <strong>“阿尔-沙尔布”</strong> 。这个名字精准描述了其地理意义——它是摩尔人在葡萄牙南部广阔领土的西部中心与首府。它并非一座孤立的要塞，而是一个庞大水利系统、繁荣农业与发达贸易支撑下的权力中枢。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡标志性的<strong>红砂岩</strong>，就地取材自周边的山体。这种温暖的赤红色，让整座建筑群在阳光下犹如一团凝固的火焰，与阿尔加维的蓝天形成壮丽对比，也成为了这座城市永恒的底色与图腾。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>摩尔人的黄金时代（10-12世纪）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在近三个世纪里，锡尔维什达到了巅峰。城堡之内，是宫殿、清真寺、浴场与精心规划的花园。城堡之下，是一座拥有三万人口的繁荣城市，其规模与财富令同时期许多欧洲城镇难以企及。完备的输水系统（部分遗迹至今可见）将清水从远方引入，滋养着城内的喷泉与果园。这一时期，锡尔维什是学术、诗歌与科学的重要中心，其光芒吸引着整个伊斯兰世界的学者。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位阿拉伯地理学家曾如此描述：“<strong>阿尔-沙尔布</strong>是一座巨大、美丽且人口稠密的城市，拥有坚固的城墙和高耸的城堡……它被花园和河流环绕，物产丰饶。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1189年的十字军围攻</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着葡萄牙收复失地运动的南推，锡尔维什成了基督教骑士眼中最耀眼的战利品。<strong>1189年</strong>，在葡萄牙开国国王<strong>阿方索一世</strong> 之子<strong>桑乔一世</strong>的率领下，一支由葡萄牙军队和来自北欧的十字军组成的联军兵临城下。攻城战异常惨烈，守城的摩尔人顽强抵抗。最终，城堡因水源被切断而陷落。这场胜利短暂地将锡尔维什纳入了葡萄牙版图，但仅仅是昙花一现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1242年的最终征服与衰落</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "摩尔人很快卷土重来，重新夺回了锡尔维什。真正的转折点发生在<strong>1242年</strong>。葡萄牙国王<strong>阿方索三世</strong>——“博洛尼亚的”，发动了决定性的围攻。经过艰苦卓绝的战斗，城堡最终投降。这一次，征服是永久性的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，政治中心随即北迁至法鲁沿海。随后的大地震进一步摧毁了城市。曾经的“阿尔加维之王”逐渐褪去荣光，沦为一座安静的区域城镇，唯有那座红色的城堡，如同一位沉默的巨人，继续守望着山谷与河流，铭记着所有喧嚣与寂静。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在锡尔维什的星空下，最璀璨的一颗哲学之星，并非摩尔人将领或基督教国王，而是一位出生于<strong>1021年</strong>的犹太天才——<strong>所罗门·伊本·盖比鲁勒</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在西方世界，他更常被称为<strong>阿维斯布隆</strong>。他是中世纪最伟大、也最具原创性的犹太哲学家与诗人之一。尽管他幼年便离开故乡四处流浪，但锡尔维什的多元文化背景，无疑是他精神世界的初始摇篮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的哲学巨著<strong>《生命之泉》</strong>，试图用新柏拉图主义的框架，解释万物如何从神圣的“第一存在”中流溢而出。这部作品在犹太思想界影响深远，但更传奇的是它在基督教世界的旅程。著作的拉丁文译本在13世纪流传，神学家们争相研读，却无人知晓作者的真实身份与信仰。他们一直以为<strong>阿维斯布隆</strong>是一位穆斯林或基督教哲学家。直到19世纪，学者才惊异地揭开谜底：这位深刻影响了经院哲学的思想巨人，竟是一位来自锡尔维什的犹太人。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他的诗歌充满灵性与忧郁，仿佛映照着城堡红砂岩的色泽与命运的无常：“我如王子般被遗弃，又如奴隶般被束缚 / 时光对我残忍，将我放逐至远方。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊本·盖比鲁勒的一生，是锡尔维什作为文化熔炉黄金时代的最佳印证。这座城市孕育的思想，穿越了宗教与语言的壁垒，最终汇入了欧洲思想的洪流。今天，在锡尔维什，人们以这位哲人为荣，他的身影被铭刻在这片土地的精神谱系中，诉说着一个早已逝去、却依然共鸣的开放与智慧的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与这座城市征服史紧密相连的，是葡萄牙国王<strong>阿方索三世</strong>。他并非典型的武夫国王，却完成了先辈未竟的事业。他于<strong>1242年</strong>对锡尔维什的最终征服，具有决定性的象征意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次胜利，不仅彻底将阿尔加维的这颗“红色心脏”纳入王国版图，也为他赢得了“<strong>阿尔加维国王</strong>”的头衔，标志着葡萄牙收复失地运动在南方边境的实质性完结。阿方索三世的统治时期，葡萄牙的国界已接近今日的轮廓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在城堡内，一块朴素的石碑或许标记着他曾站立的位置。他没有留下华丽的宫殿，但他的战旗曾在这里飘扬，为一个时代的更迭画上了句号。他是锡尔维什摩尔时代的终结者，也是葡萄牙民族国家形成的推动者之一。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于城堡的陷落，当地流传着一个凄美而神秘的传说，关乎那口决定命运的<strong>“背叛之井”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在摩尔人统治末期，城堡内有一口深不见底的水井，水源秘密连通着远处的奥德莱蒂河，这是守军能够长期抵抗围困的生命线。围城的基督徒军队对此束手无策。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城中有一位摩尔公主，她爱上了一位被俘的基督教骑士。骑士承诺，若她助其攻下城堡，便带她离开并许她自由与爱情。深陷爱河的公主，透露了水井的秘密。在一个夜晚，她设法让骑士逃出，并将一把银制的<strong>琵琶</strong>投入井中作为信号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "基督徒军队根据情报，成功堵塞了地下水源。断水后的城堡迅速崩溃。然而，当城堡陷落，骑士却并未履行诺言，公主在战乱中香消玉殒。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "至今，老人们说，在风大的夜晚，靠近城堡古老的水井遗址，仍能听见风中传来隐隐的、哀伤的琵琶声，那是公主无尽的悔恨与等待。而城堡的红砂岩，也因此被说成是被背叛之血与夕阳共同染就的颜色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说融合了爱情、背叛与命运，将一场宏大的历史征服，具象为一段个人的悲剧，为冰冷的石头城墙增添了一抹永恒的人性叹息。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在锡尔维什城堡的城墙之上，脚下踩着的不是普通的砖石，而是层层叠压的时间。这里每一道风化痕迹，都可能是哲学家沉思的注脚，或是攻城槌撞击的余震。它不像那些为旅游而修缮一新的城堡，它坦露着伤痕、破败与骄傲，是一座<strong>活的历史课本</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂锡尔维什，便是读懂伊比利亚半岛那部纷繁复杂的“共存与征服”史诗中的一个关键章节。它让我们看到，文明的辉煌与碰撞，最终都沉淀为这片土地上多元而深厚的底色。这座红色城堡的剪影，不仅是阿尔加维的地理地标，更是葡萄牙民族记忆中，一个无法绕过的、充满力量的文化坐标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/belmonte-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔蒙特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belmonte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/talasnal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉斯纳尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Talasnal</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/braganca-castle-cidadela" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉干萨城堡（城堡区）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bragança Castle (Cidadela)</p>
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
