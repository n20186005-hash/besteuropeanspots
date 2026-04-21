import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕伦西亚老城 Palencia Old Town｜西班牙保存最完好的秘密，一座活在日光与影调里的露天博物馆 - 最佳欧洲景点',
  description: '说实话，当你的脚步第一次落在帕伦西亚老城那些被岁月打磨得无比光滑的赭色砂岩路面上时，你可能会有点恍惚。这里没有巴塞罗那的喧嚣，也没有塞维利亚那种戏剧化的明信片感。清晨的老城安静得能听见自己的呼吸，偶尔只有远处面包房推拉铁门的哐当声，和一阵新鲜烤面包的、带着黄油焦香的暖风。阳光是斜着切进来的，把那些用...',
}

export default function PalenciaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '帕伦西亚老城', href: '/attractions/palencia-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕伦西亚老城・Palencia Old Town・西班牙・帕伦西亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当你的脚步第一次落在帕伦西亚老城那些被岁月打磨得无比光滑的赭色砂岩路面上时，你可能会有点恍惚。这里没有巴塞罗那的喧嚣，也没有塞维利亚那种戏剧化的明信片感。清晨的老城安静得能听见自己的呼吸，偶尔只有远处面包房推拉铁门的哐当声，和一阵新鲜烤面包的、带着黄油焦香的暖风。阳光是斜着切进来的，把那些用蜂蜜色石头砌成的连拱廊和贵族纹章门楣，勾勒出极其锋利又无比温柔的金边。你的影子被拉得很长，在空旷的广场上移动，仿佛你是几个世纪以来唯一到访的旅人。
但别被这静谧骗了，帕伦西亚是活着的。你很快会发现，那些厚重的罗马风墙壁下，藏着飘出浓郁咖啡香的小馆，老人们围坐一桌，用快速而硬朗的卡斯蒂利亚西班牙语谈论着天气和足球。圣米格尔教堂旁不起眼的门洞里，可能是一家传承了三代的银器作坊，叮叮当当的敲击声清脆而有韵律，像是古城自己的心跳。这里的魅力不在于某个震撼的单体建筑（虽然它的教堂确实非凡），而在于一种整体性——一种时间在这里放缓、沉淀，然后与当下日常水乳交融的奇妙状态。你不是在“参观”一个景点，而是短暂地“步入”了一种延续了八百年的生活节奏。
走到主广场（Plaza Mayor），这种感受会达到顶峰。它没有马德里太阳门广场的庞大，却异常亲切、匀称。带拱廊的建筑围合出一个完美的长方形，一楼是咖啡馆和酒馆的露天座。下午三点，阳光正好，整个广场像一个巨大的日光剧场。当地人慢悠悠地喝着咖啡，孩子们追逐着鸽子，光影在柱廊间缓慢推移。你会闻到咖啡香、淡淡的雪茄味、还有从附近酒馆飘来的炸鱿鱼圈的油香。在这里，历史不是被封存的标本，而是生活的背景墙。那种真实不造作的市井气息，混合着石头建筑散发出的、雨后微凉的矿物质气味，构成了帕伦西亚最打动人心的内核——一种深邃的宁静与满足。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，当你的脚步第一次落在帕伦西亚老城那些被岁月打磨得无比光滑的赭色砂岩路面上时，你可能会有点恍惚。这里没有巴塞罗那的喧嚣，也没有塞维利亚那种戏剧化的明信片感。清晨的老城安静得能听见自己的呼吸，偶尔只有远处面包房推拉铁门的哐当声，和一阵新鲜烤面包的、带着黄油焦香的暖风。阳光是斜着切进来的，把那些用蜂蜜色石头砌成的连拱廊和贵族纹章门楣，勾勒出极其锋利又无比温柔的金边。你的影子被拉得很长，在空旷的广场上移动，仿佛你是几个世纪以来唯一到访的旅人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但别被这静谧骗了，帕伦西亚是活着的。你很快会发现，那些厚重的罗马风墙壁下，藏着飘出浓郁咖啡香的小馆，老人们围坐一桌，用快速而硬朗的卡斯蒂利亚西班牙语谈论着天气和足球。圣米格尔教堂旁不起眼的门洞里，可能是一家传承了三代的银器作坊，叮叮当当的敲击声清脆而有韵律，像是古城自己的心跳。这里的魅力不在于某个震撼的单体建筑（虽然它的教堂确实非凡），而在于一种整体性——一种时间在这里放缓、沉淀，然后与当下日常水乳交融的奇妙状态。你不是在“参观”一个景点，而是短暂地“步入”了一种延续了八百年的生活节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到主广场（Plaza Mayor），这种感受会达到顶峰。它没有马德里太阳门广场的庞大，却异常亲切、匀称。带拱廊的建筑围合出一个完美的长方形，一楼是咖啡馆和酒馆的露天座。下午三点，阳光正好，整个广场像一个巨大的日光剧场。当地人慢悠悠地喝着咖啡，孩子们追逐着鸽子，光影在柱廊间缓慢推移。你会闻到咖啡香、淡淡的雪茄味、还有从附近酒馆飘来的炸鱿鱼圈的油香。在这里，历史不是被封存的标本，而是生活的背景墙。那种真实不造作的市井气息，混合着石头建筑散发出的、雨后微凉的矿物质气味，构成了帕伦西亚最打动人心的内核——一种深邃的宁静与满足。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕伦西亚老城`} />
                <InfoRow label="英文名称" value={`Palencia Old Town`} />
                <InfoRow label="正式名称" value={`Palencia Old Town`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`帕伦西亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卡斯蒂利亚王国历史上的早期重要核心之一，被誉为“卡斯蒂利亚的摇篮”，见证了伊比利亚半岛基督教王国收复失地运动的关键进程。`} />
                <InfoRow label="建筑特色" value={`罕见的多种建筑风格和谐交融的范本，从罗马风、穆德哈尔式到哥特、文艺复兴乃至新古典主义，层层叠叠如一部立体的石头史书。`} />
                <InfoRow label="建筑风格" value={`以罗马风和哥特式为主干，并混搭了穆德哈尔式砖砌工艺、文艺复兴的优雅立面以及巴洛克的装饰细节，形成独特的卡斯蒂利亚过渡风格。`} />
                <InfoRow label="文化价值" value={`一座活生生的“慢城”典范，其历史肌理未曾被大规模旅游或现代开发打断，完整保留了中世纪城镇的尺度感与社区生活气息。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区域为开放式街区，全天24小时可自由漫步。区域内主要景点如帕伦西亚大教堂开放时间为周一至周六上午10:00至下午1:30，下午4:30至7:00；周日上午10:00至下午2:00。圣米格尔教堂等小型教堂开放时间较短，通常为上午11:00至下午1:00及下午5:00至7:00，建议行前再次确认。大多数博物馆周一闭馆。`} />
              <InfoRow label="门票价格" value={`漫步老城本身完全免费。进入帕伦西亚大教堂需支付4欧元门票，学生及65岁以上长者可享折扣。圣米格尔教堂免费进入但欢迎捐赠。迪奥尼西奥·里德鲁埃霍博物馆门票约2欧元。每周日下午大教堂免费对公众开放。`} />
              <InfoRow label="地址" value={`Casco Antiguo de Palencia, 34001 Palencia, Spain`} />
              <InfoRow label="交通方式" value={`从马德里巴拉哈斯机场出发：最便捷的方式是乘坐高速火车（AVE）。从机场T4航站楼乘坐Cercanías小火车（C1线）约25分钟到达马德里查马丁火车站，换乘开往帕伦西亚的AVE，车程约2小时10分钟，每日有6-8班次。提前在Renfe官网购票可享受较大折扣。从瓦拉多利德机场出发：可乘坐机场大巴至瓦拉多利德火车站，再转乘区域火车（Media Distancia）前往帕伦西亚，全程约1.5小时。帕伦西亚火车站位于老城边缘，步行10分钟即可进入古城核心区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解帕伦西亚老城的灵魂，你得把时钟拨回到一千多年前。这片位于卡斯蒂利亚平原中心、卡arrón河畔的土地，最初是瓦卡伊人的聚居地，后来被罗马人命名为“帕兰蒂亚”。但真正奠定它性格的，是中世纪那场波澜壮阔的“收复失地运动”。公元10世纪左右，随着北方基督教王国势力南推，这里成了对抗摩尔人前线的一座堡垒。当时的莱昂国王们意识到这个战略要地的重要性，开始大力兴建城堡和防御设施。老城那蜿蜒曲折、仿佛迷宫般的街道布局，最初就是为了迷惑和阻滞可能的入侵者而设计的，今天你走在那些突然变窄的巷子里，依然能感受到那种防御性的紧迫感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在1208年。当时，后来被称为“智者”的国王阿方索八世，决定在这里创办一所“总学堂”，这被认为是西班牙最古老的大学雏形，甚至早于萨拉曼卡大学。虽然这所学府后来迁往了萨拉曼卡，但这一事件为帕伦西亚注入了最初的知识与文化的基因。整个13到15世纪，随着基督教王国彻底站稳脚跟，帕伦西亚迎来了它的黄金时代。羊毛贸易让这里的商人富甲一方，他们和教会一起，竞相出资建造宏伟的宅邸和教堂。我们今天看到的哥特式杰作——帕伦西亚大教堂，就是在那个自信膨胀的年代开始动工的，整整建了两个世纪。你能从它那高耸入云的尖塔和繁复的飞扶壁上，读到那个时代人们对上帝和财富的双重虔诚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的馈赠也伴随着无常。16世纪后，随着政治中心转移和贸易路线变化，帕伦西亚逐渐褪去了光环，从舞台中央退居为宁静的省府。但这未尝不是一种幸运。正是因为发展的停滞，它才意外地保存下了极其完整的中世纪城市肌理，没有被后来巴洛克或工业革命时期的大规模改造所破坏。那些文艺复兴时期的贵族宫殿，依旧带着些许落寞的骄傲矗立在街角；穆德哈尔风格的砖砌钟楼，依然用红白相间的几何图案装点着天际线。它像一位经历过繁华、而后选择归隐的贵族，身上每一道皱纹都写着故事，却不再急于向世人诉说。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代以来，帕伦西亚老城也经历过挑战，比如20世纪中期的城市化压力，但当地人对遗产的保护意识非常强烈。他们修旧如旧，小心翼翼地维护着每一块古老的石板，反对在老城核心区建造突兀的现代建筑。于是，我们今天看到的，是一座几乎没有“迪士尼化”的中世纪古城。战争、繁荣、衰落、平静——所有这些历史的层理都清晰可辨，凝固在每一块石头、每一道门廊和每一片广场的阳光里。它不是博物馆里的模型，而是一个依然在呼吸的有机体，它的历史就是它每一天的日常。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味帕伦西亚老城，请务必留出一整天的时间，并把自己的节奏调到“慢速档”。建议在清晨9点前抵达，这时游客未至，本地商铺刚刚开张，古城沐浴在最纯净的晨光中。整体的游览节奏应该是“从外围到核心，从宏大叙事到细微生活”。上午用2-3小时，重点探访标志性的大教堂及其周边宏伟建筑，感受历史的重量。午后，当阳光变得炽烈，正是钻进凉爽的拱廊小巷，探索那些隐秘角落、匠人店铺和街角咖啡馆的好时机，体验古城的市井脉搏。傍晚则留给主广场，看日光渐斜，融入当地人的“散步时间”。这样的安排既能捕捉到建筑在一天中不同光线下的美，也能完整体验古城从宁静到生动再到宁静的完整生命循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周末下午前往主广场，那时可能会举办集市或活动，过于拥挤会破坏宁静感。进入所有教堂都需注意着装，避免无袖上衣和短裤短裙。老城巷道复杂，请信任你的方向感或离线地图，但迷路本身也是乐趣的一部分。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从老城西北侧的圣拉萨罗门进入，沿着静谧的 Calle Mayor 主街向东，让逐渐明亮的阳光为你照亮两侧布满纹章的古老石砌立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政广场短暂驻足，看看新古典主义的市政厅，然后毫不犹豫地拐进旁边那条狭窄的 Calle de la Cestilla，像寻宝一样朝着帕伦西亚大教堂那巍峨的钟楼方向迂回前进。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个半小时沉浸在大教堂内部，不仅要看祭坛和彩窗，更要去回廊漫步，触摸那些被无数祈祷者衣角磨亮的石柱，并寻找隐藏的“哥特式微笑”滴水兽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂南门出来，立刻钻进对面迷宫般的 Calle de los Franco 小巷区，目标是找到那家飘着炖菜香味、当地人挤满吧台的百年老酒馆 Mesón El Corrillo 解决午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着 Calle Don Sancho 悠闲向南，去探访小而精美的圣米格尔教堂，欣赏它那红白相间的穆德哈尔式塔楼，并在教堂旁的小广场长椅上发一会儿呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行几分钟到达迪奥尼西奥·里德鲁埃霍博物馆，在这座文艺复兴宫殿里，透过本地诗人的目光重新理解这片土地的灵魂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，一定要准时回到主广场，在拱廊下找一家咖啡馆的露天座，点一杯本地产的 Ribeiro 葡萄酒，看广场如何被金色的夕阳和越来越多散步、聊天的人们填满。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当蓝调时刻降临，华灯初上，再次漫步到 Calle Mayor，这时两侧的古老建筑被温暖的灯光从下方照亮，呈现出与白日截然不同的戏剧性面貌。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大教堂西立面拱门下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出哥特式门廊上无数精细雕刻的立体感，将人物置于拱门框架内，形成强烈的纵深与神圣感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从 Calle de la Cestilla 小巷回望大教堂塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`狭窄巷道自然形成引导线，清晨或傍晚的柔和光线中，塔楼作为背景，前景捕捉当地居民骑车或行走的瞬间，画面充满生活叙事。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主广场东北角拱廊柱列`}</h4>
                  <p className="text-sm text-gray-700">{`利用拱廊的重复结构形成视觉隧道，在正午阳光直射时，捕捉明暗交错的光影棋盘，等待一个穿着鲜艳的行人走过亮部作为点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣米格尔教堂旁小广场的长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午的光线会让穆德哈尔式砖塔的红白色块格外温暖，以广场上的老树和铸铁灯柱为前景，拍摄塔楼全景，营造宁静的氛围感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`卡arrón河畔远眺老城天际线`}</h4>
                  <p className="text-sm text-gray-700">{`从河对岸的步行道，在日落后的“蓝调时刻”拍摄，古城轮廓映衬在渐变的深蓝天幕下，水中倒影迷离，能拍出它沉静而古老的诗意一面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄小巷居民生活时尽量使用长焦或在获得友善示意后进行。教堂内部通常禁止使用闪光灯和三脚架，请调高ISO利用自然光拍摄。帕伦西亚的光线质量极高，多利用侧光和逆光来表现石头建筑的质感与岁月的痕迹。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城心脏秘居`}</h4>
                  <p className="text-sm text-blue-800">{`由17世纪贵族宅邸修复而成的精品酒店 Posada Real，房间环绕着一个静谧的内庭花园，古老的石墙与现代设计交融，躺在床上能听见远处教堂悠远的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河畔景观奢华之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城边缘卡arrón河畔的 Hotel Castillo del Bosque，部分房间拥有直面古城全景的露台，在私密空间里就能欣赏到老城日出与星夜，配备顶级床品和本地特色洗浴用品。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`经济型智慧选择`}</h4>
                  <p className="text-sm text-yellow-800">{`主广场拱廊之上的 Hostal Plaza Mayor，地理位置无与伦比，房间虽小但干净明亮，打开木窗就是广场生生不息的剧场，是真正沉浸式体验老城脉搏的实惠之选。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`家庭式温情体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于安静小巷里的 Casa de los Abuelos 民宿，由一对老夫妇经营，住在充满古董家具的百年公寓里，早餐能尝到家传配方的果酱和现烤的玛吉纳面包，像回到西班牙外婆家。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的酒店多为历史建筑改造，隔音可能不如现代酒店，对声音敏感者可要求入住内庭一侧的房间。夏季旺季（7-8月）和重要的圣安东节期间务必提前数月预订。老城治安良好，夜间步行也很安全，但石板路不平，建议携带舒适的步行鞋。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开帕伦西亚老城许久后，我发觉最怀念的并非某座具体的建筑，而是一种整体的“感觉”。那是一种被厚重时间包裹着，却又被轻盈日常生活托举着的奇妙平衡。在这个追求眼球经济、热衷于打造“网红打卡点”的时代，帕伦西亚显得如此不合时宜，却又如此珍贵。它不讨好、不张扬，只是静静地、完整地存在着，像卡斯蒂利亚平原上一块温润的古老琥珀，内部封存着阳光、石头的冷冽、咖啡香和无数个平凡的下午。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被过度消费、需要排长队才能瞥见一眼的“必去景点”，如果你渴望的旅行不仅仅是拍照，而是一次呼吸节奏的调整和内心秩序的整理，那么，请来帕伦西亚老城。它不会用惊世骇俗的奇观冲击你，却会用一种缓慢而坚定的力量浸润你。在这里，你会重新学会“漫步”的意义，学会欣赏一道光影的移动，学会聆听石头无声的诉说。它或许不会是你相册里最炫目的那一张，但极有可能成为你记忆中最宁静、最柔软、最挥之不去的那一角——一个让你相信，有些美好，真的可以穿越时光，不慌不忙地活到如今。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
