import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '龙达悬崖小镇 Ronda｜漫步在云端与深渊之间，探访现代斗牛摇篮 - 最佳欧洲景点',
  description: '朋友，想象一下，你正走在一条寻常的西班牙街道上，两侧是刷着白浆的房子，阳台上垂下天竺葵。突然，脚下的路毫无征兆地到了尽头，取而代之的是一片令人眩晕的虚空。你下意识地抓紧旁边的栏杆，风从下方呼啸着涌上来，带着峡谷深处河流与岩石的凉湿气息。眼前，一座巨大的灰黄色石桥像从天而降的神迹，牢牢焊在两侧垂直的峭...',
}

export default function RondaCliffTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '龙达', href: '/destinations/spain' },
            { label: '龙达悬崖小镇', href: '/attractions/ronda-cliff-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`龙达悬崖小镇・Ronda・西班牙・龙达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你正走在一条寻常的西班牙街道上，两侧是刷着白浆的房子，阳台上垂下天竺葵。突然，脚下的路毫无征兆地到了尽头，取而代之的是一片令人眩晕的虚空。你下意识地抓紧旁边的栏杆，风从下方呼啸着涌上来，带着峡谷深处河流与岩石的凉湿气息。眼前，一座巨大的灰黄色石桥像从天而降的神迹，牢牢焊在两侧垂直的峭壁之间。桥下，是深达98米的埃尔塔霍峡谷，你可以清晰地看到鹰在桥拱间盘旋的黑点。这就是龙达给你的第一份礼物——一种直击心脏的、关于高度与存在的震撼。
这种震撼不仅属于游客。你很快会发现，悬崖与峡谷就是龙达人生活的背景板。早晨，老人们会慢悠悠地踱步到新桥附近的观景台，不是为了看风景，而是为了会老友，聊聊家长里短，背景就是那万丈深渊。咖啡馆的露天座位，有一半是悬在悬崖边上的，当地人喝着浓缩咖啡，吃着沾了橄榄油的吐司，对脚下的惊险早已习以为常。峡谷的风是这里的常客，它吹过摩尔式宫殿的雕花拱门，带来远处橄榄林与橘子花的混合香气，也把教堂的钟声吹得悠长而飘渺。龙达的魅力，就在于它将极致险峻的地理环境，消化成了每日呼吸的空气，一种沉静而骄傲的日常。
但龙达的心跳，远不止于静默的奇观。当你走到那座全西班牙最古老、最神圣的斗牛场前，你会感受到另一种完全不同的能量。那是一座由暖黄色砂岩砌成的宏伟圆形建筑，在安达卢西亚的烈日下显得庄严而灼热。空气中仿佛还能听到历史的回响——斗牛士靴子踩踏沙地的摩擦声，公牛沉重的鼻息，以及人群山呼海啸般的“Olé！”。这里是浪漫主义斗牛的诞生地，是现代斗牛士之父佩德罗·罗梅罗的故乡。峡谷赋予它孤绝的气质，而斗牛场则注入了滚烫的、属于西班牙血液里的激情与悲剧意识。
所以，在龙达，你的感官会被两极拉扯：一边是峡谷带来的、近乎神圣的宁静与敬畏；另一边，则是斗牛文化所象征的、人类直面危险与死亡的炽热勇气。你站在桥上，脚下是亘古不变的地质时间；你走进斗牛场，触摸的是一段鲜活、甚至有些残酷的人文历史。这种矛盾而和谐的统一，让龙达不再仅仅是一个“风景如画”的白色小镇，而成为一个能让你思考自然、生命与文化的深邃之地。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你正走在一条寻常的西班牙街道上，两侧是刷着白浆的房子，阳台上垂下天竺葵。突然，脚下的路毫无征兆地到了尽头，取而代之的是一片令人眩晕的虚空。你下意识地抓紧旁边的栏杆，风从下方呼啸着涌上来，带着峡谷深处河流与岩石的凉湿气息。眼前，一座巨大的灰黄色石桥像从天而降的神迹，牢牢焊在两侧垂直的峭壁之间。桥下，是深达98米的埃尔塔霍峡谷，你可以清晰地看到鹰在桥拱间盘旋的黑点。这就是龙达给你的第一份礼物——一种直击心脏的、关于高度与存在的震撼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这种震撼不仅属于游客。你很快会发现，悬崖与峡谷就是龙达人生活的背景板。早晨，老人们会慢悠悠地踱步到新桥附近的观景台，不是为了看风景，而是为了会老友，聊聊家长里短，背景就是那万丈深渊。咖啡馆的露天座位，有一半是悬在悬崖边上的，当地人喝着浓缩咖啡，吃着沾了橄榄油的吐司，对脚下的惊险早已习以为常。峡谷的风是这里的常客，它吹过摩尔式宫殿的雕花拱门，带来远处橄榄林与橘子花的混合香气，也把教堂的钟声吹得悠长而飘渺。龙达的魅力，就在于它将极致险峻的地理环境，消化成了每日呼吸的空气，一种沉静而骄傲的日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但龙达的心跳，远不止于静默的奇观。当你走到那座全西班牙最古老、最神圣的斗牛场前，你会感受到另一种完全不同的能量。那是一座由暖黄色砂岩砌成的宏伟圆形建筑，在安达卢西亚的烈日下显得庄严而灼热。空气中仿佛还能听到历史的回响——斗牛士靴子踩踏沙地的摩擦声，公牛沉重的鼻息，以及人群山呼海啸般的“Olé！”。这里是浪漫主义斗牛的诞生地，是现代斗牛士之父佩德罗·罗梅罗的故乡。峡谷赋予它孤绝的气质，而斗牛场则注入了滚烫的、属于西班牙血液里的激情与悲剧意识。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，在龙达，你的感官会被两极拉扯：一边是峡谷带来的、近乎神圣的宁静与敬畏；另一边，则是斗牛文化所象征的、人类直面危险与死亡的炽热勇气。你站在桥上，脚下是亘古不变的地质时间；你走进斗牛场，触摸的是一段鲜活、甚至有些残酷的人文历史。这种矛盾而和谐的统一，让龙达不再仅仅是一个“风景如画”的白色小镇，而成为一个能让你思考自然、生命与文化的深邃之地。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`龙达悬崖小镇`} />
                <InfoRow label="英文名称" value={`Ronda`} />
                <InfoRow label="正式名称" value={`Ronda`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`龙达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是现代西班牙斗牛艺术的发源地与精神故乡。`} />
                <InfoRow label="建筑特色" value={`一座令人屏息的巨大石桥，横跨在深达百米的埃尔塔霍峡谷之上，将新旧两城相连。`} />
                <InfoRow label="建筑风格" value={`融合了罗马、摩尔与西班牙古典风格的安达卢西亚山地城镇。`} />
                <InfoRow label="文化价值" value={`一处将自然之险峻、建筑之奇观与人文之热血完美熔铸的史诗级地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`龙达作为一个城镇，整体是24小时开放的。但其核心景点如龙达新桥（Puente Nuevo）的观景台、斗牛场（Plaza de Toros）、阿拉伯浴场（Baños Árabes）等有具体开放时间：斗牛场通常在上午10点至晚上6点开放，夏季会延长至晚上8点；阿拉伯浴场一般为上午10点至下午7点。请注意，大部分室内景点周一可能闭馆或缩短开放时间，而圣诞节、元旦及当地节假日（如圣周）开放时间会有较大调整，建议出行前在其官网再次确认。`} />
              <InfoRow label="门票价格" value={`龙达新桥本身及连接峡谷两侧的步行区域免费开放。斗牛场博物馆门票约为8欧元，学生及65岁以上老人有优惠。阿拉伯浴场门票约为4.5欧元。部分景点有联票出售，价格约为10欧元，涵盖斗牛场、阿拉伯浴场和蒙德拉贡宫殿等。当地教堂参观通常需要小额捐款。`} />
              <InfoRow label="地址" value={`Plaza de España, 1, 29400 Ronda, Málaga, España`} />
              <InfoRow label="交通方式" value={`从最近的马拉加机场出发，最便捷的方式是乘坐直达巴士。在机场到达大厅外找到前往“Ronda”的巴士站牌，由ALSA公司运营。车程大约2小时，班次在白天较为频繁，约每2-3小时一班，建议提前在ALSA官网或App购票。如果从马拉加市中心火车站出发，可以选择火车，车程约1小时45分钟，沿途风景优美，穿过安达卢西亚的山丘，但班次较少，每天约3-4班。自驾是最灵活的方式，从马拉加沿A-357和A-367公路行驶约1.5小时，但龙达老城停车位紧张，建议将车停在城外的公共停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`龙达的故事，要从它那不可思议的地形说起。早在罗马时代，人们就发现了这座天然要塞的价值，但真正让龙达在历史上留下深刻烙印的，是摩尔人。公元8世纪，摩尔人跨越直布罗陀海峡来到这里，他们一眼就看中了这座被峡谷分割、易守难攻的巨石山城。他们称这里为“Hisn Ar-Rundah”（城堡之城），并以此为据点，建立了一个繁荣的独立王国。在摩尔人统治的七百多年里，他们修建了复杂的灌溉系统，带来了先进的农业技术，也留下了至今仍让人惊叹的建筑遗产，比如那座保存完好的阿拉伯浴场。你走进去，依然能通过穹顶上星星形状的采光孔，感受到当年水汽氤氲、光影摇曳的宁静氛围。那时的龙达，是安达卢西亚山区一颗璀璨的伊斯兰明珠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折发生在1485年，天主教双王伊莎贝拉和费尔南多的军队经过漫长围困，终于收复了龙达。这是收复失地运动中关键的一役。城破之后，摩尔人被驱逐或强制改宗，清真寺被改建为教堂，城市的信仰与文化底色彻底改变。但摩尔人的血液、建筑智慧和生活习惯，早已深深渗透进龙达的土壤与石墙里。你看那些老城区的狭窄巷弄、白色房子内隐藏的宁静庭院，无不带有浓郁的安达卢西亚-摩尔风格。龙达的肌理，是两种文明激烈碰撞后又缓慢融合的产物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的车轮滚到18世纪，龙达迎来了它另一个高光时刻，也与它最著名的地标——新桥息息相关。连接峡谷两岸的旧桥早已不堪重负，建造一座新桥势在必行。这项疯狂的工程从1751年启动，足足花了42年才完工，据说有数十名工人在施工中坠入深渊。当这座高达98米的巨石拱桥终于在1793年贯通时，它不仅连接了被峡谷撕裂的城镇，更象征着一个新时代的到来。新桥建成后，龙达新城开始蓬勃发展，城市格局被重新定义。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几乎在同一时期，龙达的斗牛传统被一个家族推向了艺术的高度。这就是罗梅罗家族，特别是孙子佩德罗·罗梅罗。在他之前，斗牛更多是贵族骑士在马背上进行的、略显混乱的狩猎活动。是佩德罗·罗梅罗，他确立了斗牛士徒步、手持红布与公牛正面相对的基本规则与礼仪，将野蛮的搏杀升华为一种具有严格程式的“悲剧艺术”。他一生杀死了超过5000头公牛，却从未受过重伤，成了传奇。他出生的房子，如今是龙达街头一个不起眼的角落，但由他奠基的斗牛场，却成了全世界斗牛士心中的麦加。从此，龙达的标签里，除了“悬崖”，更烙下了“斗牛”二字。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，让龙达真正名扬国际的，则要归功于20世纪的文学与电影。海明威无疑是龙达最著名的“推销员”。他在《丧钟为谁而鸣》和《太阳照常升起》里多次深情描绘龙达，尤其是那座新桥。他写道：“龙达是整个西班牙最适合私奔的地方……整座城市，以及它目之所及的乡野，都充满了浪漫的情调。”他甚至将小说中的角色与龙达的斗牛士传奇联系起来。从此，全世界的文艺青年、冒险家和情侣们，都循着海明威的笔迹来到这里，寻找他笔下那种混合着危险与激情的浪漫。龙达，就这样从一座安达卢西亚的深山古城，变成了一个全球性的文化符号，一个关于孤独、勇气与爱情的永恒隐喻。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味龙达，我强烈建议你留出完整的一天，并尽可能在上午9点前抵达。清晨的龙达最为宁静，阳光斜射，将新桥和白色房屋染成金色，峡谷里还飘着淡淡的晨雾，是拍照和感受其神圣氛围的黄金时间。整体游览节奏宜慢不宜快，可以分为两大板块：上午聚焦于峡谷与桥的震撼（自然奇观），下午沉浸于老城与斗牛场的历史人文。中午在老城找一家地道的餐厅享用漫长的安达卢西亚午餐，傍晚时分，一定要留出时间在峡谷边等待日落，那是龙达一天中最魔幻的时刻。这样的安排能让你从视觉震撼逐步深入到文化肌理，完整体验龙达的双重灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`中午12点到下午4点之间是大型旅游团抵达的高峰期，新桥和斗牛场会非常拥挤，尽量利用这个时间段在老城深处探索或享用午餐。小镇街道多上下坡且很多是鹅卵石路面，务必穿一双绝对舒适防滑的鞋子。在悬崖边所有观景台拍照和游览时，请务必看管好个人物品，手机相机拿稳，并注意脚下安全。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清早第一站直奔新桥，从桥两侧的观景台（Mirador de Aldehuela和Mirador de Ronda）感受峡谷令人腿软的深度和石桥凌空飞架的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着标有“Camino de los Molinos”的小径往下走一段，从峡谷底部回望新桥，巨石的压迫感和建筑的宏伟会让你倒吸一口凉气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过新桥进入老城区（La Ciudad），在迷宫般的白色小巷里随意迷失，用指尖触碰那些被阳光晒得温热的粗糙墙壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进西班牙最古老的斗牛场，用手掌抚摸沙黄色的外墙，想象佩德罗·罗梅罗在沙地上划出的第一个优雅弧步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完斗牛博物馆后，去隔壁的“海明威角”酒吧喝一杯，感受老爷子当年可能坐过的角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着探访静谧的阿拉伯浴场，透过罗马式拱券和星形天窗，感受摩尔时代的生活智慧与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往蒙德拉贡宫殿，站在它的混合式庭院里，体会基督教国王与摩尔建筑艺术的交融。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，务必回到新桥附近的悬崖步道，找一张长椅坐下，看夕阳将整个峡谷和白色小镇点燃成炽烈的橙红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`新桥峡谷底仰拍机位`}</h4>
                  <p className="text-sm text-gray-700">{`从“Camino de los Molinos”小径向下走约15分钟，在一个相对开阔的拐弯处，使用广角镜头仰拍，能将整个桥体与一线天空纳入画面，最佳时间是正午前后，阳光能照亮部分桥底，显得气势恢宏。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`桥拱门洞框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在新桥的桥拱之下，用拱门的巨石作为天然画框，拍摄对面悬崖上的白色房屋和老城墙，这个机位在下午侧光时效果绝佳，光影对比强烈。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`斗牛场沙地中心低角度`}</h4>
                  <p className="text-sm text-gray-700">{`进入斗牛场沙地（如果允许），将相机贴近沙土，向上拍摄环绕的黄色阶梯看台和蓝天，这个角度极具张力，能拍出斗牛场的空旷与神圣感，建议在早晨或闭馆前游人稀少时尝试。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`阿尔米纳宫（Palacio del Rey Moro）花园露台`}</h4>
                  <p className="text-sm text-gray-700">{`这里需要购票进入，但其花园下方的露台是俯瞰整个峡谷和远处平原的绝佳位置，尤其适合在日落前半小时拍摄，暖色调的光线会让整个场景如同油画。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城某条无名白巷尽头`}</h4>
                  <p className="text-sm text-gray-700">{`不必刻意寻找，在老城区随意拐进一条小巷，如果它的尽头正好是悬崖和远山，就构成了完美的纵深构图，等待一个当地人走过时按下快门，画面立刻充满故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`龙达的光线在日出后一小时和日落前一小时最为柔和迷人，能拍出石头温暖的质感和丰富的阴影细节。峡谷风景宏大，携带一个广角镜头非常必要。请注意，在斗牛场内部，使用三脚架或进行专业商业拍摄可能需要事先申请许可，普通游客拍照则无限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城中心一家由古老宅邸改建的家庭旅馆，房间小巧但充满个性，老板娘会为你手绘一张只有当地人才知道的美食地图，清晨在公共阳台上就能看到峡谷晨光。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`直接建在悬崖边缘的精品酒店，部分房间带有一个小小的悬空露台，让你在私密空间里就能独享万丈深渊的景色，晚上枕着峡谷的风声入眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`一座由18世纪贵族庄园改造的五星级酒店，拥有宁静的内庭花园和泳池，客房保留了原始的实木横梁和石墙，提供顶级的安达卢西亚美食，服务细致入微。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`浪漫隐居`}</h4>
                  <p className="text-sm text-purple-800">{`位于峡谷对面、需要步行一段距离的乡间别墅，这里安静至极，拥有无遮挡的、正面朝向龙达新桥和老城的全景视野，是观赏日落和星空的最佳据点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`龙达非常安全，治安良好。但需要注意的是，许多老房子改建的酒店没有电梯，携带大件行李会有些吃力。由于龙达是热门目的地，尤其是春秋两季和周末，悬崖景观房非常紧俏，务必提前数月预订才能锁定心仪的房型。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开龙达许久，那种双脚踩在坚实大地、目光却坠入无尽深渊的奇妙感觉，依然会不时浮现。它教会我的，是一种关于“边缘”的哲学。这里的一切都发生在边缘：城市建在地壳的裂缝之上，文明处在基督教与伊斯兰教的交锋地带，艺术诞生于人与野兽、生命与死亡的残酷边界。龙达的美，从来不是温和恬淡的，它始终带着一丝惊险，一丝决绝，就像斗牛士手中那方精准挥动的红布。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、沉迷于虚拟世界的时代，龙达像一块固执的、沉重的磐石。它不提供便捷的舒适，却给予你久违的“真实感”——岩石的粗糙，高度的晕眩，历史的层叠，阳光的灼热。它让你重新用身体去感知空间，用心灵去丈量时间。当你站在那座桥中央，听着风声呼啸而过，你会明白，有些地方存在的意义，就是为了提醒我们：世界仍有惊心动魄的壮丽，人类文明仍有如此深沉而复杂的纹路。这不仅仅是一次旅行，更像一次对感官和认知的唤醒。每一位渴望深度体验的旅人，都该来龙达上一次这堂关于“边缘与存在”的必修课，它会在你心里，刻下一道如同埃尔塔霍峡谷般深刻的印记。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/avila-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿维拉古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ávila Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alquezar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔克萨尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alquézar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/royal-monastery-of-santa-maria-de-guadalupe" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓜达卢佩圣玛利亚皇家修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Monastery of Santa María de Guadalupe</p>
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
