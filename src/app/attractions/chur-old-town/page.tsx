import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库尔 Chur｜瑞士最古老城市的隐秘脉搏，在阿尔卑斯山脚与葡萄藤间漫步 - 最佳欧洲景点',
  description: '走下火车，把双肩包往上提了提，迎面而来的不是预想中雪山脚下的凛冽空气，而是一阵混合着烤栗子甜香、咖啡醇厚和隐约石板湿气的温暖气息。这就是库尔给我的第一印象——一种毫不设防的、生活着的古老。你抬头看，近处是彩色的、有着巨大斜坡屋顶的老房子，阳台上的天竺葵在秋日阳光下红得耀眼；再往远处看，湛蓝的天幕下，...',
}

export default function ChurOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '库尔', href: '/attractions/chur-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">库尔・Chur・瑞士・库尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            走下火车，把双肩包往上提了提，迎面而来的不是预想中雪山脚下的凛冽空气，而是一阵混合着烤栗子甜香、咖啡醇厚和隐约石板湿气的温暖气息。这就是库尔给我的第一印象——一种毫不设防的、生活着的古老。你抬头看，近处是彩色的、有着巨大斜坡屋顶的老房子，阳台上的天竺葵在秋日阳光下红得耀眼；再往远处看，湛蓝的天幕下，城市的尽头陡然升起青灰色的山峦轮廓，山顶已经积了雪，像给这座城市镶了一道沉默而威严的银边。这里的时间感是错位的，你的左边可能是一家展示着最新款腕表的橱窗，右边那栋房子的墙基，却嵌着一块刻有罗马铭文的石头，沉默地诉说公元前的故事。
最让我着迷的，是这座城市的声音地图。主干道上电车的叮当声和游客的谈笑是背景音，但只要你稍微拐进一条名叫“绞刑匠小巷”或者“葡萄酒市场”的狭窄通道，世界立刻安静下来。耳边只剩下自己的脚步声在石板路上清脆的回响，某扇厚重的木门后传来刀叉碰到瓷盘的轻微叮当，还有从庭院深处飘出的、若有似无的钢琴练习曲。这里的巷子窄到夸张，你伸出双臂，几乎可以同时触碰到两侧房屋斑驳的墙壁。阳光被切割成细长的光柱，斜斜地打在年代久远的门环和墙面的湿壁画上，空气里飘着老木头和潮湿苔藓特有的、令人安心的气味。
库尔最打动人心的，正是这种“日常的奇迹”。穿着登山服、背着专业背包的当地居民，从容地从一扇有着500年历史的拱门下走过，去超市购物。放学的小孩子们尖叫着，穿梭在曾经主教和商贾踱步的广场上。广场中央的圣马丁喷泉依然流淌着清冽的山水，老人坐在长椅上喂鸽子，年轻人则靠在喷泉边喝着外卖咖啡聊天。历史在这里不是被供奉起来的标本，而是生活的底座和背景墙。你会感觉到，这座城市的心脏，从史前时代到今天，一直以同一种沉稳而温暖的节奏，在跳动。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走下火车，把双肩包往上提了提，迎面而来的不是预想中雪山脚下的凛冽空气，而是一阵混合着烤栗子甜香、咖啡醇厚和隐约石板湿气的温暖气息。这就是库尔给我的第一印象——一种毫不设防的、生活着的古老。你抬头看，近处是彩色的、有着巨大斜坡屋顶的老房子，阳台上的天竺葵在秋日阳光下红得耀眼；再往远处看，湛蓝的天幕下，城市的尽头陡然升起青灰色的山峦轮廓，山顶已经积了雪，像给这座城市镶了一道沉默而威严的银边。这里的时间感是错位的，你的左边可能是一家展示着最新款腕表的橱窗，右边那栋房子的墙基，却嵌着一块刻有罗马铭文的石头，沉默地诉说公元前的故事。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最让我着迷的，是这座城市的声音地图。主干道上电车的叮当声和游客的谈笑是背景音，但只要你稍微拐进一条名叫“绞刑匠小巷”或者“葡萄酒市场”的狭窄通道，世界立刻安静下来。耳边只剩下自己的脚步声在石板路上清脆的回响，某扇厚重的木门后传来刀叉碰到瓷盘的轻微叮当，还有从庭院深处飘出的、若有似无的钢琴练习曲。这里的巷子窄到夸张，你伸出双臂，几乎可以同时触碰到两侧房屋斑驳的墙壁。阳光被切割成细长的光柱，斜斜地打在年代久远的门环和墙面的湿壁画上，空气里飘着老木头和潮湿苔藓特有的、令人安心的气味。</p>
              <p className="text-gray-700 leading-relaxed mb-4">库尔最打动人心的，正是这种“日常的奇迹”。穿着登山服、背着专业背包的当地居民，从容地从一扇有着500年历史的拱门下走过，去超市购物。放学的小孩子们尖叫着，穿梭在曾经主教和商贾踱步的广场上。广场中央的圣马丁喷泉依然流淌着清冽的山水，老人坐在长椅上喂鸽子，年轻人则靠在喷泉边喝着外卖咖啡聊天。历史在这里不是被供奉起来的标本，而是生活的底座和背景墙。你会感觉到，这座城市的心脏，从史前时代到今天，一直以同一种沉稳而温暖的节奏，在跳动。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="库尔" />
                <InfoRow label="英文名称" value="Chur" />
                <InfoRow label="正式名称" value="Chur" />
                <InfoRow label="国家" value="瑞士" />
                <InfoRow label="城市" value="库尔" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="拥有超过五千年连续定居史，是瑞士毫无争议的最古老城市，阿尔卑斯山北侧重要的文化与交通十字路口。" />
                <InfoRow label="建筑特色" value="彩色的中世纪与文艺复兴时期房屋、蜿蜒狭窄的巷道（Gassen）、精美的凸窗（Erker）和充满壁画的外墙和谐共存。" />
                <InfoRow label="建筑风格" value="阿尔卑斯山地区传统民居风格与哥特式、文艺复兴及巴洛克后期风格的奇妙融合。" />
                <InfoRow label="文化价值" value="不是一个被封存的博物馆，而是一个依然充满生机的“活着的老城”，本地人的生活与千年历史遗迹无缝交织。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城区域全天24小时开放。城内主要建筑如库尔大教堂（Kathedrale St. Maria Himmelfahrt）开放时间通常为周一至周六 8:00-18:00，周日 13:00-18:00，冬季可能略有缩短。雷蒂安博物馆开放时间为周二至周日 10:00-17:00。建议出行前再次确认具体景点的最新开放时间，部分小型博物馆周一闭馆。" />
              <InfoRow label="门票价格" value="漫步探索库尔老城本身完全免费。进入库尔大教堂免费，但欢迎自愿捐赠。雷蒂安博物馆等文化场馆通常收取门票，成人票价约为12-15瑞士法郎，持瑞士旅行通票可免费或享受折扣。部分教堂塔楼登顶可能收取小额费用（约5瑞士法郎）。" />
              <InfoRow label="地址" value="老城核心区位于 Plessur 河畔。大教堂地址：Hof 19, 7000 Chur, Switzerland" />
              <InfoRow label="交通方式" value="从苏黎世机场出发最为便捷。在机场火车站直接乘坐每小时数班的城际快车，直达库尔火车站，车程约1小时10分钟，沿途风景如画。从库尔火车站出来，步行5-10分钟即可进入老城，所有景点均步行可达。瑞士铁路系统精准高效，建议使用SBB手机应用查询实时班次和购票。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要说清楚库尔的故事，我们得把时钟拨回到一片混沌的史前时期。大约公元前3900年，新石器时代的人们就发现了这块宝地。它坐落在普莱苏尔河畔，背靠巨大的山体屏障，面前是开阔的莱茵河谷地，既是安全的庇护所，又是通向多个阿尔卑斯山口的天然起点。考古学家在这里挖出了陶器、石斧和最早的定居点痕迹。然后，铜器时代的人来了，铁器时代的人来了，他们像叠罗汉一样，在这片土地上留下了一层又一层的生活印记。直到公元前15年左右，罗马帝国的军团翻越阿尔卑斯山，在这里建立了一个名为“库利亚”的稳固据点。你如今在老城地下参观到的考古遗址，能看到清晰的罗马街道网格和房屋地基，热水流过地板的痕迹依然可辨，仿佛能听到两千年前罗马士兵在公共浴场里的谈笑声。</p>
              <p className="text-gray-700 leading-relaxed mb-4">罗马帝国崩塌后，黑暗时代并未吞噬这里。相反，库尔因其战略位置，成了早期基督教传播的重要中心。公元451年，库尔教区被正式记载，使其成为阿尔卑斯山以北最古老的教区之一。到了中世纪，主教大人不仅是精神领袖，更成了这片土地的世俗统治者，“主教亲王”的权力让库尔成为了一个富庶而独立的教会国。你可以想象，中世纪的库尔城，高耸的城墙内，大教堂的钟声统治着时间的流逝，主教宫殿里进行着复杂的政治博弈，而来自威尼斯和南德的商队，则带着丝绸、香料和葡萄酒，穿梭在拥挤的市场里，各种语言和货币在此交汇。老城里那些宏伟的、带有华丽凸窗的商人宅邸，就是那个贸易黄金时代无声的证词。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，繁荣也伴随着阴影。中世纪晚期和近代初期的一系列大火，几乎将这座木结构为主的城市反复摧毁。其中最惨烈的一次发生在1464年，大火吞噬了大部分房屋。但库尔人有一种山民特有的坚韧，他们一次次地在灰烬上重建家园，并且学会了用更多的石头和砖瓦。也正是这些重建，赋予了老城今天我们看到的混搭风貌：哥特式的骨架，文艺复兴的雕花门楣，巴洛克式的涡卷装饰，和谐地共处一隅。宗教改革的浪潮也猛烈冲击了这里，1526年，在激烈的辩论甚至暴力冲突后，库尔最终接受了新教信仰，古老的教堂被清除了圣像，钟声敲响的旋律也改变了。但天主教社区依然存在，这种宗教上的张力与共存，也成了城市文化基因的一部分。</p>
              <p className="text-gray-700 leading-relaxed mb-4">19世纪，铁路这个钢铁巨兽的到来，彻底改变了库尔的命运。它不再是需要艰难跋涉才能抵达的山间秘所，而是成了通往圣莫里茨、达沃斯等新兴阿尔卑斯山度假胜地的门户火车站。蒸汽机车喷吐着白烟，带来了欧洲各国的贵族、艺术家和冒险家。城市优雅地向外扩张，建起了美丽的新街区，但心脏地带的老城，却奇迹般地没有被“现代化”的推土机铲平。它被完整地保留了下来，不是作为化石，而是作为市民依然居住其中的家园。两次世界大战，瑞士的中立让库尔免于战火，这使得它的古老肌理得以毫发无损地延续至今。今天的库尔，坦然接受着自己“瑞士最古老城市”的头衔，但它更自豪的，是这份古老依然呼吸、依然生长，与每一个生活在此的普通人息息相关。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要彻底感受库尔的灵魂，请务必安排一整天的时间，并遵循“由外及内，由下至上，最后归于平静”的节奏。建议在早上九点前抵达，这时游客尚未涌入，本地店铺刚刚卸下门板，晨光斜照巷陌，是捕捉老城苏醒模样和拍照的黄金时间。先从老城边缘的标志性城门开始，逐步深入迷宫般的中心，在正午时分感受主广场的生活气息，下午探访博物馆或教堂了解其内核，傍晚前一定要留出时间进行一次短途登山，从高处回望全城，并在日落时分找一家老酒馆坐下，让一天的所见所闻在舌尖和心头慢慢沉淀。这样的安排既能避开人潮，又能体验光线的变化如何为古城涂抹上不同的色彩。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>一定要穿一双绝对舒适防滑的鞋子，老城的石板路陡峭且凹凸不平，高跟鞋在这里是“刑具”。
