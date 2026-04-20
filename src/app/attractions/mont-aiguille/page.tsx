import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '艾吉耶山 Mont Aiguille｜法国“不可攀登之山”的传奇孤峰 - 最佳欧洲景点',
  description: '朋友，想象一下，在法国东南部那片如绿色波涛般起伏的韦科尔高原上，你正驾车穿行。突然，一个绝对超现实的景象撞入眼帘——前方不远处，一座巨大的、近乎笔直的石柱拔地而起，顶部却平坦得像个停机坪，被翠绿的森林覆盖。那就是艾吉耶山。第一眼看到它，你会不自觉地屏住呼吸，那是一种混合了敬畏与困惑的感觉。它太孤独了',
}

export default function MontAiguillePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '艾吉耶山', href: '/attractions/mont-aiguille' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`艾吉耶山・Mont Aiguille・法国・伊泽尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，在法国东南部那片如绿色波涛般起伏的韦科尔高原上，你正驾车穿行。突然，一个绝对超现实的景象撞入眼帘——前方不远处，一座巨大的、近乎笔直的石柱拔地而起，顶部却平坦得像个停机坪，被翠绿的森林覆盖。那就是艾吉耶山。第一眼看到它，你会不自觉地屏住呼吸，那是一种混合了敬畏与困惑的感觉。它太孤独了，也太骄傲了，就这么毫无征兆地耸立在温和的牧场与森林之间，像个来自异世界的沉默巨人。
把车停在尚希利安村边，徒步靠近它的山脚。空气中是盛夏干草被晒暖的芬芳，混合着野生百里香的辛辣气息。耳边是牛羊脖子上铃铛的叮当声，和风吹过广阔高原的呼呼声。可一旦你仰起头，所有田园牧歌的轻柔声音仿佛都被它那堵灰白色的、巨大无比的岩壁吸收了，只剩下一种近乎神圣的寂静。当地牧民会笑着跟你打招呼，对他们来说，这座山是生活里永恒的背景板，是天气预报员——当山顶被云雾笼罩，就意味着雨要来了。
它的核心魅力，就在于这种极致的反差与和谐。山下是人间烟火，是悠闲的徒步者和野餐的家庭。而山体本身，却代表着绝对的自然威严和历史的重量。你触摸着它底部粗糙冰凉的石灰岩，能清晰看到亿万年前海洋生物的化石嵌在其中。这不仅仅是一块石头，这是一部立体的地球日记，一次地质学的奇迹，更是一个等待了数百年的、关于勇气与好奇的古老邀请函。它安静地站在那里，不问你来处，只静静拷问着每个凝视它的人：你，有上去看看的梦想吗？`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，在法国东南部那片如绿色波涛般起伏的韦科尔高原上，你正驾车穿行。突然，一个绝对超现实的景象撞入眼帘——前方不远处，一座巨大的、近乎笔直的石柱拔地而起，顶部却平坦得像个停机坪，被翠绿的森林覆盖。那就是艾吉耶山。第一眼看到它，你会不自觉地屏住呼吸，那是一种混合了敬畏与困惑的感觉。它太孤独了，也太骄傲了，就这么毫无征兆地耸立在温和的牧场与森林之间，像个来自异世界的沉默巨人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在尚希利安村边，徒步靠近它的山脚。空气中是盛夏干草被晒暖的芬芳，混合着野生百里香的辛辣气息。耳边是牛羊脖子上铃铛的叮当声，和风吹过广阔高原的呼呼声。可一旦你仰起头，所有田园牧歌的轻柔声音仿佛都被它那堵灰白色的、巨大无比的岩壁吸收了，只剩下一种近乎神圣的寂静。当地牧民会笑着跟你打招呼，对他们来说，这座山是生活里永恒的背景板，是天气预报员——当山顶被云雾笼罩，就意味着雨要来了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，就在于这种极致的反差与和谐。山下是人间烟火，是悠闲的徒步者和野餐的家庭。而山体本身，却代表着绝对的自然威严和历史的重量。你触摸着它底部粗糙冰凉的石灰岩，能清晰看到亿万年前海洋生物的化石嵌在其中。这不仅仅是一块石头，这是一部立体的地球日记，一次地质学的奇迹，更是一个等待了数百年的、关于勇气与好奇的古老邀请函。它安静地站在那里，不问你来处，只静静拷问着每个凝视它的人：你，有上去看看的梦想吗？" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`艾吉耶山`} />
                <InfoRow label="英文名称" value={`Mont Aiguille`} />
                <InfoRow label="正式名称" value={`Mont Aiguille`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`伊泽尔省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`现代登山运动的诞生地，见证了人类首次纯粹出于好奇与挑战精神的攀登。`} />
                <InfoRow label="建筑特色" value={`一座由石灰岩构成的巨型平顶孤峰，犹如一座被天神削平了尖顶的天然金字塔，垂直岩壁高达300米。`} />
                <InfoRow label="建筑风格" value={`自然地质奇观，属于典型的喀斯特地貌在阿尔卑斯造山运动中的杰作。`} />
                <InfoRow label="文化价值" value={`它不仅是地理地标，更是欧洲文艺复兴时期人文精神突破中世纪思想禁锢的象征，标志着人类探索自然之心的觉醒。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年全天候开放，但徒步路径和攀登路线受季节和天气影响极大。推荐游览期为每年5月底至10月初，此时山区积雪融化，路径清晰，天气相对稳定。冬季（11月至次年4月）山峰被冰雪覆盖，仅适合具备专业高山攀登技术和装备的探险者。山区天气变化无常，出发前务必查询当地气象站预报。`} />
              <InfoRow label="门票价格" value={`免费。艾吉耶山及其所在的韦科尔地区自然公园无需门票。如需聘请专业登山向导、租用专业装备或参加攀岩课程，则需额外付费。向导服务建议提前通过当地登山协会或专业机构预约，日均费用约300-400欧元。`} />
              <InfoRow label="地址" value={`Mont Aiguille, 38650 Gresse-en-Vercors, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是里昂圣埃克絮佩里机场（LYS）。从机场租车自驾是最灵活的方式，沿A48和A51高速公路转D531、D22等省道，车程约2小时直达山脚小镇。也可从里昂帕尔迪厄火车站（Gare de Lyon-Part-Dieu）乘坐TER列车至格勒诺布尔（Grenoble），约1.5小时；再从格勒诺布尔公交站换乘Transisère 5100路巴士前往“Gresse-en-Vercors”或“Chichilianne”村，但班次稀少（每天仅2-3班），总耗时约3.5小时。强烈建议自驾或提前联系当地民宿安排接送。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起这座山的故事，那可得回到一个思想和观念都在剧烈变革的年代——文艺复兴时期的法国。在1492年，哥伦布扬帆远航的同一年，艾吉耶山还被称为“不可攀登之山”。它那光滑陡峭的岩壁，在中世纪的人们眼中，是神明划定的禁区，是凡人不可触及的领域。它的平顶被认为可能是天使的居所，或者上古隐士的修道院，总之充满了神秘学的想象。改变这一切的，是一位充满人文主义好奇心的国王：查理八世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这位年轻的国王在巡视他的领土时，远远望见了这座奇异的平顶山，被深深迷住了。他心中萌生的不是敬畏，而是一个大胆的疑问：“那上面到底有什么？”这个简单的问题，打破了千年的思想禁锢。他不再满足于神话解释，他要一个实证的答案。于是，他下达了一道具有里程碑意义的命令：组建一支队伍，登上那座山，去看个究竟。这道命令本身，就闪耀着文艺复兴“以人为本”、探索未知的精神光芒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "执行这个任务的，是国王的侍从官安托万·德·维尔。他并非现代意义上的登山家，更像是一位工程师兼冒险队长。他带着一支包括木匠、铁匠和士兵在内的团队，运用了那个时代最“高科技”的工具：绳梯、简易木桩、甚至可能还有原始的滑轮组。没有现代的保护绳和岩钉，这完全是一次以智慧对抗自然的壮举。经过数日艰难尝试，他们最终在1492年6月成功登顶。维尔详细记录了攀登过程，并震惊地发现山顶并非天使的宫殿，而是一片丰美的草地，有野花、有清澈的小水塘，还有成群的野羚羊。这个发现平凡却又伟大，它用事实驱散了迷信的迷雾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，艾吉耶山从“神话之山”变成了“传奇之山”。维尔的这次攀登，被后世公认为阿尔卑斯登山运动乃至现代登山文化的开端。它不再是为了生存、战争或牧羊而爬山，而是第一次纯粹为了“探索与知晓”而进行的攀登。此后数百年，它依然是技术攀登的试金石，直到1877年才出现第二次有记录的登顶。它的岩壁训练出了一代又一代法国攀登好手。二战时期，它陡峭的岩壁和孤立的台地，甚至成了法国抵抗运动成员绝佳的隐藏地点和空投物资接收场，为这座山增添了一层悲壮的历史色彩。今天，当我们仰望它，看到的不仅是一处自然奇观，更是人类好奇心冲出地平线的那第一道勇敢的轨迹。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`深度体验艾吉耶山，绝非一日之功。理想安排是预留完整的两天时间，第一天用于适应、远观和感受山脚氛围，第二天则根据自身能力选择近距离接触的方式。建议第一天午后抵达尚希利安或格雷斯昂韦科尔村，入住当地民宿。下午可进行3-4小时的适应性徒步，例如环绕山峰底部的“全景小径”，从各个角度欣赏这座孤峰的雄姿，感受它在不同光线下的表情变化。傍晚一定要在高原上等待日落，看夕阳的金辉为灰白的岩壁披上玫瑰色的外衣。第二天清晨，如果你是有经验的徒步者，可以挑战通往“缺口”的传统登山路径；如果你是攀岩爱好者且准备充分，则可以尝试经典攀登路线。无论如何，务必在中午前开始下山，因为山区午后容易变天。这样的节奏既能深度沉浸，又保障安全。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`山区天气瞬息万变，即使夏天也必须携带防风防水外套和充足饮水。
徒步路径部分路段碎石多且陡峭，务必穿专业登山鞋，绝对不要尝试穿着普通运动鞋攀登。
尊重山区环境，所有垃圾随身带走，不要惊扰野生动物。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一天下午从尚希利安村出发，沿着标识清晰的“艾吉耶山全景小径”慢行，让这座巨石的身影随着你的脚步不断变换角度和姿态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在徒步约一小时后抵达一个朝西的宽阔草坡，这里是野餐和长久凝视山峰的完美地点，铺开毯子，感受风与寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前回到村庄附近的高处，找一块光滑的石头坐下，静静看着夕阳如何一寸一寸点燃艾吉耶山那巨大的石灰岩墙壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天天微亮时，如果选择徒步，就沿着历史悠久的“维尔之路”向山肩处的“缺口”进发，踩着碎石坡感受最早那位攀登者可能走过的路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当你最终站在“缺口”这个天然垭口，转身回望，壮阔的韦科尔高原像一幅绿色地毯在你脚下展开，而头顶则是令人眩晕的最终岩壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条小径，穿过阴凉静谧的山毛榉森林，倾听溪流和鸟鸣，让激动的心情慢慢平复。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到山脚，去村里的老酒馆点一杯当地产的奶酪和一杯红酒，和酒馆主人聊聊天，听听他们祖辈传下来的关于这座山的故事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`尚希利安村北侧牧场日出机位`}</h4>
                  <p className="text-sm text-gray-700">{`黎明前架好三脚架，等待第一缕阳光将艾吉耶山的平顶染成金黄色，而山体大部分还沉浸在蓝色的阴影中，形成极致的冷暖对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“缺口”垭口仰拍机位`}</h4>
                  <p className="text-sm text-gray-700">{`站在垭口，使用广角镜头垂直向上拍摄，将巨大的岩壁与一线天空纳入画面，凸显人类的渺小与自然的威严，最佳光线在上午十点左右。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`全景小径上的侧逆光机位`}</h4>
                  <p className="text-sm text-gray-700">{`下午四五点，太阳西斜时，在步道东段寻找能将山峰、前景的野花或孤独的树木一同构图的点，侧逆光能为景物勾勒出金色的轮廓，画面充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`格雷斯昂韦科尔村口黄昏机位`}</h4>
                  <p className="text-sm text-gray-700">{`日落后的蓝调时刻，以村庄温暖的灯火为前景，拍摄艾吉耶山深蓝色的剪影，宁静而富有生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`长焦镜头非常有用，可以压缩空间，捕捉岩壁上攀登者的身影或地质细节。`}</li>
                <li>• {`无人机飞行需严格遵守法国山区法规，远离野生动物巢穴，且山间气流多变，飞行需格外谨慎。`}</li>
                <li>• {`拍摄当地牧民和牲畜前，请先微笑示意并征得同意，这是基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山居情怀`}</h4>
                  <p className="text-sm text-blue-800">{`位于尚希利安村中心的百年石屋民宿，主人是退休的登山向导，早餐有自家果园的果酱，晚上壁炉边会分享无数山峰传奇。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`高原牧歌`}</h4>
                  <p className="text-sm text-green-800">{`距离山脚徒步起点仅十分钟的独栋小木屋，拥有无遮挡的直面艾吉耶山的超大露台，夜晚可以躺在躺椅上看毫无光污染的璀璨银河。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园秘境`}</h4>
                  <p className="text-sm text-yellow-800">{`由世代经营农场的家庭将谷仓改造的温馨旅馆，房间里有老木梁，晚餐食材直接来自自家的菜园和牧场，体验最地道的山区农家生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`攀登者之家`}</h4>
                  <p className="text-sm text-purple-800">{`在格雷斯昂韦科尔村，专为登山者设计的简约风格旅馆，提供装备烘干房、路线图讨论板和营养丰富的能量早餐，是结识同好、交流信息的绝佳地点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和初秋是旺季，这些特色住宿都非常抢手，务必提前至少两个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山区夜晚温度可能骤降，即使夏季，房间内的保暖设备是否充足也需提前确认。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄极其安全宁静，但夜间户外照明有限，建议携带头灯以备不时之需。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开艾吉耶山好些日子了，但它的形象却比许多去过的华丽宫殿更清晰地刻在脑海里。我想，那是因为它带给我的，不是消费性的景观欣赏，而是一种持续的、安静的叩问。在这个快节奏的、一切都可以被数字化体验的世界里，它像一座顽固的、实体的纪念碑，矗立在那里，提醒我们有些体验必须亲身用脚步去丈量，用汗水去换取，有些敬畏需要仰起脖子直到酸痛才能真正感受。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不仅仅是一座山。它是我们内心里那个关于“探索”的原点。站在它的面前，你会忘记社交媒体上的点赞，忘记生活的琐碎烦恼。你只会想，1492年的安托万·德·维尔，带着简陋的工具仰望这面绝壁时，是怎样的心情？那种最纯粹的好奇心与征服欲，是人类文明得以闪烁至今的火种。今天，我们攀登它，或许用了更先进的工具，但面对自然时的那份谦卑与激动，与数百年前并无二致。它让我们重新连接起那个勇于对未知说“为什么”和“试试看”的自己。所以，如果你也渴望一次不仅能看见风景、更能看见自己内心风景的旅程，那么，请务必来艾吉耶山。让它那孤独而骄傲的身影，也走进你的生命故事里。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/oingt" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昂村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oingt</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brisighella-hilltown" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布里西盖拉（驴子巷与三座山峰）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brisighella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-malbrouck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Malbrouck</p>
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
