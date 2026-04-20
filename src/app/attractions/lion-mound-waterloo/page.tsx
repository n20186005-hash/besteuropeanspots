import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '滑铁卢狮子丘 Lion‘s Mound｜登顶欧洲命运的锥形纪念碑 - 最佳欧洲景点',
  description: '车子驶离布鲁塞尔，窗外的现代都市景观逐渐被平坦开阔的农田取代。就在你觉得这片田野与比利时任何地方别无二致时，它突然出现了——一个巨大、规整到近乎突兀的绿色圆锥体，像大地上一枚沉重的惊叹号，稳稳地压在天地交界线上。那就是狮子丘。第一眼的视觉冲击力非常直接，它不是自然形成的山丘，那种几何感强烈的人造痕迹...',
}

export default function LionMoundWaterlooPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '滑铁卢狮子丘', href: '/attractions/lion-mound-waterloo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`滑铁卢狮子丘・Lion's Mound・比利时・瓦隆布拉班特省（滑铁卢镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离布鲁塞尔，窗外的现代都市景观逐渐被平坦开阔的农田取代。就在你觉得这片田野与比利时任何地方别无二致时，它突然出现了——一个巨大、规整到近乎突兀的绿色圆锥体，像大地上一枚沉重的惊叹号，稳稳地压在天地交界线上。那就是狮子丘。第一眼的视觉冲击力非常直接，它不是自然形成的山丘，那种几何感强烈的人造痕迹，瞬间将你从悠闲的田园风光里拽出来，扔进一段凝重的历史语境中。
停好车，朝着它走去。脚下是略微泥泞的小径，周围是低矮的草丛和零星的野花，风毫无遮挡地吹过，带来泥土和青草的气息，偶尔夹杂着一丝远处农场牲畜的味道。越走近，越能感受到它的体量。开始攀登那226级石阶，台阶是现代的，但每向上一步，视野就开阔一分，风声在耳边也越发呼啸。你能听见自己的喘息声，夹杂着前后游客不同语言的零星对话。这攀登本身就像一种仪式，一点点剥离现代的喧嚣，将你引向一个用于瞭望和沉思的高度。
终于站上顶端，世界豁然开朗。风大得几乎站不稳脚，但眼前的一切让你屏住呼吸。以你为圆心，是一圈360度无死角的、平坦如棋盘般的田野。这就是滑铁卢战场。没有想象中的硝烟与沟壑，只有一片静谧的绿。但在你的脑海里，导游器或之前阅读的文字会瞬间激活这幅图景：哪里是法军冲锋的山坡，哪里是英荷联军坚守的防线，哪里是决定性的“伤亡谷”。那只巨大的雄狮就在你身后，面朝法国方向，沉默地咆哮。它不是庆祝胜利的嘶吼，更像是一声穿越两百年的、沉重的叹息，凝固在比利时的天空下。在这里，你触摸到的不是战争的荣耀，而是历史的重量，以及和平的来之不易。许多游客都只是静静地站着，望着远方，没人高声谈笑，这种集体的沉默是此地最打动人心的氛围。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离布鲁塞尔，窗外的现代都市景观逐渐被平坦开阔的农田取代。就在你觉得这片田野与比利时任何地方别无二致时，它突然出现了——一个巨大、规整到近乎突兀的绿色圆锥体，像大地上一枚沉重的惊叹号，稳稳地压在天地交界线上。那就是狮子丘。第一眼的视觉冲击力非常直接，它不是自然形成的山丘，那种几何感强烈的人造痕迹，瞬间将你从悠闲的田园风光里拽出来，扔进一段凝重的历史语境中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，朝着它走去。脚下是略微泥泞的小径，周围是低矮的草丛和零星的野花，风毫无遮挡地吹过，带来泥土和青草的气息，偶尔夹杂着一丝远处农场牲畜的味道。越走近，越能感受到它的体量。开始攀登那226级石阶，台阶是现代的，但每向上一步，视野就开阔一分，风声在耳边也越发呼啸。你能听见自己的喘息声，夹杂着前后游客不同语言的零星对话。这攀登本身就像一种仪式，一点点剥离现代的喧嚣，将你引向一个用于瞭望和沉思的高度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`终于站上顶端，世界豁然开朗。风大得几乎站不稳脚，但眼前的一切让你屏住呼吸。以你为圆心，是一圈360度无死角的、平坦如棋盘般的田野。这就是滑铁卢战场。没有想象中的硝烟与沟壑，只有一片静谧的绿。但在你的脑海里，导游器或之前阅读的文字会瞬间激活这幅图景：哪里是法军冲锋的山坡，哪里是英荷联军坚守的防线，哪里是决定性的“伤亡谷”。那只巨大的雄狮就在你身后，面朝法国方向，沉默地咆哮。它不是庆祝胜利的嘶吼，更像是一声穿越两百年的、沉重的叹息，凝固在比利时的天空下。在这里，你触摸到的不是战争的荣耀，而是历史的重量，以及和平的来之不易。许多游客都只是静静地站着，望着远方，没人高声谈笑，这种集体的沉默是此地最打动人心的氛围。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`滑铁卢狮子丘`} />
                <InfoRow label="英文名称" value={`Lion's Mound`} />
                <InfoRow label="正式名称" value={`Lion‘s Mound (Butte du Lion)`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`瓦隆布拉班特省（滑铁卢镇）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`纪念彻底终结拿破仑时代、重塑欧洲近代政治格局的滑铁卢战役的永久性地标。`} />
                <InfoRow label="建筑特色" value={`一座用战场原址土壤堆砌而成的巨大人工土丘，顶部矗立着一尊威严的铸钢雄狮雕像。`} />
                <InfoRow label="建筑风格" value={`新古典主义风格的纪念性构筑物，其锥形山体本身是典型的人工地景工程。`} />
                <InfoRow label="文化价值" value={`一个象征和平、反思战争与历史转折的朝圣地，而非胜利者的凯旋碑。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`狮子丘及周边战场公园全年每日开放，通常为上午9:30至傍晚，夏季（4月至9月）会延长至晚6点或更晚，冬季关闭时间提前。山脚下的“滑铁卢战役纪念馆”和“全景画馆”开放时间约为10:00-17:30，具体季节有微调。每年的1月1日和12月25日关闭。建议出行前在官网核实最新时间。`} />
              <InfoRow label="门票价格" value={`进入战场区域和远观狮子丘免费。攀登狮子丘及参观纪念馆、全景画馆需购票。标准联票（含丘顶、纪念馆、全景画馆、4D电影等）成人约19欧元，学生及老年人有折扣。6-17岁青少年票约12欧元，6岁以下免费。也有仅攀登狮子丘的单项票，价格较低。建议购买联票以获得完整体验。官网偶尔有家庭套票优惠。`} />
              <InfoRow label="地址" value={`Route du Lion 315, 1420 Braine-l‘Alleud, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔出发最为方便。在布鲁塞尔中央车站（Bruxelles-Central）乘坐开往沙勒罗瓦方向的S-Train（S线城际列车），在“Braine-l‘Alleud”站下车，车程约25分钟，班次频繁。出站后，在车站广场转乘公交车W（前往滑铁卢方向），在“Lion”站下车即达战场遗址区入口，公交约需10-15分钟。也可以从布鲁塞尔乘坐直达滑铁卢镇的火车，再换乘当地公交，但略绕。自驾前往最灵活，从布鲁塞尔市区约半小时车程，景区有大型付费停车场。购票建议使用比利时铁路APP或直接在车站购买火车票，公交车可上车用现金或contactless银行卡购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1815年6月18日那个泥泞的星期天下午说起。在此之前，拿破仑·波拿巴从流放地厄尔巴岛戏剧性地归来，重掌法国政权，像一颗投入欧洲湖面的巨石，让刚刚在维也纳试图规划战后秩序的各国君主们惊恐不已。反法同盟迅速集结，最终，拿破仑的军队与威灵顿公爵指挥的英荷联军、布吕歇尔元帅率领的普鲁士军队，在这片位于布鲁塞尔以南约20公里的开阔土地上相遇。那天的雨时断时续，把田野变成了沼泽，严重影响了拿破仑倚重的炮兵机动和骑兵冲锋。战役从中午持续到夜晚，双方投入超过二十万兵力，是典型的消耗战，惨烈程度空前。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关键转折发生在傍晚。法军一度几乎突破联军中部的防线，但威灵顿的军队像钉子一样死死钉在阵地上。而布吕歇尔的普鲁士军队，不顾急行军的疲惫，终于在关键时刻从东侧杀入战场，彻底改变了力量对比。拿破仑最后的近卫军精锐在“皇帝万岁”的呼喊中发起绝望冲锋，然后被击溃。战役以法军的全面溃败告终，拿破仑的“百日王朝”和法兰西第一帝国就此终结，他本人再次被流放，直至在大西洋的圣赫勒拿岛去世。这片田野上留下了数万具尸体和垂死的伤兵，雨水混合着血水，景象宛如地狱。胜利者没有立即竖立丰碑，战场在之后几年里，渐渐被农夫犁平，种上庄稼，仿佛大自然急于愈合这道深刻的伤口。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1820年，当时的荷兰国王（兼比利时统治者）威廉一世，下令建造这座纪念丘。表面理由是为了纪念在此役中受伤的他的儿子——奥兰治亲王。但更深层的政治意图不言而喻：用一座宏伟、可见度极高的地标，来彰显联盟的胜利，并永久性地警示南方那个强大的邻国。建造过程本身就是一个浩大工程。工人们（传说中很多是当地妇女）用篮子搬运战场原址的泥土，一筐一筐堆砌起这座高约43米，周长超过500米的人造山丘。据说，这象征性地收集了整片战场的“神圣”土壤。工程历时数年，于1826年完工。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`山顶的狮子雕像则由著名建筑师查尔斯·范德斯特拉滕设计。这尊重达28吨的铸钢雄狮，面朝法国，前爪踩着一只象征全球权力的圆球，姿态威严而警惕。它由在战场废墟中收集的法国枪炮熔化后铸造而成，这个细节充满了冰冷的讽刺与历史的轮回感。在很长一段时间里，狮子丘主要是胜利者叙事和民族主义的象征。但随着时间的推移，尤其是两次世界大战的惨痛经历后，欧洲人对战争的理解发生了深刻变化。滑铁卢逐渐从一个“庆祝击败暴君”的地点，演变为一个全欧洲共同反思战争愚蠢、珍视和平的场所。法国作家维克多·雨果曾在《悲惨世界》中巨细靡遗地描写滑铁卢战役，并亲自来访。他在书中写道：“滑铁卢是一场第一流的战争，却被一个二流的胜利者所赢得。” 这句话精准地捕捉了后世对此地复杂的情感——对拿破仑传奇的某种惋惜，对战争无差别毁灭性的认识，以及对历史偶然性的深刻感叹。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受滑铁卢，至少需要预留半天（4-5小时）。强烈建议在上午抵达，此时光线好，游客相对较少，能有更宁静的体验。整个游览应遵循“先理解，后感受”的节奏：先在山下的纪念馆通过多媒体和实物建立历史认知，再登上狮子丘获得全局的空间视觉，最后深入战场腹地，用脚步丈量历史。这样由知识到景象，再到身临其境的漫步，体验是层层递进、逐步深入的。如果你时间充裕，甚至可以在战场旁的乡村小径上漫步更久，让那种空旷与寂静完全浸透你。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双非常舒适、耐脏且防滑的鞋，因为攀登石阶和漫步田野小径（尤其是雨后）可能会泥泞。比利时的天气说变就变，即便是夏天也带一件防风外套，丘顶的风可能超乎想象的大。请始终保持对这片土地的尊重，这里是数万人丧生之地，避免大声喧哗或不当的玩笑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心拿一份详实的双语地图并租借一个语音导览器，让那个沉稳的声音成为你今日的私人历史讲述者。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入现代化的“滑铁卢战役纪念馆”，在幽暗的光线里穿过时光长廊，触摸那些生锈的步枪、破损的军鼓，观看沙盘上灯光演示军队的调动，让1815年那个混乱的夏日在你脑中变得清晰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进隔壁的“全景画馆”，站在那幅完成于1912年、长达110米的巨型环形油画中心，被震耳欲聋的模拟枪炮声与战马嘶鸣包围，仿佛瞬间被抛回战场最血腥的中心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始你的攀登仪式，沿着狮子丘那226级略显陡峭的石阶一步一阶向上，感受心跳加速和越来越强的风，并回头看看身后逐渐展开的广阔地平线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在丘顶青铜雄狮的脚下驻足，顺时针缓缓环视一周，根据导览提示辨认远处的拉海圣庄园、乌古蒙庄园等关键地点，试着在绿野中勾勒出当年战线的形状。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，不要急着离开，沿着清晰标记的田野小径走向那片被称为“伤亡谷”的低洼地，想象这里曾层层叠叠堆满双方士兵的躯体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行约二十分钟到达战役中战斗最惨烈、坚守时间最长的据点之一“乌古蒙庄园”，抚摸庄园教堂那面至今保留着弹孔的残墙，看看那棵嵌入了炮弹的老树。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到景区入口附近，在那家由老农庄改造的咖啡馆坐下，点一杯本地啤酒或咖啡，望着窗外的狮子丘，让所有的画面和思绪慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从战场南侧远处的一片麦田边缘仰拍狮子丘全景，最佳时间是下午四点后的侧光或金色夕阳时分，将广阔的田野作为前景，突出土丘的孤寂与宏伟。`}</h4>
                  <p className="text-sm text-gray-700">{`从战场南侧远处的一片麦田边缘仰拍狮子丘全景，最佳时间是下午四点后的侧光或金色夕阳时分，将广阔的田野作为前景，突出土丘的孤寂与宏伟。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`在狮子丘顶，以威严的雄狮雕像为前景，使用广角镜头俯拍整个战场全景，最好能捕捉到地平线上蜿蜒的道路和零星树丛，展现战场的辽阔尺度。`}</h4>
                  <p className="text-sm text-gray-700">{`在狮子丘顶，以威严的雄狮雕像为前景，使用广角镜头俯拍整个战场全景，最好能捕捉到地平线上蜿蜒的道路和零星树丛，展现战场的辽阔尺度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`乌古蒙庄园内，聚焦于那座小教堂墙壁上清晰可见的弹孔裂痕，利用斑驳的光影，拍摄一个充满细节和历史伤痕的特写镜头。`}</h4>
                  <p className="text-sm text-gray-700">{`乌古蒙庄园内，聚焦于那座小教堂墙壁上清晰可见的弹孔裂痕，利用斑驳的光影，拍摄一个充满细节和历史伤痕的特写镜头。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`日落时分，从停车场方向远眺，拍摄狮子丘在绚烂晚霞中呈现出的黑色剪影，此时它不再是具体的纪念碑，而是一个关于记忆与时光的抽象符号。`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，从停车场方向远眺，拍摄狮子丘在绚烂晚霞中呈现出的黑色剪影，此时它不再是具体的纪念碑，而是一个关于记忆与时光的抽象符号。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尽量避免在正午顶光时拍摄丘顶的狮子雕像，光线会过于生硬平淡。在田野间行走拍摄时，请务必沿着指定小径，尊重私人农田和牧场，不要践踏作物。如果遇到阴雨天气也别沮丧，灰蒙蒙的天空和湿润的土地反而能更好地还原1815年战役当日的气氛，拍出更有情绪感的照片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`便捷城市之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在布鲁塞尔市中心，有无数酒店和餐厅选择，乘坐火车通勤来滑铁卢非常方便，适合希望同时体验都市繁华与历史深度的旅行者。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸小镇体验`}</h4>
                  <p className="text-sm text-green-800">{`选择滑铁卢镇上的精品酒店或家庭旅馆，晚上在安静的小镇街道散步，早上可以第一批抵达战场，享受最宁静的晨光，真正融入当地节奏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`独特农庄住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`预订战场周边经过改造的古老农庄民宿，有些甚至能看到狮子丘，夜晚万籁俱寂，只有星空和风声，体验最纯粹的乡村之夜与历史沉浸感。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端历史氛围`}</h4>
                  <p className="text-sm text-purple-800">{`下榻位于战场区域边缘、由19世纪贵族宅邸改建的五星级酒店，房间内饰古典优雅，有些还带有关乎战役的私人收藏，将奢华与历史感完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果计划在旅游旺季（夏季或战役纪念日前后）前往，务必提前很久预订战场附近的住宿，它们数量有限且非常抢手。住在布鲁塞尔虽然方便，但意味着你每天要花至少一小时在通勤上，请根据自己对旅行节奏的偏好权衡。滑铁卢镇本身非常安全宁静，但夜间娱乐活动较少，喜欢夜生活的朋友可能更适合以布鲁塞尔为基地。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开狮子丘，驱车返回布鲁塞尔的路上，那片绿色锥形山丘在后视镜里越来越小，最后消失在地平线。但那种感觉却留了下来——一种混合着震撼、肃穆和淡淡忧伤的复杂情绪。滑铁卢不是一个让人“开心”的景点，它不会给你带来沙滩日光浴的放松或童话城堡的浪漫。它是一堂沉重而必要的历史课，一个巨大的户外沉思空间。在这里，你被迫去面对历史的偶然与必然，个人的野心与时代的洪流，以及所有宏大叙事背后，每一个普通士兵的恐惧与牺牲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个被快速消费和即时满足驱动的时代，狮子丘的存在像是一个固执的减速带。它提醒我们，有些地方的价值不在于“打卡”，而在于“在场”与“回想”。它让你停下脚步，在呼啸的风中，去想象、去追问、去感受历史的重量。对于热爱深度游的旅人来说，这里绝对值得你专程安排一天，离开布鲁塞尔的欧盟总部和原子塔，来到这片安静的田野。因为只有站在这里，你才能真正理解，今天欧洲大陆上相对和平与联合的格局，其根基是多么的脆弱与来之不易。滑铁卢狮子丘，它不仅是望向过去的瞭望塔，也是一面映照当下、警示未来的镜子。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alden-biesen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔登·比森城堡（条顿骑士团的宏大封地）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alden Biesen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/grand-curtius" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔提乌斯博物馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grand Curtius</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/oudenaarde-tapestry-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥德瓦尔德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oudenaarde</p>
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
