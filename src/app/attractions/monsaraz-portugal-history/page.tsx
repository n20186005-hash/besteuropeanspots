import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙萨拉什历史溯源｜葡萄牙“石之城”的前世今生与圣殿骑士团传奇',
  description: '探索葡萄牙阿尔克瓦湖畔的白色堡垒蒙萨拉什。穿越千年，从史前巨石到圣殿骑士，揭秘这座边境石城作为沉默守望者的史诗故事。',
}

export default function MonsarazPortugalHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '蒙萨拉什', href: '/attractions/monsaraz-portugal-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙萨拉什・Monsaraz・葡萄牙・埃武拉区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙阿连特茹广袤的金色平原与蔚蓝的阿尔克瓦湖之间，一座纯白的城堡如同从大地骨骼中生长而出，孤独地矗立在悬崖之巅。它并非为浪漫而生，它的基因里镌刻着“边界”与“防御”。<strong>蒙萨拉什</strong>，这个名字在风中低语了千年，其故事比脚下古老的片岩更加坚硬。这里每一块白石都曾是盾牌，每一条窄巷都藏着史诗。抛开游玩攻略，走进蒙萨拉什的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙萨拉什`} />
                <InfoRow label="英文名称" value={`Monsaraz`} />
                <InfoRow label="正式名称" value={`Monsaraz`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`埃武拉区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒙萨拉什的根源，深扎在人类对高地与石头的原始依赖之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "远在历史记载之前，新石器时代的人们就在这座山丘上竖起了<strong>巨石阵（Menir do Barrocal）</strong>。这不是偶然，山顶提供了无与伦比的视野，可以监视猎物与潜在的威胁。石头，成为了最初的语言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但“蒙萨拉什”作为一个聚落的诞生，与伊比利亚半岛长达数个世纪的动荡密不可分。公元8世纪，摩尔人征服了这片土地。其战略地位——俯瞰瓜迪亚纳河谷，控制着通往内陆的要道——被迅速识别。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地传说认为，“Monsaraz”之名源于一位名叫 <strong>“Saraz”</strong> 的摩尔酋长或罗马将军，“Mons”在拉丁语中意为“山”。但也有人认为，它来自阿拉伯语，意为“光明之山”或“瞭望之地”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论词源如何，它的命运在<strong>1167年</strong>被永久改变。葡萄牙首任国王<strong>阿方索·恩里克斯</strong>在收复失地运动的浪潮中，从摩尔人手中夺取了这片战略要地。城堡最初的石基，或许就奠基于那个风云激荡的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，夺取易，守卫难。这个新王国最东端的偏远前哨，直面着强大的莱昂王国和卡斯蒂利亚王国，以及南方穆斯林势力的威胁。国王需要最忠诚、最善战的守卫者。于是，他将这片土地赐予了一个传奇的军事修会——<strong>圣殿骑士团</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从这一刻起，蒙萨拉什的“石之城”命运被注定。它不再仅仅是一个村落，而是王国边境上一颗必须牢牢钉死的“石钉”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣殿骑士的接管，是蒙萨拉什历史的第一个决定性印记。这些僧侣战士不仅是武士，也是卓越的管理者和建设者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们强化了城堡的防御体系，建立了清晰的城镇规划。我们今天看到的蛛网般的狭窄街道、集中于山顶的布局，很大程度上源于他们高效、实用的军事化设计。城堡不仅是屏障，更是权力与秩序的象征。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "<strong>1248年</strong>的一份文件记载了圣殿骑士团在此行使司法权，这证明了他们已将蒙萨拉什建设为一个稳固的边境据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的戏剧性在于守护者自身的陨落。<strong>1312年</strong>，圣殿骑士团在欧洲范围内被镇压解散。葡萄牙国王<strong>迪尼斯一世</strong>巧妙地将骑士团的财产与人员转移至新成立的<strong>基督骑士团</strong>。蒙萨拉什的权杖，就这样平稳地交给了另一个军事修会，继续其边境卫士的使命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，来自<strong>1385年</strong>的<strong>阿尔茹巴罗塔战役</strong>前夕。这是决定葡萄牙王国存亡的关键时刻。时任葡萄牙元帅的<strong>努诺·阿尔瓦雷斯·佩雷拉</strong>——一位传奇的军事圣人——将蒙萨拉什及其城堡作为重要的后勤与征兵基地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的广场上，或许曾回荡着战前集结的喧嚣。从这里征募的士兵，走向了那个决定性的战场，并见证了葡萄牙的独立得以保全。蒙萨拉什的石头，因此浸染了国家命运的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，则更加漫长而沉寂，那就是其作为<strong>边境哨所长达数百年的守望</strong>。直到<strong>1801年</strong>，葡萄牙与西班牙的“橙子战争”后，国界最终划定，蒙萨拉什才真正从直接的军事前沿退下。这种长达六个世纪的战备状态，塑造了其封闭、内向、坚固的社区性格。建筑不求华丽，但求实用与耐久。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座以集体防御为宿命的石城中，个人的名字往往被城墙的阴影所遮盖。但有两位人物，他们的故事像裂缝中的野草，顽强地透露出生机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是圣殿骑士团不知名的指挥官。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们不知道他的名字，但他存在于每一块加固的墙石中。想象一下，13世纪初，一位来自法国或英格兰的骑士，受命来到这片欧洲的“远西”边疆。这里没有耶路撒冷的圣光，只有炙热的阳光、凛冽的东风和望不到头的、充满不确定性的边境线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的日常不是史诗般的征战，而是琐碎而严峻的治理：组织民兵巡逻，裁决村民纠纷，维护城堡器械，确保粮仓充盈以应对可能长达数月的围困。他生活在宗教戒律与军事责任的双重枷锁下。在城堡小教堂冰冷的星光中祈祷，或许是他唯一袒露软弱的时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他留下的最个人化的痕迹，可能就是在某块基石上，一个模糊的、代表圣殿骑士团的<strong>十字标记</strong>。这个标记至今仍可能嵌在城墙某处，沉默地诉说着一个为信仰与职责奉献一生的匿名者的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是何塞·德·热苏斯·玛丽亚·萨拉查，一位逃亡的犹太医生。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事揭示了蒙萨拉什在坚硬外壳下，偶尔闪现的、出人意料的包容性。时间来到<strong>18世纪</strong>，宗教裁判所的阴影依然笼罩着伊比利亚半岛。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "根据当地历史学者梳理的档案，这位犹太医生为了逃避迫害，从西班牙逃亡至此。令人惊讶的是，蒙萨拉茨的社区——或许是出于对其医术的迫切需要，或许是天高皇帝远的边境地带特有的务实——竟然接纳并庇护了他。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在镇上行医，留下了记录。在一个以天主教信仰为绝对核心的军事社区里，一个犹太人的存在本身就是一个奇迹。他的故事像一道细微的裂痕，让我们看到，在生存法则面前，绝对的教条有时也会让步。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他没有宏伟的府邸，他的名字只存在于洗礼或婚姻记录的边缘，作为“证人”或“邻居”被提及。但他的存在本身，就是对抗那个黑暗时代的一抹微光。他代表着人性、技艺在偏见壁垒中寻得生存缝隙的韧性。在蒙萨拉什，保护可以是物理上的城墙，也可以是一个社区沉默的共谋。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与坚硬的历史相比，蒙萨拉什的民间传说充满了土地的灵气与神秘的柔情。最动人的故事，关乎其脚下那片如今被阿尔克瓦湖水淹没的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在湖水升起之前，那里曾是肥沃的河谷与古老的村落。传说，每当月圆之夜，或湖面升起浓雾的清晨，水下的教堂钟声会隐隐传来，被遗忘的小径会再次显现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最著名的传说是 <strong>“岩石新娘”（Noiva da Pedra）</strong>。故事讲述了一位来自附近村庄的美丽姑娘，她深深爱上了一个年轻牧羊人。然而，她的家庭强迫她嫁给一个富有的老地主。在婚礼当天，女孩逃离了村庄，跑向蒙萨拉什所在的群山。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的哭泣和祈祷被山灵听见。出于怜悯，就在追赶者即将抓住她的那一刻，山灵将她变成了一块美丽的白色巨石。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "至今，人们指认着城堡附近某些形似女性轮廓的岩石，说那就是悲伤的新娘。传说，若在日出时分聆听，风穿过岩石缝隙的声音，仍是她的呜咽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说巧妙地融合了多个主题：对抗强迫婚姻的自由意志、人与自然神灵的沟通、以及最终与这片永恒岩<strong>石景观的合一</strong>。它解释了地貌，也慰藉了人心。在蒙萨拉什，连石头都拥有记忆与情感，它们不是无生命的建材，而是故事的容器。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你漫步在蒙萨拉什空灵寂静的白色街巷，触摸那些被时光磨去棱角的石头，你触摸的并非一个静止的“博物馆”。你触摸的是一段<strong>压缩的、立体的时间</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从史前先民的仰望，到摩尔酋长的瞭望；从圣殿骑士冰冷的剑刃，到征募士兵奔赴国运的足音；再到犹太医生谨慎穿行的身影，以及化身为石的新娘那永恒的叹息……所有这些层次，都紧密地压实在这座山顶方寸之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，正在于这种极致的<strong>反差</strong>：极致的战略重要性，与极致的遗世独立；极致的军事冷酷，与民间传说的极致柔情。这里没有繁复的巴洛克装饰，没有帝国都城的宏大叙事。它的美学是功能性的，它的故事是生存性的。它是一座关于“坚守”的丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂蒙萨拉什，便是读懂边疆的生命形态——在持续的不确定中，如何用石头、信仰、律法与传说，构建起一个足以延续千年的微小而坚韧的世界。它提醒我们，欧洲的历史不仅有文艺复兴的沙龙与航海时代的巨舰，更有这些沉默的“石钉”，牢牢固定了文明的版图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fortress-of-almeida" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔梅达要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Almeida</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/idanha-a-velha" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊达尼亚-阿韦利亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Idanha-a-Velha</p>
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