周日大部分商店和部分博物馆会关门，但老城本身和教堂依然开放，适合喜欢纯粹安静漫步的人。
许多最有味道的小店、工坊和咖啡馆都藏在不起眼的小巷深处，甚至地下室，请勇敢地推开那些看似私人的厚重木门。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从古老的“上城门”进入，立刻把自己丢进那条坡度陡峭、石板被岁月打磨得温润发亮的“邮政街”，让两旁倾斜的彩色房屋像童话书页般将你包裹。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在库尔大教堂静坐片刻，仰头看祭坛上方那尊精美的晚期哥特式圣母像，感受从彩窗滤进的、仿佛带着重量感的静谧光线。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">毫无目的地迷失在“绞刑匠巷”、“骑士巷”这些名字古怪的窄巷迷宫里，用手指触摸墙壁上不同时代的石刻徽章和斑驳的湿壁画。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在老城中心的“邮政广场”停下，坐在圣马丁喷泉边缘，看电车叮叮当当划过，观察广场周围文艺复兴立面上那些讲述圣经或神话故事的生动雕像。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走进雷蒂安博物馆，站在那块著名的、刻有熊和罗马战士的公元前祭坛石前，与这座城市最古老的“居民”进行一场跨越五千年的对视。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">花半小时徒步走上布兰姆布吕什山丘，穿过安静的居民区和一小片树林，在城市制高点的观景平台长椅上坐下，俯瞰整个老城红色屋顶的海洋和更远处雪山的峰峦。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下山后直奔老城内一家有着低矮木梁天花板的地下餐厅“格劳宾登地窖”，在烛光中品尝一块用本地风干牛肉制作的经典菜肴，配上一杯格劳宾登州产的黑皮诺红酒。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 布兰姆布吕什观景台全景</h4>
                  <p className="text-sm text-gray-700">日落前一两小时，阳光为老城屋顶镀上金边，使用长焦镜头可以压缩空间，拍出屋顶层叠、远处雪山耸立的经典明信片角度。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣马丁喷泉仰角</h4>
                  <p className="text-sm text-gray-700">清晨阳光照亮广场东侧建筑时，蹲在喷泉旁以雕刻精美的雕像柱为前景，仰拍背后色彩绚丽的文艺复兴式市政厅立面，构图充满戏剧性。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. “绞刑匠巷”纵深透视</h4>
                  <p className="text-sm text-gray-700">正午时分，当狭窄的巷子顶部投下一线天光时，站在巷子中央，用广角镜头拍摄两侧倾斜的墙壁和蜿蜒向前延伸的石板路，突出其幽深与几何美感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 大教堂内部光影</h4>
                  <p className="text-sm text-gray-700">选择一个晴朗的下午，阳光透过西侧彩窗时，站在中殿后方，拍摄光束如实质般倾泻在古老石柱和长椅上的神圣场景，注意调低曝光以保留光束质感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 普莱苏尔河畔倒影</h4>
                  <p className="text-sm text-gray-700">清晨无风时，在老城东南侧的河岸，可以拍摄古老房屋、教堂尖顶与它们在清澈河水中的完美倒影，构图宁静而优美。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 库尔老城居民以生活隐私为重，拍摄街景时请尽量避免将清晰的人物正脸作为主体，尤其是窗户和私人庭院内部。</li>
                <li>• 山区天气多变，光线条件转换极快，抓住日出后和日落前的“黄金一小时”以及雨后天晴的透彻空气，往往能拍到最惊艳的照片。</li>
                <li>• 许多内部空间（如教堂、博物馆）禁用闪光灯和三脚架，请提前确认并准备好高感光度性能好的相机或手机。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城心脏民宿</h4>
                  <p className="text-sm text-blue-800">入住一栋有600年历史的商人宅邸顶层公寓，清晨在古老的木梁下醒来，推开窗就是教堂的钟楼和邻居在对面窗台浇花的日常景象。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">设计酒店体验</h4>
                  <p className="text-sm text-green-800">由老城边缘的百年工厂建筑改造而成的精品设计酒店，将粗犷的工业历史与极简的北欧设计风格完美融合，屋顶露台拥有私享的老城屋顶景观。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">山间安宁小屋</h4>
                  <p className="text-sm text-yellow-800">住在布兰姆布吕什山腰上的家庭式旅店，房间阳台正对雪山和老城全景，夜晚只有星空和山下依稀的灯火为伴，早晨被牛铃和鸟鸣唤醒。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">葡萄园旁度假屋</h4>
                  <p className="text-sm text-purple-800">在库尔周边山坡的葡萄园中，选择一家由农舍改造的温馨度假公寓，每天在弥漫着葡萄藤清香的小径散步，体验真正阿尔卑斯山村的宁静。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季徒步旺季和冬季滑雪旺季（库尔是前往多个滑雪区的门户）住宿非常紧张，务必提前数月预订。</p>
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿多有历史底蕴，但可能没有电梯且房间格局不规则，这正是其魅力的一部分，追求标准化体验的旅客需知悉。</p>
              <p className="text-gray-700 leading-relaxed mb-4">周末（周五、六晚）本地人也可能进城度假，房价会高于平日，但老城氛围也更活泼热闹。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开库尔好些天了，但脑海里总还会浮现出那些弯曲的巷子，和巷子尽头突然闪现的、戴着白雪王冠的山峰。这座城市教给我的，是一种关于时间厚度的全新感知。它不是把古老当作资本来炫耀，而是让古老成为呼吸本身。在这里，你不需要刻意去寻找“景点”，因为每一块脚下的石板，每一面墙上的痕迹，甚至空气里飘着的咖啡香混合着旧木头的气息，都是历史的载体。你会突然明白，所谓文明与传承，并非博物馆玻璃柜里的精致陈列，而正是这种日复一日的使用、居住和行走，是在古老门环上留下的手掌包浆，是喷泉边永远不缺的闲聊与笑声。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求新奇与刺激的快节奏世界里，库尔的存在像是一块温润的压舱石。它提醒着我们，有些价值在于延续，而不在于颠覆；有些美好在于沉淀，而不在于爆发。对于渴望深度游的旅人而言，库尔不是一个用来“打卡”的目的地，而是一个需要你慢下来、住下来、用心去“阅读”的活态文本。它会温柔地洗去你身上的浮躁，让你在阿尔卑斯山的清风与千年石墙的环抱中，重新找到内心的秩序与平静。这趟旅程，最终会成为一次与时间、也与自己的真诚对话。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
