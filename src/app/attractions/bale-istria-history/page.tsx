import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴莱历史溯源｜恐龙化石、骑士与石屋小镇的千年传奇',
  description: '在克罗地亚伊斯特拉半岛的腹地，巴莱不止有恐龙化石。穿越圣殿骑士团的迷雾，走进占星师的密室，聆听一座石头小镇用地质纪年和家族徽章写下的史诗。',
}

export default function BaleIstriaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '克罗地亚', href: '/destinations/europe' },
            { label: '伊斯特拉县', href: '/destinations/europe' },
            { label: '巴莱', href: '/attractions/bale-istria-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴莱・Bale / Valle・克罗地亚・伊斯特拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当一块禽龙股骨在葡萄园中被掘出，这座小镇的历史刻度，骤然从罗马帝国拉长到了一亿三千万年前的白垩纪。然而，巴莱的秘密远不止于此。散落在街巷的古老石屋与贵族的纹章，共同守护着一个更为幽深的中世纪谜团——这里是圣殿骑士团在亚得里亚海沿岸最后的据点之一。抛开游玩攻略，走进巴莱的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴莱`} />
                <InfoRow label="英文名称" value={`Bale / Valle`} />
                <InfoRow label="正式名称" value={`Bale / Valle`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`伊斯特拉县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴莱的名字，在克罗地亚语和意大利语中分别是 <strong>Bale</strong> 和 <strong>Valle</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两者都源于拉丁语 <strong>“vallis”</strong>，意为“山谷”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这精准地描述了它的地理形态——一片被石灰岩丘陵温柔环抱的肥沃谷地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事，并非始于某个确切的建城日，而是像地层一样缓缓堆积。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古罗马人最早看中了这里的宁静与丰饶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们在今天的镇中心位置，建立了一座名为 <strong>“Vallis”</strong> 的乡村庄园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪的动荡时期，安全成为第一需求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>大约在10-11世纪</strong>，居民们开始围绕一座早期基督教小教堂聚集，并用厚重的石块修筑房舍与防御墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的雏形，如同一枚投入历史长河的卵石，在此刻凝结成形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“Valle”</strong> 这个名字，首次出现在一份 <strong>1063年</strong> 的官方文件中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那时，它已是伊斯特拉半岛上众多小聚居点之一，隶属于阿奎莱亚宗主教的管辖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的用途，便是农业与畜牧，而后逐渐发展为区域性的贸易与手工业中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石屋、窄巷与中心广场的格局，从此奠定了它未来千年的风貌。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的印记在巴莱格外“厚重”——它同时被镌刻在岩石骨骼与城堡高墙之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，来自史前世界的庞然巨兽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1892年</strong>，当地一位农民在克雷纳村的葡萄园中，意外掘出了一块巨大的化石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "经维也纳的古生物学家鉴定，这是一块 <strong>禽龙的股骨</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一发现，瞬间将巴莱的存在史，向前推进了 <strong>一亿三千万年</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“它静静地躺在红色的伊斯特拉土壤中，仿佛一位沉睡已久的巨人，终于决定透露出白垩纪伊斯特拉曾是恐龙乐园的秘密。” —— 早期发掘记录中的描述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后的一个多世纪里，更多恐龙化石（包括骨骼和脚印）在此区域被发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴莱及周边地区，如今被视为欧洲最重要的 <strong>白垩纪恐龙化石遗址之一</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这层地质历史，是小镇最古老也最沉默的基座。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道深刻的印记，则来自中世纪最神秘的骑士团——<strong>圣殿骑士团</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪初</strong>，圣殿骑士团进驻巴莱，并在此建立了他们在伊斯特拉半岛的核心据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们建造了坚固的防御工事，其中的核心便是如今被称为 <strong>“圣科斯马斯和达米安教堂”</strong> 的建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂本身就是一部石砌的密码。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其内部留存着珍贵的 <strong>14世纪壁画</strong>，描绘着圣克里斯托弗等圣人形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但最引人遐想的，是教堂门口一句用拉丁文书写的铭文：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "<strong>“Anima sit tua Deus meus. Amen.”</strong>" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "（愿上帝是你的灵魂。阿门。）" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这句看似平常的祈祷文，因其特殊的位置与时代背景，被后世研究者揣测可能带有骑士团特有的神秘主义色彩或身份标识。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1307年</strong>，圣殿骑士团在欧洲遭到大规模镇压与清算。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而在巴莱，他们的影响似乎并未完全消散。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "骑士团的财产被转移给了同样强大的 <strong>医院骑士团</strong>，军事与宗教的权威，在这座石镇中完成了无声的交接。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴莱的传奇，不仅由宏大的历史事件书写，更与几位独特人物的命运紧密交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先是一位本土的儿子：<strong>博拉·什塔姆帕尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于 <strong>1930年</strong> 出生在巴莱一个普通的家庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇，不在于政治或军事，而在于对行将消逝的文明碎片的执着挽留。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "什塔姆帕尔是一位 <strong>语言学家、民族志学者和历史学家</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他毕生的事业，都奉献给了记录和研究 <strong>伊斯特拉半岛的罗马化人群</strong>——尤其是 <strong>伊斯特罗-罗马尼亚人</strong> 的文化、语言与传统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个古老的语言族群，几个世纪以来一直生活在本岛腹地，其语言是拉丁语在达尔马提亚海岸消亡后，在内陆存活的珍贵“活化石”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“每个老人的离世，都像是一座图书馆的焚毁。” —— 什塔姆帕尔在田野调查中常说的感慨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他走遍伊斯特拉的乡村，用笔和录音设备，虔诚地记录下古老的歌谣、民间故事、婚丧习俗和日渐稀少的方言词汇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的著作，成为研究巴尔干半岛拉丁文化遗产不可绕过的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴莱，他不仅是学者，更是这座小镇文化记忆的守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的工作让世人明白，巴莱所在的这片土地，其文化层次如同地质层一样复杂：斯拉夫、拉丁、意大利元素在此交融共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与巴莱紧密相连的，则是一位笼罩在神秘光环下的女性：<strong>玛格达莱娜·索夫·巴桑诺</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她生活在 <strong>16世纪</strong>，并非土生土长的巴莱人，却因婚姻与这座小镇结下不解之缘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛格达莱娜出生于威尼斯一个可能具有犹太背景的学者家庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她天赋异禀，精通 <strong>占星学、草药学、密码学和早期自然科学</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嫁入巴莱最显赫的 <strong>巴桑诺家族</strong> 后，她并未成为普通的贵族夫人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据传，她在家族宫殿（今巴莱著名的历史宅邸之一）中设立了一间私人实验室与图书馆。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间编年史含糊地记载：“夫人常在夜晚观测星辰，她的房间飘散着奇异草药的气息，她能解读来自东方的手稿。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时正值 <strong>威尼斯共和国</strong> 统治伊斯特拉的时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有未经证实的传说暗示，玛格达莱娜的“学识”可能以某种秘密报告的形式，为威尼斯的情报网络服务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的存在，为巴桑诺家族的宫殿增添了无尽的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们猜测，那些宫殿墙壁上的奇特纹章雕刻、隐藏的壁龛，或许都与这位“女术士”有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的故事，将文艺复兴时期隐秘的知识、贵族政治与女性的非凡才智，一同注入了巴莱的石墙之中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴莱，最动人的传说不属于神祇，而属于一种忠诚的猛禽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是关于 <strong>“猎鹰守护神”</strong> 的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在中世纪某次围城战中，敌人趁着夜色试图翻越巴莱的城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "镇民们因疲惫而沉睡，哨兵也未能察觉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "危急关头，一群在城堡塔楼上筑巢的<strong>游隼</strong>被惊动，它们发出尖锐刺耳的啼叫，并用翅膀猛烈拍打巡逻士兵的头盔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这突如其来的警报惊醒了守军，成功击退了偷袭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，游隼被奉为小镇的守护精灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，这些高傲的猛禽是远古战士灵魂的化身，世代守护着山谷的安宁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当猎鹰在城堡上空盘旋，巴莱的敌人将无法隐藏。” —— 当地一句古老的谚语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说或许源于古凯尔特人对自然灵的崇拜遗存，也与中世纪骑士驯养猎鹰的习俗相融合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直至今日，在巴莱的节庆活动或家族纹章上，仍能见到猎鹰的形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从一个侧面反映了这座小镇与周遭自然环境的深刻羁绊——他们的守护者不是虚幻的天使，而是与他们共享同一片天空与石崖的真实生灵。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在巴莱，你踏过的每一步，都可能踩在恐龙漫步过的古老海岸线上；你触摸的每一块墙石，都可能聆听过圣殿骑士的低语或占星师的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宏大叙事的喧嚣，历史以最本真的方式沉淀：化为化石，砌进墙垣，写进方言，融入口耳相传的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的迷人之处，正在于这种 <strong>“层累的共时性”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "白垩纪、罗马时代、骑士团时代、威尼斯时期……所有的时间层并未被覆盖，而是平行展现在同一空间里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它教会旅人用另一种维度去阅读风景——地质的、政治的、家族秘史的、语言流变的维度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂巴莱，便是读懂一段 <strong>微小却完整的地中海文明切片</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史的重量不只存在于首都的博物馆，也存在于偏远小镇的每一道石缝与每一个传说之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/zadar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pag-town-croatia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕格城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pag Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/svetinj" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯韦特温切纳特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Svetvinčenat</p>
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
