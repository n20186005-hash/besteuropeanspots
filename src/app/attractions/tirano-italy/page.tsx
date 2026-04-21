import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒂拉诺 Tirano｜伯尔尼纳快车的意大利起点与文艺复兴瑰宝圣母大殿 - 最佳欧洲景点',
  description: '火车汽笛声是蒂拉诺的起床铃。当清晨第一缕阳光勉强爬过四周陡峭的山脊，照亮瓦尔特利纳河谷时，那种混合着湿润石板路气息、刚出炉的牛角包甜香，还有一丝清冽高山空气的味道，就已经弥漫在狭窄的街巷里了。我站在小小的火车站台上，看着红白相间的伯尔尼纳快车静静停靠，它像个骄傲的绅士，从瑞士的冰雪世界滑行而来，在这',
}

export default function TiranoItalyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '蒂拉诺', href: '/destinations/italy' },
            { label: '蒂拉诺', href: '/attractions/tirano-italy' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒂拉诺・Tirano・意大利・蒂拉诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车汽笛声是蒂拉诺的起床铃。当清晨第一缕阳光勉强爬过四周陡峭的山脊，照亮瓦尔特利纳河谷时，那种混合着湿润石板路气息、刚出炉的牛角包甜香，还有一丝清冽高山空气的味道，就已经弥漫在狭窄的街巷里了。我站在小小的火车站台上，看着红白相间的伯尔尼纳快车静静停靠，它像个骄傲的绅士，从瑞士的冰雪世界滑行而来，在这里稍作喘息。站台上挤满了背着登山包的旅客和提着菜篮的本地老太太，一种奇妙的旅行交响曲就此开场——德语、意大利语、罗曼什语交织，行李箱轮子与石子路摩擦作响。
但蒂拉诺绝不仅仅是火车旅人的中转站。当你离开车站的喧嚣，沿着加富尔街往里走不到五分钟，整个世界的节奏忽然就慢了下来。咖啡馆的遮阳棚下，老人们端着小小的浓缩咖啡杯，一聊就是一个上午。肉铺窗口挂着一串串本地香肠，熟食店飘出融化奶酪的浓香。然后，在一个街角的转折处，它毫无征兆地出现在你眼前——圣母大殿。那不是一座藏在深闺需要你苦苦寻觅的教堂，它就这样雄伟、坦然、甚至带着些许家常地矗立在镇中心的广场上，淡黄色的墙壁被岁月染上温柔的斑驳，高高的钟楼仿佛是这个山间盆地的天然灯塔。你会瞬间明白，这座教堂不是为游客建的，它是小镇跳动的心脏。
走进教堂内部，光线骤然变得幽暗而神圣。空气里有淡淡的蜡烛味和旧木头的气息。你的眼睛需要一点时间适应，然后，无数细节便如同潮水般涌来：拱顶上繁复绚烂的湿壁画讲述着圣经故事，金色叶片在祭坛上反射着从彩窗透进的微光，管风琴静静地立在唱诗班席上方。最动人的是，你会看到零星几个当地人走进来，在长椅上静静坐一会儿，划个十字，低声祷告，然后悄然离开。对他们而言，这不是景点，而是生活中一个可以随时停靠、获取安宁的港湾。这种神圣与日常的无缝衔接，才是蒂拉诺最迷人的内核。
当傍晚来临，最后一班开往瑞士的红色列车缓缓驶离，小镇重新回归宁静。你坐在广场边的台阶上，看着教堂钟楼的影子越拉越长，渐渐覆盖整个广场。远处阿尔卑斯山的雪峰在落日下染成玫瑰金色。这时，你才真正体会到这个小镇的魔力：它一手拉着意大利的世俗热情，一手牵着瑞士的山野传奇，而在两者之间，它守着自己那份基于信仰的、沉稳而丰沛的日常生活。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车汽笛声是蒂拉诺的起床铃。当清晨第一缕阳光勉强爬过四周陡峭的山脊，照亮瓦尔特利纳河谷时，那种混合着湿润石板路气息、刚出炉的牛角包甜香，还有一丝清冽高山空气的味道，就已经弥漫在狭窄的街巷里了。我站在小小的火车站台上，看着红白相间的伯尔尼纳快车静静停靠，它像个骄傲的绅士，从瑞士的冰雪世界滑行而来，在这里稍作喘息。站台上挤满了背着登山包的旅客和提着菜篮的本地老太太，一种奇妙的旅行交响曲就此开场——德语、意大利语、罗曼什语交织，行李箱轮子与石子路摩擦作响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但蒂拉诺绝不仅仅是火车旅人的中转站。当你离开车站的喧嚣，沿着加富尔街往里走不到五分钟，整个世界的节奏忽然就慢了下来。咖啡馆的遮阳棚下，老人们端着小小的浓缩咖啡杯，一聊就是一个上午。肉铺窗口挂着一串串本地香肠，熟食店飘出融化奶酪的浓香。然后，在一个街角的转折处，它毫无征兆地出现在你眼前——圣母大殿。那不是一座藏在深闺需要你苦苦寻觅的教堂，它就这样雄伟、坦然、甚至带着些许家常地矗立在镇中心的广场上，淡黄色的墙壁被岁月染上温柔的斑驳，高高的钟楼仿佛是这个山间盆地的天然灯塔。你会瞬间明白，这座教堂不是为游客建的，它是小镇跳动的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进教堂内部，光线骤然变得幽暗而神圣。空气里有淡淡的蜡烛味和旧木头的气息。你的眼睛需要一点时间适应，然后，无数细节便如同潮水般涌来：拱顶上繁复绚烂的湿壁画讲述着圣经故事，金色叶片在祭坛上反射着从彩窗透进的微光，管风琴静静地立在唱诗班席上方。最动人的是，你会看到零星几个当地人走进来，在长椅上静静坐一会儿，划个十字，低声祷告，然后悄然离开。对他们而言，这不是景点，而是生活中一个可以随时停靠、获取安宁的港湾。这种神圣与日常的无缝衔接，才是蒂拉诺最迷人的内核。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当傍晚来临，最后一班开往瑞士的红色列车缓缓驶离，小镇重新回归宁静。你坐在广场边的台阶上，看着教堂钟楼的影子越拉越长，渐渐覆盖整个广场。远处阿尔卑斯山的雪峰在落日下染成玫瑰金色。这时，你才真正体会到这个小镇的魔力：它一手拉着意大利的世俗热情，一手牵着瑞士的山野传奇，而在两者之间，它守着自己那份基于信仰的、沉稳而丰沛的日常生活。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒂拉诺`} />
                <InfoRow label="英文名称" value={`Tirano`} />
                <InfoRow label="正式名称" value={`Tirano`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`蒂拉诺`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为阿尔卑斯山南北交通的战略要冲，蒂拉诺是连接意大利伦巴第与瑞士恩加丁河谷的古老门户，其圣母大殿的建立更因一场神迹事件而成为重要的朝圣地。`} />
                <InfoRow label="建筑特色" value={`圣母大殿是一座宏伟的文艺复兴晚期建筑，拥有华丽的灰泥装饰立面、优雅的拱廊和一座高耸的钟楼，内部则布满了精美的壁画和繁复的祭坛装饰。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主，同时融合了伦巴第地区的地方建筑元素和些许后期巴洛克风格的内部装饰。`} />
                <InfoRow label="文化价值" value={`蒂拉诺体现了阿尔卑斯山区的文化交融，既是意大利式的热情市镇生活样板，又是瑞士精密铁路工程传奇的起点，其宗教遗产则深刻影响着本地社群的身份认同。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣母大殿（Santuario della Madonna di Tirano）通常每日上午8:00开放至下午12:00，下午14:30开放至18:00。冬季（11月至次年3月）下午闭馆时间可能会提前至17:00。重要宗教节日（如9月8日圣母诞生日）和周末可能会有特殊弥撒安排，届时游客参观可能受限。教堂内部的博物馆开放时间较为灵活，建议行前在本地旅游局网站查询。小镇本身全天可自由漫步。`} />
              <InfoRow label="门票价格" value={`进入圣母大殿本身免费，为自愿捐赠。教堂内的博物馆或珍宝室参观通常需要小额门票，约3-5欧元。搭乘伯尔尼纳快车（Bernina Express）或区域火车前往瑞士的费用另计，票价根据季节和车厢等级浮动，建议提前在雷蒂亚铁路（RhB）官网预订。镇上其他历史景点大多免费。`} />
              <InfoRow label="地址" value={`Piazza Basilica, 1, 23037 Tirano SO, Italy`} />
              <InfoRow label="交通方式" value={`最近的大型机场是米兰的马尔彭萨机场（MXP）或利纳特机场（LIN）。从米兰中央火车站（Milano Centrale）乘坐 Trenord 区域火车直达蒂拉诺，车程约2.5小时，班次频繁，是性价比最高的选择。从瑞士方向而来，可乘坐世界遗产伯尔尼纳快车或区域列车从圣莫里茨（St. Moritz）或库尔（Chur）抵达，这条线本身就是绝景之旅。蒂拉诺火车站（Stazione di Tirano）位于镇中心，步行至圣母大殿仅需5分钟。建议购买意大利火车通票或在 Trenord 应用程序上购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蒂拉诺的故事，就像流过它身边的阿达河，源头细弱，却在历史的峡谷中冲刷出深刻的痕迹。早在罗马时代，这里就是翻越阿尔卑斯山的重要通道之一，但让它真正在史册上留下名字的，是一场充满神秘色彩的神迹。时间回到1504年，那时的瓦尔特利纳地区正被一场可怕的瘟疫席卷，死亡阴影笼罩每一个家庭。根据当地虔诚的传说，次年3月29日，圣母玛利亚向一位名叫马里奥·奥莫德伊的贫苦农夫显现，指示他在此地建造一座教堂，以平息天怒，祛除瘟疫。这个神迹消息像野火一样传开，给了绝望中的人们巨大的精神慰藉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇迹似乎真的发生了。瘟疫渐渐消退，而建造一座宏伟教堂的愿望在民众心中扎下了根。尽管当时的蒂拉诺还只是一个小村落，但来自各地的捐款和朝圣者的奉献源源不断。1513年，第一块基石被放下，工程在社区众志成城的努力下推进。负责设计的是当时来自米兰地区的建筑师，他们将文艺复兴的新风从伦巴第平原带到了这个阿尔卑斯山脚下。建造过程并非一帆风顺，资金、战争、宗教冲突都曾让工程中断，但信仰的力量最终让这座殿堂在近百年后得以完工。当最后的灰泥装饰被精心涂抹在立面上时，它已然成为整个地区最引人注目的宗教建筑，也标志着蒂拉诺从一个过路驿站，转变为一个具有凝聚力和影响力的朝圣中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后的几个世纪，蒂拉诺的命运与它所处的地理位置紧密相连。它一直是瓦尔特利谷地的经济和文化重镇，但也因地处要冲而屡经战火。西班牙、法国、奥地利等势力的军队都曾在此拉锯，小镇的城墙和建筑上留下了无声的疤痕。然而，真正再次改变蒂拉诺命运、并将其推向世界舞台的，不是战争，而是钢铁与蒸汽。20世纪初，一个雄心勃勃的工程梦想开始实施——建造一条穿越阿尔卑斯山、连接意大利蒂拉诺和瑞士圣莫里茨的铁路。这就是后来的伯尔尼纳铁路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1904年，铁路开始动工，这是一项人类征服自然的壮举。工程师们需要应对极端的海拔落差、陡峭的山坡和冬季严峻的冰雪。成千上万的工人，其中很多就来自蒂拉诺及周边村庄，投入了这项艰苦卓绝的工作。1910年，当第一列火车鸣着汽笛，喷着白烟，缓缓驶入新建的蒂拉诺火车站时，整个小镇沸腾了。这条铁路不仅带来了物资和旅客，更将蒂拉诺永久地刻在了世界铁路旅游的地图上。它从单纯的朝圣终点，变成了传奇铁路旅程的起点，两种“朝圣”形式——宗教的与世俗的——在这里奇妙地交汇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的蒂拉诺，坦然接纳着这一切层叠的历史。你可以在圣母大殿里看到十七世纪瘟疫幸存者后代献上的还愿匾，也可以在火车站博物馆里看到修建铁路时用的老式工具。小镇的居民既会虔诚地参加九月盛大的圣母节游行，也会熟练地向游客介绍伯尔尼纳快车的最佳观景车厢。它的历史不是教科书上干巴巴的条目，而是活生生地交织在每日的面包香气、火车时刻表和教堂钟声里。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味蒂拉诺，你需要给它大半天到一天的时间。建议在上午九点左右抵达，这时晨雾散去，阳光正好，小镇刚刚苏醒，游客尚未大批涌入。整体游览节奏应该是松弛的，以漫步和感受为主，核心是探索“两重身份”——宗教圣地与铁路传奇。先从火车站这个现代门户开始，然后步行深入古老镇中心，重点参观圣母大殿及周边，最后用一顿漫长的意式午餐或一次短途火车体验收尾。这样的安排让你既能捕捉到小镇宁静的清晨光影，又能体验到午间充满生活气息的喧闹，并有余裕感受其作为交通枢纽的活力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`圣母大殿内部在午间（约12:00-14:30）会关闭休息，务必合理安排参观时间，避开这个空档。镇上很多餐厅的正式午餐时间从下午1点才开始，不用着急。虽然小镇治安良好，但在火车站附近人多拥挤时，还是建议看管好随身财物。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在蒂拉诺火车站的红砖建筑前停留片刻，看看站台上标注着“Bernina Express”的醒目站牌，感受现代旅行传奇的起点气息`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着但丁街悠闲地向镇中心漫步，留意两旁色彩柔和的古老建筑立面和那些售卖本地干酪和蜂蜜的小店橱窗`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步走进主广场，让自己被圣母大殿那宏伟而精致的文艺复兴立面完全震撼，绕着教堂走一圈，从不同角度欣赏钟楼与山峦背景的构图`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开圣母大殿沉重的木门，让眼睛在幽暗中适应，然后慢慢欣赏中殿拱顶上令人叹为观止的湿壁画群与金光闪耀的主祭坛`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧门出来，在广场边的历史咖啡馆找一张室外桌子坐下，点一杯正宗的意式浓缩咖啡，观察广场上本地人的日常往来`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过几条蜿蜒的后街小巷，探索那些游客稀少的宁静角落，也许会发现一个安静的内部庭院或一座小小的家庭礼拜堂`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到小镇边缘的阿达河畔，看看古老的石桥和潺潺的流水，从另一个视角回望教堂钟楼耸立在天际线中的小镇轮廓`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和兴趣允许，去火车站内的伯尔尼纳铁路小型展览区看看，或者干脆买一张短程车票，体验一段火车在高架桥与隧道间穿行的壮丽景色`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣母大殿广场东南角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出教堂立面的浮雕细节和钟楼的挺拔线条，将广场上的行人作为前景能增加生动感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`火车站站台尽头`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，以经典的伯尔尼纳红色列车为前景，远处云雾缭绕的阿尔卑斯山为背景，能拍出最具故事感的交通主题照片`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小镇后街某条小巷`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，寻找一条狭窄的、两侧有高大建筑的小巷，捕捉光线在石板路上形成的强烈明暗对比与几何美感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`阿达河旧石桥上`}</h4>
                  <p className="text-sm text-gray-700">{`日出时分，面向小镇方向，可以拍到钟楼、晨雾与河面倒影构成的静谧全景，季节合适时岸边的树木色彩非常丰富`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂内部中殿后方`}</h4>
                  <p className="text-sm text-gray-700">{`若允许拍照且不使用闪光灯，可在上午光线从东侧彩窗射入时，拍摄光束穿过幽暗空间照亮壁画和长椅的神圣场景`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部拍照前务必确认规定，通常可以拍照但严禁使用闪光灯和三脚架，弥撒期间请勿拍摄。拍摄当地人，尤其是长者，建议先微笑示意获得默许，这是基本的尊重。阿尔卑斯山区的天气变化极快，出门时阳光明媚，半小时后可能云雾笼罩，这也是拍摄独特氛围照片的好机会。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在火车站附近一栋由家族经营的19世纪老房子里，主人会为你准备丰盛的意式早餐，并热情分享只有本地人才知道的山间徒步小径`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻圣母大殿广场旁边一座经过精心修复的古老宫殿改造的精品酒店，房间天花板保留着原始壁画，夜晚能听到教堂钟声在石板街巷间回荡`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园风光隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`选择小镇外缘或附近村庄的农庄住宿，被苹果园和葡萄园包围，享受绝对的宁静，每天清晨在露台上看着火车像玩具一样缓缓驶入山谷`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`铁路爱好者之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站对面有一家风格简约现代的酒店，某些房间的窗户正对铁轨，你可以枕着偶尔传来的、并不吵人的列车行进声入睡，充满旅行氛围`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（夏季和秋季赏景期）以及伯尔尼纳快车运营高峰时段，镇中心住宿非常紧俏，务必提前数月预订。住在镇中心固然方便，但偶尔能听到深夜或清晨的火车声响，对睡眠极轻的人需留意。选择郊外住宿则需考虑交通，虽然小镇不大，但步行回来可能略有距离。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开蒂拉诺的时候，我的背包里没有多出什么纪念品，但心里却装满了一种奇特的平静感。这种平静，来自于看到了一种非常自洽的生活样本。在这里，神圣与世俗没有高墙，历史与现代没有割裂，旅行的喧嚣与日常的琐碎并行不悖。它坦然接受自己作为“世界遗产铁路起点”的全球性角色，每天微笑着迎接来自世界各地的、脸上写着兴奋与期待的旅客。但当最后一班红色列车离去，它便安然回归为自己，一个有着古老教堂、周末集市和邻里闲聊的意大利山区小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个我们习惯于追逐“纯粹”和“原始”的旅行时代，蒂拉诺提供了一种更复杂、也更真实的魅力。它不试图隐藏那条带来游客也带来变化的铁路，也不将自己的信仰生活包装成供人观赏的表演。它只是在那里，完整地呈现着自己的所有层面。对于深度游的旅人而言，这里像一本可以轻松翻阅却意蕴深长的小书。你能在一日之内，读到地理、工程、艺术、宗教和社会生活的多重篇章。它提醒我们，最好的旅行目的地，往往不是那个与世隔绝的桃花源，而是那个在时代浪潮中，懂得如何守护自己内核，同时又能温柔拥抱世界的坚韧之地。蒂拉诺就是这样一个地方——它不仅是伯尔尼纳快车的起点，或许，也是一段关于如何平衡传统与变迁的思考的起点。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castellana-caves" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特拉纳洞穴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castellana Caves</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pietrapertosa-travel-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮耶特拉佩尔托萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pietrapertosa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/san-quirico-d-orcia-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔恰谷的圣基里科</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Quirico d'Orcia</p>
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
