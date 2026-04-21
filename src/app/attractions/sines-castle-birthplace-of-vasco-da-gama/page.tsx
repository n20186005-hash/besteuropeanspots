import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡内什 Sines｜达伽马出生地的海风城堡，邂逅大航海起点的蓝白梦境 - 最佳欧洲景点',
  description: '车子沿着海岸公路拐过最后一个山丘，锡内什就这么毫无防备地撞进眼帘。那不是你想象中精致娇柔的南欧小镇，第一眼的感觉，是粗粝而开阔的。一大片洁白的房屋像贝壳一样，从一座深色岩石山丘的脚下，哗啦啦地洒向蔚蓝的大西洋。而那座城堡——圣殿堡，就像一枚最坚硬的核，稳稳地坐在山顶，俯瞰着脚下的一切。海风是这里永恒',
}

export default function SinesCastleBirthplaceOfVascoDaGamaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '锡内什', href: '/attractions/sines-castle-birthplace-of-vasco-da-gama' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡内什・Sines・葡萄牙・锡内什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着海岸公路拐过最后一个山丘，锡内什就这么毫无防备地撞进眼帘。那不是你想象中精致娇柔的南欧小镇，第一眼的感觉，是粗粝而开阔的。一大片洁白的房屋像贝壳一样，从一座深色岩石山丘的脚下，哗啦啦地洒向蔚蓝的大西洋。而那座城堡——圣殿堡，就像一枚最坚硬的核，稳稳地坐在山顶，俯瞰着脚下的一切。海风是这里永恒的背景音，带着咸腥的气息和磅礴的生命力，瞬间就吹散了你长途跋涉的困倦。
走近城堡所在的古老街区，时间仿佛慢了下来。脚下的石板路被岁月和海风打磨得光滑温润。穿着随意、肤色被晒得黝黑的当地老人，坐在小巷阴影里的长凳上，用你听不懂的葡萄牙语缓慢地聊着天，他们的眼神常常会越过你的肩膀，投向远处那片无边无际的蓝。渔港里，引擎的突突声、海鸥的鸣叫、还有工人们卸货时粗声的吆喝交织在一起，那是生活本身最质朴的乐章。你突然明白，这城堡从来不是一座仅供观赏的遗迹，它依然是这个城镇跳动的心脏，守护着一代又一代人与海洋共生的日常。
而最打动人心的，恰恰是这种奇妙的混杂感。一边是承载着沉重历史的古老石墙，墙缝里长着倔强的野花；另一边，透过城堡的垛口，你能看到现代化的石油港巨大的白色储罐在阳光下闪光，渔船的彩色船身随着波浪轻轻摇晃。历史与当下，静谧与喧嚣，厚重的石头与流动的海水，在这里达成了某种默契的和解。你站在达伽马可能也曾站立过的位置，吹着他童年时吹过的风，感受到的并非单纯的怀古幽情，而是一种绵延不息的生命力——从五百多年前那个从这里走向世界的男孩开始，一直澎湃到今天。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着海岸公路拐过最后一个山丘，锡内什就这么毫无防备地撞进眼帘。那不是你想象中精致娇柔的南欧小镇，第一眼的感觉，是粗粝而开阔的。一大片洁白的房屋像贝壳一样，从一座深色岩石山丘的脚下，哗啦啦地洒向蔚蓝的大西洋。而那座城堡——圣殿堡，就像一枚最坚硬的核，稳稳地坐在山顶，俯瞰着脚下的一切。海风是这里永恒的背景音，带着咸腥的气息和磅礴的生命力，瞬间就吹散了你长途跋涉的困倦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近城堡所在的古老街区，时间仿佛慢了下来。脚下的石板路被岁月和海风打磨得光滑温润。穿着随意、肤色被晒得黝黑的当地老人，坐在小巷阴影里的长凳上，用你听不懂的葡萄牙语缓慢地聊着天，他们的眼神常常会越过你的肩膀，投向远处那片无边无际的蓝。渔港里，引擎的突突声、海鸥的鸣叫、还有工人们卸货时粗声的吆喝交织在一起，那是生活本身最质朴的乐章。你突然明白，这城堡从来不是一座仅供观赏的遗迹，它依然是这个城镇跳动的心脏，守护着一代又一代人与海洋共生的日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最打动人心的，恰恰是这种奇妙的混杂感。一边是承载着沉重历史的古老石墙，墙缝里长着倔强的野花；另一边，透过城堡的垛口，你能看到现代化的石油港巨大的白色储罐在阳光下闪光，渔船的彩色船身随着波浪轻轻摇晃。历史与当下，静谧与喧嚣，厚重的石头与流动的海水，在这里达成了某种默契的和解。你站在达伽马可能也曾站立过的位置，吹着他童年时吹过的风，感受到的并非单纯的怀古幽情，而是一种绵延不息的生命力——从五百多年前那个从这里走向世界的男孩开始，一直澎湃到今天。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡内什`} />
                <InfoRow label="英文名称" value={`Sines`} />
                <InfoRow label="正式名称" value={`Sines`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`锡内什`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是葡萄牙乃至世界大航海时代先驱瓦斯科·达伽马的诞生地，是那个探险与梦想时代的物理与精神原点之一。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于海岬之上的中世纪防御城堡，坚固的石墙与塔楼与现代渔港的活力形成时空对话。`} />
                <InfoRow label="建筑风格" value={`主体为中世纪军事建筑，并融入了后续几个世纪的曼努埃尔式与文艺复兴风格的修葺元素。`} />
                <InfoRow label="文化价值" value={`它不仅是一座城堡，更是一个鲜活的海滨社区中心，凝聚着葡萄牙民族深刻的海洋基因与冒险精神。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣殿堡（Castelo de Sines）全年开放，夏季（4月至10月）通常为上午9:30至晚上7:00，冬季（11月至3月）为上午9:30至下午5:30，每周一闭馆（若周一为公共假日则顺延至周二闭馆）。瓦斯科·达伽马故居博物馆（Casa de Vasco da Gama）开放时间与城堡主体基本同步，但内部维护期间可能临时关闭，建议行前在市政官网确认。渔港与海滩等公共区域全天开放。重大节日如圣彼得节（6月29日前后）期间，城堡可能有特别夜间开放活动。`} />
              <InfoRow label="门票价格" value={`进入城堡庭院及部分城墙区域免费。进入城堡主楼内部及达伽马故居博物馆需购票，成人票约3欧元，65岁以上长者及12-25岁青年票约1.5欧元，12岁以下儿童免费。每月第一个周日全天免费（部分特展除外）。持有葡萄牙遗产通票（如Rota do Património）可享折扣。`} />
              <InfoRow label="地址" value={`Largo do Castelo, 7520-159 Sines, Portugal`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从里斯本自驾：沿A2高速公路向南，转入A26/IC33方向锡内什，全程约150公里，车程1.5-2小时，沿途风景壮丽。乘坐公共交通：从里斯本的塞萨尔·苏亚雷斯公交车站（Sete Rios）搭乘Rede Expressos大巴，直达锡内什市中心，车程约2小时，每天有6-8班车，建议提前在线购票以确保座位。最近的火车站在大约20公里外的圣地亚哥-杜卡森，但班次较少且接驳不便，不推荐。锡内什镇内主要景点集中，完全可以步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡内什的故事，远比达伽马的时代要古老得多。这些面向大洋的悬崖和海岬，早在新石器时代就有人类活动的痕迹，罗马人曾在此建立渔村和盐场，利用这片富饶的海域。随后摩尔人来了，他们看到了这里绝佳的战略位置——一个易于防守的天然海角。我们今天看到的城堡核心部分，最初就是由摩尔人在8世纪左右建造的，作为他们控制西南海岸的据点之一。当葡萄牙第一位国王阿方索·亨里克斯的军队在12世纪收复这片土地时，城堡被纳入王国的沿海防御体系，开启了它作为基督教王国前哨的漫长岁月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正让锡内什这个名字镌刻进世界史册的，是1469年（也有说法是1460年）一个婴儿的诞生。瓦斯科·达伽马，就出生在城堡脚下、紧挨着城墙的一所石头房子里。想象一下那个画面：一个在城堡阴影和海浪声中长大的男孩，每天听着水手们讲述海上的故事，呼吸着充满冒险气息的空气。他的父亲是城堡的镇长，一位小贵族，这让他得以接受良好的教育，包括至关重要的数学和航海知识。虽然关于他具体的童年细节早已湮没，但毋庸置疑，锡内什的每一阵风、每一道海浪，都塑造了他对海洋的认知与渴望。这里是他一切传奇的起点，是他学会仰望星空、并决心将命运系于未知航线的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "达伽马在1497年开启划时代的印度航路之旅后，锡内什和它的城堡也迎来了变化。为了彰显这位民族英雄的荣耀，也为了应对日益重要的海上贸易与防御需求（毕竟，达伽马开辟的航线也让葡萄牙成了众矢之的），曼努埃尔一世国王下令对城堡进行扩建和加固。我们今天看到的许多防御工事，比如那些更具装饰性的曼努埃尔式窗框和门户，就是那个“富庶时代”的产物。城堡从一个单纯的军事堡垒，逐渐兼具了行政中心和英雄故乡象征的多重角色。它在随后几个世纪里经历了多次修葺，见证了葡萄牙从航海帝国的巅峰到衰落的整个过程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有趣的是，锡内什并未一直沉浸在过去的光荣里。进入20世纪，尤其是后期，它因深水港条件而发展起现代化的工业，特别是大型石化基地。这曾让一些纯粹的历史爱好者皱眉，觉得破坏了小镇的“古韵”。但如果你深入了解，会发现这正是锡内什最真实、最坚韧的一面——它始终在与海洋进行着最现实的对话，从前是渔业和探险，今天是能源与贸易。城堡静静地注视着这一切变迁，如同一位沉默的族长。近几十年，小镇有意识地将历史遗产与现代生活重新整合，精心修复了达伽马的出生故居并将其改为博物馆，让城堡区域成为文化活动的焦点。它不再只是关于达伽马，更是关于整个社区如何带着深厚的历史，自信地活在当下。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间来沉浸式体验锡内什。最好在上午9点左右抵达，这时阳光正好，游客尚少，海风清爽。整个游览节奏应该是松弛而充满探索感的，以城堡和老城区为核心，顺其自然地向渔港和海滩蔓延。上午精力充沛时，先攀登城堡，在静谧中感受历史与全景；中午下山，融入老城巷弄的烟火气并享用午餐；下午沿着港口散步，去沙滩放松，最后在黄昏时分回到城堡附近，看日落将一切染成金色。这样的安排既能覆盖所有精华，又留有足够的空白去发呆、去感受，真正体会这座海滨小镇的呼吸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周末下午参观城堡内部，那时可能会遇到较多的本地家庭游客。穿着绝对要舒适，特别是鞋子，老城区的石板路和城堡内的台阶都需要你稳稳当当地行走。在渔港餐馆点餐时，如果菜单没有英文，大胆地指着旁边桌看起来美味的鱼料理或者直接去冰柜前挑选，这是最地道的打开方式。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从城堡脚下的拱形主入口进入，沿着古朴的斜坡道向上，用手触摸那些被海风侵蚀出孔洞的古老石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡主塔楼的顶端，360度转一圈，将渔船点点的现代渔港、工业港的巨大轮廓、连绵的沙滩与无垠大西洋尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡内庭院那尊达伽马的青铜雕像前静静站一会儿，看这位探险家坚毅的面容如何与身后他曾瞭望过的海洋重叠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌走下几级台阶，探访那间低矮朴素的达伽马出生故居博物馆，在昏暗的光线里想象一个伟大梦想开始的地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门出来，立刻扎进迷宫般的阿尔法马老城区，让脚步带领你在陡峭的、挂着晾衣绳的白色小巷里随意迷失。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`被海鸥的叫声引导到热闹的渔港码头，在那些蓝色黄色的渔船边选一家家庭餐馆，享用刚从海里捞上来的炭烤沙丁鱼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着圣托尔佩斯海滩的金色沙子慢慢散步，直到走到那个伸出海面的小小圣坛，回头看看山丘上城堡的剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前回到城堡外围的草坪或附近酒吧的露天座位，点一杯当地的葡萄酒，等待夕阳像熔化的金子一样铺满整个海面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡最高塔楼西侧垛口`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，将镜头对准下方的渔港和老城区白色房屋，用长焦压缩空间，让色彩斑斓的渔船、层层叠叠的白墙与湛蓝的海水构成充满活力的几何画卷。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`达伽马雕像侧面逆光位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，让阳光从雕像侧后方照射，形成金色的轮廓光，对焦在达伽马凝望远方的脸庞上，背景虚化成城堡的石墙或远处模糊的海平面，营造充满故事感的肖像。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城区“Rua Vasco da Gama”小巷仰角`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，走进一条狭窄的白墙小巷，将相机贴近地面向上仰拍，捕捉两侧高耸的、挂着绿植和衣物的纯白墙壁与一线蓝天形成的强烈纵深感与生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`渔港防波堤尽头全景`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏“蓝色时刻”（日落后二十分钟内），走到渔港主防波堤的尽头，用广角镜头将前景的礁石、中景停泊的渔船舰队、背景被灯光点亮的山丘城堡，以及天际最后一抹玫紫色霞光全部纳入画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣托尔佩斯沙滩脚印与城堡`}</h4>
                  <p className="text-sm text-gray-700">{`退潮后的清晨，在湿润平整的沙滩上留下你自己的脚印，低角度拍摄，让一串脚印作为引导线，一直延伸到远方山丘上那座小小的、但无比清晰的城堡剪影，诉说人与历史的遥远对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`海边的光线变化极快且强烈，日出后和日落前的一小时是拍摄的“黄金时刻”，色彩和质感最佳。尊重当地居民的隐私，拍摄那些美丽小巷和阳台时，尽量避免将正在家中或窗口的人物作为清晰主体。海风常常很大，尤其在高处城堡，注意保护好你的设备，并使用更快的快门速度来防止画面模糊。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济海风之选`}</h4>
                  <p className="text-sm text-blue-800">{`港口边由老水手房屋改造的客栈，房间不大但窗明几净，推开窗就能闻到咸咸的海味，听到清晨渔船出港的引擎声，老板会热情推荐最地道的早餐面包店。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心特色民宿`}</h4>
                  <p className="text-sm text-green-800">{`隐藏在城堡脚下小巷里的石屋民宿，保留了原始的拱顶和厚墙，夏凉冬暖，主人是一对退休教师夫妇，会在早餐时为你手绘一张只有本地人才知道的隐秘散步地图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感海岸栖息地`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城镇外侧靠近海滩的一栋现代风格独立屋，拥有面朝大海的巨大落地窗和私人露台，内部是简洁的北欧风设计，适合追求宁静与景观，想要听着海浪入眠的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端全景酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在城堡另一侧山坡上的四星级酒店，拥有无敌的全景餐厅和泳池，在房间的阳台就可以同时俯瞰古老的城堡、热闹的渔港和浩瀚的大西洋，享受古今交汇的震撼视野。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）和重要的节日（如6月底的圣彼得节）期间住宿非常紧张，务必提前数月预订。如果希望获得更深入的本地体验，优先选择老城区（Centro Histórico）的住宿，才能真正融入小镇的日常节奏。尽管锡内什总体治安良好，但夜间在老城狭窄巷弄中独行时，保持基本的旅行安全意识总是好的。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开锡内什许久，那海风的气味和声音似乎还粘在皮肤上、留在耳朵里。我常常回想，这个地方最珍贵的是什么？它不是里斯本那样华丽辉煌的帝都，也不是波尔图那样充满酒香的浪漫之城。它更像一块质朴的、被海水反复冲刷的岩石，坚硬，沉默，却蕴含着开启一个时代的力量。在这里，伟大探险家的传奇不是被供奉在玻璃柜里的冰冷展品，而是化作了渔港的喧嚣、小巷的斑驳、和每个当地人望向大海时那平静又深邃的眼神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快速打卡、滤镜美景的时代，锡内什提供了一种截然不同的旅行深度。它要求你慢下来，用脚步去丈量从城堡到沙滩的距离，用心去感受历史如何与当下的炊烟共存。它告诉你，一个地方的灵魂，不仅在于它诞生过谁，更在于生活于此的人们，如何承载着那段历史，继续勇敢地面对海洋与未来。对于任何真正想触摸葡萄牙精神内核、想理解大航海那声号角最初是如何吹响的旅人来说，锡内什都不是一个可选项，而是一个必须亲自抵达、并静静聆听的答案。在这里，你会找到远方最初的形状。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/estremoz-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃什特雷莫什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Estremoz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piodao-schist-village-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮奥当</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piódão</p>
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
